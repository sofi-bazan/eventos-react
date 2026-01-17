import { useState } from "react";
import "./Formulario.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [hover, setHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Email:", email);
  };

  return (
    <>
    <h1>Formulario</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            console.log(e.target.value);
          }}
          onFocus={() => console.log("Campo nombre activo")}
          onBlur={() => console.log("Campo nombre perdió foco")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              console.log("Presionaste Enter en nombre");
            }
          }}
        />
        <input type="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value); console.log(e.target.value);
          }} onFocus={() => console.log("Campo email activo")} onBlur={() => console.log("Campo email perdió foco")}/>
      <button onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ backgroundColor: hover ? "lightblue" : "white", }}>
        Enviar
      </button>
    </form>
    </>
  );
}

export default Formulario;