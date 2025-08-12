import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function InPageNavigation({ teams, children }) {
  console.log(children);
  const [index, setIndex] = useState(0);
  const hrRef = useRef();
  const firstBtnRef = useRef();
  function toggle(btn, i) {
    let { offsetWidth, offsetLeft } = btn;
    hrRef.current.style.width = offsetWidth + "px";
    hrRef.current.style.left = offsetLeft + "px";
    setIndex(i);
  }
  useEffect(() => {
    toggle(firstBtnRef.current, 0);
  }, []);

  return (
    <div className="h-full w-full">
      {teams.length > 2 ? (
        <div className="bg-[#0d0d65]  flex items-end py-[12px] px-2 justify-between  sticky top-0 text-[13px] font-semibold md:px-3 md:text-[16px]">
        {teams.map((team, i) => {
          return (
            <Link to={team.sppath}>
                <p
              ref={i == 0 ? firstBtnRef : null}
              key={i}
              className={
                "   px-7 py-[5px] rounded-sm " +
                (index == i ? "text-white" : "text-gray-400")
              }
              onClick={(e) => {
                toggle(e.target, i);
              }}
            >
              {team.title}
            </p>
            </Link>
          
          );
        })}

        <div
          className="bg-white h-[2px]  absolute transition-all ease-in-out duration-500"
          ref={hrRef}
        />
      </div>
      ) : (
        <div className="flex items-end justify-between w-full gap-3 px-3 py-3">
          {teams.map((team, i) => {
            return (
              <button
                ref={i == 0 ? firstBtnRef : null}
                key={i}
                className={
                  "block bg-[#000000d4] w-[30%] py-2  rounded-lg " +
                  (index == i ? "text-white font-medium" : "text-gray-400")
                }
                onClick={(e) => {
                  toggle(e.target, i);
                }}
              >
                {team}
              </button>
            );
          })}

          <div
            className="bg-white h-[2px]  absolute transition-all ease-in-out duration-500"
            ref={hrRef}
          />
        </div>
      )}
      { teams.length==2?children[index]:<></>}
    </div>
  );
}

export default InPageNavigation;
