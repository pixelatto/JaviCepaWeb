---
layout: post
title: Infrared Shifter
date: 2017-12-22
description: Cómo hacer desaparecer mandos a distancia
img: assets/img/cover/irshifter.jpg
tags: [Arduino]
words: 2 minutos
status: published
---

Hace unas semanas me compré un flamante [equipo de audio 5.1](https://www.amazon.es/Logitech-Z906-altavoces-envolvente-inalámbrico/dp/B004PGM9KY) para la TV del salón. El equipo se oye genial, pero tiene la pega de añadir otro mando más a la mesa para controlar el volumen, cosa que antes hacía más cómodamente desde el mando de la TV.

![]({{ "/assets/img/content/threeremotes.jpg" | absolute_url }})
<p class="image-caption">¿Un tercer mando para sólo 7 botones? ¡Nope!</p>

Se me ocurrió hacer un pequeño invento para librarme de este nuevo e indeseado inquilino: una placa NodeMCU con un led receptor de infrarrojo y otro led emisor, que cuando se recibe un código "X" del mando de la TV (ej.: "TV Volume Up") lo detecta y emite un código "Y" correspondiente al otro aparato (ej.: "Audio Volume Up"). Una especie de "traductor infrarrojo".

<blockquote>Las placas NodeMCU Lite son un par de euros más caras que las Arduino Nano, pero el WiFi integrado y su pequeño tamaño las hace, con mucho, mis favoritas.</blockquote>

Digo "era" porque surgieron un par de baches por el camino. Cuando monté el primer prototipo (v0.1) y lo probé en la mesa de trabajo todo parecía funcionar correctamente. El monitor de serie me daba los códigos y logeaba el comportamiento, que era el esperado.

Al montarlo para probar al lado de la TV, era otra historia, funcionaba muy erráticamente. Detecté que algunos códigos cambiaban en función de la distancia, así que los incluí al programa (v0.2). Aún así había problemas.

<blockquote>La alimentación la hice directamente desde un puerto USB que tenía libre la TV.</blockquote>

Como tengo la mesa de trabajo en el sótano y la TV en la planta principal, le añadí un servidor OTA a la placa para actualizar el código por WiFi (v0.3).

Esto a su vez me dio otro problema, ya que ahora iba a ciegas con los logs (no se puede acceder al monitor de serie de manera ordinaria por WiFi). Como primera aproximación, le añadí un par de leds indicando recepción/envío de señal (v0.4).

![]({{ "/assets/img/content/irshifter.jpg" | absolute_url }})
<p class="image-caption">No se aprecian todos los detalles ahora que está montado, pero tampoco tiene conexiones complejas, sólo son 4 leds</p>

Tuve que añadirle un servidor HTTP que generase una página con las trazas de log (v0.5), al que accedía desde la propia pantalla de TV, que tengo a su vez conectada al ordenador de abajo vía Steam Link.

![]({{ "/assets/img/content/halfixinglight.gif" | absolute_url }})
<p class="image-caption">Este GIF resume la historia de mi vida</p>

Fue un desvío en el camino, pero me ayudó a iterar mucho más rápido y a llegar a las causas de los errores mucho más rápido. Resulta que los delays introducidos por distintas partes del código estaban introduciendo problemas en la transmisión/recepción de señales. Eliminando casi por completo estos delays desapareció el problema y el comportamiento fue el adecuado (v1.0).

<blockquote>Para ponerlo en "modo producción" y eliminar carga de procesado y posibles delays desactivé el servidor HTTP (v1.1).</blockquote>

Al rato de usarlo mi mujer, me dijo que el volumen se disparaba al dar a botones que no tenían nada que ver. Después de una inspección rápida di con que el error estaba en la manera en que manejaba el código REPEAT que se envía al dejar pulsado un botón. Arreglado esto y hasta ahora va perfecto (v1.2) y tengo un mando menos sobre la mesa.

![]({{ "/assets/img/content/tworemotes.jpg" | absolute_url }})
<p class="image-caption">¡Uno menos! ¡El próximo eres tú, mando de ventilador!</p>

Para terminar, aquí dejo el código del programa completo. No es el código más limpio del mundo, pero hace su trabajo ;)

<pre><code class="c++">
#include &lt;ArduinoOTA.h&gt;
#include &lt;ESP8266WiFi.h&gt;
#include &lt;WiFiClient.h&gt;
#include &lt;ESP8266WebServer.h&gt;
#include &lt;IRremoteESP8266.h&gt;

#define LED_SEND D5
#define LED_RECEIVE D0

#define IR_RECEIVER D2
#define IR_EMITTER D6

#define STATE_LED D4

char auth[] = &quot;cc16ef301204400e86225565cd6f986e&quot;;
char ssid[] = &quot;Espe y Javi&quot;; 
char pass[] = &quot;chocolate&quot;; 
char host[] = &quot;ESP-OTA&quot;;

IRrecv irrecv(IR_RECEIVER);
IRsend irsend(IR_EMITTER);
decode_results results;
ESP8266WebServer server(80);

String currentLog=&quot;&quot;;

String pageHead = &quot;&lt;!--&lt;html&gt;&lt;head&gt;&lt;meta http-equiv='refresh' content='0.35'&gt;&lt;/head&gt;--&gt;&quot;;
String page;

int blinkDelay = 0;

int toggle;

unsigned long codeValue; // The code value if not raw
int codeLen; // The length of the code
int codeType = -1; // The type of code
unsigned int rawCodes[RAWBUF]; // The durations if raw

unsigned long codeValueToSend;
int codeLenToSend;
int codeTypeToSend = -1;
unsigned int rawCodesToSend[RAWBUF];

bool enableServer = false;

void setup() {
  
  Serial.begin(9600);
  Serial.println(&quot;&quot;);
  Serial.println(&quot;-------------- INITIALIZING SERVICES --------------&quot;);
  
  pinMode(IR_RECEIVER, INPUT);   // IR Input
  pinMode(IR_EMITTER, OUTPUT);  // IR Output
  pinMode(STATE_LED, OUTPUT); 
  pinMode(LED_SEND, OUTPUT); 
  pinMode(LED_RECEIVE, OUTPUT); 
  digitalWrite(STATE_LED, HIGH); //INITIALIZING DEVICE
  digitalWrite(LED_SEND, HIGH); //INITIALIZING DEVICE
  digitalWrite(LED_RECEIVE, HIGH); //INITIALIZING DEVICE
  Serial.println(&quot;Pins ready&quot;);

  //RUN WIFI
  ESP.eraseConfig();
  Serial.print(&quot;Connecting&quot;);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(&quot;.&quot;);
  }
  Serial.println(&quot;&quot;);
  Serial.print(&quot;WiFi ready: Connected to &quot;);
  Serial.print(ssid);
  Serial.print(&quot; at &quot;);
  Serial.println(WiFi.localIP());

  //RUN HTTP SERVER
  if (enableServer) {
    server.on(&quot;/&quot;, [](){  
      //Serial.print(&quot;&quot;);
      //Serial.print(&quot;Received HTTP request. Sending: &quot;);
      //Serial.println(page);
      server.send(200, &quot;text/html&quot;, page);
    });
    server.begin();
    page = pageHead + &quot;Ready&quot;;
    Serial.println(&quot;HTTP Server ready&quot;);
  }

  //RUN OTA
  ArduinoOTA.begin();
  Serial.println(&quot;OTA ready&quot;);
  
  //RUN IR
  irrecv.enableIRIn();
  Serial.println(&quot;IR receiver ready&quot;);

   //DEVICE READY
  Serial.println(&quot;-------------- ALL SERVICES READY --------------&quot;);
  digitalWrite(STATE_LED, LOW); //DEVICE READY
  digitalWrite(LED_SEND, LOW); //INITIALIZING DEVICE
  digitalWrite(LED_RECEIVE, LOW); //INITIALIZING DEVICE
}

String typeToProtocol(int type)
{
  switch(type)
  {
    case UNKNOWN: return &quot;UNKNOWN&quot;;
    case NEC: return &quot;NEC&quot;;
    case SONY: return &quot;SONY&quot;;
    case PANASONIC: return &quot;PANASONIC&quot;;
    case JVC: return &quot;JVC&quot;;
    case RC5: return &quot;RC5&quot;;
    case RC6: return &quot;RC6&quot;;
  }
  return &quot;???&quot;;
}

void loop() {
  if (enableServer) {
    server.handleClient(); //Anwser HTTP requests
  }
  ArduinoOTA.handle(); //Anwser OTA requests
  HandleIR();
}

void HandleIR()
{
  if (irrecv.decode(&amp;results))
  {
    storeCode(&amp;results);
    blinkReceived();
    irrecv.resume(); // resume receiver
  }
}

void blinkSend()
{
  digitalWrite(LED_SEND, HIGH);
  delay(blinkDelay);
  digitalWrite(LED_SEND, LOW);
}

void blinkReceived()
{
  digitalWrite(LED_RECEIVE, HIGH);
  delay(blinkDelay);
  digitalWrite(LED_RECEIVE, LOW);
}

void storeCode(decode_results *results) {
  codeType = results-&gt;decode_type;
  codeValue = results-&gt;value;
  codeLen = results-&gt;bits;
  
  currentLog += &quot;Received IR: &quot;;
  currentLog += String(codeValue) + &quot;/&quot; + typeToProtocol(codeType) + &quot;/&quot; + String(codeLen);

  bool known=false;

  if (codeValue == REPEAT) {
    known = true;
    currentLog += &quot;(REPEAT)&quot;;
    SendCodeValues(codeTypeToSend, codeValueToSend, codeLenToSend, &quot;(REPEAT LAST CODE)&quot;);
  }
  if (codeValue == 551502015 || codeValue == -1643507457) {
    known = true;
    currentLog += &quot;(TV VOLUME UP)&quot;;
    AudioVolumeUp();
  }
  if (codeValue == 551534655 || codeValue == -1896920189) {
    known = true;
    currentLog += &quot;(TV VOLUME DOWN)&quot;;
    AudioVolumeDown();
  }
  if (codeValue == 551522415 || codeValue==1907962371) {
    known = true;
    currentLog += &quot;(TV MUTE)&quot;;
    delay(200);
    AudioMute();
    codeValueToSend = REPEAT;
  }
  if (codeValue == 551505585 || codeValue == -718962725) {
    known = true;
    currentLog += &quot;(TV 1 RED)&quot;;
    delay(200);
    AudioPower();
    codeValueToSend = REPEAT;
  }
  if (codeValue == 551521905 || codeValue == -2136846781) {
    known = true;
    currentLog += &quot;(TV 2 GREEN)&quot;;
    delay(200);
    codeValueToSend = REPEAT;
  }
  if (codeValue == 551536185 || codeValue == 255616091) {
    known = true;
    currentLog += &quot;(TV 3 YELLOW)&quot;;
    delay(200);
    codeValueToSend = REPEAT;
  }
  if (codeValue == 551519865 || codeValue == 533969343) {
    known = true;
    currentLog += &quot;(TV 4 BLUE)&quot;;
    delay(200);
    codeValueToSend = REPEAT;
  }
  if (codeValue == 551541285) {
    known = true;
    currentLog += &quot;(TV EXIT)&quot;;
    delay(200);
    codeValueToSend = REPEAT;
  }
  if (!known) {
    currentLog += &quot;{{UNASSIGNED}}&quot;;
    codeValueToSend = -1;
    codeTypeToSend = -1;
  }

  currentLog += String(codeValue, HEX);
  
  Serial.println(currentLog);

  if (enableServer) {
    page = page + currentLog;
    if (page.length()&gt;1024) {
      page = pageHead + currentLog;
    }
  }
  
  currentLog=&quot;&quot;;
}

void AudioPower() {
  SendCodeValues(1, 1074070014, 32, &quot;(AUDIO ON/OFF)&quot;);
}

void AudioVolumeUp() {
  SendCodeValues(1, 1074091434, 32, &quot;(AUDIO VOLUME UP)&quot;);
}

void AudioVolumeDown() {
  SendCodeValues(1, 1074091689, 32, &quot;(AUDIO VOLUME DOWN)&quot;);
}

void AudioMute() {
  SendCodeValues(1, 1074091944, 32, &quot;(AUDIO VOLUME MUTE)&quot;);
}

void SendCodeValues(int type, unsigned long value, int len, String message) {
  codeTypeToSend = type;
  codeValueToSend = value;
  codeLenToSend = len;
  currentLog += &quot; -&gt; &quot;;
  currentLog += String(codeValueToSend) + &quot;/&quot; + codeTypeToSend + &quot;/&quot; + codeLenToSend;
  currentLog += message;
  sendCode(0);
}

void sendCode(int repeat) {
  blinkSend();
  
  if (codeTypeToSend == NEC) {
    if (repeat) {
      irsend.sendNEC(REPEAT, codeLenToSend);
      //Serial.println(&quot;Sent NEC repeat&quot;);
    } 
    else {
      irsend.sendNEC(codeValueToSend, codeLenToSend);
      //Serial.print(&quot;Sent NEC &quot;);
      //Serial.println(codeValueToSend, HEX);
    }
  } 
  else if (codeTypeToSend == SONY) {
    irsend.sendSony(codeValueToSend, codeLenToSend);
    //Serial.print(&quot;Sent Sony &quot;);
    //Serial.println(codeValueToSend, HEX);
  } 
  else if (codeTypeToSend == PANASONIC) {
    irsend.sendPanasonic(codeValueToSend, codeLenToSend);
    //Serial.print(&quot;Sent Panasonic&quot;);
    //Serial.println(codeValueToSend, HEX);
  }
  else if (codeTypeToSend == JVC) {
    irsend.sendJVC(codeValueToSend, codeLenToSend, false);
    //Serial.print(&quot;Sent JVC&quot;);
    //Serial.println(codeValueToSend, HEX);
  }
  else if (codeTypeToSend == RC5 || codeTypeToSend == RC6) {
    if (!repeat) {
      // Flip the toggle bit for a new button press
      toggle = 1 - toggle;
    }
    // Put the toggle bit into the code to send
    codeValueToSend = codeValueToSend &amp; ~(1 &lt;&lt; (codeLenToSend - 1));
    codeValueToSend = codeValueToSend | (toggle &lt;&lt; (codeLenToSend - 1));
    if (codeTypeToSend == RC5) {
      //Serial.print(&quot;Sent RC5 &quot;);
      //Serial.println(codeValueToSend, HEX);
      irsend.sendRC5(codeValueToSend, codeLenToSend);
    } 
    else {
      irsend.sendRC6(codeValueToSend, codeLenToSend);
      //Serial.print(&quot;Sent RC6 &quot;);
      //Serial.println(codeValueToSend, HEX);
    }
  } 
  else if (codeTypeToSend == UNKNOWN /* i.e. raw */) {
    // Assume 38 KHz
    irsend.sendRaw(rawCodesToSend, codeLenToSend, 38);
    /*
    Serial.println(&quot;Sent raw&quot;);
    for (int i=0; i&lt;sizeof(rawCodesToSend); i++) {
      Serial.print(rawCodesToSend[i]);
      Serial.print(&quot; &quot;);
    }
    Serial.println(&quot;&quot;);
    */
  }
}
</code></pre>