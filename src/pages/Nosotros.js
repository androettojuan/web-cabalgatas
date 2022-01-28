import React from "react";
import Cabecera from "../components/cabecera/Cabecera";
import Txtfotos from "../components/content-txt-fotos/Txtfotos";
import Content from "../components/Content/Content";
import Piepagina from "../components/pie-pagina/Piepagina";

const Nosotros = () => {
  return (
    <div>
      <Cabecera></Cabecera>      
      <Content imagen="img/Nosotros2.png"></Content>
      <Txtfotos></Txtfotos>
      <Piepagina></Piepagina>
    </div>
  );
};

export default Nosotros;
