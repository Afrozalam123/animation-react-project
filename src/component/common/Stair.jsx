import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Stair = ({ pathname }) => {
  const parentRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.set(parentRef.current, { opacity: 1, display: "block" });

    tl.fromTo(
      ".stair",
      { y: "-100%" },
      {
        y: "0%",
        stagger: { amount: 0.4 },
        duration: 0.6,
      }
    );

    tl.to(".stair", {
      y: "100%",
      stagger: { amount: 0.4, from: "end" },
      duration: 0.6,
    });

    tl.set(parentRef.current, { opacity: 0, display: "none" });
  }, [pathname]); // <-- IMPORTANT: animation runs on route change

  return (
    <div
      ref={parentRef}
      className="h-screen w-full fixed top-0 left-0 z-20 pointer-events-none"
    >
      <div className="h-full w-full flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
    </div>
  );
};

export default Stair;
