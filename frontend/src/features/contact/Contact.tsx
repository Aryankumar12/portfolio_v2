import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-20 max-w-4xl mx-auto">
      <h1 className="text-center text-4xl font-bold py-4">Get In Touch</h1>

      <p className="text-center text-gray-600 mb-12 max-w-md mx-auto">
        Have a question or want to work together? Drop me a message below!
      </p>

      <ContactForm />
    </section>
  );
};

export default Contact;
