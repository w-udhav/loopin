import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function Sidebar({ className = "" }) {
  const [dates, setDates] = useState([
    {
      date: new Date().toISOString().split("T")[0],
      isToday: true,
      isTomorrow: false,
      weekday: new Date().toLocaleString("default", { weekday: "long" }),
    },
  ]);
  const location = useLocation();

  const sevenDatesIncludingTomorrow = () => {
    const date = new Date();
    const dates = []; // [{date, isToday: true, isTomorrow: false, weekday: "Monday"}]
    for (let i = 5; i >= -1; i--) {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - i);
      dates.push({
        date: newDate.toLocaleDateString("en-CA"),
        isToday: i === 0,
        isTomorrow: i === -1,
        weekday: newDate.toLocaleString("default", { weekday: "long" }),
      });
    }
    setDates(dates);
  };

  function formatDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    sevenDatesIncludingTomorrow();
  }, []);

  return (
    <div className={twMerge(className, "flex flex-col px-10 py-8")}>
      <h1 className="font-bold text-2xl">L</h1>
      <div className="mt-28 flex flex-col">
        {dates &&
          dates.map((date, index) => (
            <Link
              to={date.isToday ? "/today" : `/${date.date}`}
              key={index}
              className={twMerge(
                "flex items-center gap-2 cursor-pointer text-white/45 hover:text-white",
                location.pathname.split("/")[1] === date.date && "text-white",
                date.isToday &&
                  location.pathname.split("/")[1] === "today" &&
                  "text-white"
              )}
            >
              <span className="text- font-semibold">
                {date.isToday
                  ? "Today"
                  : date.isTomorrow
                  ? "Tomorrow"
                  : date.weekday}
              </span>
              <span className="text-sm text-white/20">
                {formatDate(date.date)}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Sidebar;
