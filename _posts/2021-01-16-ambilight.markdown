---
layout: post
title: Ambilight Custom
date: 2021-01-16
description: Iluminación dinámica del perímetro de la TV
img: assets/img/cover/ambilight.jpg
tags: [DIY]
status: published
---

Hace un tiempo, no recuerdo por qué motivo, me encapriché con una cosa que vi en algunas TVs llamado "ambilight".

La idea consiste en poner una matriz de leds en la parte trasera de la pantalla y que se coloreen dinámicamente en función del tono de la imagen en cada punto. Esto da una sensación de mayor amplitud a la pantalla y causa menos fatiga a los ojos al visionarla por la noche. O eso dice la publicidad al respecto ;)

Lo malo de este sistema es que está patentado por Phillips y mi TV era una Samsung.

Así que tocaba subirse las mangas de la camisa...

## Preparación

Tras un poco de investigación, llegué a que necesitaba lo siguiente:

- Tira de leds programable / Tira WS2812B de 5 metros, 60 leds/metro
- Microcontrolador para la tira / Wemos D1 Mini + WLED
- Capturadora de imagen / Capturadora HDMI - USB DIWUER
- Procesador de imagen / Raspberry Pi 4b + Hyperbian
- Fuente de alimentación para la tira / Calculé que necesitaba unos 50W (5V/10A) y compré [una de esa potencia](https://www.amazon.es/gp/product/B07YVBHH6K/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)

## Mark 1

El objetivo del prototipo inicial era conseguir ensamblar el microcontrolador de la tira con el software WLED para mostrar patrones pre-configurados en la tira led. Básicamente, poder controlar los colores de la tira.

![]({{ "/assets/img/content/ambilight/mark1_setup.jpg" | absolute_url }})
<p class="image-caption">Preparaciones iniciales</p>

![]({{ "/assets/img/content/ambilight/mark1_detail.jpg" | absolute_url }})
<p class="image-caption">Detalle del ensablaje del Mark 1</p>

Es una maravilla que haya una comunidad de entusiastas detrás de cada proyecto que puedas imaginar. Hacer un montaje inicial sobre un protoboard y configurar WLED fue súper fácil. En cuestión de sólo unas pocas horas, ya podía enviar cualquier patrón de color a la tira desde mi móvil.

<div class="video-container">
  <iframe style="width: 100%;" src="https://www.youtube.com/embed/_S9yPvIy6x0?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
<p class="image-caption">Los LEDs están... VIVOS!</p>

Con WLED listo y funcionando, el siguiente objetivo era sincronizar los LEDs con el contenido de una pantalla.

Como la TV está en el salón y prototipar sobre una Raspberry no es lo más rápido, hice la prueba utilizando Hyperion en mi PC con windows para capturar la imagen del propio sistema operativo (omitiendo por ahora la capturadora).

Este paso me dió un poco más de guerra, pero sobre todo trasteando con los settings del software. Aún así, creo recordar que sólo me llevó un par de horas más.

<div class="video-container">
  <iframe style="width: 100%;" src="https://www.youtube.com/embed/J0hr1ZOjVEw?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
<p class="image-caption">¡Todo funcionando! Cutre, pero funcionando...</p>

## Mark 2

¡Pues ya estaría! Bueno no... Funcionar funcionaba todo, pero estaba bastante feo. Tocaba iterar el prototipo.

El objetivo del "Mark 2" (igualito que Ironman oye...) era compactar la madeja de cables de las primeras pruebas en algo un poco más robusto y fiable.

Aquí todavía no había trabajo de soldadura, sino un protoboard azul pequeñito y bastante cinta aislante. Todavía bastante cutre pero bastante más manejable y ya no se iría todo al carajo si se caía de la mesa o cualquier cosa.

![]({{ "/assets/img/content/ambilight/mark2_compact.jpg" | absolute_url }})
<p class="image-caption">Bastante mejor, pero todavía muy "proto"</p>

Con este prototipo ya tenía una idea aproximada de qué tamaño necesitaría para la versión final. También me sirvió para hacer varias pruebas con distintas capacidades de condensadores, que actúan como filtro de las señal que le llega a la tira.

## Mark 3
El objetivo del tercer y último prototipo era dejar el controlador lo más miniaturizado y decente posible, con una buena encapsulación. Debía ser también fácilmente desmontable y re-montable en caso de que tuviera que hacer modificaciones posteriores.

Esta vez ya sí con el soldador en mano, recorté un trocito de PCB al mínimo de tamaño que necesitaba e hice las conexiones básicas sobre la misma con un poco de cariño y estaño.

![]({{ "/assets/img/content/ambilight/mark3_assembled.jpg" | absolute_url }})
<p class="image-caption">El conector de alimentación lo cambié por otro más pequeño posteriormente para que entrara bien en la caja</p>

Con un taladro y un torno manual, le hice unos agujeros a medida a una cajita que tenía en el taller y fijé el terminal de alimentación a la misma, por si a futuro necesitaba desmontarla de nuevo.

![]({{ "/assets/img/content/ambilight/mark3_pieces.jpg" | absolute_url }})
<p class="image-caption">Con conectar el blanco con el blanco y el negro con el negro... todo listo para funcionar</p>

![]({{ "/assets/img/content/ambilight/mark3_inside.jpg" | absolute_url }})
<p class="image-caption">Todo encapsulado y mucho más bonito :)</p>

## Instalación final

Con el microcontrolador listo y ensayado, todavía faltaban algunos ajustes.

En primer lugar, la tira tiene una flexibilidad limitada, así que no puede doblarse 90º sin más para cubrir las esquinas. La solución es soldar una triada de cables en cada una de las esquinas.

![]({{ "/assets/img/content/ambilight/mark3_corners.jpg" | absolute_url }})
<p class="image-caption">Limando aristas...</p>

A partir de aquí el resto fue configurar la Raspberry con Hyperbian (una imagen de OS corriendo Hyperion de manera exclusiva) y repetir las pruebas de las versiones anteriores.

A continuación algunos vídeos del resultado final:

<div class="video-container">
  <iframe style="width: 100%;" src="https://www.youtube.com/embed/af_5PURXXUg?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
<p class="image-caption">Probando patrones de WLED</p>

<div class="video-container">
  <iframe style="width: 100%;" src="https://www.youtube.com/embed/dfRvuwHIjJI?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
<p class="image-caption">Probando un vídeo colorido ¡El alucinante trailer de TemTem!</p>

<div class="video-container">
  <iframe style="width: 100%;" src="https://www.youtube.com/embed/QhMtp1a5D14?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
<p class="image-caption">Probando el mejor videojuego de la historia</p>

<!-- Sample image embed
![]({{ "/assets/img/content/cardcreatorproto.png" | absolute_url }})
<p class="image-caption">Image caption</p>
-->

<!-- Sample blockquote
<blockquote>
Del juego de cartas me olvidé poco después de empezar la aplicación.
</blockquote>
-->

<!-- Sample responsive video embed
<div class="video-container">
  <iframe style="width: 100%;" src="https://www.youtube.com/embed/liMw3yfeTdo?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
<p class="image-caption">¡Trailer 2.0, con mucho swing!</p>
-->