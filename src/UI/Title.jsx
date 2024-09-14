import { NavLink } from "react-router-dom";

function Title() {
  return (
    <div>
      <h1>My-Big-Project</h1>
      <p>لطفا زبان مورد نظر خود را انتخاب کنید</p>
      <p>Please choose your language</p>
      <NavLink to="/parsian"> فارسی </NavLink>
      <NavLink to="/english" > English </NavLink>  
    </div>
  );
}

export default Title;
