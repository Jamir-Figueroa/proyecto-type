
import './App.css'

function App() {


  return (
    <>
  <header> 
    <div > Sistemas de Gestion de ventas</div>
    <img src="/vite.svg" alt="vite logo"/>
  </header>

 <main>
  <aside>
    <nav>
      <ul id="menu_principal">
        <li><a href="/inicio.html"><i className="material-icons-outlined">home</i>Inicio</a></li>
        <li><a href="/Productos.html"><i className="material-icons-outlined">local_grocery_store</i>Productos</a></li>
        <li><a href="/Clientes.html">Clientes</a></li>
        <li><a href="/Ventas.html">Ventas</a></li>
      </ul>
    </nav>
  </aside>

  <section id="contenido">
   <h1>Hola mundo!</h1>
    <p>Este es un ejemplo de una pagina web sencilla.</p>
  </section>

 </main>

    </>
  )
}

export default App
