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
      
       <div className="right">
         <h1>Registrarse</h1>
         <form>
           <input
             type="text"
             placeholder="Nombre"
             name="nombre"
             onChange={handleChange}
           />
           <input
             type="text"
             placeholder="Apellido"
             name="apellido"
             onChange={handleChange}
           />
    
           <div class="control-group">
             <label class="form-label fw-bolder d-flex justify-content-start" for="actor_social">Tipo de actor social:</label>
               <div class="controls">
                 <select name="actor_social" id="actor_social" class="form-control form-control-lg fs-6 bg-light">
                   <option value="">Seleccione una opción</option>
                   <option value="organización_personas_discapacidad">Organización de personas con discapacidad</option>
                   <option value="empresas">Empresas</option>
                   <option value="entidades_formación">Entidades de formación</option>
                   <option value="entidad_intermediación_laboral">Entidad de intermediación laboral</option>
                   <option value="entidad_prestadora_servicios">Entidad prestadora de servicios</option>
                   <option value="entidad_territorial">Entidad territorial</option>
                   <option value="academia">Academia</option>
                 </select>
               </div>
           </div>
           <input
             type="text"
             placeholder="Nombre de la entidad"
             name="entidad"
             onChange={handleChange}
           />
           <input
             type="text"
             placeholder="Descripción del perfil"
             name="Dperfil"
             onChange={handleChange}
           />
           <input
             type="text"
             placeholder="Contacto"
             name="contacto"
             onChange={handleChange}
           />
           <input
             type="text"
             placeholder="Ciudad"
             name="Ciudad"
             onChange={handleChange}
           />
           <input
             type="text"
             placeholder="Departamento"
             name="Departamento"
             onChange={handleChange}
           />
           <input
             type="text"
             placeholder="Pais"
             name="Pais"
             onChange={handleChange}
           />


           <div class="control-group" onChange={handleChange}>
             <label class="form-label fw-bolder d-flex justify-content-start" for="Iconocimiento">Intereses de conocimiento:</label>
               <div class="controls">
                 <select name="Iconocimiento" id="Iconocimiento" class="form-control form-control-lg fs-6 bg-light">
                   <option value="">Seleccione una opción</option>
                   <option value="conocimientos">Conocimientos</option>
                   <option value="Bpracticas">Buenas prácticas</option>
                   <option value="Cexitosos">Casos exitosos</option>
                 </select>
               </div>
           </div>
        
           <div class="control-group">
             <label class="form-label fw-bolder d-flex justify-content-start" for="imagen_perfil">Seleccione una foto de perfil:</label>
               <div class="controls">
                 <input type="file" id="imagen_perfil" name="imagen_perfil" placeholder="" class="form-control form-control-lg fs-6 bg-light" onChange={handleChange}/>
               </div>
           </div>
           <input
             type="password"
             placeholder="Contraseña"
             name="password"
             onChange={handleChange}
           />
           {err && err}
           <button onClick={handleClick}>Registrarse</button>
             <span>¿Ya tiene una cuenta?</span>
               <Link to="/login">
               <button>Inicia sesión</button>
               </Link>
         </form>
       </div>
     </div>
   </div>
 );
};


export default Register;
