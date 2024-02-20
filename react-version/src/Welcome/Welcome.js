import './Welcome.css'

function Welcome({ user }) {
  // obtener el nombre del usuario (sin apellido)
  const name = user.split(' ')[0] // "John Doe" -> ["John", "Doe"] -> "John"
  // si el usuario está vacío, mostrar "Log in to get started"
  return (
    <>
      <p className="welcome">
        {user ? `Bienvenido ${name}` : 'Log in to get started'}
      </p>
      <img src="logo.png" alt="Logo" className="logo" />
    </>
  )
}

export default Welcome
