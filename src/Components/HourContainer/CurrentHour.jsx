import { getCurrentHour } from "../../functions.js";
import { useState } from "react";

const CurrentHour = () => {
  const [hour, setHour] = useState("");

  setInterval(() => {
    setHour(getCurrentHour());
  }, 1000);

  return (
    <>
      <span className="hour">{hour}</span>
    </>
  );
};

export default CurrentHour;
