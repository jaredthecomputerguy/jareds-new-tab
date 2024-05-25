import { getGreeting } from "../utils";

export const Header = ({ time }: { time: string }) => {
  const greeting = getGreeting();

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <h1 className="text-4xl font-semibold">{greeting}, Jared</h1>
      <p className="text-5xl font-black">{time.toLowerCase()}</p>
      <hr className="h-px w-full bg-white" />
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
