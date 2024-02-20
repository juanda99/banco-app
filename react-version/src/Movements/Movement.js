import './Movement.css'
function Movement({ position, amount }) {
  const type = amount > 0 ? 'deposit' : 'withdrawal'

  return (
    <div className="movements__row">
      <div className={`movements__type movements__type--${type}`}>
        {position + 1} {type}
      </div>
      <div className="movements__date">3 days ago</div>
      <div className="movements__value">{amount}€</div>
    </div>
  )
}

export default Movement
