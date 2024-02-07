import cupid from "/cupid.png";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-appBg h-screen overflow-x-hidden overflow-y-hidden px-[5%] pt-4">
      <header>
        <h1>
          <Link to="/">
            <img src={cupid} className="w-[80px]" alt="logo" />
          </Link>
        </h1>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
