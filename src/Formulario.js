import React, { useState } from "react";

export const Formulario = (props) => {
  const [myName, setMyName] = useState("");
  const [myLastName, setMyLastName] = useState("");
  const [myAge, setMyAge] = useState("");
  const [myAdress, setMyAdress] = useState("");
  const [myCity, setMyCity] = useState("");
  const [myState, setMyState] = useState("");
  const [myZip, setMyZip] = useState("");
  const [myEmail, setMyEmail] = useState("");

  const InputName = (event) => {
    setMyName(event.target.value);
  };

  const InputLastName = (event) => {
    setMyLastName(event.target.value);
  };

  const InputAge = (event) => {
    setMyAge(event.target.value);
  };

  const InputAdress = (event) => {
    setMyAdress(event.target.value);
  };

  const InputState = (event) => {
    setMyState(event.target.value);
  };

  const InputCity = (event) => {
    setMyCity(event.target.value);
  };

  const InputZip = (event) => {
    setMyZip(event.target.value);
  };

  const InputEmail = (event) => {
    setMyEmail(event.target.value);
  };

  const handleSave = (event) => {
    props.onSave(
      myName,
      myLastName,
      myAge,
      myAdress,
      myState,
      myCity,
      myZip,
      myEmail
    );
    setMyName("");
  };

  return (
    <div className="formulario-contenedor">
      <h1 className="titulo-formulario">Formulario</h1>
      <div className="formulario">
        <div className="nombre-cont">
          <p className="nombre-apellido">Nombre</p>
          <input className="nombre" onChange={InputName} value={myName}></input>
        </div>
        <div className="apellido-cont">
          <p className="nombre-apellido">Apellido</p>
          <input
            className="apellido"
            onChange={InputLastName}
            value={myLastName}
          ></input>
        </div>

        <div className="edad-direccion">
          <div className="edad">
            <p className="edad">Edad</p>
            <input className="edad" onChange={InputAge} value={myAge}></input>
          </div>
          <div className="direccion">
            <p className="direccion">Dirección</p>
            <input
              className="direccion"
              onChange={InputAdress}
              value={myAdress}
            ></input>
          </div>
        </div>

        <div className="ciudad-estado">
          <p className="ciudad-estado">Ciudad</p>
          <input className="ciudad" onChange={InputCity} value={myCity}></input>
          <p className="ciudad-estado">Estado</p>
          <input
            className="estado"
            onChange={InputState}
            value={myState}
          ></input>
        </div>

        <div className="zip-email">
          <p className="zip-titulo">Codigo Postal</p>
          <input className="zip" onChange={InputZip} value={myZip}></input>
          <p className="email-titulo">E-mail</p>
          <input
            className="email"
            onChange={InputEmail}
            value={myEmail}
          ></input>
        </div>

        <button className="enviar" onClick={handleSave}>
          Enviar
        </button>
      </div>
    </div>
  );
};
