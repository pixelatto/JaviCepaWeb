---
layout: post
title: Card Creator
date: 2017-06-12
description: Post-mortem del editor de cartas
img: assets/img/cover/cardcreator.png
video: liMw3yfeTdo
tags: [Postmortems]
words: 2 minutos
status: published
---
Ahora que [Card Creator](http://store.steampowered.com/app/523600/Card_Creator/) ya es mayor, es un buen momento para escribir un pequeño post-mortem.

A mediados de 2015 me dió por ponerme a crear un juego de cartas. Me puse a investigar si había algún software para facilitar la tarea y encontré un programita gratuíto llamado nanDeck que decían por los foros que era el más usado para esto.

![]({{ "/assets/img/content/nandeck.png" | absolute_url }})
<p class="image-caption">Botón de salir al centro a la izquierda... ¿¿En serio??</p>

Me puse a trastear con el programa y fue una experiencia bastante frustrante... la UI dejaba mucho que desear las cartas que se podían hacer después de un rato salían más bien feas.

No tardé en borrar nanDeck y ponerme a programar una solución a medida para lo que necesitaba.
<blockquote>
Mucha gente se sorprende de que use Unity para hacer aplicaciones. Es con lo que más soltura tengo y mejor conozco. Aunque no sea perfecto (me) da más ventajas que problemas.
</blockquote>
De ahí nació el primer prototipo de Card Creator, una aplicación simple y con pocas opciones, las justas para hacer lo que quería para mi jueguecito.

![]({{ "/assets/img/content/cardcreatorproto.png" | absolute_url }})
<p class="image-caption">Aquella era la época dorada de Doge</p>

Le dí un par de retoques para poder llamarlo "prototipo conceptual" y lo subí a Steam greenlight a ver si despertaba interés y merecía la pena seguirse desarrollando.

<blockquote>
Del juego de cartas me olvidé poco después de empezar la aplicación.
</blockquote>

Ahí fue ganando votos poquito a poco hasta recibir luz verde un año después. En ese momento empecé a dedicarle tiempo y recursos de Pixelatto en la medida que iba siendo posible.

![]({{ "/assets/img/content/cardcreatorlaunch.png" | absolute_url }})
<p class="image-caption">En el lanzamiento teníamos esta pinta</p>

En abril de 2017 lanzamos la primera versión con un precio de salida de $20. Arrancamos bastante bien, pero a medida que se iban publicando críticas el grifo se iba cerrando: teníamos un problema importante con el producto.

![]({{ "/assets/img/content/cardcreatorlaunchstats.png" | absolute_url }})
<p class="image-caption">¡Caída en picado!</p>

En las páginas de la comunidad se veía que había un descontento general con la flexibilidad de la aplicación. Habíamos creado un sistema de "plantilla maestra" que daba un rango grande de posibilidades, pero empezamos a ver que para nuestros usuarios eso no era suficiente.

<blockquote>
Las críticas tras 1 semana de lanzamiento se estabilizaron en torno a un terrible 54% de aprobación...
</blockquote>

Los cuatro siguientes meses los dedicamos a recoger e integrar feedback de la comunidad en la aplicación. El 1 de septiembre lanzamos la versión 2.0 que era prácticamente otra aplicación.

![]({{ "/assets/img/content/cardcreatortwo.png" | absolute_url }})
<p class="image-caption">La misma interfaz de antes, versión 2.0</p>

El cambio fue casi instantáneo. Las ventas diarias se doblaron y mantuvieron a partir de esa versión y los ratings fueron subiendo hasta un 80% a finales de año.

Durante ese periodo además sacamos otros muchos parches y actualizaciones y publicamos un [roadmap](https://trello.com/b/WxLZOIDR/card-creator) de la aplicación. El proyecto ha ido tomando vida propia a través de la comunidad y ahora tenemos mucho más clara la dirección que tomar en el futuro.

¡Y eso es todo por ahora! Tenemos un montón de novedades planeadas para Card Creator en 2018. Si te gusta crear juegos de cartas merece la pena [echarle un vistazo](http://store.steampowered.com/app/523600/Card_Creator/) ;)
