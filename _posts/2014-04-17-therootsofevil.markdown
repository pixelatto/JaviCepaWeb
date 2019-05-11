---
layout: post
title: The Roots of Evil
date: 2014-04-17
description: Un jardinero salvando el mundo
img: assets/img/cover/therootsofevil.png
embed: assets/embed/therootsofevil/index.html
tags: [Jams]
words: 3 minutos
status: published
action-text: Descarga en LudumDare
action-link: http://ludumdare.com/compo/ludum-dare-29/?action=preview&uid=19200
---

En fin de semana que coincidía con esta Ludum Dare #29 me pilló de viaje en el Madrid Games Week, así que en un principio descartaba presentarme está vez.

El domingo a medio día me vino la motivación y me lancé a por ello.

El tema era "beneath the surface", así que me esperaba un montón de juegos de minería, pesca y similares. Cómo otras veces quería buscar algo que se saliera de por dónde van las ideas en general.

Me decidí por hacer un pequeño arcade en el que encarnas a un jardinero que combate contra un monstruo-planta subterráneo que extiende sus raíces para conquistar la superficie.

<blockquote>Para que me diese tiempo, opté por una estética Gameboy, de 4 colores y sprites a muy baja resolución.</blockquote>

También me ocupé de dejar el diseño cerrado en papel antes de empezar para ir a tiro hecho en las aproximadamente 12h que tenía para hacer el juego.

![]({{ "/assets/img/content/rootsofevildesign.jpg" | absolute_url }})
<p class="image-caption">Diseño express en un folio</p>

En el diseño se consideraban varios tipos de plantas con distintos niveles de evolución. Tuve que recortar algunos niveles de evolución y descartar alguna planta para ajustar los tiempos.

<blockquote>Le puse al juego un objetivo sencillo: sobrevive hasta que amanezca (3 minutos) y añadí como detalle que la posición de la luna indicara el progreso de la partida.</blockquote>

El desarrollo fue bastante bien, y tuve tiempo para balancear la curva de dificultad. Era una curva que aceleraba muy sutilmente haciendo que para ganar hubiera que pasar un último minuto muy tenso.

![]({{ "/assets/img/content/rootsoutofcontrol.png" | absolute_url }})
<p class="image-caption">Es muy habitual tener que renunciar a uno de los lados durante la partida</p>

Cuando estaba añadiendo el final y puse el fondo con el color de día, vi que era el mismo que el de las cizallas del personaje y se dejaban de ver. En lugar de cambiarlas el color para que se vieran, se me ocurrió una solución mejor: como en la animación sin cizallas parecía que el personaje aplaudía... ¡Le añadí un sonido de palmada!

Ahora sí terminabas el juego podías auto-aplaudirte. Puse un letrero para hacerlo más explicito todavía.

Valoraciones generales de esta compo...

### Lo bueno:
* Buena organización y tiempo muy aprovechado.
* Juego completo en tiempo récord y divertido de jugar.
* No ponerle salto al jugador fue un acierto.
* Discretizar y superponer el movimiento de las raíces dio lugar a un pequeño grado de incertidumbre muy interesante.

### Lo malo:
* Mucho trabajo en muy poco tiempo, acabé bastante cansado.
* No estaba preparado. Estrenaba un ordenador que venía con el terrible Windows 8 y Unity crasheando constantemente por culpa del susodicho.
* No me dio tiempo a procesar bien los gráficos para dejar un pixel limpio, se veían algunos artefactos.
* Hice esta Jam desde casa de un amigo con muy mala conexión.

### Lo nuevo:
* Usé Pickle para los gráficos por primera vez, muy buena experiencia jammera
* ‎Windows 8 y versión nueva de Unity: receta para el desastre.

### Lo usado:
* Diseño: folio doblado a la mitad y lápiz
* Código: Unity + MonoDevelop
* Gráficos: Pickle Editor
* Sonido: BFXR + PxTone

### Rankings:
<table>
<tr><th></th><th class="cell-center">Puntuación</th><th class="cell-center">Puesto</th></tr>
<tr><td>Overall		</td><td class="cell-center score">3.830</td><td class="cell-center rank">#94</td></tr>
<tr><td>Fun			</td><td class="cell-center score">3.650</td><td class="cell-center rank">#124</td></tr>
<tr><td>Innovation	</td><td class="cell-center score">3.780</td><td class="cell-center rank">#128</td></tr>
<tr><td>Theme		</td><td class="cell-center score">3.930</td><td class="cell-center rank">#67</td></tr>
<tr><td>Graphics	</td><td class="cell-center score">3.830</td><td class="cell-center rank">#177</td></tr>
<tr><td>Audio		</td><td class="cell-center score">3.490</td><td class="cell-center rank">#154</td></tr>
<tr><td>Humor		</td><td class="cell-center score">2.930</td><td class="cell-center rank">#277</td></tr>
<tr><td>Mood		</td><td class="cell-center score">3.520</td><td class="cell-center rank">#185</td></tr>
</table>