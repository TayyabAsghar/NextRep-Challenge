import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toTitleCase = (str: string) => {
  return str.replace(/([^\W_]+[^\s-]*) */g, txt => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
};