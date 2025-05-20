import { Outlet, useParams } from "react-router-dom";
import { useDataStore } from "../store/dataStore";
import { useEffect } from "react";

function DayLayout() {
  const { selectedDate } = useParams();
  const date = selectedDate || "today";
  const setSelectedDate = useDataStore((s) => s.setSelectedDate);

  useEffect(() => {
    setSelectedDate(date);
  }, [date, setSelectedDate]);

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize mb-4">Viewing: {date}</h1>
      <Outlet />
    </div>
  );
}

export default DayLayout;
