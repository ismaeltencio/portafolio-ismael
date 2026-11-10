const experiences = [
  {
    company: 'HCLTech',
    role: 'QA Tester - Xbox Titles',
    period: '08/25 - 07/26',
    description: [
      'Executed test cases to ensure Xbox games met functionality and performance standards.',
      'Identified and reported bugs, including detailed reproduction steps and severity levels.',
      'Prepared and delivered daily bug reports to developers to support timely issue resolution.',
      'Worked closely with development teams to verify fixes in subsequent builds.'
    ]
  },
  {
    company: 'Infinite Computer Solutions',
    role: 'Software developer ',
    period: '04/23 - 09/24',
    description: [
      'Developed custom tools and features for the financial sector using .NET and JavaScript within the Architect application.',
      'Managed end-to-end development lifecycle,  from requirements analysis and solution design to development, testing and deployment.',
      'Provided reliable solutions and technical support to ensure client needs were properly addressed.'
    ]
  },
  {
    company: 'First Factory',
    role: 'Desarrollador Fullstack Junior (React)',
    period: '02/22 - 11/22',
    description: [
      'Developed an internal application for advertising data analysis using JavaScript and React for the frontend, alongside backend technologies.',
      'Designed and implemented data processing pipelines to transform raw API that provided advertising reach and performance metrics across various platforms data into structured, actionable insights.',
      'Measured audience engagement per platform and generated dynamic charts and visualizations to support strategic business decision-making.'
    ]
  },
  {
    company: 'TekExperts',
    role: 'Ingeniero de Soporte Técnico (Nivel 1 y Stage 2)',
    period: '04/18 - 09/21',
    description: [
      'Delivered global technical support for Microfocus UCMDB (Level 1) and Microsoft Azure App Services (Stage 2).',
      'Diagnosed and resolved complex issues via remote sessions, log analysis, and troubleshooting methodologies.',
      'Colaboré con equipos internos para escalar y documentar problemas recurrentes.',
      'Assisted enterprise clients with web apps and function apps hosted on Azure, ensuring timely resolution and high satisfaction.'
    ]
  }
];

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
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