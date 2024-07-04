

const Contact = () => {
  return (
    <section className="contact" data-page="contact">

      <header>
        <h2 className="h2 article-title">Contato</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d117599.24679476452!2d-43.8448059!3d-22.914239!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1720053486745!5m2!1spt-BR!2sbr"  width="400" height="300" loading="lazy" title="Google Map"></iframe>
        
        </figure>
       
      </section>

      <section className="contact-form">

        <h3 className="h3 form-title">Deixe sua Mensagem</h3>

        <form action="#" className="form" data-form>

          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Nome completo" required data-form-input />

            <input type="email" name="email" className="form-input" placeholder="Email endereço" required data-form-input />
          </div>

          <textarea name="message" className="form-input" placeholder="Sua Mensagem" required data-form-input></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Enviar Mensagem</span>
          </button>
          
        </form>
      
      </section>

    </section>
  );
};

export default Contact;
