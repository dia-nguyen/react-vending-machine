import { Link } from "react-router-dom";

function Soda(){
  return(
    <div>
      <h2>You got some soda!</h2>
      <Link to="/">Go back to vending machine</Link>
    </div>
  )
}

export default Soda