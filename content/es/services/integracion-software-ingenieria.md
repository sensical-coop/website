---
title: 'Integración de software de ingeniería'
seoTitle: "Integración de software de ingeniería y bases de datos | Sensical"
description: "Conectamos el software de análisis con la automatización de ensayos, la simulación y las bases de datos: sin exportar a mano y con informes automáticos."
draft: false
featured: true
weight: 7
heroHeading: 'Integración de software de ingeniería'
heroSubHeading: ''
section_title: 'Servicios'
translationKey: engineeringsoftwareintegration
labels:
- "Integración"
- "ASAM ODS"
- "Automatización"
related_pages:
- flujos-datos-ingenieria
- gestion-producto-software-ingenieria
- integracion-sensores-meshtastic
---

Los datos de ingeniería rara vez se quedan en una sola aplicación. Los genera un banco de ensayo o una simulación, se almacenan en una base de datos, se analizan en otra herramienta y acaban en un informe. {{< accent >}}Conectamos estas aplicaciones para que los datos circulen sin exportaciones manuales{{< /accent >}}, y diseñamos la integración pensando en el ingeniero que la usará cada día.

{{< alert type="bg-sensical" >}}

### El problema

Sobre el papel, la mayoría de las herramientas de ingeniería pueden intercambiar datos: hay una exportación, una API, una línea de comandos. En la práctica, los ingenieros siguen guardando archivos a mano, renombrándolos, cargándolos en otra herramienta y rehaciendo los mismos gráficos. Una integración que existe pero es incómoda de usar es una integración que nadie usa. Una buena integración parte del flujo de trabajo del usuario y después elige el enlace técnico más sencillo que lo haga posible.

{{</alert>}}

## Qué integramos

+ **Sistemas de automatización de ensayos**: informes generados automáticamente al final de un ensayo, una opción «ver en la herramienta de análisis» en el sistema de ensayo, y resultados y valores clave escritos de vuelta en la plataforma de datos de ensayo.
+ **Software de simulación**: la herramienta de análisis como postprocesador, lanzada desde la interfaz de simulación, con un espacio de trabajo listo para usar que carga los archivos de resultados y ejecuta secuencias de análisis reutilizables.
+ **Bases de datos de ensayo**: navegar, buscar y cargar mediciones de servidores ASAM ODS y openMDM, escribir de vuelta resultados calculados, informes y comentarios, y descargas por lotes para grandes conjuntos de datos.
+ **Scripts y otras aplicaciones**: MATLAB, Python, Excel o herramientas internas que controlan el análisis mediante COM/ActiveX, la línea de comandos o interfaces de scripting.
+ **Formatos de datos**: importadores y exportadores para formatos de medida y simulación como MDF4, HDF5, ATFX, NetCDF, CSV y Excel, y bases de datos SQL.

{{< divider
    image="images/drawings/integration-drawing.svg"
    height="110"
    margin="40vw"
>}}

## Para quién

+ **Editores de software de ingeniería** que quieren que su producto funcione con otro: como fuente de datos, como postprocesador o como paso de generación de informes.
+ **Departamentos de ensayo y simulación** cuyos datos pasan por tres o cuatro aplicaciones antes de convertirse en un resultado.
+ **Equipos que adoptan un sistema de gestión de datos de ensayo** y necesitan que sus herramientas de análisis lean de él y escriban en él.

## Qué ofrecemos

+ Conceptos de integración: el flujo de trabajo del usuario, las opciones técnicas (lanzamiento, intercambio de archivos, COM, línea de comandos, URL, API) y una recomendación
+ Requisitos, diagramas de arquitectura y estimaciones de esfuerzo por paquete de trabajo
+ Implementación de importadores, exportadores, scripts, secuencias y add-ins
+ Cadenas automatizadas de generación de informes, de los datos brutos al PDF o al PowerPoint
+ Espacios de trabajo de demostración, documentación y webinars para la solución conjunta
+ Coordinación entre los equipos y las empresas implicados, incluidas las cuestiones de licencias y despliegue

{{< alert type="border-sensical" >}}

### El mismo problema, a otra escala

Llevar los datos de donde se generan a donde se usan también está en el centro de nuestro trabajo con sensores: de una radio [Meshtastic](/es/servicios/integracion-sensores-meshtastic/) a una base de datos, o de un banco de ensayo a un informe. Las herramientas cambian, pero las preguntas son las mismas: formatos, tiempos, metadatos y qué pasa cuando algo falla.

{{< /alert >}}

## Hablemos

Cuéntanos qué herramientas tienen que atravesar tus datos en [info@sensical.es](mailto:info@sensical.es). Para la parte de producto de una integración, del alcance a la versión, consulta nuestro servicio de [gestión de producto para software de ingeniería](/es/servicios/gestion-producto-software-ingenieria/).
