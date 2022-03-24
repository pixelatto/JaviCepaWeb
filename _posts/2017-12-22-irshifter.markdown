---
layout: post
title: Infrared Shifter
date: 2017-12-22
description: Cómo hacer desaparecer mandos a distancia
img: assets/img/cover/irshifter.jpg
tags: [DIY]
words: 2 minutos
action-text: Código fuente
action-link: /assets/code/irshifter.txt
header: hidden
status: published
---

Hace unas semanas me compré un flamante [equipo de audio 5.1](https://www.amazon.es/Logitech-Z906-altavoces-envolvente-inalámbrico/dp/B004PGM9KY) para la TV del salón. El equipo se oye genial, pero tiene la pega de añadir otro mando más a la mesa para controlar el volumen, cosa que antes hacía más cómodamente desde el mando de la TV.

![]({{ "/assets/img/content/irshifter/threeremotes.jpg" | absolute_url }})
<p class="image-caption">¿Un tercer mando para sólo 7 botones? ¡Nope!</p>

Se me ocurrió hacer un pequeño invento para librarme de este nuevo e indeseado inquilino: una placa NodeMCU con un led receptor de infrarrojo y otro led emisor, que cuando se recibe un código "X" del mando de la TV (ej.: "TV Volume Up") lo detecta y emite un código "Y" correspondiente al otro aparato (ej.: "Audio Volume Up"). Una especie de "traductor infrarrojo".

<blockquote>Las placas NodeMCU Lite son un par de euros más caras que las Arduino Nano, pero el WiFi integrado y su pequeño tamaño las hace, con mucho, mis favoritas.</blockquote>

Digo "era" porque surgieron un par de baches por el camino. Cuando monté el primer prototipo (v0.1) y lo probé en la mesa de trabajo todo parecía funcionar correctamente. El monitor de serie me daba los códigos y logeaba el comportamiento, que era el esperado.

Al montarlo para probar al lado de la TV, era otra historia, funcionaba muy erráticamente. Detecté que algunos códigos cambiaban en función de la distancia, así que los incluí al programa (v0.2). Aún así había problemas.

<blockquote>La alimentación la hice directamente desde un puerto USB que tenía libre la TV.</blockquote>

Como tengo la mesa de trabajo en el sótano y la TV en la planta principal, le añadí un servidor OTA a la placa para actualizar el código por WiFi (v0.3).

Esto a su vez me dio otro problema, ya que ahora iba a ciegas con los logs (no se puede acceder al monitor de serie de manera ordinaria por WiFi). Como primera aproximación, le añadí un par de leds indicando recepción/envío de señal (v0.4).

![]({{ "/assets/img/content/irshifter/irshifter.jpg" | absolute_url }})
<p class="image-caption">No se aprecian todos los detalles ahora que está montado, pero tampoco tiene conexiones complejas, sólo son 4 leds</p>

Tuve que añadirle un servidor HTTP que generase una página con las trazas de log (v0.5), al que accedía desde la propia pantalla de TV, que tengo a su vez conectada al ordenador de abajo vía Steam Link.

![]({{ "/assets/img/content/irshifter/halfixinglight.gif" | absolute_url }})
<p class="image-caption">Este GIF resume la historia de mi vida</p>

Fue un desvío en el camino, pero me ayudó a iterar mucho más rápido y a llegar a las causas de los errores mucho más rápido. Resulta que los delays introducidos por distintas partes del código estaban introduciendo problemas en la transmisión/recepción de señales. Eliminando casi por completo estos delays desapareció el problema y el comportamiento fue el adecuado (v1.0).

<blockquote>Para ponerlo en "modo producción" y eliminar carga de procesado y posibles delays desactivé el servidor HTTP (v1.1).</blockquote>

![]({{ "/assets/img/content/irshifter/irleds.jpeg" | absolute_url }})
<p class="image-caption">El aparato está pegado detrás de la consola del equipo de sonido y queda muy discreto. Por delante sólo se ven los dos leds infrarrojos.</p>

Al rato de usarlo mi mujer, me dijo que el volumen se disparaba al dar a botones que no tenían nada que ver. Después de una inspección rápida di con que el error estaba en la manera en que manejaba el código REPEAT que se envía al dejar pulsado un botón. Arreglado esto y hasta ahora va perfecto (v1.2) y tengo un mando menos sobre la mesa.

![]({{ "/assets/img/content/irshifter/tworemotes.jpg" | absolute_url }})
<p class="image-caption">¡Uno menos! ¡El próximo eres tú, mando de ventilador!</p>

Para terminar, dejo aquí el programa completo. No es el código más limpio del mundo, pero hace su trabajo ;)