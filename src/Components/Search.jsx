import React from "react";
import { useSpring, animated } from "@react-spring/web";
import "./Search.css";

function Search() {
  const props = useSpring({
    from: { transform: "translate3d(0, -40px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0px, 0)", opacity: 1 },
    leave: { transform: "translate3d(0, -40px, 0)" },
    config: {
      tension: 150,
      friction: 40,
    },
  });

  return (
    <animated.div style={props}>
      <div className="searchPage">
        <input type="text" placeholder="Search Furnitures" />
      </div>
    </animated.div>
  );
}

export default Search;
