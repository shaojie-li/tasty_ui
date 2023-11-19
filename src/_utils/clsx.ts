import _clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassValue } from "clsx";

export default (...inputs: ClassValue[]) => twMerge(_clsx(...inputs));
