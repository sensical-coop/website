---
title: "Cálculo de emisiones: de la legislación a resultados validados"
seoTitle: "Software de cálculo de emisiones y evaluación RDE | Sensical"
description: "Evaluación de emisiones reglamentarias y en conducción real (RDE): análisis normativo, control de datos, correcciones e informes, en un add-in de UniPlot."
draft: false
featured: true
weight: 7
translationKey: emissioncomputation
heroHeading: "Cálculo de emisiones"
heroSubHeading: "Del texto legislativo a resultados de emisiones validados"
client: "ENORISE (add-in de UniPlot)"
year: "2020–2026"
services:
- iotdataworkflows
- engineeringproductmanagement
- environmentaldatacollection
related_projects:
- uniplot
labels:
- "Emisiones"
- "Legislación"
- "Datos de sensores"
image: "/images/projects/emission-computation/rde-trip-es.png"
# The cover is a plot on white: keep the plain black banner
heroImage: false
---

Los vehículos y los motores deben demostrar que sus emisiones se mantienen dentro de los límites legales, en el banco de ensayo y en carretera. El resultado depende de analizadores de gases, caudalímetros y otros sensores, y de una larga cadena de cálculos que la normativa define al detalle. Hemos diseñado un add-in para [UniPlot](/es/proyectos/uniplot/), cuyo desarrollo de producto dirigimos, que convierte esta cadena en una evaluación repetible: {{< accent >}}del texto legislativo a datos verificados, emisiones corregidas y el informe oficial{{< /accent >}}.

{{< carousel fit="contain" ratio="4/3" label="Cálculo de emisiones" >}}
![Tres gráficos apilados de un trayecto de emisiones en conducción real: la velocidad del vehículo en las fases urbana, rural y de autopista, el caudal de emisión de NOx y el NOx por kilómetro, que acaba por debajo de una línea discontinua que marca el límite](/images/projects/emission-computation/rde-trip-es.png "Un trayecto de emisiones en conducción real: velocidad, caudal de emisión de NOx y NOx por kilómetro frente a un límite. Datos sintéticos.")
![Diagrama de la cadena de cálculo: señales de sensores, alineación temporal, control de datos, correcciones, emisiones instantáneas, validez del trayecto, evaluación e informe, con las reglas de la legislación alimentando cada paso](/images/projects/emission-computation/computation-chain-es.svg "La cadena de cálculo. Las reglas de la legislación alimentan cada paso.")
{{< /carousel >}}

## El reto

Las normativas de emisiones son extensas, precisas y distintas de una región a otra, y cambian. Las normas europeas de emisiones en conducción real (RDE), su evolución hacia Euro 7, los procedimientos de la EPA estadounidense y la normativa china definen cada una qué señales se miden, cómo se alinean y se corrigen, cuándo es válido un ensayo y cómo se calcula la cifra final. Los equipos de ensayo suelen implementar estas reglas en hojas de cálculo, un tipo de ensayo tras otro. {{<accent>}}El resultado tiene que ser trazable, idéntico para cada ensayo y rápido de actualizar cuando cambia la normativa.{{</accent>}}

## Análisis de la legislación

Antes de escribir una línea de código, hay que leer la normativa como una especificación. Para cada normativa y cada modificación:

+ **Extraemos los pasos de cálculo**: qué magnitudes se necesitan, en qué unidades y en qué orden se calculan.
+ **Enumeramos los controles de datos**: qué condiciones hacen válida o no válida una medición o un trayecto completo, y cuáles solo amplían o limitan la evaluación.
+ **Identificamos las diferencias**: qué cambia entre regiones, tipos de vehículo y versiones de una misma normativa, para que una sola evaluación pueda cubrirlas todas.
+ **Lo plasmamos en reglas**: el resultado es un conjunto de tablas y casos de prueba que los desarrolladores pueden implementar y los ingenieros pueden contrastar con la normativa.

## De las señales de los sensores a los resultados

El add-in sigue la cadena que describen las normativas:

+ **Datos de sensores**: concentraciones de gases medidas por los analizadores, caudal de escape, datos del vehículo y del motor, posición y condiciones ambientales, cada uno con su propia frecuencia de muestreo y su propio retardo.
+ **Alineación temporal**: las señales se sincronizan, porque un analizador ve el gas unos segundos después de que el motor lo haya producido.
+ **Control de datos**: comprobaciones de deriva y de plausibilidad de los analizadores, datos que faltan y las condiciones de trayecto que fija la normativa.
+ **Correcciones**: conversión de concentraciones en base seca a base húmeda, y el resto de correcciones que exige la normativa.
+ **Emisiones instantáneas y totales**: caudales másicos de emisión de cada contaminante y, después, resultados por trayecto y por fase (urbana, rural, autopista), con el método de evaluación de cada normativa.
+ **Informes**: los resultados, las comprobaciones de validez y los gráficos, en un informe que los ingenieros pueden revisar y conservar.

## Decisiones técnicas clave

+ **Reglas como datos, no como código.** Los parámetros reglamentarios (límites, fronteras entre fases, condiciones) se guardan en tablas editables, de modo que una nueva modificación es sobre todo un cambio de datos, verificado con casos de prueba, y no una nueva versión del software.
+ **Cada paso, a la vista.** Cada canal intermedio está disponible en UniPlot, así que un ingeniero puede ver exactamente de dónde sale un resultado y compararlo con otra herramienta.
+ **Una evaluación para varias normativas.** La cadena común se comparte y las diferencias entre regiones quedan aisladas, lo que mantiene acotadas las actualizaciones para Euro 7, la EPA o China.

## Por qué importa para los sensores

La evaluación de emisiones es procesamiento de datos de sensores con reglas estrictas: retardos, deriva, unidades, muestras que faltan y correcciones deciden si un resultado es fiable. Es la misma disciplina que aplicamos a la [integración de sensores ambientales](/es/servicios/integracion-sensores-ambientales/), con la normativa como referencia.

## Contacto

Para hablar de una evaluación de emisiones, de una normativa que implementar o de una cadena de medida que verificar, escríbenos a [info@sensical.es](mailto:info@sensical.es).
