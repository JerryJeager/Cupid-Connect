import birdLove from "/images/bird-love.png";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
const Thanks = () => {
  const { width, height } = useWindowSize();
  return (
    <>
    <section className="overflow-x-hidden">
      <div className=" block">
        <p className=" font-bold text-pink text-lg lg:text-2xl text-center italic">
          See you on the 14th Babe
        </p>

        <div className="w-fit mx-auto pt-8">
          <img
            src={birdLove}
            alt="bird-love-image"
            className="w-[220px] h-[170px] lg:w-[350px] lg:h-[300px] rounded-lg"
          />
        </div>
      </div>
      <div className="w-fit mx-auto">
       <Confetti width={width - 40} height={height} />
      </div>
    </section>
    <footer className="text-xs absolute bottom-0 left-0">
       <p>made with 💓 by <a className="underline" target="_blank" href="https://x.com/Jerry_Jaeger_">Jeager👨‍🍳</a></p>
    </footer>
    </>
  );
};

export default Thanks;
