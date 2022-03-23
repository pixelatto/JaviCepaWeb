---
layout: post
title: Domótica casera
date: 2019-01-11
description: Automatizaciones domésticas con Zigbee
img: assets/img/cover/domotica.jpg
tags: [DIY]
words: 3 minutos
status: published
---

Hace más de un par de años que tenía contratada una alarma de esas de una conocida empresa de seguridad cuyas políticas de empresa me parecen especialmente ruines y creo que son unos ladrones y hacen publicidad engañosa y son caros y tienen un logo feo y se llaman Securitas Direct.

El caso es que, cansado de que me robaran todos los meses (los de Securitas) decidí darle luz verde a uno de los proyectos que tenía en mente desde hace un tiempo: una domotización custom del hogar.

<blockquote>Desde que me dio por empezar a trastear con arduinos y otras mandangas varias no he parado. Dentro de un par de años tendré drones volando por la casa...</blockquote>

Mi punto de partida fue un starter kit de Xiaomi Mi Home, que acaba de llegar a europa y tiene un precio bastante competitivo. La instalación fue fácil, pero estaba muy lejos de lo que yo quería, además de que las integraciones con terceros funcionaban fatal. También traía un gateway. Ahora hablo de los gateway.

![]({{ "/assets/img/content/domotics/xiaomimi.png" | absolute_url }})
<p class="image-caption">Incluía el gateway, 2 sensores de presencia, 2 sensores de apertura, 1 botón por unos 50€</p>

El panorama actual de la domótica de consumo es el siguiente: un fabricante tiene las bombillas que quieres, otro tiene los sensores, otro los actuadores... hay de todo! Pero eso sí: ninguno tiene todas las cosas y cada uno tiene un gateway propietario y completamente opaco. Quizá el que más se acerque a un ecosistema completo es Samsung Smartthings, que para el que quiera cambiar todas las bombillas y sensores de su casa a unos 60€/unidad está bien oye.

Tenía desde hace tiempo algunas bombillas Ikea Tradfri (con su propio gateway ¬¬) y conectar los dos sistemas era imposible... era como si uno hablase chino y el otro sueco. A ese problema había que añadirle un inconveniente extra: todas las acciones pasan por un servidor centralizado de Xiaomi, así que tu casa depende de tu conexión a internet y de la congestión de tráfico. Un sinsentido.

Investigando dí con la solución que buscaba: ambos sistemas usaban el protocolo Zigbee para comunicarse con los aparatos, así que aún había esperanza.

![]({{ "/assets/img/content/domotics/cc2531.jpg" | absolute_url }})
<p class="image-caption">Spoiler: necesitaba este cacharrito</p>

Después de empaparme de bastante documentación, me compré y flasheé un sniffer Zigbee CC2531 y lo conecté a una raspberry que tenía aparcada por casa. Tras configurarla, instalé una cosita llamada Zigbee2MQTT que permite convertir los mensajes Zigbee de los aparatos al mucho más usable protocolo MQTT que se suele usar en cosas de IoT.

Rearmado con este aparatito, empecé a sincronizar dispositivos y... ¡Todo iba a la perfección!

<blockquote>Bueno, casi. Todavía tuve que hacer algunos ajustes para reducir el delay y organizar la malla Zigbee en grupos para que se sincronizasen bien las cosas.</blockquote>

Una vez que todos los cacharros estaban conectados, crear automatizaciones fue un paseo con Node-Red, una aplicación open source de IBM que permite crear automatizaciones mediante flujos visuales de manera muy cómoda.

![]({{ "/assets/img/content/domotics/nodered.jpg" | absolute_url }})
<p class="image-caption">Esta es la pinta que tiene un flujo de Node-Red una vez configurado</p>

Algunos ejemplos de automatismos que tengo funcionando a día de hoy:

- Si se detecta actividad en alguno de los sensores y no hay nadie en casa, disparar la alarma y mandar SMS y otras notificaciones
- Si se detecta movimiento en alguno de los pasillos y hay poca luz, encender la luz correspondiente a ese área
- Si se abre la puerta principal y es de noche, encender la luz del patio frontal
- Si se detecta sonido o movimiento en la cuna y estamos viendo la tele, mandar notificación al móvil
- Si la temperatura de la habitación baja por debajo de X grados, encender la calefacción durante Y minutos
- ...

Y así, poco a poco, sigue creciendo la lista.