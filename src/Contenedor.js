import React, { useState } from "react";
import { Formulario } from "./Formulario";
import { TextBox } from "./TextBox";

export const Contenedor = () => {
    const [myInfo, setMyInfo] = useState({});

  const handleSave = (myName, myLastName, myAge, myAdress, myCity, myState, myZip, myEmail) => {
    const newItem = {
      nombre: myName,
      apellido: myLastName,
      edad: myAge,
      direccion: myAdress,
      ciudad: myCity,
      estado: myState,
      zip: myZip,
      email: myEmail,
    };
    setMyInfo(newItem)
  };

  return (
    <div className="contenedor">
      <div className="caja-contenedora">
        <Formulario onSave={handleSave}></Formulario>
        <TextBox dato={myInfo}></TextBox>
      </div>
    </div>
  );
};
