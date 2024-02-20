import './Movement.css'
function Movement({ position, amount }) {
  const type = amount > 0 ? 'deposit' : 'withdrawal'

  return (
    <div className="movements_row">
      <div className="movements_type movements_type--deposit">
        {position} {type}
      </div>
      <div className="movements_date">3 days ago</div>
      <div className="movements_value">{amount}€</div>
    </div>
  )
}
export default Movement
