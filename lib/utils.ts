import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Game } from "./games";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

//Checks if external image exists
export async function imageExists(imageUrl: string) {
    const response = await fetch(imageUrl, {
        method: "HEAD",
        redirect: "manual",
    });
    return response.status === 200;
}

export const range = (n: number) => Array.from({ length: n }, (_, i) => i + 1);

export const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

export const isGameCardValid = async (game: Game) => {
    return !!(
        game.id &&
        game.thumbnail &&
        (await imageExists(game.thumbnail)) &&
        game.title &&
        game.publisher &&
        game.developer &&
        game.short_description &&
        game.genre
    );
};
