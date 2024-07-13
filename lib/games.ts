export type Game = {
    id: number;
    title: string;
    thumbnail: string;
    short_description: string;
    genre: string;
    publisher: string;
    developer: string;
};

export type GameDetails = Game & {
    description: string;
    game_url: string;
    release_date: string;
    minimum_system_requirements: Requirement;
    screenshots: Image[];
};

type Requirement = {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
};

type Image = {
    id: string;
    image: string;
};

export const fetchGames = async (genre?: string) => {
    const response = await fetch(
        `https://www.freetogame.com/api/games?platform=pc&sort-by=release-date ${
            genre ? `&category=${genre}` : ""
        }`
    );
    const games = await response.json();
    return response.status === 200 ? (games as Game[]) : [];
};
