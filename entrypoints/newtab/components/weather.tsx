import { useEffect, useState } from "react";
import { getWeatherData, type ApiResponse } from "../utils";

export const Weather = () => {
  const [weather, setWeather] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherData();

      if (data) {
        setWeather(data);
      }
    };

    fetchWeather();
  }, []);

  const temp = weather?.hourly.temperature_2m[new Date().getHours()];

  return (
    <div className="flex py-4 justify-center">
      <p className="text-xl font-medium">{temp}°F</p>
    </div>
  );
};
