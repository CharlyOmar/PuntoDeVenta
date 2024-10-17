import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './imgs/img.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Bienvenido</p>
      </header>
      <body className="App-body">
        <div className="Container Container-img rounded m-4">
          <img src={logo} alt="Imagen de ejemplo" className="img-fluid rounded"/>
        </div>
        <div className="Container Container-login rounded m-4">
          <form className="App-body-form">
            <h1>Iniciar sesión</h1>
            <h3>¡Que bueno verte por aquí!</h3>
            <input className="user form-control" type="text" hint="Ingresa tu usuario"></input>
            <input className="password form-control" type="password" hint="Ingresa tu contraseña"></input>
            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            <a href="http://localhost:3000/">Olvidé mi contraseña :c</a>
          </form>
        </div>
      </body>
      <footer className="App-footer">
        <ul>
          <li><a href="">Acerca de nosotros</a></li>
          <li><a href="">Contactanos</a></li>
          <li><a href="">Términos y privacidad</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
