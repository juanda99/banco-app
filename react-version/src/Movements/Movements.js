import './Movements.css'
import Movements from './Movement'

function Movements({ movements }) {
  return (
    <div className="movements">
      {movements.map((movements, index) => (
        <Movement position={index} amount={movement} />
      ))}
    </div>
  )
}

export default Movements
