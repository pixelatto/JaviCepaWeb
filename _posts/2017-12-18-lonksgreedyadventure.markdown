---
layout: post
title: Lonk's Greedy Adventure
date: 2017-12-18
description: Un juego sobre decisiones de peso
img: assets/img/cover/lonkgreedyadventure.png
embed: assets/embed/lonksadventure/index.html
tags: [Jams]
words: 4 minutos
status: published
action-text: Descarga en LudumDare
action-link: https://ldjam.com/events/ludum-dare/40/$65375
---

Vuelvo a la carga otra vez en modo compo. Esta vez el tema es algo así como "cuanto más tienes, peor". Por alguna razón nunca salen los temas que me gustan, pero hay que trabajar con lo que hay.

<blockquote>
Las compos son individuales y en 48 horas en lugar de 72. La carga de trabajo es brutal, pero puedes dejar un producto muy redondo y bien cerrado si te organizas.
</blockquote>

La primera idea que me vino a la cabeza fue una especie de ajedrez en el que a medida que ibas perdiendo piezas el tablero se inclinaba y ganabas alguna ventaja táctica.

La idea no era mala, pero rápidamente me pareció que iba a haber muchos juegos con la mecánica de "tablero que se inclina en función de la cantidad de cosas que tengas", así que le dí un par de vueltas más.

<blockquote>
Es la primera jam en la que no me pongo una alarma para ver el tema a las 3 de la madrugada, empiezo a tomarme estas cosas con más calma.
</blockquote>

Después de darle vueltas se me ocurrió algo más interesante: de lo ridículo de la sobrecarga de objetos en algunos juegos se podría hacer un juego-parodia. Juegos como Tomb Raider o alguno de los Zeldas te permiten llevar montones de armas y accesorios sin que tu movimiento se vea penalizado lo más mínimo ¿Y si hiciéramos algo más realista?

![]({{ "/assets/img/content/realisticzelda.png" | absolute_url }})
<p class="image-caption">No soy el primero al que se le ocurre la idea (<a href="http://www.dorkly.com/post/1823/realistic-zelda-inventory">fuente</a>)</p>

Como siempre, empecé programando el movimiento del personaje. El concepto del peso era clave, así que la vista lateral era casi obligada. Los plataformas 2D los tengo bastante machacados pero es que son taaan bonitos de hacer...

Para los gráficos opté por pixel art a 8x8. Cualquier cosa más compleja que eso me obligaría a quitar contenido. Incluso empecé creando el nivel con la idea de usar bloques de colores planos sin más.

A media tarde ya estaba contento con el movimiento y las colisiones del personaje y me puse manos a la obra con la cámara, el level design y los primeros objetos: espada y boomerang.

<blockquote>Ese mismo día por la noche hice la portada y la pequeña escena del cañón que servía para conectar el trasfondo de la portada con el gameplay y darle contexto al juego.</blockquote>

El segundo día fue casi por completo más level design y el código del resto de objetos. Quería que el nivel fuese cuasi-lineal, con una secuencia de habitaciones más o menos establecida, pero con distintos caminos en función de qué objetos se decidían coger o dejar.

![]({{ "/assets/img/content/lonkleveldesign.png" | absolute_url }})
<p class="image-caption">Mucho level design. El tamaño de la cueva de la espada puede dar una idea de la escala de todo esto.</p>

Se hizo evidente que los niveles iban a quedar muy pobres sin ningún tipo de sprite, así que me hice un shader que tilease automáticamente en coordenadas de mundo y preparé unos sprites básicos.

Sabía que los jugadores iban a coger todos los objetos que pudieran en su primera partida, así que necesitaba educarles en que coger todos los items que se encuentran no es la solución, para eso añadí los finales alternativos.

Terminé todo el código y arte y me quedaban 5 horas para dedicarlas a sonido (siempre para última hora...). La primera hora la dediqué a crear los sonidos con [BFXR](https://www.bfxr.net) y las restantes a hacer los 4 temas músicales (cañones, aventura, castillo y final) a un ritmo más o menos de 1 tema cada hora.

**Ojo, si no has jugado al juego leer esto es un SPOILER completo**

La experiencia tal cual la pensé sería:

* Primera partida: el jugador coge todos los ítems hasta que llega al puente y coge el yunque. Muere irremediablemente.
* Segunda partida: el jugado repite cogiéndolo todo menos el yunque. Muere aplastado por todo su equipo en la siguiente sala. Si después de estos dos finales todavía no ha captado la indirecta, lo damos por caso perdido.
* Tercera partida: el jugador intenta llegar al final sin coger ningún ítem. Muere al escapar con la princesa al no tener ítems con los que defenderse. Así se le enseña que puede haber soluciones intermedias.

![]({{ "/assets/img/content/lonkanvil.png" | absolute_url }})
<p class="image-caption">Es difícil que el jugador se quede después de esta experiencia traumática, pero la mayoría lo hacen movidos por la curiosidad del "qué hubiera pasado si..."</p>

A partir de aquí no hay un orden establecido de los finales, ya depende de cada uno. De hecho los 3 primeros hay mucha gente que lo ha pillado antes y los ha hecho en otro orden.

Creo que es mi mejor compo hasta la fecha y estoy muy contento con los resultados (aunque siempre diga lo mismo). Hice una versión post-compo al día siguiente con un par de finales extra.

Ahora mismo tengo el proyecto en andamios con algunas mejoras interesantes, como unas colisiones más limpias y atajos para que no sea tan tedioso sacar nuevos finales.

![]({{ "/assets/img/content/lonkcannons.png" | absolute_url }})
<p class="image-caption">¿3 cañones diferentes? ¡Eso sí que es un atajo!</p>

EDIT: a día de hoy es un juego completo, con 100 finales distintos y toneladas de contenido.

## Valoraciones de esta compo

### Lo bueno:
* Buena organización y 200% de productividad
* Mucho testeo. El diseño de niveles era bastante complejo y no se hubiera aguantado si no lo hubiera probado constantemente.
* 4 temas musicales ¡Más música que nunca!
* 6 finales distintos y 10 objetos, record de contenido
* Descansos y comidas bien respetados

### Lo malo:
* Tras la "submission hour" ya notaba los primeros síntomas de un constipado incipiente ¿Causado por la Ludum quizá?
* Estuve dudando mucho entre qué programas usar para crear la música, debería haber hecho prospección antes de la compo.
* Me da un poco de rabia perder tanto tiempo programando las colisiones básicas siempre que hago un plataformas. Es un poco reinventar la rueda...

### Lo nuevo:
* Nunca había hecho un ejercicio de level design tan intenso en tan poco tiempo. Estoy muy contento con cómo quedó.
* Las cámaras por sala son un recurso súper interesante, disfruté mucho jugando con ellas.
* Los finales alternativos dan un incentivo muy fuerte a seguir jugando. Tengo intención de revisitar este proyecto y hacer más finales.

### Lo usado:
* Diseño: folio doblado a la mitad y lápiz
* Programación: Unity + Visual Studio
* Gráficos: Aseprite
* Sonido: BFXR + Mixcraft

### Rankings:
<table>
<tr><th></th><th class="cell-center">Puntuación</th><th class="cell-center">Puesto</th></tr>
<tr><td>Overall		</td><td class="cell-center score">4.288</td><td class="cell-center rank">#3</td></tr>
<tr><td>Fun			</td><td class="cell-center score">4.192</td><td class="cell-center rank">#12</td></tr>
<tr><td>Innovation	</td><td class="cell-center score">3.860</td><td class="cell-center rank">#60</td></tr>
<tr><td>Theme		</td><td class="cell-center score">4.063</td><td class="cell-center rank">#84</td></tr>
<tr><td>Graphics	</td><td class="cell-center score">3.852</td><td class="cell-center rank">#136</td></tr>
<tr><td>Audio		</td><td class="cell-center score">3.760</td><td class="cell-center rank">#65</td></tr>
<tr><td>Humor		</td><td class="cell-center score">4.125</td><td class="cell-center rank">#17</td></tr>
<tr><td>Mood		</td><td class="cell-center score">4.260</td><td class="cell-center rank">#9</td></tr>
</table>

¡Me quedé en shock cuando vi que había quedado en el puesto número 3! Tanto es así que hasta que revisité la página para escribir este post no reparé en que hice muy buena puntuación en otras muchas áreas.

Como observación extra: la peor de las puntuaciones es en gráficos, y es algo que me encanta que haya resultado así, porque demuestra que hacer juegos que no entren por los ojos y se valoren ES posible.