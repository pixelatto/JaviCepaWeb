---
layout: post
title: Apocalypse Tycoon
date: 2018-04-21
description: RTS Apocalíptico
img: assets/img/cover/apocalypsetycoon.png
tags: [Jams]
words: 4 minutos
status: published
action-text: Descarga en LudumDare
action-link: https://ldjam.com/events/ludum-dare/41/apocalypse-tycoon
---

Otra compo más (#LD41).

Hacía tiempo que tenía en mente hacer un juego de "gestión de apocalipsis", algo a medias entre el típico mata-mata de zombies y gestión simplificada al estilo de Kingdom: New Lands.

Me planteé esta Jam al revés de cómo suele hacerse: en lugar de coger el tema y ver como encajo el juego dentro, fui con una idea que me gustaba y pensé en cómo cuadrar el tema.

El tema en cuestión era "Combinar 2 géneros incompatibles", así que le añadí al juego algún ingrediente para que encajase mejor, principalmente que no pudieras usar armas directamente.

El sábado por la mañana me puse manos a la obra con un generador procedural de personajes humanos pixelados a 6x6 de tamaño.

![]({{ "/assets/img/content/apocalypseguys.png" | absolute_url }})
<p class="image-caption">Empiezo a asumir que los sprites de 6x6 son la marca de la casa</p>

Era un script muy sencillo, sumado a un puñado de píxeles que por si solos no tienen mucho sentido. La idea de generar esta variedad en los personajes era crear un claro contraste entre la diversidad y vida de los humanos y la homogeneidad y no-vida de los zombies.

![]({{ "/assets/img/content/apocalypsezombies.png" | absolute_url }})
<p class="image-caption">Vivos contra muertos</p>

A la par hice el sistema de movimiento, El script de billboard para que mirasen a la cámara y alguna cosa más.

Después me puse con el escenario. Al principio tenía ganas de hacer un generador procedural de ciudades porque no me gusta mucho el level design, pero recordé otras jams y llegué a la conclusión de que es tontería hacer un generador de infinitos niveles para un juego al que vas a jugar 5 minutos.

Nivel fijo pues. Aproveché para trastear con las nuevas herramientas de tilemaps de Unity y más o menos funcionaron, aunque se echan en falta detalles de usabilidad.

Por culpa del ******* level design se me fue el resto de la mañana y parte de la tarde. A mitad de tarde seguía haciendo chorraditas y seguía sin juego:
- Efectos de postprocesado? Check!
- Edificios auto-ocultables? Check!
- Sistema de eventos (que finalmente no usaría)? Check!
- Semáforos y farolas de adorno? Ch...

Nope. Cuando llegué al punto de las farolas pude contenerme y empezar a centrarme en "hacer juego".

La mañana del domingo me puse a tope: sistemas de spawning, oleadas, drops, salud, daño, IA humana y zombie... Un montón de "infraestructura" para el juego, pero sin juego todavía. 

A mediodía ya estaba con esa sensación de "Javi, no parece que vayas a terminar este juego". Había muchas cosas hechas, pero nada conectado, no había juego.
Me puse a hacer algunos de los sonidos para airearme un poco.

Volví a la carga añadiendo un shader de postprocesado de outline vía Sobel, un ciclo básico de día/noche y un tone mapping vía LUT.

<blockquote>Tengo un problema con esto de los ciclos día/noche... Siempre meto alguna cosa de estas, aunque sea totalmente innecesario son tan bonitos...</blockquote>

A media tarde ya en modo desesperación saqué la tijera, empecé a recortar por todos lados y empezó a verse un principio de juego.

Entre los recortes, descansan en paz:
- Un sistema de mejoras de base y construcción
- Más tipos de zombies
- Una inteligencia artificial algo más inteligente
- Más partículas en las armas (muzzle flash e impactos)
- Mejores elementos escenograficos (un parque, farolas, bancos...)

Además de eso, en algún momento de la tarde descubrí horrorizado como el navmesh empezaba a petardear a partir de 50 actores (adiós hordas de zombies...), así que tuve que reducir daños de armas y diferir+limitar el spawn rate.

Sigue pasando el día y nos plantamos en las últimas 4 horas, que siempre dan para mucho a cambio de ser súper estresantes.

No tenía tiempo para ponerme al piano a grabar pistas y hacer una música más o menos aceptable como otras veces, así que opté por tirar de voz+micro sucio y ponerle un par de efectos comodín para disimularlo un poco (pitch+reverb).

<blockquote>Paradójicamente, el cutre-enfoque de banda sonora es de las cosas que más gustó de este juego</blockquote>

Después me puse a ajustar los LUTs de día y noche en Photoshop. Quería que el LUT nocturno mostrase a los zombies como una silueta negra y resaltase a tope el color rojo de los ojos en la oscuridad. En algún momento del finde tuve este efecto clavado, pero al ir haciendo correcciones de luz se acabó perdiendo y no lo pude rescatar a tiempo.

![]({{ "/assets/img/content/apocalypsenight.png" | absolute_url }})
<p class="image-caption">Mucho ensayo y error con esto hasta dar con la estética que quería</p>

El juego no se explicaba por ningún lado, así que añadí un sistema de carteles con explicaciones dentro del gameplay. Ayuda a poner al jugador en acción mucho más rápido ya que elimina el típico muro de instrucciones al inicio. Eso, sumado al control sin botones (sólo dirección) que reduce las opciones, da pie a un muy buen boarding del jugador.

Por último, cambié el juego a un objetivo de "no maximizar". Con esto quiero decir que pasó de "sobrevive todo lo que puedas" a "los zombies al morir sueltan monedas, recoge 100" (que además lleva implícito el sobrevive). Si no haces esto es muy fácil caer en reacciones de tipo "sé cómo va pero no sé que tengo que hacer".

Todo eso en 4 horas.

Ya con la mayor parte de mi materia gris licuada y saliéndome por las orejas, dediqué la poca que me quedaba a empaquetar el juego y enviarlo.

Al final dió tiempo y estoy contento con el resultado.

Por supuesto, he hecho un montón de hacks y apaños para meter todo eso en dos días, pero esos ya los pondré por Twitter ;)

### Rankings:
<table>
<tr><th></th><th class="cell-center">Puntuación</th><th class="cell-center">Puesto</th></tr>
<tr><td>Overall		</td><td class="cell-center score">4.048</td><td class="cell-center rank">#31</td></tr>
<tr><td>Fun			</td><td class="cell-center score">3.935</td><td class="cell-center rank">#43</td></tr>
<tr><td>Innovation	</td><td class="cell-center score">3.645</td><td class="cell-center rank">#196</td></tr>
<tr><td>Theme		</td><td class="cell-center score">3.266</td><td class="cell-center rank">#490</td></tr>
<tr><td>Graphics	</td><td class="cell-center score">4.281</td><td class="cell-center rank">#26</td></tr>
<tr><td>Audio		</td><td class="cell-center score">3.887</td><td class="cell-center rank">#37</td></tr>
<tr><td>Humor		</td><td class="cell-center score">3.603</td><td class="cell-center rank">#85</td></tr>
<tr><td>Mood		</td><td class="cell-center score">3.768</td><td class="cell-center rank">#52</td></tr>
</table>