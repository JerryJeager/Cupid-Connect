import valAsk from "/gif/val-ask.gif";
// import angryCat from "/images/angry-cat.png";
// import swanLove from "/images/swan-love.jpg";
import cupid from "/cupid.png";
// import birdLove from "/images/bird-love.png";

function App() {
  return (
    <div className="bg-appBg h-screen px-[5%] pt-4">
      <header>
        <h1>
          <img src={cupid} className="w-[80px]" alt="" />
        </h1>
      </header>
      <div className="w-fit mx-auto pt-[5%]">
        <img src={valAsk} className="w-[220px] h-[170px] lg:w-[350px] lg:h-[300px] rounded-lg" alt="" />
      </div>

      <div className="text-white font-bold mt-4 flex gap-8 justify-center">
        <button className="bg-lightGreen p-2 rounded-lg w-[100px] lg:w-[120px]">Yes</button>
        <button className="bg-lightRed p-2 rounded-lg w-[100px] lg:w-[120px]">No</button>
      </div>
      {/* <img src={birdLove} alt="" /> */}
    </div>
  );
}

export default App;
