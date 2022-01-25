import React from "react";
import Button from "../components/button/Button";
import Cabecera from "../components/cabecera/Cabecera";
import Content from "../components/Content/Content";

const HomePage = () => {
  return (
    <div>
      <Cabecera>Cabalgata y dias de campo</Cabecera>
      <Content
        title="¿Ya viviste la experiencia?"
        imagen="/img/cabalgata3.jpg"
        video="/videos/cabalgata2.mp4"
      >
        RELAJATE y DISFRUTA. Nosotros te cuidamos Estamos para acompañarte en
        todo momento. Explicando cada Movimiento, cada detalle. Para que te
        sientas seguro y puedas disfrutar al máximo y que sea ésta, una
        #ExperienciaInolvidable
      </Content>
      <Button>CONOCE MAS</Button>

    </div>
  );
};

export default HomePage;
