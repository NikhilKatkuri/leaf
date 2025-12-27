const TrafficLight = () => {
  return (
    <div className="flex items-center space-x-1">
      <button
        aria-label="Close Window"
        title="Close Window"
        className="traffic traffic-red"
      ></button>
      <button
        aria-label="Minimize Window "
        title="Minimize Window"
        className="traffic traffic-yellow"
      ></button>
      <button
        aria-label="Maximize Window"
        title="Maximize Window"
        className="traffic traffic-green"
      ></button>
    </div>
  );
};

export default TrafficLight;
