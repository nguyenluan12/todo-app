
"use client";

import { useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

export default function AnalogClock() {
  const [value, setValue] = useState(new Date());

  // Cập nhật mỗi giây
  setInterval(() => setValue(new Date()), 1000);

  return (
    <div className="flex justify-center items-center py-18">
      <Clock
        value={value}
        size={200}
        renderNumbers={true}
        hourMarksWidth={3}
        minuteMarksWidth={1}
        hourHandWidth={6}
        minuteHandWidth={4}
        secondHandWidth={2}
        secondHandLength={90}
        className="rounded-full shadow-lg"
      />
    </div>
  );
}
