import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const locales = ['en-US', 'zh-CN'];
export const localeNames: { [key: string]: string } = {
  'en-US': 'English',
  'zh-CN': '简体中文'
};