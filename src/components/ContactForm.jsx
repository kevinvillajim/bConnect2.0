import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormStatus({
      submitted: false,
      submitting: true,
      error: null
    });
    
    // Simular envío del formulario
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        submitting: false,
        error: null
      });
      
      // Resetear el formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        setFormStatus({
          submitted: false,
          submitting: false,
          error: null
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-card overflow-hidden">
      <div className="p-6 md:p-8">
        <h3 className="text-2xl font-display text-primary-darkBlue mb-6">Contáctanos</h3>
        
        {formStatus.submitted ? (
          <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
            <p className="font-medium">¡Mensaje enviado con éxito!</p>
            <p>Nos pondremos en contacto contigo lo antes posible.</p>
          </div>
        ) : null}
        
        {formStatus.error ? (
          <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
            <p className="font-medium">Ocurrió un error</p>
            <p>{formStatus.error}</p>
          </div>
        ) : null}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors"
              placeholder="Tu nombre"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Correo electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Teléfono *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors"
              placeholder="+593 99 999 9999"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Mensaje *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors"
              placeholder="¿Cómo podemos ayudarte?"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={formStatus.submitting || formStatus.submitted}
            className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors ${
              formStatus.submitting || formStatus.submitted
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary-blue hover:bg-primary-darkBlue"
            }`}
          >
            {formStatus.submitting
              ? "Enviando..."
              : formStatus.submitted
              ? "¡Enviado!"
              : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;