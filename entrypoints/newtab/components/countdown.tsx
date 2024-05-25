import { getTimeRemaining } from "../utils";

type CountdownProps = {
  releaseDate: Date;
  image: string;
};

export const Countdown = ({ releaseDate, image }: CountdownProps) => {
  const { days, hours, minutes, seconds } = getTimeRemaining(releaseDate);

  return (
    <div className="text-center text-2xl">
      <div>
        <img className="mx-auto h-24 w-80" src={image} alt="A logo" />
      </div>
      <div className="elden-ring flex justify-evenly px-12 py-2">
        <p className="flex flex-col gap-1 leading-none">
          <span className="font-semibold">{days}</span>
          <span className="text-lg">Days</span>
        </p>
        <p className="flex flex-col gap-1 leading-none">
          <span className="font-semibold">{hours}</span>
          <span className="text-lg">Hours</span>
        </p>
        <p className="flex flex-col gap-1 leading-none">
          <span className="font-semibold">{minutes}</span>
          <span className="text-lg">Minutes</span>
        </p>
        <p className="flex flex-col gap-1 leading-none">
          <span className="font-semibold">{seconds}</span>
          <span className="text-lg">Seconds</span>
        </p>
      </div>
    </div>
  );
};
