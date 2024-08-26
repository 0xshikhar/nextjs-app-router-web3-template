import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function decryptKey(passkey: string) {
  return atob(passkey);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ellipsisAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);