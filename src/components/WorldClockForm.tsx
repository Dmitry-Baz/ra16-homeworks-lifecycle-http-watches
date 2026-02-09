// src/components/WorldClockForm.tsx
import React, { useState } from "react";
import type { Clock } from "../types";

interface Props {
  onAdd: (clock: Omit<Clock, "id">) => void;
}

export default function WorldClockForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [timezoneOffset, setTimezoneOffset] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;
    const offset = parseFloat(timezoneOffset);
    if (isNaN(offset)) return;

    onAdd({ name: name.trim(), timezoneOffset: offset });
    setName("");
    setTimezoneOffset("");
  };

  return (
    <form onSubmit={handleSubmit} className="form-row">
      <div className="form-group">
        <label>Название</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Moscow"
        />
      </div>
      <div className="form-group">
        <label>Временная зона (часы от UTC)</label>
        <input
          type="number"
          step="0.5"
          value={timezoneOffset}
          onChange={(e) => setTimezoneOffset(e.target.value)}
          placeholder="+3"
        />
      </div>
      <div className="form-group">
        <label>&nbsp;</label>
        <button type="submit" className="btn">
          Добавить
        </button>
      </div>
    </form>
  );
}
