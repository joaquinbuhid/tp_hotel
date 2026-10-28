import { useState } from "react";

function Contact() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>📍 Calle Falsa 123 · 📞 (0387) 123-4567 · ✉️ info@hotelsol.com</p>

      <form onSubmit={handleSubmit}>
        <input placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" rows="4" required></textarea>
        <button type="submit">Enviar</button>
      </form>

      {enviado && <p>¡Gracias! Te responderemos pronto.</p>}
    </section>
  );
}

export default Contact;
