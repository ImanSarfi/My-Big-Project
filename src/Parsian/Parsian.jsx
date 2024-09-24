import { NavLink, Outlet } from 'react-router-dom';

function Parsian() {
  return (
    <div>
      <p>اینجا بخش پرژه های فارسی است</p>
      <Outlet />
      <NavLink to="/parsian/AboutmeFa"> درباره ما</NavLink>
      <NavLink to="/parsian/flashcartEng"> فلش کارت</NavLink>
      <NavLink to="/parsian/datecounterFa">روز شمار</NavLink>
      <NavLink to="/parsian/accordionFa">کامپوننت آکاردیون</NavLink>
    </div>
  );
}

export default Parsian;
