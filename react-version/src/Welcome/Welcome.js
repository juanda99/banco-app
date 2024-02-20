import './Welcome.css'

function Welcome({ user }) {
  //const { user } = props
  const name = user.split(' ')[0]
  return (
    <>
      <p className="welcome">
        {user ? `Bienvenido ${name}` : `Log in to get started`}
      </p>
      <img src="logo.png" alt="Logo" className="logo" />
    </>
  )
}
export default Welcome
