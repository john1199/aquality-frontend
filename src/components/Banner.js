import React from "react";
import pic02 from "../assets/static/images/pic02.jpg"
import pic15 from "../assets/static/images/pic15.jpg"
import pic10 from "../assets/static/images/pic10.jpg"
import pic12 from "../assets/static/images/pic12.jpg"
export default function Banner() {
  return (
    <>
      <section id="banner">
        <div className="content">
          <header>
            <p>
              Un primer paso para el agua limpia en Colombia.
              <br />
              Da el siguiente. Monitorea en línea una fuente hídrica.
            </p>
          </header>
          <span className="image">
            <img src={pic15} alt="" />
          </span>
        </div>
        <a href="/one" className="goto-next scrolly">
          Next
        </a>
      </section>

      <section id="one" className="spotlight style1 bottom">
        <span className="image fit main">
          <img src={pic02} alt="" />
        </span>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-4 col-12-medium">
                <header>
                  <h2>Crisis de Agua en Colombia</h2>
                  <p>
                    El Estudio Nacional del Agua 2018 evidencia un manejo
                    inadecuado
                  </p>
                </header>
              </div>
              <div className="col-4 col-12-medium">
                <p>
                  En Colombia el cuidado que se da a los recursos hídricos es
                  bajo comparado con otros países que tienen controles estrictos
                  y supervisados de las características físicas y fisicoquímicas
                  del agua.
                </p>
              </div>
              <div className="col-4 col-12-medium">
                <p>
                  Los informes cuatrienales del IDEAM representan un problema en
                  el seguimiento de las características y en la correcta
                  aplicación de las normas colombianas que regulan los
                  vertimientos y el correcto uso del recurso hídrico.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="/two" className="goto-next scrolly">
          Next
        </a>
      </section>

      <section id="two" className="spotlight style2 right">
        <span className="image fit main">
          <img src={pic10} alt="" />
        </span>
        <div className="content">
          <header>
            <h2>Tecnología IoT al Servicio de las Comunidades</h2>
            <p>Un Sistema de Monitoreo En Línea de la Calidad del Agua</p>
          </header>
          <p>
            Teniendo en cuenta la crisis del agua en Colombia y el sexto
            objetivo de desarrollo sostenible, nace la idea de crear una
            herramienta de bajo costo que utiliza internet de las cosas para la
            medición, gestión y control de la calidad del agua en tiempo real.
          </p>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <a href="/three" className="goto-next scrolly">
          Next
        </a>
      </section>

      <section id="three" className="spotlight style3 left">
        <span className="image fit main bottom">
          <img src={pic12} alt="" />
        </span>
        <div className="content">
          <header>
            <h2>¿Cuál es Nuestro Fin?</h2>
            <p>
              Implementar el proyecto conjuntamente con comunidades interesadas
            </p>
          </header>
          <p>
            Un programa pedagógico en el marco de la cuarta revolución
            industrial, buscando co-construir junto a estas comunidades
            circundantes a las fuentes hídricas, a fin de que en la medida de
            pertinencia, se empoderen de estas tecnologías para ejercer un apoyo
            en el bienestar de la hidrología y la salud en el país
          </p>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <a href="/four" className="goto-next scrolly">
          Next
        </a>
      </section>

      <section id="five" className="wrapper style2 special fade">
        <div className="container">
          <header>
            <h2>Únete a esta iniciativa</h2>
            <p>Toma el control de nuestros recursos en tus propias manos</p>
          </header>
          <form method="post" action="#" className="cta">
            <div className="row gtr-uniform gtr-50">
              <div className="col-8 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="col-4 col-12-xsmall">
                <input type="submit" value="Get Started" className="fit primary" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
