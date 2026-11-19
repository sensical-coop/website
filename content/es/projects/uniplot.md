---
title: "UniPlot: gestión de un software de análisis de datos de ingeniería"
seoTitle: "UniPlot: gestión de producto de software de ingeniería | Sensical"
description: "Gestión de producto, integraciones y flujos de datos para UniPlot, una aplicación de análisis, gráficos e informes para ingenieros de ensayo y simulación."
draft: false
featured: true
weight: 6
translationKey: uniplot
heroHeading: "UniPlot"
heroSubHeading: "Gestión de producto de un software de análisis de datos para ingenieros de ensayo y simulación"
client: "ENORISE"
year: "2020–2026"
services:
- engineeringproductmanagement
- engineeringdataworkflows
- engineeringsoftwareintegration
related_projects:
- emissioncomputation
labels:
- "Software de ingeniería"
- "Gestión de producto"
- "Datos de ensayo"
image: "/images/projects/uniplot/engine-map-es.png"
# The cover is a plot on white: keep the plain black banner
heroImage: false
---

[UniPlot](https://www.uniplot.com) es una aplicación para Windows que sirve para visualizar, analizar y generar informes de datos de ingeniería. Los ingenieros de banco de ensayo y de simulación la utilizan para cargar mediciones de numerosos formatos de archivo y bases de datos, crear diagramas 2D y 3D, calcular nuevos canales y generar informes en PDF, PowerPoint o Word. [Adrien Laveau](/es/acerca-de/#adrien-laveau), cofundador de Sensical, es responsable del desarrollo de UniPlot y de su ecosistema, de la hoja de ruta a la documentación del producto, para su editor, ENORISE.

{{< carousel fit="contain" ratio="4/3" label="UniPlot" >}}
![Dos diagramas de un mapa de rendimiento de un motor en función del régimen y del par: a la izquierda, un mapa de contorno con isolíneas etiquetadas; a la derecha, el mismo mapa como superficie 3D en color](/images/projects/uniplot/engine-map-es.png "Un mapa de rendimiento de un motor como gráfico de contorno y como superficie 3D, creado en UniPlot con datos sintéticos.")
![Diagrama: archivos de medida, bases de datos de ensayo, bancos de ensayo y herramientas de simulación alimentan UniPlot, donde los datos se importan, se calculan con fórmulas, se representan en plantillas y se automatizan en secuencias, para generar informes en PDF, PowerPoint, Word y Excel](/images/projects/uniplot/uniplot-workflow-es.svg "De las fuentes de datos a los informes: el lugar de UniPlot en un flujo de trabajo de ingeniería.")
![Tres gráficos apilados de un trayecto de emisiones en conducción real: velocidad del vehículo, caudal de emisión de NOx y NOx por kilómetro comparado con un límite](/images/projects/emission-computation/rde-trip-es.png "Una evaluación de emisiones creada con UniPlot, con datos sintéticos. Consulta el proyecto de cálculo de emisiones.")
{{< /carousel >}}

## El reto

UniPlot se ha desarrollado a lo largo de muchos años y se utiliza en ámbitos exigentes: ensayos de motores y tren motriz, emisiones, baterías y simulación. Sus usuarios confían en cálculos y plantillas de informe que han ido perfeccionando durante años, y esperan que cada versión los mantenga funcionando. Al mismo tiempo, las peticiones no dejan de llegar: nuevos formatos de datos y protocolos de bus, normativas que cambian la forma de calcular los resultados, integraciones con sistemas de ensayo y herramientas de simulación, e informes específicos para clientes. {{<accent>}}El trabajo consiste en hacer evolucionar un producto profundo y de larga vida sin romper aquello de lo que dependen los ingenieros.{{</accent>}}

## Qué hacemos

+ **Hoja de ruta y versiones**: recoger las peticiones de usuarios, soporte y socios, priorizarlas, especificar las funcionalidades con criterios de aceptación y preparar las versiones con el equipo de desarrollo.
+ **De peticiones a medida a funcionalidades del producto**: decidir qué peticiones de clientes se convierten en funcionalidades del producto base, en add-ins con licencia propia o en scripts de proyecto, y repartirlas en paquetes de trabajo.
+ **Add-ins especializados**: responsabilidad de producto de add-ins para tareas de ingeniería concretas, como el add-in de [cálculo de emisiones](/es/proyectos/calculo-emisiones/).
+ **Integraciones**: conceptos y requisitos para conectar UniPlot con sistemas de automatización de ensayos, con software de simulación usado como fuente de datos y con bases de datos de ensayo ASAM ODS, mediante flujos de lanzamiento, línea de comandos y URL, COM y secuencias de análisis reutilizables.
+ **Flujos de trabajo de clientes**: estudiar cómo evalúan sus datos los equipos de ingeniería, a menudo en hojas de cálculo, y reconstruir esa evaluación como bibliotecas de fórmulas, plantillas de informe y secuencias automatizadas, validadas con sus resultados anteriores.
+ **Licencias y despliegue**: trasladar los modelos de licencia del producto a un comportamiento del software y un despliegue que los administradores puedan gestionar, coherentes con las condiciones de licencia.
+ **Soporte y calidad**: indicadores para el servicio de soporte y el backlog, y análisis de las consultas de los usuarios con los desarrolladores.
+ **Documentación y difusión**: documentación, cursos de formación, vídeos, webinars, ferias, folletos y la renovación de la web del producto.

## Decisiones técnicas clave

+ **Automatización mediante secuencias, no solo scripts.** Una secuencia de pasos de análisis reutilizables, lanzada desde otra aplicación o desde la línea de comandos, permite a un ingeniero automatizar un informe sin escribir código, y a los socios integrar UniPlot sin desarrollar un plugin complejo.
+ **Conservar los cálculos del ingeniero.** Cuando un equipo pasa a UniPlot, primero se reproducen sus fórmulas y formatos de informe existentes y se validan con los resultados anteriores, antes de mejorar nada.
+ **Reglas como datos.** Cuando los cálculos siguen reglas externas, como las normativas de emisiones, esas reglas se guardan en tablas editables para poder actualizarlas sin publicar una nueva versión del software.

## Lo que demuestra

Los años de trabajo en UniPlot son la base de nuestros servicios de [gestión de producto](/es/servicios/gestion-producto-software-ingenieria/), [flujos de datos de ingeniería](/es/servicios/flujos-datos-ingenieria/) e [integración de software](/es/servicios/integracion-software-ingenieria/): sabemos cómo trabajan los ingenieros con sus datos y cómo convertir eso en software en el que puedan confiar.

## Contacto

Para hablar de tu software de ingeniería o de tu flujo de datos, escríbenos a [info@sensical.es](mailto:info@sensical.es).
