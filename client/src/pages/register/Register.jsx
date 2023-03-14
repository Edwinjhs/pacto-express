import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data.code);
    }
  };

  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Buckety Social.</h1>

          <span>¿Ya tiene una cuenta?</span>
          <Link to="/login">
            <button>Inicia sesión</button>
          </Link>
        </div>
        <div className="right">
          <h1>Registrarse</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleClick}>Registrarse</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
