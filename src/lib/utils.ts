import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Robust slugify: accents → ascii, lowercase, spaces/punct → single hyphens */
export function toSlug(input: string): string {
  if (!input) return ''
  return input
    .normalize('NFKD')                 // split accents
 .replace(/[̀-ͯ]/g, '')   // remove diacritics
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')       // non-alphanum → hyphen
    .replace(/^-+|-+$/g, '')           // trim hyphens
}
