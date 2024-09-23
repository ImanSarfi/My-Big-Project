import { NavLink, Outlet } from 'react-router-dom';

function Parsian() {
  return (
    <div>
      <p>اینجا بخش پرژه های فارسی است</p>
      <Outlet />
      <NavLink to="/parsian/AboutmeFa"> درباره ما</NavLink>
      <NavLink to="/parsian/flashcartEng"> فلش کارت</NavLink>
    </div>
  );
}

export default Parsian;
