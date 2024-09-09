"use client";
import React, { useState } from 'react';

function CrearCita({ onAgregarTarjeta }) {
  const handleSUbmit = (e) => {
    e.preventDefault();
    const fechaActual = new Date();
    const datos = new FormData(e.target);
    const fechaSeleccionada = new Date(datos.get("fecha"));

    if (fechaSeleccionada < fechaActual) {
      alert("La fecha seleccionada no puede ser anterior a la fecha actual.");
      return;
    }
    const horaSeleccionada = datos.get("hora");
    const horaMinima = 9;
    const horaMaxima = 20;
    const hora = parseInt(horaSeleccionada.split(":")[0]);

    if (hora < horaMinima || hora > horaMaxima) {
      alert("La hora seleccionada debe estar entre las 9:00 AM y las 8:00 PM.");
      return;
    }
    const nuevaCita = {
      mascota: datos.get("mascota"),
      propietario: datos.get("propietario"),
      fecha: datos.get("fecha"),
      hora: datos.get("hora"),
      sintomas: datos.get("sintomas"),
    };
    console.log(nuevaCita);
    onAgregarTarjeta(nuevaCita);
    console.log("enviando");
  };

  return (
    <div className="one-half column">
      <h2 id="titulo_for">Crear mi Cita</h2>
      <hr></hr>
      <form className="asd" onSubmit={handleSUbmit}>
        <label>Nombre Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre Mascota"
          id="mascota"
          required
        />
        <label>Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre dueño de la mascota" required
        />
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width" required />
        <label>Hora</label>
        <input type="time" name="hora" className="u-full-width" required />
        <label>Síntomas</label>
        <textarea name="sintomas" className="u-full-width" required></textarea>
        <button type="submit" className="hola u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default CrearCita;
