import { useState } from "react";


function Contact() {


  const[formData, setFormData]= useState({
    name: '',
    email: '',
    message:''
  });

  const [status, setStatus]= useState ('idle');
  const [errorMsg, setErrorMsg]= useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) =>{
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try{
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok){
        throw new Error(data.error || 'Sending Error');
      }

      setStatus('success');
      setFormData ({name: '', email:'' , message:''});

    }
    catch (err){
      console.error(err);
      setErrorMsg(err.message);
      setStatus('error');
    }

  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p>Interested in my skills? Send me a message!</p>

      <div className="contact-container">
        <div className="contact-info">
        <p>📧 <a href="mailto:ismaentencio@gmail.com">ismaentencio@gmail.com</a></p>
        <p>📱 <a href="tel:+50660588186">+506 6058 8186</a></p>
        <p>📍 Tejar, Cartago, Costa Rica</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            disabled={status === 'loading'}
          />

        </div>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              disabled={status === 'loading'}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project"
              rows="5"
              required
              disabled={status === 'loading'}
            />
          </div>

          <button 
            type="submit"
            className="btn-primary"
            disabled ={status === 'loading'}
          >

          {status === 'loading' ? 'Sending...' : 'Message sended'}

          </button>

          {status === 'success' && (
            <p className="form-success"> Thank you for your message!</p>
          )}
          {status === 'error' && (
            <p className="form-error"> {errorMsg}</p>
          )}

      </form>


      </div>
    </section>
  );
}

export default Contact;