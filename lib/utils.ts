import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

//convert to base 64 image

export function convertImageToBase64(file: File, callback: Function) {
	const reader: FileReader = new FileReader();

	reader.onload = () => {
		const base64String = reader?.result as string;
		const base64 = base64String.split?.(",")[1];
		callback(base64);
	};

	reader.readAsDataURL(file);
}
