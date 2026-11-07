---
title: "Famulus 4.0: a robot dog on stage"
seoTitle: "Famulus 4.0: live robot dog control for dance | Sensical"
description: "A custom controller for a Unitree Go2 robot dog, driven live with a game controller and a MIDI controller in Iron Skulls Co's dance show Famulus 4.0."
draft: false
featured: true
weight: 5
translationKey: famulus40
heroHeading: "Famulus 4.0"
heroSubHeading: "Live control of a robot dog for a dance show"
client: "Iron Skulls Co"
year: "2024–2025"
location: "Premiere: Umore Azoka, Leioa"
services:
- technicaldevelopmentartists
related_projects:
- azulpetroleomasks
labels:
- "Robotics"
- "MIDI"
- "Show control"
image: "/images/projects/famulus/robot-and-dancers.jpg"
---

Four dancers and a robot dog share the stage. For [Iron Skulls Co](https://ironskulls.es/en/)'s show [Famulus 4.0](https://ironskulls.es/creaciones/famulus-4-0/), we built a custom controller for a Unitree Go2 robot dog, allowing an operator to control it live during the performance with easy-to-use controllers, such as an Akai APC mini mk2 and an 8BitDo gamepad. [Óscar González](/about/#oscar-gonzalez), co-founder of Sensical and technical director at Iron Skulls Co, developed the system with the company.

{{< carousel label="Famulus 4.0 on stage" >}}
![A four-legged robot dog walks across a straw-covered stage, with four dancers in black behind it](/images/projects/famulus/robot-and-dancers.jpg "Famulus 4.0 on stage. Photo: Iron Skulls Co.")
![The robot dog in the foreground, close to the camera, with four dancers watching it from behind](/images/projects/famulus/robot-close-up.jpg "Photo: Iron Skulls Co.")
![The robot dog walking towards the camera while the dancers point at it from behind](/images/projects/famulus/robot-walking.jpg "Photo: Iron Skulls Co.")
![Three dancers pulling at each other on the straw-covered stage](/images/projects/famulus/dancers.jpg "Photo: Iron Skulls Co.")
{{< /carousel >}}

## The show

A 6 × 6 metre platform, bounded and infinite at the same time. Four people and a robot dog, in a dialogue between the human and the artificial. Named after the Latin *famulus* (servant) and the Fourth Industrial Revolution, Famulus 4.0 explores how fragile social bonds become in a time of hyperconnection and automation, through Iron Skulls' theatrical breaking.

The show premiered on 16 May 2025 at Umore Azoka in Leioa, and it is designed for theatres, public spaces and unconventional venues. For the robot, that means it has to perform reliably wherever the show goes, and react to the dancers in real time.

## A controller built for the stage

The Unitree Go2 is designed to be driven from its own app and remote. However, a show needs more: precise, repeatable control, with every setting within reach, and a way to stop if anything goes wrong. With those requirements, we decided to write our own control system based on multi-node message buses, for controlling the robot from two different sources, and a centralised high-speed control interface. The main features are:

+ **Direct wireless link.** The main computer talks to the robot over the local network using WebRTC, through the open-source [go2_webrtc_connect](https://github.com/legion1581/go2_webrtc_connect) driver, and reads its state back: mode, posture and foot sensors.
+ **One message bus.** Every input device is a small bridge that publishes commands over MQTT. A single dispatcher sends them to the robot, so devices can be added or swapped without touching the rest.
+ **Game controller for easy-to-use movement commands.** The game controller drives the dog's steps, strafing and turns, or tilts its body (roll, pitch, yaw).
+ **MIDI controller for preset commands.** An Akai APC mini mk2 provides access to the robot's tricks and moves on its pads. In addition, the faders set body height, step height, speaker volume, LED brightness and how far and fast the sticks can push the robot. The pad lights show the robot's current state and mode, so the operator can read it at a glance.
+ **Safety first.** A dedicated button stops the robot at any moment, and another brings it back to a balanced stand.

## Record, edit, replay

Some moments in the show need to be exactly the same every night. The operator can record a sequence of commands straight from the controllers, with its timing and an optional music track, and replay it later from a single pad, with an optional preview mode. A small desktop editor lets the team edit each recording's details.

The system also has a dry-run mode, to rehearse the controls without the robot, and tools to play sounds on the robot's own speaker. We are also experimenting with turning the robot's foot sensors into MIDI notes, so that its steps can trigger sound.

## Open source

The code is published under the GPL-3.0 licence on GitHub:
- [iron-skulls-dog](https://github.com/oscgonfer/iron-skulls-dog)
