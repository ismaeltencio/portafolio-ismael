const education = [
  {
    institution: 'Universidad Americana (UAM)',
    degree: 'Bachillerato en Ingeniería de Software',
    period: '2022 - En curso'
  },
  {
    institution: 'Colegio Universitario de Cartago',
    degree: 'Diplomado en Tecnología de Información',
    period: '2014 - 2018'
  }
];

function Education() {
  return (
    <section id="education" className="section">
      <h2>Educación</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;