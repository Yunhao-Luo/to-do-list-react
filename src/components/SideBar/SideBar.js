import "./SideBar.css";
import {
  MdWork,
  MdOutlineFamilyRestroom,
} from "react-icons/md";

import { BsFillPersonFill } from "react-icons/bs"

const SideBar = (props) => {

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

  return (
    <div className="sideMenu">
      <button className="button" onClick={allController}>
        <div>Show All</div>
      </button>
      <button className="button" onClick={todayController}>
        <div>Today</div>
      </button>
      <button className="button" onClick={monthController}>
        <div>This Month</div>
      </button>
      <button className="button" onClick={personalController}>
        <div>{<BsFillPersonFill />} Personal</div>
      </button>
      <button className="button" onClick={workController}>
        <div>{<MdWork />} Work</div>
      </button>
      <button className="button" onClick={familyController}>
        <div>{<MdOutlineFamilyRestroom />} Family</div>
      </button>
    </div>
  );
};

export default SideBar;
