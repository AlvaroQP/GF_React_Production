import React from "react";

export default function DateComponent() {
  const currentDate = new Date().toLocaleString("default", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return <>{currentDate}</>;
}
