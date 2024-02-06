import valAsk from "/gif/val-ask.gif";
import angryCat from "/images/angry-cat.png";
import swanLove from "/images/swan-love.jpg";
import cupid from "/cupid.png";
import birdLove from "/images/bird-love.png";
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
