import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { storage } from "wxt/storage";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function storeColor(color: string) {
  try {
    await storage.setItem("local:color", color);
    console.log("Set color to", color);
  } catch (e) {
    console.log(e);
  }
}

export async function getColorFromStorage(key: string) {
  const storedValue = await storage.getItem(key);
  console.log("Retrieved the following value from store", storedValue);

  return storedValue ?? "#222222";
}

export function getGreeting() {
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

type HourlyData = {
  time: string[];
  temperature_2m: number[];
};

export type ApiResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: HourlyData;
};

export async function fetchWeatherData() {
  const res = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=38.9582&longitude=-122.6264&hourly=temperature_2m&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FLos_Angeles&forecast_days=1",
  );

  if (!res.ok) {
    console.error("Failed to fetch weather data");
    return null;
  }

  const data = await res.json();

  return data as ApiResponse;
}

const isWeatherDataStored = async () => {
  const storedWeatherData = await storage.getItem<string>("local:weather");

  if (storedWeatherData) {
    const parsedData = JSON.parse(storedWeatherData) as ApiResponse;

    const day = parsedData.hourly.time[3];

    const date = new Date(day);

    const now = new Date();

    if (date.getDate() === now.getDate()) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const getWeatherData = async () => {
  const isStored = await isWeatherDataStored();

  if (isStored) {
    const storedWeatherData = await storage.getItem<string>("local:weather");

    return JSON.parse(storedWeatherData!) as ApiResponse;
  } else {
    const data = await fetchWeatherData();

    if (data) {
      try {
        await storage.setItem("local:weather", JSON.stringify(data));
      } catch (e) {
        console.error(e);
      }
    }

    return data;
  }
};
