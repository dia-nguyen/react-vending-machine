import { Link } from "react-router-dom";

function VendingMachine(){
  return(
    <div>
      <div><Link to="/soda">Soda</Link></div>
      <div><Link to="/chips">Chips</Link></div>
      <div><Link to="/sardine">Sardine</Link></div>
    </div>
  )
}

export default VendingMachine