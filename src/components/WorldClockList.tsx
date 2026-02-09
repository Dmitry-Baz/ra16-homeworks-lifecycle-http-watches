import WorldClock from "./WorldClock";
import type { Clock } from "../types";

interface Props {
  clocks: Clock[];
  onDelete: (id: string) => void;
}

export default function WorldClockList({ clocks, onDelete }: Props) {
  return (
    <div className="clock-list">
      {clocks.length === 0 ? (
        <div style={{ textAlign: "center", color: "#999", padding: "40px" }}>
          Нет часов. Добавьте первый.
        </div>
      ) : (
        clocks.map((clock) => (
          <WorldClock key={clock.id} clock={clock} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}
