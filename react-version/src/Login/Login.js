import './Login.css'

function Login() {
  return (
    <form className="login">
      <input
        type="text"
        placeholder="user"
        className="login__input login__input--user"
      />
      <input
        type="text"
        placeholder="PIN"
        maxlength="4"
        className="login__input login__input--pin"
      />
      <button className="login__btn">&rarr;</button>
    </form>
  )
}

export default Login
