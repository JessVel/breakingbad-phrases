import React, { useState, useEffect } from "react";
import Frase from './componentes/Frase';
import Footer from './componentes/Footer';
import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  flex-direction: column;

`;

const Boton = styled.button`
  background-image: linear-gradient(to left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 100%;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 1rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 1.5px solid #000;
  color: #fff;
  border-radius: 35px;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-image: linear-gradient(to left, #00943e 0%, #00b84c 40%, #04c2ac 100%);
    
  }
`;

function App() {

  //state de frases
  const [ frase, setFrase ] = useState({});

  const consultaAPI = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const response = await api.json();
    setFrase(response[0]);
    
  };

  //cargar una frase
  useEffect( () =>{
    consultaAPI()
  }, []);

  return (
    <>
    <Contenedor>
    <Frase 
    frase={frase}
    />
      <Boton
      onClick={consultaAPI}
      >Obtener Frase</Boton>
    </Contenedor>
    <Footer />
    </>
  );
}

export default App;
