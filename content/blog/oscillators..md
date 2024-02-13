---
external: false
title: "Osciladores"
date: 2024-02-13
---

**Osciladores Retroalimentados**

El concepto de oscilar hace referencia a vibrar o fluctuar entre dos condiciones o estados. Por lo tanto, oscilación es el acto de cambiar de un estado a otro. Se le conoce como oscilador al instrumento que produce oscilaciones, es decir, genera una forma de onda repetitiva. Este dispositivo tiene muchas áreas de aplicación, como por ejemplo las comunicaciones electrónicas, relojes y circuitos sincronizados.

En términos de electrónica, un oscilador es aquel instrumento o circuito que produce oscilaciones eléctricas, las cuales son cambios repetitivos de voltaje o corriente en forma de onda. Un oscilador es considerado autosostenido o autónomo, si los cambios en la forma de la onda producida son continuos y repetitivos que suceden con una rapidez periódica. Mientras que los osciladores no autosostenidos o con disparo de inicio, requieren señales externas de entrada.

A continuación, se definen varios osciladores autosostenidos, los cuales solo requieren una entrada externa de fuente de voltaje de corriente directa, ya que los osciladores básicamente se encargan de convertir su voltaje de entrada a uno de salida de corriente alterna. Tomando en cuenta que la forma de la onda puede variar, lo importante es que la forma se repita a intervalos periódicos.

**Osciladores retroalimentados**

Es un amplificador que posee un lazo de retroalimentación, es decir, contiene un paso para que la energía se propague desde la salida y regrese a la entrada. Una vez encendido genera una señal de salida de corriente alterna, regresando una pequeña parte de esta a la entrada, donde es amplificada. Esta señal amplificada aparece en la salida, y el proceso es repetido; el proceso fabricado es regenerativo, la entrada depende de la salida y viceversa.

Aplicando el criterio de Barkhausen, para que un circuito retroalimentado sostenga oscilaciones, la ganancia neta de voltaje en torno al lazo de retroalimentación debe ser igual o mayor que la unidad, y el desplazamiento neto de fase en torno al lazo debe ser un múltiplo entero positivo de 360°.

Los 4 requisitos necesarios para que un oscilador retroalimentado funcione serian:

1. Amplificación: El circuito debe tener al menos un dispositivo activo, y debe ser posible amplificar el voltaje.
2. Retroalimentación positiva: Se debe poseer una trayectoria completa para que la señal de salida regrese a la entrada. La señal de retroalimentación debe ser regenerativa, en resumen debe tener la fase y amplitud necesaria para que se sostenga la oscilación, si es insuficiente la amplitud la oscilación se detiene y si es demasiada se satura.
3. Componentes que determinan la frecuencia: Un oscilador debe poseer herramientas que midan la frecuencia, como por ejemplo resistores, capacitores, inductores o cristales que permitan ajustar o cambiar la frecuencia de operación.
4. Fuente de poder. Un oscilador debe tener una fuente de energía eléctrica, que puede ser una fuente de corriente directa.

Un oscilador retroalimentado es un circuito de lazo cerrado formado por un amplificador de voltaje con una ganancia de voltaje de lazo abierto (A), una trayectoria regenerativa que determina la frecuencia con una relación de retroalimentación (B) y un circuito sumador o restador. La ganancia de voltaje de lazo abierto es la ganancia de voltaje del amplificador con la trayectoria de retroalimentación abierta. Se presenta la siguiente figura del modelo eléctrico mencionado

![](/images/Aspose.Words.8ecd33ac-c83b-4789-9101-7ca31da142ae.002.png)

Para que se produzcan las oscilaciones autosostenidas, un circuito debe cumplir con los cuatro requisitos básicos que se describieron anteriormente; y debe apegarse al modelo básico de circuito retroalimentado que se muestra en la figura 1.

**Osciladores no sintonizados**

El oscilador de puente de Wien es un oscilador RC no sintonizado de corrimiento de fase, que usa retroalimentación tanto positiva como negativa. Es un circuito oscilador relativamente estable, de baja frecuencia, que se sintoniza con facilidad, y se suele usar en generadores de señal para producir frecuencias de 5 Hz a 1 MHz. Este circuito oscilador de puente de Wien fue el que utilizó la compañía Hewlett Packard en su diseño original de generador de señales. Se presenta un oscilador con puente de Wein:

![](/images/Aspose.Words.8ecd33ac-c83b-4789-9101-7ca31da142ae.004.jpeg)

**Osciladores sintonizados**

Los osciladores LC son circuitos osciladores que usan circuitos tanque LC para establecer la frecuencia. El funcionamiento de un circuito tanque implica intercambio de energía entre cinética y potencial. Entre estos osciladores LC se encuentran el de Hartley, el Colpitts y el de Clapp.

![](/images/Aspose.Words.8ecd33ac-c83b-4789-9101-7ca31da142ae.006.png)

- **Oscilador de Hartley:** Es un tipo de oscilador de frecuencia variable que es ampliamente utilizado en sistemas de radiofrecuencia y telecomunicaciones. Este oscilador genera una señal sinusoidal, que se utiliza en una variedad de aplicaciones electrónicas, desde sistemas de comunicación inalámbrica hasta sistemas de radar y más.
- **Oscilador Colpitts:** Se caracteriza por tener un par de capacitores en serie y un inductor en paralelo con la combinación de estos capacitores. El valor combinado de estos componentes (los dos capacitores y el inductor) determina la frecuencia de oscilación.
- **Oscilador de Clapp:** Es una mejora del oscilador Colpitts. La distinción clave entre ambos radica en la adición de un condensador en serie con el circuito resonante. Esta adición brinda al oscilador Clapp una mayor estabilidad en la frecuencia de oscilación.
