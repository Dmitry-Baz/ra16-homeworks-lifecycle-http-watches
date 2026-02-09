import { useState } from "react";
import WorldClockForm from "./components/WorldClockForm";
import WorldClockList from "./components/WorldClockList";
import type { Clock } from "./types";

export default function App() {
  const [clocks, setClocks] = useState<Clock[]>([]);

  const handleAdd = (newClock: Omit<Clock, "id">) => {
    const clock: Clock = {
      id: Date.now().toString(),
      ...newClock,
    };
    setClocks((prev) => [...prev, clock]);
  };

  const handleDelete = (id: string) => {
    setClocks((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="container">
      <h1>Мировые часы</h1>
      <WorldClockForm onAdd={handleAdd} />
      <WorldClockList clocks={clocks} onDelete={handleDelete} />
    </div>
  );
}
