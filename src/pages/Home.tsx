import valAsk from "/gif/val-ask.gif";
import swanLove from "/images/swan-love.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { firstIntroText, wordValentine } from "../data";
import { getRandomRange } from "../helpers";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin();

const Home = () => {
  const navigate = useNavigate();
  const scope = useRef(null);
  const tl = useRef<any>();
  const noBtnRef = useRef(null);
  const { contextSafe } = useGSAP({ scope: scope });

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(".mainTxt1", {
          y: 40,
          opacity: 1,
        })
        .to(".txt1", {
          stagger: 0.1,
          color: "#000",
        })
        .to(".swan", {
          y: 40,
          opacity: 1,
        })
        .to(".val", {
          stagger: 0.2,
          color: "#ff396f",
        })
        .to(".firstContent", {
          visibility: "hidden",
          autoAlpha: 1,
          delay: 1,
        })
        .to(".secondContent", {
          display: "block",
        })
        .to(".txt2", {
          y: 40,
          opacity: 1,
        })
        .to(".askVal", {
          y: 40,
          opacity: 1,
        })
        .to(".answerBtn", {
          y: 40,
          opacity: 1,
        });
    },
    { scope: scope }
  );

  const onHover = contextSafe(() => {
    let h = getRandomRange();
    let w = getRandomRange();
    gsap.to(".noBtn", {
      duration: 0.3,
      ease: "power1.inOut",
      position: "relative",
      yPercent: h,
      xPercent: w,
    });
  });

  return (
    <section ref={scope} className="">
      <div className="hidden secondContent">
        <h2 className="txt2 opacity-0 text-center text-pink italic font-bold  text-lg lg:text-2xl">
          Hey, there's no we without <br /> you and I
        </h2>
        <div className="w-fit mx-auto pt-8">
          <img
            src={valAsk}
            className="w-[220px] h-[170px] lg:w-[350px] lg:h-[300px] rounded-lg askVal opacity-0"
            alt="val-ask-image"
          />
        </div>

        <div
          className=" text-white font-bold mt-4 flex gap-8 justify-center"
        >
          <button onClick={() => navigate("/thank-you")} className="answerBtn opacity-0 z-20 bg-lightGreen p-2 rounded-lg w-[100px] lg:w-[120px]">
            Yes
          </button>
          <button
            ref={noBtnRef}
            onMouseEnter={() => onHover()}
            onClick={() => onHover()}
            className="answerBtn noBtn opacity-0 bg-lightRed p-2 rounded-lg w-[100px] lg:w-[120px]"
          >
            No
          </button>
        </div>
      </div>
      <div className="firstContent block">
        <p className="mainTxt1 font-bold text-white text-lg lg:text-2xl text-center italic opacity-0">
          {firstIntroText.map((t, index) => (
            <span className="txt1" key={index}>
              {t}
            </span>
          ))}
          {wordValentine.map((v, index) => (
            <span className="val" key={index}>
              {v}
            </span>
          ))}
        </p>

        <div className="w-fit mx-auto pt-8 swan opacity-0">
          <img
            src={swanLove}
            alt="swan-love-image"
            className="w-[220px] h-[170px] lg:w-[350px] lg:h-[300px] rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
