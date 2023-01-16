import React, { useState } from "react";
import "./SideBar.css";
import Time from "./Time";
import Tag from "./Tag";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const SideBar = (props) => {
  const [timeOn, setTimeOn] = useState(true);
  const [tagOn, setTagOn] = useState(true);

  const allController = () => {
    props.onAll();
  };

  const todayController = () => {
    props.onToday();
  };

  const monthController = () => {
    props.onMonth();
  };

  const personalController = () => {
    props.onPersonal();
  };
  const workController = () => {
    props.onWork();
  };
  const familyController = () => {
    props.onFamily();
  };
  const collapseTime = () => {
    setTimeOn(!timeOn);
  };
  const collapseTag = () => {
    setTagOn(!tagOn);
  };

  return (
    <div className="sideBar_inner">
      {timeOn === false && (
        <button className="button__arrow" onClick={collapseTime}>
          {<IoIosArrowForward />}
        </button>
      )}
      {timeOn === true && (
        <button className="button__arrow" onClick={collapseTime}>
          {<IoIosArrowDown />}
        </button>
      )}
      {timeOn === true && (
        <Time
          onAll={allController}
          onMonth={monthController}
          onToday={todayController}
        />
      )}
      {tagOn === false && (
        <button className="button__arrow" onClick={collapseTag}>
          {<IoIosArrowForward />}
        </button>
      )}
      {tagOn === true && (
        <button className="button__arrow" onClick={collapseTag}>
          {<IoIosArrowDown />}
        </button>
      )}
      {tagOn === true && (
        <Tag
          onPersonal={personalController}
          onWork={workController}
          onFamily={familyController}
        />
      )}
    </div>
  );
};

export default SideBar;
