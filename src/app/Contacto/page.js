"use client";
import React from 'react';
import Input from "../componente/Input/index.jsx";
import Button from "../componente/button_form/index.jsx";
import styles from "../styles/page.module.css";

const Page = (props) => {
  return (
    <div className={styles.section} id="mod6">
      <div className={styles.containerNarrow}>
        <h2 className={styles.markermodu4}>Contacto</h2>
        <div className="row">
          <div className="col-md-6" data-aos="zoom-in" data-aos-delay="100">
            <div className={`${styles.bgLight} my-2 p-3 pt-2`}>
              <form method="POST" className='formConta'>
                <div className={styles.inputContainer}>
                  <label>Email</label>
                  <Input type="text" placeholder="Ingrese su email" />
                </div>
                <div className={styles.inputContainer}>
                  <label>Asunto</label>
                  <Input type="text" placeholder="Ingrese el asunto" />
                </div>
                <div className={styles.inputContainer}>
                  <label>Mensaje</label>
                  <textarea className={styles.textarea} ></textarea>
                </div>
                <Button className={styles.button}>Enviar</Button>
              </form>
            </div>
          </div>
          <div className="col-md-6" data-aos="fade-left" data-aos-delay="300">
            <div>
              <h5 className={styles.h5}>Sigamos en contacto!</h5>
              <p>Comunícate con nosotros a través del formulario.</p>
              <p>¡Gracias por visitar nuestro sitio web!</p>
            </div>
            <div>
              <div className="row">
                <div className="col-sm-10">
                  <div className={styles.fwBolder}>yaesaroka@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
