import './Balance.css'

function Balance() {
  return (
    <div className="balance">
      <div>
        <p className="balance__label">Current balance</p>
        <p className="balance__date">
          As of <span className="date">05/03/2037</span>
        </p>
      </div>
      <p className="balance__value">0000€</p>
    </div>
  )
}
export default Balance
