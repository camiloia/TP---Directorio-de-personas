const Input = (props) => {
  return (
    <>
      <label htmlFor={props.titulo} className="form-label fw-bolder">
        {props.titulo}
      </label>
      {props.titulo === "mensaje" ? (
        <textarea
          className="form-control"
          style={{ resize: "none", borderColor: "#46114d" }} // Ajusta el estilo según sea necesario
          id={props.titulo}
          name={props.titulo}
          rows="4"
          required
        ></textarea>
      ) : (
        <input
          className="form-control"
          type="text"
          id={props.titulo}
          name={props.titulo}
          required
          style={{width: "100%", maxWidth: "1500px" }} // Ajusta el estilo según sea necesario
        />
      )}
    </>
  );
};

export default Input;