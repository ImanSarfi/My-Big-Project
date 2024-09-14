import { NavLink } from "react-router-dom";

function English() {
  return (
    <div>
      <p>Thise are English project section</p>
      <NavLink to="/aboutmeEng" >AboutME(Bio)</NavLink>
      <NavLink to="/flashcartEng">Flashcart</NavLink>
    </div>
  );
}

export default English;
