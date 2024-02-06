import cupid from "/cupid.png";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-appBg h-screen px-[5%] pt-4">
      <header>
        <h1>
          <img src={cupid} className="w-[80px]" alt="" />
        </h1>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
