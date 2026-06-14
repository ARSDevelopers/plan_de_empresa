---
title: 4. Presupuesto y Simulación Financiera
---

# (REESCRIBIR)
# 4. Presupuesto y Simulación de Escenarios

Al tratarse de una primera versión de Moira, nuestro planteamiento financiero es extremadamente prudente. Queremos exprimir cada euro para conseguir el máximo impacto con el mínimo gasto. Al fin y al cabo, al ser un software (SaaS), los costes de producción física son inexistentes, lo que nos da un margen de maniobra brutal para jugar con los números y asegurar que el proyecto no nazca con pérdidas.

---

## 4.1. Presupuesto Operativo y de Marketing (Año 1)

Estimamos una estructura de costes fijos anuales mínima pero realista para dar soporte a la infraestructura y la captación inicial de profesionales.

| Concepto | Detalle Mensual / Anual | Coste Anual (€) |
| :--- | :--- | :--- |
| **Infraestructura Cloud** | Servidores, base de datos cifrada y hosting (ej. Firebase/AWS) | 240 € |
| **Herramientas y Dominio** | Dominio .com, correos corporativos y licencias de diseño | 180 € |
| **Marketing Digital** | Campañas muy dirigidas en LinkedIn Ads y folletos interactivos | 600 € |
| **Gastos Administrativos** | Provisiones legales y pasarela de pago (Stripe, coste fijo) | 120 € |
| **Mantenimiento y Soporte** | Pequeños imprevistos o APIs de terceros | 100 € |
| **TOTAL GASTOS FIJOS ANUALES** | | **1.240 €** |

*Nota: Los costes variables de transacción de la pasarela Stripe (aprox. 1.5% + 0.25€ por transacción) se calculan directamente sobre los ingresos de cada escenario.*

---

## 4.2. Simulación de Escenarios de Pérdidas y Ganancias (P&L)

Para entender cuándo Moira empieza a dar dinero y cuál es nuestro riesgo real, proyectamos tres escenarios para los primeros 12 meses de vida comercial. 

Asumimos un ingreso medio por psicólogo de **25 €/mes** netos (promedio ponderado entre las suscripciones mensuales de 29€ y las anuales de 249€). Los pacientes, recordamos, no pagan nada.

### Tabla Comparativa de Escenarios (12 Meses)

| Concepto | Escenario A: Pesimista | Escenario B: Moderado (Objetivo) | Escenario C: Optimista |
| :--- | :--- | :--- | :--- |
| **Psicólogos Activos (Media)** | 5 | 15 | 40 |
| **Pacientes Activos (Media)** | 50 | 150 | 400 |
| **Ingresos Brutos Anuales** | 1.500 € | 4.500 € | 12.000 € |
| **Costes Fijos** | 1.240 € | 1.240 € | 1.500 € *(servidor ampliado)* |
| **Costes Variables (Stripe / APIs)** | 80 € | 220 € | 600 € |
| **Margen Bruto de Contribución** | 180 € | 3.040 € | 9.900 € |
| **Resultado Neto (P&L)** | **+180 €** | **+3.040 €** | **+9.900 €** |
| **Rentabilidad sobre Ventas (%)** | 12 % | 67.5 % | 82.5 % |

---

### Análisis de los resultados de la simulación

#### 1. Escenario Pesimista (Baja Adopción)
¿Qué pasa si las cosas van regular? Si solo conseguimos retener a 5 psicólogos de pago, Moira sigue siendo viable. No perdemos dinero del bolsillo. Con 1.500 € de facturación anual, cubrimos la infraestructura y nos sobra un pequeño colchón de 180 € para renovar licencias de software. El punto de equilibrio (break-even) se sitúa exactamente en **5 psicólogos**. Con esa cifra, el coste del servidor y el dominio quedan pagados.

#### 2. Escenario Moderado (Nuestra Meta)
Este es el objetivo de nuestro plan de marketing. Al captar 15 profesionales activos, los ingresos suben a 4.500 €. Como la infraestructura apenas se resiente por añadir usuarios, los costes fijos se mantienen congelados. El beneficio neto se dispara por encima de los 3.000 €. Esta caja nos permite empezar a pagar a los fundadores o reinvertir en campañas de publicidad más agresivas para el año siguiente.

#### 3. Escenario Optimista (Escalabilidad Fuera del Nicho)
Si la voz se corre y logramos salir a clínicas medianas y terapeutas fuera de la red habitual, alcanzamos los 40 profesionales. Aquí el servidor escala a un plan superior (1.500 € fijos anuales) y los costes variables suben por el volumen de transferencias de datos. Aun así, la rentabilidad roza el 82.5%, generando un beneficio neto de casi 10.000 €. Moira se convierte en un modelo de negocio de alta rentabilidad y escalabilidad limpia.