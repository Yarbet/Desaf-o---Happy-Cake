const Contact = () => {
  return (
    <div className="contacto-container">
      <h1>Happy Cake</h1>
      <form>
        <label>Correo:</label>
        <input type="email" name="email" />
      </form>

      <div className="descripcion">
        <p>Descripción:</p>
        <textarea name="descripcion" cols="30" rows="10"></textarea>
      </div>
      <div className="button-container"> 
      <button type="submit" className="boton-contacto">Enviar</button>
      </div>
    </div>
  );
};
export default Contact;
