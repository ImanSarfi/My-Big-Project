import { NavLink, Outlet } from 'react-router-dom';

function English() {
  return (
    <div>
      <p>Thise are English project section</p>
      <Outlet />
      <NavLink to="/english/flashcartEng">FlashCart</NavLink>
      <NavLink to="/english/aboutmeEng">AboutMe</NavLink>
      <NavLink to="/english/datecounterEng">Date Counter</NavLink>
      <NavLink to="/english/accordionEng">Acordion Component</NavLink>
    </div>
  );
}

export default English;
