"use client";
import React from 'react';
import Personas from '../Personas.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/page.module.css';


export default function Home() {
  var Personas_mayores = [];
  var Personas_minimo = [];
  const personasMayoresDe35 = Personas.filter(persona => {
    const edad = parseInt(persona.edad);
    return !isNaN(edad) && edad > 35;
  });

  const edades = Personas
    .map(persona => parseInt(persona.edad, 10))
    .filter(edad => !isNaN(edad)); 
  const edad_max = edades.length > 0 ? Math.max(...edades) : 0;
  Personas.map((persona, index) => {
    if(parseInt(persona.edad) === edad_max){
      Personas_mayores.push(persona.nombre);
    }
  })
  
  const edad_min = edades.length > 0 ? Math.min(...edades) : 0;
  Personas.map((persona, index) => {
    if(parseInt(persona.edad) === edad_min){
      Personas_minimo.push(persona.nombre);
    }
  })
  const recuento = personasMayoresDe35.length;

  return (
    <main className={styles.main}>
      <h1 className={styles.EST_1}>Estadisticas</h1>
      <hr className={styles.divisorCard}></hr>
      <h1 className={styles.tituloEst}>Listado personas mayores a 35</h1>
      <div className={styles.cardsContainer}>
        {personasMayoresDe35.map((persona, index) => (
          <div key={index} className={styles.card}>
            <h2>{persona.nombre} {persona.apellido}</h2>
            <p>Email: {persona.email}</p>
            <p>Edad: {persona.edad}</p>
          </div>
        ))}
      </div>
      <div className={styles.statsContainer}>
      <h1 className={styles.tituloEstad}>Generales</h1>
     
  <div className={styles.statCard}>
    <h1 className={styles.statTitle}>Total de personas mayores de 35:</h1>
    <p className={styles.statValue}>{recuento}</p>
  </div>
  <div className={styles.statCard}>
    <h2 className={styles.statSubtitle}>Edad máxima entre todas las personas:</h2>
    <p className={styles.statValue}>{edad_max}</p>
  </div>
  <div className={styles.statCard}>
    <h2 className={styles.statSubtitle}>Personas mayores de 35:</h2>
    {Personas_mayores.map((persona, index) => (
        <p key={index} className={styles.statItem}>{persona}</p>
      ))}
  </div>
  <div className={styles.statCard}>
    <h2 className={styles.statSubtitle}>Edad mínima entre todas las personas:</h2>
    <p className={styles.statValue}>{edad_min}</p>
  </div>
  <div className={styles.statCard}>
    <h2 className={styles.statSubtitle}>Personas con edad mínima:</h2>
     
      {Personas_minimo.map((persona, index) => (
        <p key={index} className={styles.statItem}>{persona}</p>
      ))}
    
  </div>
</div>
    </main>
  );
}
