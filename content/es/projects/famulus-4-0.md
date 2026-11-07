---
title: "Famulus 4.0: un perro robot en escena"
seoTitle: "Famulus 4.0: control en directo de un perro robot | Sensical"
description: "Un controlador a medida para un perro robot Unitree Go2, manejado en directo con un mando de juego y un controlador MIDI en Famulus 4.0, de Iron Skulls Co."
draft: false
featured: true
weight: 5
translationKey: famulus40
heroHeading: "Famulus 4.0"
heroSubHeading: "Control en directo de un perro robot para un espectáculo de danza"
client: "Iron Skulls Co"
year: "2024–2025"
location: "Estreno: Umore Azoka, Leioa"
services:
- technicaldevelopmentartists
related_projects:
- azulpetroleomasks
labels:
- "Robótica"
- "MIDI"
- "Control de espectáculo"
image: "/images/projects/famulus/robot-and-dancers.jpg"
---
Cuatro bailarines y un perro robot comparten escenario en [Famulus 4.0](https://ironskulls.es/creaciones/famulus-4-0/). Para este espectáculo de [Iron Skulls Co](https://ironskulls.es/), construimos un controlador a medida para un perro robot Unitree Go2, que permite a una persona controlarlo en directo durante la función con mandos fáciles de usar, como un Akai APC mini mk2 y un mando de videojuegos 8BitDo. [Óscar González](/es/acerca-de/#oscar-gonzalez), cofundador de Sensical y director técnico de Iron Skulls Co, desarrolló el sistema con la compañía.

{{< carousel label="Famulus 4.0 en escena" >}}
![Un perro robot de cuatro patas camina por un escenario cubierto de paja, con cuatro bailarines de negro detrás](/images/projects/famulus/robot-and-dancers.jpg "Famulus 4.0 en escena. Foto: Iron Skulls Co.")
![El perro robot en primer plano, cerca de la cámara, con cuatro bailarines mirándolo desde atrás](/images/projects/famulus/robot-close-up.jpg "Foto: Iron Skulls Co.")
![El perro robot camina hacia la cámara mientras los bailarines lo señalan desde atrás](/images/projects/famulus/robot-walking.jpg "Foto: Iron Skulls Co.")
![Tres bailarines tirando unos de otros sobre el escenario cubierto de paja](/images/projects/famulus/dancers.jpg "Foto: Iron Skulls Co.")
{{< /carousel >}}

## El espectáculo

Una plataforma de 6 × 6 metros, delimitada e infinita a la vez. Cuatro personas y un perro robot, en un diálogo entre lo humano y lo artificial. Su nombre une el latín *famulus* (sirviente) y la Cuarta Revolución Industrial: Famulus 4.0 explora la fragilidad de los vínculos sociales en una época de hiperconexión y automatización, a través del breaking teatral de Iron Skulls.

El espectáculo se estrenó el 16 de mayo de 2025 en Umore Azoka, en Leioa, y está pensado para teatros, espacios públicos y lugares no convencionales. Para el robot, eso significa funcionar con fiabilidad allí donde vaya el espectáculo y reaccionar a los bailarines en tiempo real.

## Un controlador pensado para el escenario

El perro robótico Unitree Go2 está diseñado para manejarse desde su propia app propietaria y su mando. Sin embargo, un espectáculo necesita mucho más: un control preciso y estable, con todos los ajustes a mano y una forma de detenerlo si algo falla. Con esos requisitos, escribimos nuestro propio sistema de control, basado en buses de mensajes multinodo para controlar el robot desde varias fuentes independientes, y en una interfaz de control centralizada de alta velocidad. Sus principales características son:

+ **Conexión inalámbrica directa.** El ordenador principal se comunica con el robot por la red local mediante WebRTC, a través del controlador de código abierto [go2_webrtc_connect](https://github.com/legion1581/go2_webrtc_connect), y lee su estado: modo, postura y sensores de las patas.
+ **Un único bus de mensajes.** Cada dispositivo de entrada es un pequeño servicio que publica órdenes por MQTT. Un único distribuidor las envía al robot, de modo que se pueden añadir o cambiar dispositivos sin tocar el resto.
+ **Mando de videojuegos para los movimientos.** El mando dirige los pasos, los desplazamientos laterales y los giros del perro, o inclina su cuerpo (alabeo, cabeceo y guiñada).
+ **Controlador MIDI para las órdenes predefinidas.** Un Akai APC mini mk2 da acceso a los trucos y movimientos del robot desde sus pads. Además, sus faders ajustan la altura del cuerpo, la altura del paso, el volumen del altavoz, el brillo de los LEDs y hasta dónde y a qué velocidad pueden mover al robot los joysticks. Las luces de los pads muestran el estado y el modo actuales del robot, para que la persona que lo opera los vea de un vistazo.
+ **La seguridad, lo primero.** Un botón dedicado detiene el robot en cualquier momento, y otro lo devuelve a una posición de pie equilibrada.

## Grabar, editar, reproducir

Algunos momentos del espectáculo tienen que ser exactamente iguales cada noche. La persona que opera el robot puede grabar una secuencia de órdenes directamente desde los mandos, con su tempo y una pista de música opcional, y reproducirla después desde un solo pad, con un modo de vista previa opcional. Un pequeño editor de escritorio permite al equipo ajustar los detalles de cada grabación.

El sistema también tiene un modo de ensayo, para practicar los controles sin el robot, y herramientas para reproducir sonidos en el altavoz del propio robot. Además, estamos experimentando con convertir los sensores de las patas en notas MIDI, para que sus pasos puedan disparar sonidos.

## Código abierto

El código está publicado en GitHub con licencia GPL-3.0:

- [iron-skulls-dog](https://github.com/oscgonfer/iron-skulls-dog)
