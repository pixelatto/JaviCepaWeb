---
layout: post
title: Cafelitto
date: 2021-05-12
description: Oficinas virtuales, controles horarios y culos
img: assets/img/cover/cafelitto.jpg
tags: [DIY, Proyectos]
status: published
---

Durante la pandemia tuvimos que pasar Pixelatto a modo 100% remoto. Aunque tenemos mucha experiencia trabajando así, se perdió un poco de la magia y buen rollo que teníamos en la oficina a diario.

Me puse a darle vueltas a alguna forma de recuperar un poco de esa "sensación de estar acompañado" y se me ocurrió desarrollar una pequeña aplicación a la que bauticé como "Cafelitto" en honor al contacto que se crea en las pequeñas pausas para tomar café.

Cafelitto es una aplicación que añade una UI en la parte izquierda de tu escritorio en la cual puedes ver quién está en la oficina y quien no. Tiene controles básicos para poder hacer check-in y check-out, y cada ve que alguien del equipo entra o sale de la oficina virtual muestra un pequeño mensaje predefinido del estilo de "Buenos días!"/"Me marcho un ratito"/"¡He terminado por hoy!", esas pequeñas frases que normalmente dice la gente en la oficina y que contribuyen un montón a crear ese "ambiente".

![]({{ "/assets/img/content/cafelitto/ui_leftpanel.jpg" | absolute_url }})
<p class="image-caption">Fali trabajando, Alberto y yo en una pausa/descanso. El resto ya salieron de la oficina virtual.</p>


Esto además ayudaba a respetar el derecho a desconexión de cada miembro, no mandando mensajes a nadie que no estuvierra dentro de la oficina virtual.

![]({{ "/assets/img/content/cafelitto/ui_folded.jpg" | absolute_url }})
<p class="image-caption">La UI se hace más compacta e incluso invisible si tu cursor no está cerca, para no resultar molesta.</p>

Todo esto iba montado sobre la API de Holded, la plataforma que usamos para el registro horario. Personalmente, me gusta  más la gestión de las horas simplemente confiando en los miembros del equipo, pero ya que nos obligaron por ley a ponerlo hace unos años no está de más poderle sacar valor de verdad a este sistema ;)

A todo el equipo le encantó la idea y lo usában de manera muy rigurosa. Bueno, lo usaba perfectamente todo el mundo... menos yo.

![]({{ "/assets/img/content/cafelitto/ui_javiovertime.jpg" | absolute_url }})
<p class="image-caption">Siempre estaba en rojo porque se me olvidaba hacer checkout :_)</p>

Soy un desastre para todo lo que sea sistemático o repetitivo y siempre se me olvidaba hacer el check-in/out, así que tuve que hacer algunas modificaciones extra para mi caso particular: en lugar de usar la cabeza para registrar mis horas, usaría el culo.

Aprovechando que tenía todo el sistema domótico de la casa configurado, me puse a trabajar en una pequeña automatización para registrar mis horas de trabajo. En primer lugar cogí uno de los sensores de apertura de puertas de Xiaomi que tenía por ahí tirados y lo desmonté.

![]({{ "/assets/img/content/cafelitto/doorsensor.jpg" | absolute_url }})
<p class="image-caption">Antes: el sensor de Xiaomi desmontado en 4 partes</p>

Estos sensores tienen dos partes, una es simplemente un iman dentro de un trozo de plástico bonito, la otra es una pequeña PCB con un interruptor de campo magnético, la pila y el emisor de señales por protocolo Zigbee que conecta con el hub domótico.

![]({{ "/assets/img/content/cafelitto/magneticsensor.jpg" | absolute_url }})
<p class="image-caption">Sensor magnético: si hay un imán cerca permite el paso de una señal</p>

![]({{ "/assets/img/content/cafelitto/pressuresensor.jpg" | absolute_url }})
<p class="image-caption">Sensor de peso: lo mismo, pero cuando aplicas una fuerza física sobre él</p>

Secorte el sensor de campo magnético y soldé un par de cables en su lugar para poder poner el sensor que yo quisiera en su lugar. También le hice un pequeño agujerito a la caja para poder sacar los cables.

![]({{ "/assets/img/content/cafelitto/doorsensormod.jpg" | absolute_url }})
<p class="image-caption">Después: el mismo sensor de Xiaomi tras mi mod</p>

![]({{ "/assets/img/content/cafelitto/sensorcapsule.jpg" | absolute_url }})
<p class="image-caption">El mismo sensor, ya cerrado en su capsulita</p>

![]({{ "/assets/img/content/cafelitto/sensorpresetup.jpg" | absolute_url }})
<p class="image-caption">Las dos partes, listas para ser instaladas en la silla</p>

Con el sensor ya listo y funcionando, todo lo que faltaba es instalarlo en la silla.

![]({{ "/assets/img/content/cafelitto/chair0.jpg" | absolute_url }})
<p class="image-caption">Posición orientativa del sensor antes de meterlo en el cojín</p>

![]({{ "/assets/img/content/cafelitto/chair1.jpg" | absolute_url }})
<p class="image-caption">Apertura del cojín</p>

![]({{ "/assets/img/content/cafelitto/chair2.jpg" | absolute_url }})
<p class="image-caption">Instalación del sensor de peso</p>

![]({{ "/assets/img/content/cafelitto/chair3.jpg" | absolute_url }})
<p class="image-caption">Instalación del emisor zigbee</p>

![]({{ "/assets/img/content/cafelitto/chair4.jpg" | absolute_url }})
<p class="image-caption">Conexión de las dos partes</p>

![]({{ "/assets/img/content/cafelitto/chair5.jpg" | absolute_url }})
<p class="image-caption">¡Instalación completa!</p>

El sensor funcionó de maravilla y no volví a tener problemas con mis checkins/checkouts. Además, un poco después le añadí otra automatización adicional para que siempre que me sentase cambiara la iluminación general de la sala por las luces de escritorio... la guinda del pastel ;)





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