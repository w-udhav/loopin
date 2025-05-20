import React from "react";
import { useParams } from "react-router-dom";

function DayView() {
  return (
    <div className="grid gap-4">
      <section>
        <h2>Meetings</h2>
        {/* Meeting cards */}
      </section>
      <section>
        <h2>Tasks</h2>
        {/* Task cards */}
      </section>
    </div>
  );
}

export default DayView;
