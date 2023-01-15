const Time = (props) => {
  const allController = () => {
    props.onAll();
  };

  const todayController = () => {
    props.onToday();
  };

  const monthController = () => {
    props.onMonth();
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
    </div>
  );
};

export default Time;
