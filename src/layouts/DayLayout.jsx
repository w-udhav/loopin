import { Outlet, useParams } from "react-router-dom";

function DayLayout() {
  const { selectedDate } = useParams();
  const date = selectedDate || "today";
  return (
    <div>
      <h1 className="text-2xl font-bold capitalize mb-4">Viewing: {date}</h1>
      <Outlet />
    </div>
  );
}

export default DayLayout;
