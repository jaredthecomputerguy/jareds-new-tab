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
