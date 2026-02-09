import { useState, useEffect } from "react";
import type { Clock } from "../types";

interface Props {
  clock: Clock;
  onDelete: (id: string) => void;
}

export default function WorldClock({ clock, onDelete }: Props) {
  const [time, setTime] = useState<string>("00:00:00");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const cityTime = new Date(utc + clock.timezoneOffset * 3600000);
      const h = String(cityTime.getHours()).padStart(2, "0");
      const m = String(cityTime.getMinutes()).padStart(2, "0");
      const s = String(cityTime.getSeconds()).padStart(2, "0");
      setTime(`${h}:${m}:${s}`);
    };

    updateTime();

    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, [clock.timezoneOffset]);

  return (
    <div className="clock-item">
      <div>
        <div className="clock-header">{clock.name}</div>
        <div className="clock-time">{time}</div>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDelete(clock.id)}
        aria-label="Удалить часы"
      >
        ×
      </button>
    </div>
  );
}
