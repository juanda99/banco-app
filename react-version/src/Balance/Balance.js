import './Balance.css'
function Balance(props) {
  const { movements } = props
  const balance = movements.reduce((acc, mov) => acc + mov, 0)
  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">05/03/2037</span>
        </p>
      </div>
      <p className="balance__value">{balance}€</p>
    </div>
  )
}

export default Balance
