---
title: "Azul Petróleo: máscaras de luz interactivas"
seoTitle: "Azul Petróleo: máscaras LED por radio para danza | Sensical"
description: "Máscaras de luz y LEDs de escenario para Azul Petróleo, de Iron Skulls Co, controlados en directo y sin cables desde el software de iluminación."
draft: false
featured: true
weight: 10
translationKey: azulpetroleomasks
heroHeading: "Azul Petróleo"
heroSubHeading: "Máscaras de luz controladas por radio para un espectáculo de danza contemporánea"
client: "Iron Skulls Co"
year: "2022–2023"
partners:
- "Vicente Romero (diseño 3D)"
services:
- technicaldevelopmentartists
related_projects:
- famulus40
labels:
- "Wearables"
- "Radio"
- "LEDs"
image: "/images/projects/azul-petroleo/mask-crush.jpg"
---
Para el espectáculo [Azul Petróleo](https://ironskulls.es/creaciones/azul-petroleo/) de [Iron Skulls Co](https://www.ironskulls.es/), diseñamos la electrónica y el código de un conjunto de máscaras que se iluminan en remoto, y un _set_ de iluminación LED que forma parte de la escenografía. Ambos se controlan en directo desde el software de iluminación del espectáculo. El proyecto lo dirigió [Óscar González](/es/acerca-de/#oscar-gonzalez), cofundador de Sensical y director técnico de Iron Skulls Co.

{{< carousel label="Máscaras de Azul Petróleo" >}}
![Tres bailarines en un escenario oscuro, dos de ellos con máscaras con luces rojas, y dos barras de luz rojas detrás](/images/projects/azul-petroleo/mask-crush.jpg "Azul Petróleo en escena.")
![Una máscara impresa en 3D sobre un suelo de madera, con tiras LED rojas encendidas en los cuernos, los ojos y la mandíbula](/images/projects/azul-petroleo/mask.jpg "Una de las máscaras, con sus LEDs RGB direccionables encendidos.")
![Las máscaras alineadas en la oscuridad, iluminadas en azul, una de ellas con luces rojas y naranjas](/images/projects/azul-petroleo/masks.jpg "Las máscaras juntas. Cada una tiene su propia dirección en la red de radio.")
![Un bailarín agachado en la oscuridad, con un rayo láser rojo que sale de su máscara y dos luces blancas desde arriba](/images/projects/azul-petroleo/mask-features.jpg "El láser y los dos LEDs blancos de alta potencia.")
{{< /carousel >}}

## El espectáculo

Azul Petróleo explora la individualidad, los instintos colectivos y el papel de la tecnología en la sociedad. Durante la función, cuatro bailarines llevan máscaras con distintos sistemas de iluminación: láseres, LEDs de alta potencia y LEDs RGB direccionables. Danza y luz trabajan juntas en una coreografía visual compleja, con todos los elementos técnicos sincronizados desde un único punto de control.

## Las máscaras

Las máscaras las diseñó [Vicente Romero](mailto:info@vicenteromero.es). Nuestro trabajo involucró su adaptamos para la impresión 3D, de modo que contengan la electrónica con seguridad mientras los bailarines se mueven en el escenario. Cada máscara se imprime en dos mitades, unidas con tornillos e insertos roscados, y cada una contiene:

+ 45 LEDs RGB direccionables (144 LEDs/m)
+ 2 LEDs blancos de muy alta potencia
+ 1 láser, regulado por PWM
+ Una placa Feather M0 con radio RFM69 de 433 MHz y antena externa para ganar alcance
+ Una placa de expansión propia y una batería LiPo de 2.000 mAh, cargada por USB: más de seis horas en una función, o una hora aproximadamente con todas las luces encendidas a la vez

## Control inalámbrico

Cada máscara ejecuta un pequeño servidor de radio con su propia dirección. Una placa cliente, conectada al ordenador de iluminación, recibe mensajes [OSC](https://opensoundcontrol.stanford.edu/) del [software de iluminación del espectáculo](https://www.getdlight.com) y los transmite a las máscaras por radio, con un protocolo propio basado en [RadioHead](http://www.airspayce.com/mikem/arduino/RadioHead/).

Tanto servidor como cliente son asíncronos, permitiendo que una señal pueda enviarse en cualquier momento y las máscaras reaccionen al instante.

## LEDs del escenario

Además de las máscaras, construimos un conjunto de tiras LED direccionables a medida para el escenario, montadas en barras de 50 cm. Se controlan a distancia mediante sACN (E1.31) y funcionan de forma asíncrona. Como parte de nuestro trabajo, escribimos un programa para controlarlas. Las barras se conectan en cadena, y las configuraciones a medida pueden controlar cientos de metros de LEDs.

![Tres bailarines en un escenario oscuro, con dos barras LED rojas encendidas detrás](/images/projects/azul-petroleo/mask-crush.jpg "Las barras LED del escenario, detrás de los bailarines.")

## Resultados

Azul Petróleo se presentó por primera vez en 2022 en LAVA (Valladolid), los Teatros del Canal (Madrid) y Summer Dance Forever (Ámsterdam). Desde entonces ha girado internacionalmente.

{{< youtube id="P9CsZFBkOrY" loading="lazy" title="Azul Petróleo, de Iron Skulls Co (vídeo)" >}}

## Código abierto

Todo el código y el hardware están publicados con licencia GPL-3.0:

+ [iron-skulls-mask](https://github.com/oscgonfer/iron-skulls-mask): modelos 3D (STL), PCB de la placa de expansión y lista de materiales, firmware de las máscaras, cliente de radio y puente OSC
+ [iron-skulls-leds](https://github.com/oscgonfer/iron-skulls-leds): secuenciador de OSC a sACN y firmware Teensy para los LEDs del escenario
