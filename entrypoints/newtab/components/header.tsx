import { useEffect, useState } from "react";
import { getGreeting } from "../utils";

export const Header = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const greeting = getGreeting();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 py-6 items-center">
      <h1 className="text-4xl font-semibold">{greeting}, Jared</h1>
      <p className="text-5xl font-black">{time.toLowerCase()}</p>
      <hr className="h-px bg-white w-full" />
      <p className="text-xl font-semibold">
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  );
};
