import './Contacto.scss'

const Contacto = () => {
  return (
    <>
      <main className="contenedor">
        <div className="servicio">
          <h2 className="servicio__titulo">SERVICIO AL CLIENTE</h2>
          <p className="servicio__info">Servicio disponible de Lun - Vie: 9:00 AM a 9:00 PM y Sab - Dom: 10:00 AM a 6:00 PM</p>
        </div>
        <nav className="phone">
          <a href="#" className="phone"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" /></svg>+54 9 264-7663254</a>
        </nav>
        <div className="form" />
        <h3 className="form__h3">CONTACTANOS</h3>
        <form action="" method='POST'> 
         <label htmlFor="nombre" className="form__name">Nombre y Apellido</label><br />
        <input type="text" id="nombre" name="nombre" className="form__input" /><br />

        <label htmlFor="email" className="form__email">Email</label><br />
        <input type="email" id="email" name="email" className="form__input" /><br />

        <label htmlFor="telefono" className="form__telefono">Telefono</label><br />
        <input type="number" id="telefono" name="telefono" className="form__input" /><br/>

          <label htmlFor="comentarios" className="form__comentarios">Comentarios</label><br/>
            <textarea id="comentarios" name="comentarios" rows="4" cols="50" className="form__textarea"></textarea><br/>

              <div>
                <button className="button">ENVIAR</button>
              </div>
              </form>      
      </main>
        </>
  )
}

export default Contacto