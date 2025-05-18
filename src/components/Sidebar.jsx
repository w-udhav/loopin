import { useState } from "react";
import { twMerge } from "tailwind-merge";

function Sidebar({ className = "" }) {
  const [dates, setDates] = useState([
    {
      date: new Date().toISOString().split("T")[0],
      isToday: true,
      weekday: new Date().toLocaleString("default", { weekday: "long" }),
    },
  ]);
  const sevenDatesIncludingTomorrow = () => {
    const date = new Date();
    const dates = [];
    for (let i = 5; i >= 0; i--) {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - i);
      dates.push(newDate.toISOString().split("T")[0]);
      if (i === 0) {
        newDate.setDate(newDate.getDate() + 1);
        dates.push(newDate.toISOString().split("T")[0]);
      }
    }
    console.log(dates);
  };
  return (
    <div className={twMerge(className, "border flex flex-col")}>
      <h1 className="font-bold text-2xl">L</h1>
      <div className="mt-24 flex flex-col gap-1">
        {sevenDatesIncludingTomorrow()}
      </div>
    </div>
  );
}

export default Sidebar;
