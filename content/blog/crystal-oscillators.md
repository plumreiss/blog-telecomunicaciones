---
external: false
title: "Osciladores de cristal"
date: 2024-02-13
---

**Osciladores de cristal**

Los osciladores de cristal son circuitos osciladores de retroalimentación en los que se sustituye el circuito tanque LC con un cristal, como componente para determinar la frecuencia. El cristal funciona en forma parecida al tanque LC, pero tiene varias ventajas inherentes. A veces, a los cristales se les llama resonadores de cristal, y pueden producir frecuencias precisas y estables para contadores de frecuencia, sistemas de navegación electrónica, radiotransmisores y radiorreceptores, televisiones, grabadoras de video (VCR), relojes para sistemas de cómputo y muchas otras aplicaciones, demasiado numerosas para poder mencionarlas.

La cristalografía es el estudio de la forma, estructura, propiedades y clasificaciones de los cristales. Esta ciencia estudia las redes y los enlaces cristalinos, y el comportamiento de rebanadas de material cristalino, cortadas con diversos ángulos con respecto a los ejes del cristal. Las propiedades mecánicas de las redes cristalinas les permiten mostrar el efecto piezoeléctrico. Las rebanadas de cristales que se han cortado y pulido vibran cuando se aplican voltajes alternos entre sus caras. Las dimensiones físicas de un cristal, en especial su espesor y el lugar y la forma de cortarlo, determinan sus propiedades eléctricas y mecánicas.

**Efecto piezoeléctrico**

El efecto piezoeléctrico se presenta cuando se aplican esfuerzos mecánicos oscilatorios a través de una estructura de red cristalina, y generan oscilaciones eléctricas, y viceversa. El esfuerzo puede tener la forma de compresión, tensión, torsión o cortante. Si el esfuerzo se aplica en forma periódica, el voltaje de salida es alterno. Al revés, cuando se aplica un voltaje alterno a través de un cristal con la frecuencia natural de resonancia, o cerca de ella, el cristal comenzará a oscilar mecánicamente. A este proceso se le llama excitación de vibraciones mecánicas en un cristal. Las vibraciones mecánicas se llaman ondas acústicas en la masa del cristal, y son directamente proporcionales a la amplitud del voltaje aplicado.

Hay varias sustancias cristalinas naturales que tienen propiedades piezoeléctricas: cuarzo, sal de la Rochela (tartrato de potasio y sodio) y la turmalina, así como varias sustancias artificiales, como ADP, EDT y DKT. El efecto piezoeléctrico es más pronunciado en la sal de la Rochela, que por eso es la sustancia que se suele usar en los micrófonos de cristal. Sin embargo, el cuarzo sintético se usa más para control de frecuencia en osciladores, debido a su permanencia, su bajo coeficiente de temperatura y su alta Q mecánica.

**Cortes de cristal**

En la naturaleza, los cristales completos de cuarzo tienen una sección transversal hexagonal, con extremos en punta. Con un cristal se asocian tres conjuntos de ejes: óptico, eléctrico y mecánico. El eje longitudinal que une a las puntas en los extremos del cristal se llama eje óptico o eje Z. Los voltajes eléctricos aplicados en el eje óptico no producen el efecto piezoeléctrico. El eje eléctrico, o eje X, pasa en dirección diagonal, a través de las esquinas opuestas del hexágono. El eje que es perpendicular a las caras es el eje mecánico o eje Y.

![](/images/Aspose.Words.b9707dec-08d5-4273-945d-a5fb83e0d17f.001.jpeg)![](/images/Aspose.Words.b9707dec-08d5-4273-945d-a5fb83e0d17f.002.jpeg)

**Coeficiente de temperatura**

La frecuencia natural de resonancia de un cristal está influida un poco por su temperatura de funcionamiento. La relación de la magnitud del cambio de frecuencia entre el cambio de temperatura se expresa en cambio de hertz por megahertz de frecuencia de operación del cristal, y por grado Celsius. El cambio fraccionario de frecuencia se expresa a menudo en partes por millón por °C. Si la dirección del cambio de frecuencia es igual a la del cambio de temperatura, es decir, que un aumento de temperatura cause un aumento de frecuencia, y que una disminución de temperatura cause una disminución de frecuencia, se llama coeficiente positivo de temperatura, o coeficiente térmico positivo. Si el cambio de frecuencia tiene dirección opuesta a la del cambio de temperatura (un aumento de temperatura causa una disminución de frecuencia y una disminución de temperatura causa un aumento de frecuencia), se llama coeficiente negativo de temperatura.
El coeficiente de temperatura k de un cristal varía, dependiendo del tipo de corte y de la temperatura de operación. Entre las temperaturas aproximadas de +20° C a +50° C, los cristales cortados X y Y tienen un coeficiente de temperatura que es casi constante. Los cristales cortados X son unas 10 veces más estables que los cortados Y. En forma normal, los cristales cortados X tienen un coeficiente de temperatura que va de -10 a -25 Hz/MHz/°C. El coeficiente de temperatura de los cristales cortados Y va de unos -25 hasta unos +100 Hz/MHz/°C.

**Circuitos con oscilador de cristal**

Aunque hay muchas configuraciones de oscilador a base de cristal, las más comunes son las de Pierce, discreta y de circuito integrado, y la de semipuente RLC. Si se necesita una muy buena estabilidad de frecuencia y a la vez un circuito razonablemente sencillo, una buena opción es la discreta de Pierce. Si lo que se busca es bajo costo y posibilidades de interconexión digital sencilla, bastará con un oscilador de Pierce de circuito integrado. Sin embargo, para tener la óptima estabilidad de frecuencia, lo más aconsejable es el semipuente RLC.

**Oscilador discreto de Pierce**

El oscilador discreto de Pierce, de cristal, tiene muchas ventajas. Su frecuencia de funcionamiento abarca todo el intervalo de fundamentales del cristal (de 1 kHz a más o menos 30 MHz). Usa circuitos relativamente sencillos que requieren pocos componentes (la mayoría de las versiones para frecuencia intermedia sólo requieren un transistor). El diseño del oscilador de Pierce produce una gran potencia de señal de salida, y al mismo tiempo disipa muy poca potencia en el cristal mismo. Por último, la estabilidad de frecuencia a corto plazo de este oscilador es excelente, porque la Q cargada en el circuito es casi tan alta como la Q interna del cristal. El único inconveniente del oscilador de Pierce es que requiere un amplificador de alta ganancia, de 70 aproximadamente. En consecuencia, se debe usar un solo transistor de alta ganancia, o quizá hasta uno de varias etapas.
