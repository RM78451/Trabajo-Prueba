import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="logo">
          <img src="/img/Logo.png" alt="Logo INSISA" />
          <h1>INSISA</h1>
        </div>

        <div className="container__menu">
          <div className="menu">
            <input type="checkbox" id="check__menu" />
            <label id="lable__check" htmlFor="check__menu">
              <i className="fa-solid fa-bars icon__menu"></i>
            </label>
            <nav>
              <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contactos</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="presentacion">
          <h1>INSISA</h1>
          <h3>Innovación en seguridad integral</h3>
        </div>
        <img src="/img/Logo.png" alt="Logo INSISA" />
      </main>

      <section>
        <div className="nosotros">
          <h1>¿Quienes somos?</h1>
          <p>
            INSISA es una empresa nicaragüense especializada en seguridad integral, con más de una década de experiencia en el sector. Autorizada con la Licencia de Operación A-181, INSISA se destaca por ofrecer soluciones innovadoras y tecnológicas en el ámbito de la seguridad privada. Su misión es proporcionar a los clientes servicios de seguridad integrales y eficientes, demostrando su compromiso con la excelencia en cada aspecto de su trabajo.
          </p>
        </div>
        <img src="/img/nosotros.jpg" alt="Nosotros" />
      </section>

      <div className="servicios">
        <h1>Servicios</h1>
        <div className="terjetas-servicios">
          <div className="tarjeta">
            <h3>Sistemas de videovigilancia y monitoreo</h3>
            <p>
              INSISA podría instalar sistemas de videovigilancia de última tecnología para monitorear y grabar áreas específicas, lo que permite a los clientes tener un control visual en tiempo real de sus instalaciones.
            </p>
          </div>
          <div className="tarjeta">
            <h3>Control de accesos y presencia</h3>
            <p>
              INSISA podría implementar sistemas de control de accesos para regular quién puede entrar a determinadas áreas restringidas dentro de una empresa o residencia.
            </p>
          </div>
          <div className="tarjeta">
            <h3>Consultoría en seguridad</h3>
            <p>
              INSISA podría ofrecer servicios de consultoría en seguridad para evaluar los riesgos existentes en un entorno, proponer medidas preventivas y correctivas, y diseñar planes de seguridad a medida.
            </p>
          </div>
        </div>
      </div>

      <div className="contactos">
        <div className="informacion-contactos">
          <h1>Contáctanos</h1>
          <p>
            ¡Protege lo que más valoras con INSISA, tu aliado en seguridad integral! Contáctanos hoy y descubre cómo podemos resguardar tus activos de manera efectiva y personalizada. ¡Tu tranquilidad es nuestra prioridad!
          </p>
        </div>

        <div className="iconos-contactos">
          <div className="icon-ubicacion">
            <a href="#"><i className="fa-solid fa-location-dot"> <span>Servicios web del PLC</span></i></a>
          </div> 
          <div className="icons-redes">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-youtube"></i></a>
            <a href="#"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
