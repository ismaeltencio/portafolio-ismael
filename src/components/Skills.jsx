const skills = [
  'JavaScript', 'React', 'Transact-SQL', '.NET', 'HTML', 'CSS',
  'Web Services (SOAP, REST)', 'QA Testing', 'Soporte Técnico', 'Atención al Cliente'
];

const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'C1' }
];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Habilidades</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>

      <h3>Idiomas</h3>
      <div className="languages-list">
        {languages.map((lang, index) => (
          <p key={index}><strong>{lang.name}:</strong> {lang.level}</p>
        ))}
      </div>
    </section>
  );
}

export default Skills;