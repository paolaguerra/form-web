import React from "react";
import PropTypes from "prop-types";

export const TextBox = (props) => {
  return (
    <div className="textbox">
    <h1 className="titulo-preview">Vista Previa</h1>
      <div className="div-name">
        <p className="nombre-form-a">
          <b>Nombre:&nbsp;</b>
        </p>
        <p className="nombre-form-b">{props.dato.nombre}</p>
      </div>

      <div className="div-apellido">
        <p className="apellido-form-a">
          <b>Apellido:&nbsp;</b>
        </p>
        <p className="apellido-form-b">{props.dato.apellido}</p>
      </div>

      <div className="div-edad">
        <p className="edad-form-a">
          <b>Edad:&nbsp;</b>
        </p>
        <p className="edad-form-b">{props.dato.edad}</p>
      </div>

      <div className="div-direc">
        <p className="direc-form-a">
          <b>Dirección:&nbsp;</b>
        </p>
        <p className="direc-form-b">{props.dato.direccion}</p>
      </div>

      <div className="div-ciudad">
        <p className="ciudad-form-a">
          <b>Estado:&nbsp;</b>
        </p>
        <p className="ciudad-form-b">{props.dato.ciudad}</p>
      </div>

      <div className="div-estado">
        <p className="estado-form-a">
          <b>Ciudad:&nbsp;</b>
        </p>
        <p className="estado-form-b">{props.dato.estado}</p>
      </div>

      <div className="div-zip">
        <p className="zip-form-a">
          <b>Codigo Postal:&nbsp;</b>
        </p>
        <p className="zip-form-b">{props.dato.zip}</p>
      </div>

      <div className="div-email">
        <p className="email-form-a">
          <b>E-mail:&nbsp;</b>
        </p>
        <p className="email-form-b">{props.dato.email}</p>
      </div>
      <button className="guardar">
          Guardar
        </button>
    </div>
  );
};

TextBox.propTypes = {
  dato: PropTypes.shape({
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    edad: PropTypes.string,
    direccion: PropTypes.string,
    ciudad: PropTypes.string,
    estado: PropTypes.string,
    zip: PropTypes.string,  
    email: PropTypes.string,
  }),
};
