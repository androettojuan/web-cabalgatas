import React from "react";
import Button from "../components/button/Button";
import Cabecera from "../components/cabecera/Cabecera";
import Content from "../components/Content/Content";
import Contentvideo from "../components/Content/Content-video";
import Fotos from "../components/Content/Fotos";
import Piepagina from "../components/pie-pagina/Piepagina";

const HomePage = () => {
  return (
    <div>
      <Cabecera>Cabalgata y dias de campo</Cabecera>
      <Content
        title="¿Ya viviste la experiencia?"
        imagen="/img/cabalgata3.jpg"
      ></Content>
      <Contentvideo video="/videos/cabalgata2.mp4">
        {" "}
        RELAJATE y DISFRUTA. Nosotros te cuidamos Estamos para acompañarte en
        todo momento. Explicando cada Movimiento, cada detalle. Para que te
        sientas seguro y puedas disfrutar al máximo y que sea ésta, una
        #ExperienciaInolvidable
      </Contentvideo>
      <a href="/Nosotros">
        <Button>CONOCE MAS</Button>
      </a>
      <Content id="experiencias" title="Experiencias"></Content>
      <Fotos></Fotos>
      <Piepagina></Piepagina>
    </div>
  );
};

export default HomePage;
