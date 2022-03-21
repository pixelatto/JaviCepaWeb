---
layout: post
title: Consolitta
date: 2021-03-08
description: Mucho conocimiento en un espacio muy pequeñito
img: assets/img/cover/consolitta.jpg
tags: [DIY]
status: published
---

Durante mi segunda temporada de fiebre por la electrónica, me encontré unas pantallitas muy pequeñas en AliExpress tiradas de precio (2€ la unidad) y no pude evitar comprar unas poquitas.

![]({{ "/assets/img/content/consolitta/screen.jpg" | absolute_url }})
<p class="image-caption">Golosinas de silicio</p>

Muchas veces hago compras de este tipo sin tener una idea clara de qué voy a hacer con ello. En cuanto tuve una en mis manos y empecé a trastear con ella me vino la inspiración: iba a hacer una mini-consola similar a un Tamagotchi.

## Mark 1
Usando como otras veces mi placa favorita (Wemos D1 Mini), lo primero que hice fue programar en el IDE de Arduino un pong sencillito. Se controlaba con sólo dos botones, cada vez que golpeabas a la pelota con éxito tu pala se hacía más pequeña, tenía un pequeño marcador e incluso me permití el lujo de añadir efectos de partículas a cada rebote. La envidia de cualquier triple AAA.

<div class="video-container">
  <iframe style="width: 100%;" src="https://www.youtube.com/embed/h5rrQGdH1ZA?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
<p class="image-caption">¡Tiembla Nintendo!</p>

## Mark 2
Una vez tenía la lógica funcionando, tocaba miniaturizar y soldar. Recorté la antena WiFi de la Wemos para que el perfil fuese tan pequeño como el de la pantalla y fijé todas las conexiones con buen y fiable estaño.

<div class="video-container">
  <iframe style="width: 100%;" src="https://www.youtube.com/embed/rZoSZrTkNFo?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
<p class="image-caption">Lo mismo, pero sin cables sueltos y mucho más compacto</p>

## Mark 3
Por último, me puse a modelar varios diseños de una carcasa a medida para imprimir en 3D y que quedase todo con un acabado más profesional.

![]({{ "/assets/img/content/consolitta/case.jpg" | absolute_url }})
<p class="image-caption">Cementerio de intentos</p>

Me quedó la espinita de intentar hacer un Mark 4 con una pequeña pila para que no hiciera falta conectar el cable USB de alimentación... Quizá en el futuro.

<div class="video-container">
  <iframe style="width: 100%;" src="https://www.youtube.com/embed/WFwM54uZntM?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
</div>
<p class="image-caption">Versión final de la consola que destronará a la Switch</p>

Disfruté mucho con este proyecto, porque resume en muy poquito espacio un montón de habilidades que he ido adquiriendo de mis aficiones: diseño, programación, modelado, impresión 3D...

Tengo gusanillo de más electrónica y quizá algún día me meta con algún proyecto a nivel industrial. El tiempo dirá...




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