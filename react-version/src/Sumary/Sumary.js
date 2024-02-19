import './Sumary.css'

function Sumary() {
  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">0000€</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">0000€</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">0000€</p>
      <button className="btn--sort">&#8595; SORT</button>
    </div>
  )
}

export default Sumary
