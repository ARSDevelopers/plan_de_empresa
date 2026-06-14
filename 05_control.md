---
title: 5. Control
---
# 5. Control y Evaluación

Para no quedarnos solo en buenas intenciones, necesitamos medir qué está pasando con Moira una vez esté en la calle. Un software sin métricas es un barco a la deriva. Nos centraremos en tres bloques clave: indicadores de rendimiento (KPIs), métodos de seguimiento mensual e indicadores de alerta para aplicar medidas correctoras.

---

## 5.1. Indicadores de rendimiento (KPI)

Los datos se recopilan de forma automatizada y anónima a través de nuestra infraestructura, respetando siempre el secreto profesional. 

*   **KPIs de Negocio (SaaS):**
    *   **MRR (Ingresos Mensuales Recurrentes):** Facturación total de suscripciones al mes.
    *   **Churn Rate (Tasa de cancelación):** Porcentaje de psicólogos que dan de baja su suscripción cada mes. 
    *   **LTV (Lifetime Value):** Cuánto dinero nos deja un psicólogo de media antes de darse de baja.
*   **KPIs de Uso Clínico (Adopción):**
    *   **Psicólogos Activos:** Profesionales con suscripción activa que acceden al dashboard al menos una vez por semana.
    *   **Pacientes Vinculados Activos:** Usuarios que registran como mínimo tres estados emocionales o crisis a la semana en la app.
    *   **Ratio Paciente/Terapeuta:** Media de pacientes vinculados por psicólogo (nuestra estimación media es de 10 pacientes por profesional).

---

## 5.2. Métodos de seguimiento

*   **Cierre de mes:** Elaboración de un informe financiero de P&L y métricas SaaS en los primeros 5 días de cada mes.
*   **Telemetría de producto:** Análisis de flujos dentro de la app para detectar en qué pantallas se atascan los pacientes al hacer un registro.
*   **Termómetro de satisfacción:** Envío de una micro-encuesta semestral de usabilidad (Net Promoter Score) tanto a profesionales como a pacientes.

---

## 5.3. Medidas correctoras (Gatillos de acción)

Si las métricas se desvían de los objetivos, no esperaremos a que la caja se vacíe. Activaremos planes de contingencia basados en los siguientes disparadores:

*   **Si la tasa de cancelación (Churn) supera el 8% mensual:**
    *   *Acción:* Contactar directamente con los usuarios y realizar encuestas personalizadas para conocer sus impresiones y ofrecerles soluciones personalizadas.
*   **Si el coste de adquisición (CAC) es superior a los ingresos del primer mes de suscripción:**
    *   *Acción:* Reducir drásticamente el presupuesto en publicidad y aumentar la inversión en marketing de contenidos y eventos.
*   **Si la tasa de actividad del paciente cae por debajo de 2 registros semanales:**
    *   *Acción:* Rediseñar la UX de la app móvil. Menos campos de texto, más iconos intuitivos y notificaciones push tipo recordatorio más amigables.