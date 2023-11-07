import {useForm } from "react-hook-form"
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2"
import "./login.css"

const Login = () => {
  const { login, loginErrors } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (values) => {
      await login(values).then(() => {
          handleLoginSuccess();
      });
  });

  const handleLoginSuccess = () => {
      Swal.fire({
          icon: 'success',
          title: 'Login exitoso!',
          showConfirmButton: true,
      });
      navigate("/");
  };

  return (
      <div className={`backColor5 ${errors ? 'hasErrors' : ''}`}>
        <div className="backOrg5">
          {loginErrors && <div className="errorsDB">{loginErrors}</div>}
          <form onSubmit={onSubmit} className={`formOrg5 ${errors ? 'hasErrors' : ''}`}>
              <label htmlFor="email">Ingresa tu mail</label>
              <input type="email" {...register("email", { required: true })} name="email" id="email" />
              {errors.email && <p className="errors">El email es obligatorio</p>}
              <label htmlFor="password">Ingresa tu contraseña</label>
              <input type="password" {...register("password", { required: true })} name="password" id="password" />
              {errors.password && <p className="errors">La contraseña es obligatoria!</p>}
              <button type="submit" className="button5">Login</button>
          </form>
        </div>
      </div>
  );
}

export default Login;
