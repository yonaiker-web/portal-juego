function info() {
  let div = document.getElementById("nuevoboton");
  div.innerHTML = `
    <h2 class="py-4">Sobre el Juego</h2>
  <div class="accordion">
                <input
                  type="radio"
                  name="toggle"
                  class="accordion-toggle"
                  checked
                />
                <div class="accordion-header">Origen del nombre</div>
                <div class="accordion-content">
                  El nombre del juego proviene de la onomatopeya japonesa paku
                  (パク?), sonido que se produce al abrir y cerrar la boca. El
                  nombre se romanizó como Puck-Man en Japón (en inglés, puck se
                  pronuncia pac en español). Sin embargo, Midway lo modificó a
                  Pac-Man para el mercado estadounidense (y posteriormente otros
                  mercados occidentales) debido a que la gente podría vandalizar
                  la «P» de Puck-Man pintando encima una «F», formando una
                  grosería en inglés. En España, este juego era coloquialmente
                  conocido como Comecocos debido a que se anunciaba de esta
                  manera en televisión la versión para Atari 2600 a principios
                  de los años 1980 aunque su nombre oficial seguía siendo
                  Pac-Man. Se popularizó tanto entre la población española que
                  la empresa MB tituló de esta manera la versión española de su
                  juego de mesa basado en Pac-Man.
                </div>

                <input type="radio" name="toggle" class="accordion-toggle" />
                <div class="accordion-header">Modo de juego</div>
                <div class="accordion-content">
                  El protagonista del videojuego Pac-Man es un círculo amarillo
                  al que le falta un sector, por lo que parece tener boca.
                  Aparece en laberintos donde debe comer puntos pequeños
                  (llamados «Pac-dots» en inglés), puntos mayores y otros
                  premios con forma de frutas y otros objetos. El objetivo del
                  personaje es comer todos los puntos de la pantalla, momento en
                  el que se pasa al siguiente nivel o pantalla. Sin embargo,
                  cuatro fantasmas o monstruos, Shadow (Blinky), Speedy (Pinky),
                  Bashful (Inky) y Pokey (Clyde), recorren el laberinto para
                  intentar capturar a Pac-Man. Estos fantasmas son,
                  respectivamente, de colores rojo, rosa, cian y naranja. En el
                  juego original (Puck-Man), los fantasmas se llamaban Akabei,
                  Pinky, Aosuke y Guzuta. Los fantasmas no son iguales, así
                  mientras Blinky es muy rápido, y tiene la habilidad de
                  encontrar a Pac-Man en el escenario, Inky es muy lento y
                  muchas veces evitará el encuentro con Pac-Man. Hay un
                  «pasillo» a los costados del laberinto que permiten a Pac- Man
                  o sus enemigos transportarse al costado opuesto (sale por la
                  derecha y reingresa por la izquierda, o viceversa). Cuatro
                  puntos más grandes de lo normal situados cerca de las esquinas
                  del laberinto nombrados en inglés Power Pellets (que en
                  español lo han traducido en diversas formas como «píldoras
                  mágicas» o «de poder», «bolas de energía» o simplemente «punto
                  de poder»), proporcionan a Pac-Man, durante un tiempo
                  limitado, la habilidad de comerse él a los monstruos (todos
                  ellos se vuelven azules mientras Pac-Man tiene esa habilidad),
                  tras lo cual todo vuelve a ser como al principio. Después de
                  haber sido «comidos» por Pac-Man, los fantasmas se regeneran
                  en «casa» (una caja situada en el centro del laberinto). El
                  tiempo en que los monstruos permanecen vulnerables varía según
                  la pantalla, pero tiende a decrecer a medida que progresa el
                  juego, y al cabo de muchas pantallas los puntos especiales no
                  tienen ningún efecto sobre los fantasmas, con la excepción del
                  nivel 6 en el que el efecto dura unos segundos más que en el
                  5. Hay unos descansos entre algunas pantallas (entre la 2 y la
                  3, 5 y 6, 9 y 10 y posteriormente cada cuatro pantallas) en
                  que se ven escenas humorísticas sobre Pac-Man y los fantasmas.
                  Aparte de comer los puntos, Pac-Man puede obtener puntuación
                  adicional si se come alguno de los objetos que aparecen dos
                  veces por pantalla justo debajo de la caja en el centro del
                  laberinto de donde salen los monstruos. El objeto cambia cada
                  pantalla o dos, y su valor en puntos aumenta, de forma que dos
                  cerezas (el premio de la primera pantalla) valen 100 puntos,
                  mientras que el último objeto, la llave, vale 5000.
                </div>

                <input type="radio" name="toggle" class="accordion-toggle" />
                <div class="accordion-header">Origen del nombre</div>
                <div class="accordion-content">
                  El nombre del juego proviene de la onomatopeya japonesa paku
                  (パク?), sonido que se produce al abrir y cerrar la boca. El
                  nombre se romanizó como Puck-Man en Japón (en inglés, puck se
                  pronuncia pac en español). Sin embargo, Midway lo modificó a
                  Pac-Man para el mercado estadounidense (y posteriormente otros
                  mercados occidentales) debido a que la gente podría vandalizar
                  la «P» de Puck-Man pintando encima una «F», formando una
                  grosería en inglés. En España, este juego era coloquialmente
                  conocido como Comecocos debido a que se anunciaba de esta
                  manera en televisión la versión para Atari 2600 a principios
                  de los años 1980 aunque su nombre oficial seguía siendo
                  Pac-Man. Se popularizó tanto entre la población española que
                  la empresa MB tituló de esta manera la versión española de su
                  juego de mesa basado en Pac-Man.
                </div>

                <input type="radio" name="toggle" class="accordion-toggle" />
                <div class="accordion-header">Fantasmas</div>
                <div class="accordion-content">
                  Inicialmente, los enemigos de Pac-Man eran referidos como
                  monstruos en el mundo arcade, pero pronto se convirtieron en
                  fantasmas mayormente de diferentes colores. Los fantasmas no
                  son capaces de mover a la dirección opuesta de su movimiento
                  actual Los fantasmas están limitados por el laberinto de la
                  misma manera que Pac-Man, pero por lo general se mueven
                  ligeramente más rápido que el jugador, aunque se vuelven más
                  lentos cuando se activan los puntos especiales de las esquinas
                  y se ralentizan significativamente al pasar a través de los
                  túneles a los lados del laberinto (mientras que Pac-Man pasa a
                  través de estos túneles sin trabas). Pac-Man se ralentiza
                  ligeramente mientras come puntos, permitiendo potencialmente a
                  un fantasma perseguidor que le capture durante esos momentos.

                  <br />
                  <br />

                  <ol>
                    <li>
                      Blinky (Rojo). Después de que Pac-Man coma cierta cantidad
                      de puntos, su velocidad incrementa considerablemente (este
                      número disminuye en niveles más altos). Blinky persigue a
                      Pac-man directamente.
                    </li>

                    <li>
                      Inky (azul o Cian). No es tan rápido como Blinky pero su
                      comportamiento se debe que el juego calcula la distancia
                      en línea recta entre Blinky y Pac-man y lo gira 180
                      grados, así que Inky siempre colabora con Blinky para
                      acorralar a Pac-man
                    </li>

                    <li>
                      Pinky (rosa). Este en realidad su blanco son cuatro
                      espacios ubicados a la derecha, izquierda y abajo de
                      pacman cuando este mira en tales direcciones, cuando
                      Pac-man mira hacia arriba, el blanco es cuatro espacios
                      arriba y dos a la izquierda. Esto hace que Pinky trate de
                      atrapar a Pac-man por enfrente mientras Blinky lo persigue
                      por detrás.
                    </li>

                    <li>
                      Clyde (naranja). Este se mueve aleatoriamente a Pac-man,
                      sin embargo considerando al propio Pac-man en un círculo
                      de ocho espacios en cualquier dirección, Clyde huye cuando
                      se acerca demasiado a él moviéndose a la esquina inferior
                      izquierda del laberinto. Dado que los fantasmas no pueden
                      girar a la dirección opuesta de su movimiento actual Clyde
                      se verá forzado a chocar con Pac-man en caso de
                      encontrarse en frente de él.
                    </li>
                  </ol>
                </div>

                <input type="radio" name="toggle" class="accordion-toggle" />
                <div class="accordion-header">Pantalla dividida</div>
                <div class="accordion-content">
                  El videojuego tiene exactamente 255 pantallas completamente
                  jugables, siendo este el mayor número que se puede expresar
                  con ocho cifras en el sistema binario. Aunque, técnicamente,
                  existe un nivel 256, si se llega a él la parte derecha de la
                  pantalla aparece distorsionada con caracteres incongruentes y
                  haciendo que el juego sea prácticamente injugable. Esto ocurre
                  porque el contador de nivel (almacenado en un byte único)
                  llega a 256 (cuando el máximo almacenable en un byte es 255,
                  lo que produce un error de «overflow»). Entonces el programa
                  trata de dibujar 256 frutas, lo que provoca la citada
                  distorsión de la mitad derecha de la pantalla. Los entusiastas
                  de Pac-Man se refieren a este nivel como el «nivel final», el
                  «nivel de la pantalla dividida» (Split-Screen Level) o
                  sencillamente como el final de Pac-Man. También en 2015, ha
                  salido un juego llamado Pac-Man 256 que hace referencia a
                  esto, el cual es un laberinto sin fin.
                </div>

                <input type="radio" name="toggle" class="accordion-toggle" />
                <div class="accordion-header">Premios</div>
                <div class="accordion-content">
                  A lo largo del juego, Pac-Man puede encontrar diversos
                  premios:

                  <br />
                  <br />

                  <ol>
                    <li>Nivel 1: Cereza 100 puntos.</li>
                    <li>Nivel 2: Fresa 300 puntos.</li>
                    <li>Niveles 3 y 4: Naranja 500 puntos.</li>
                    <li>Niveles 5 y 6: Manzana 700 puntos.</li>
                    <li>Niveles 7 y 8: Uvas 1000 puntos.</li>
                    <li>Niveles 9 y 10: Galaxian 2000 puntos.</li>
                    <li>Niveles 11 y 12: Campana 3000 puntos.</li>
                    <li>Niveles 13 al 255: Llave 5000 puntos.</li>
                  </ol>
                </div>

                <div class="accordion-content">
                  En cada nivel aparecen dos veces los premios. Si Pac-Man
                  pierde una vida cuando aparece un premio, este desaparece a la
                  vida siguiente
                </div>
              </div>`;
}
