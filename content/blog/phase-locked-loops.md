---
external: false
title: "Lazos de fase cerrada"
date: 2024-02-13
---

**Lazos de fase cerrada**

El lazo de fase cerrada (PLL, de phase-locked loop) o lazo amarrado por fase se usa en forma extensa en las comunicaciones electrónicas para modulación, demodulación, generación de frecuencia y síntesis de frecuencia. Los PLL se usan tanto en los transmisores como en los receptores, con modulación analógica o digital, y con la transmisión de pulsos digitales. Los lazos de fase cerrada se usaron por primera vez en 1932 para detección síncrona de señales de radio, circuitos de instrumentación y sistemas de telemetría espacial. Sin embargo, se evitó durante muchos años el uso de los PLL por su gran tamaño, complejidad necesaria, banda angosta y costo. Con la entrada de la integración en gran escala los PLL ocupan poco espacio, son fáciles de usar y son más fiables. Por consiguiente, los PLL cambiaron desde una técnica especializada de diseño y ahora son un elemento constructivo universal, con numerosas aplicaciones. Hoy se consigue más de una docena de productos con PLL distintos, de circuito integrado, con varios fabricantes. Algunos de ellos se consideran como circuitos de propósito general adecuados para una multitud de usos, mientras que otros están planeados u optimizados para aplicaciones especiales como detección de tono, decodificación estereofónica y síntesis de frecuencias.

En esencia, un PLL es un sistema de control retroalimentado de lazo cerrado en el que la frecuencia de la señal de voltaje retroalimentada es el parámetro de interés, y no sólo el voltaje. El PLL proporciona una sintonía selectiva y filtrado de frecuencia, sin necesidad de bobinas o de inductores.

**Intervalos de enganche y de captura**

Los dos parámetros de los PLL que indican su intervalo de frecuencia útil son el intervalo de enganche y el intervalo de captura.

- **Intervalo de enganche:** Se define al intervalo de enganche como el margen de frecuencias cercanas a la frecuencia natural del VCO, fn, dentro del cual el PLL puede mantener la sincronización con una señal de entrada. Esto presupone que al principio el PLL estaba sincronizado con la entrada. El intervalo de enganche también se llama intervalo de rastreo. Es el margen de frecuencias dentro del cual el PLL rastrea o sigue con exactitud a la frecuencia de entrada. El intervalo de enganche aumenta cuando aumenta la ganancia general del lazo del PLL (la ganancia se describe en una sección posterior de este capítulo). El intervalo de retención es igual a la mitad del intervalo de enganche, es decir, intervalo de enganche = 2 x intervalo de retención
- **Intervalo de captura:** El intervalo de captura se define como la banda de frecuencias cercanas a fn donde el PLL puede establecer o adquirir enganche con una señal de entrada. El intervalo de captura está, en general, entre 1.1 y 1.7 por la frecuencia natural del VCO. El intervalo de captura también se llama intervalo de adquisición, y se relaciona con el ancho de banda del filtro de paso bajo, o pasabajas. El intervalo de captura de un PLL disminuye cuando se reduce el ancho de banda del filtro. El semiintervalo de captura es el intervalo máximo de captura (es decir, intervalo de captura = 2 semiintervalo de captura)

El intervalo de captura nunca es mayor que, y casi siempre es menor que el intervalo de enganche.
