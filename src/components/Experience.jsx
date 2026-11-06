const experiences = [
  {
    company: 'HCLTech',
    role: 'QA Tester - Xbox Game Titles',
    period: '08/25 - 07/26',
    description: [
      'Ejecuté casos de prueba para asegurar que los juegos de Xbox cumplieran estándares de funcionalidad y rendimiento.',
      'Identifiqué y reporté bugs con pasos detallados de reproducción y niveles de severidad.',
      'Preparé y entregué reportes diarios de bugs a los desarrolladores.',
      'Trabajé con equipos de desarrollo para verificar correcciones en builds posteriores.'
    ]
  },
  {
    company: 'Infinite Computer Solutions',
    role: 'Arquitecto / Desarrollador de Software',
    period: '04/23 - 09/24',
    description: [
      'Desarrollé herramientas y funcionalidades personalizadas para el sector financiero usando .NET y JavaScript en la aplicación Architect.',
      'Gestioné el ciclo completo de desarrollo: análisis de requisitos, diseño, desarrollo, pruebas y despliegue.',
      'Brindé soluciones confiables y soporte técnico para asegurar la satisfacción del cliente.'
    ]
  },
  {
    company: 'First Factory',
    role: 'Desarrollador Fullstack Junior (React)',
    period: '02/22 - 11/22',
    description: [
      'Desarrollé una aplicación interna para análisis de datos publicitarios usando JavaScript y React en el frontend.',
      'Diseñé e implementé pipelines de procesamiento de datos para transformar datos crudos de APIs en información estructurada.',
      'Generé gráficos dinámicos y visualizaciones para apoyar la toma de decisiones estratégicas.'
    ]
  },
  {
    company: 'TekExperts',
    role: 'Ingeniero de Soporte Técnico (Nivel 1 y Stage 2)',
    period: '04/18 - 09/21',
    description: [
      'Brindé soporte técnico global para Microfocus UCMDB (Nivel 1) y Microsoft Azure App Services (Stage 2).',
      'Diagnostiqué y resolví problemas complejos mediante sesiones remotas, análisis de logs y metodologías de troubleshooting.',
      'Colaboré con equipos internos para escalar y documentar problemas recurrentes.'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experiencia</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <h4>{exp.company} | {exp.period}</h4>
            <ul>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;