---
title: 4. Presupuesto y Simulación Financiera
---

# 4. Presupuesto y Simulación de Escenarios

Al tratarse de una primera versión de Moira, nuestro planteamiento financiero es extremadamente prudente. Queremos exprimir cada euro para conseguir el máximo impacto con el mínimo gasto. Al fin y al cabo, al ser un software (SaaS), los costes de producción física son inexistentes, lo que nos da un margen de maniobra excelente para asegurar la viabilidad del proyecto.

---

## 4.1. Presupuesto Operativo y de Marketing (Año 1)

Estimamos una estructura de costes fijos anuales mínima pero realista para dar soporte a la infraestructura y la captación inicial de profesionales.

| Concepto | Detalle Mensual / Anual | Coste Anual (€) |
| :--- | :--- | :--- |
| **Infraestructura Cloud** | Servidores, base de datos cifrada y hosting (ej. Firebase/AWS) | 240 € |
| **Herramientas y Dominio** | Dominio .com, correos corporativos y licencias de diseño | 180 € |
| **Marketing Orgánico y Material** | Branding, folletos digitales interactivos y promoción de webinars | 600 € |
| **Gastos Administrativos** | Provisiones legales y costes de establecimiento de pasarela | 120 € |
| **Mantenimiento y Soporte** | Pequeños imprevistos o APIs de terceros | 100 € |
| **TOTAL GASTOS FIJOS ANUALES** | | **1.240 €** |

*Nota: Los costes variables de transacción de la pasarela Stripe (1.4% + 0.25€ por transacción en la UE) se aplican directamente sobre los ingresos de cada escenario.*

---

## 4.2. Simulación de Escenarios de Pérdidas y Ganancias (P&L)

Para entender cuándo Moira empieza a dar dinero y cuál es nuestro riesgo real, proyectamos tres escenarios para los primeros 12 meses de vida comercial. 

Asumimos un ingreso medio bruto por psicólogo de **20,90 €/mes** (basado en un mix de 60% de suscripciones anuales equivalent a 15€/mes, 30% de suscripciones mensuales a 20€/mes y 10% del plan clínicas a 59€/mes). Tras restar las comisiones de Stripe, el ingreso medio neto por psicólogo es de **20,49 €/mes**. Los pacientes, recordamos, no pagan nada.

### Tabla Comparativa de Escenarios (12 Meses)

| Concepto | Escenario A: Pesimista | Escenario B: Moderado (Objetivo) | Escenario C: Optimista |
| :--- | :--- | :--- | :--- |
| **Psicólogos Activos (Media)** | 5 | 15 | 40 |
| **Pacientes Activos (Media)** | 50 | 150 | 400 |
| **Ingresos Brutos Anuales** | 1.254 € | 3.762 € | 10.032 € |
| **Costes Fijos** | 1.240 € | 1.240 € | 1.500 € *(servidor ampliado)* |
| **Costes Variables (Stripe / APIs)** | 25 € | 75 € | 200 € |
| **Margen Bruto de Contribución** | -11 € | 2.447 € | 8.332 € |
| **Resultado Neto (P&L)** | **-11 €** | **+2.447 €** | **+8.332 €** |
| **Rentabilidad sobre Ventas (%)** | -0.9 % | 65.0 % | 83.1 % |

---

### Análisis de los resultados de la simulación

#### 1. Escenario Pesimista (Baja Adopción)
Si solo conseguimos retener a 5 psicólogos de pago, Moira registra una pequeña pérdida de -11 € anuales (prácticamente cubriendo el 100% de la infraestructura). El punto de equilibrio (break-even) real se sitúa en **6 psicólogos activos**. A partir de esa cifra, la facturación cubre todos los gastos operativos del año.

#### 2. Escenario Moderado (Nuestra Meta)
Este es el objetivo de nuestro plan de marketing. Al captar 15 profesionales activos, los ingresos netos suben a 3.762 € y los costes fijos se mantienen estables. El beneficio neto se sitúa en **2.447 €** anuales (65% de rentabilidad). Esta caja nos permite financiar mejoras del software o invertir de forma controlada en captación directa.

#### 3. Escenario Optimista (Escalabilidad de la Plataforma)
Si logramos captar clínicas medianas y terapeutas fuera del núcleo inicial, alcanzamos los 40 profesionales. Aquí el servidor escala a un plan superior (1.500 € fijos anuales) y los costes variables suben por comisiones. El beneficio neto asciende a **8.332 €**, lo que demuestra la alta rentabilidad y escalabilidad limpia del software B2B.