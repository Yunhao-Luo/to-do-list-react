import { MdWork, MdOutlineFamilyRestroom } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";

const Tag = (props) => {
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

export default Tag;
