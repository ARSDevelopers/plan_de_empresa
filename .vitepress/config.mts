import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/plan_de_empresa/',
  title: "Plan de empresa",
  description: "Plan de empresa del proyecto Moira",
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' }
    ],

    sidebar: [
      {
        text: 'Plan de Empresa',
        items: [
          { text: '1. Objetivos', link: '/01_objetivos' },
          { text: '2. Estrategia', link: '/02_estrategia' },
          { text: '3. Acciones', link: '/03_acciones' },
          { text: '4. Presupuesto', link: '/04_presupuesto' },
          { text: '5. Control', link: '/05_control' },
          { text: '6. Conclusiones', link: '/06_conclusiones' },
          { text: '7. Anexos', link: '/07_anexos' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Santiagofamo18/plan_de_empresa' }
    ]
  }
})
