type PageProps = {
    params: {
        gameId: string;
    };
};

export default function Page({ params }: PageProps) {
    const { gameId } = params;
    return <div>Game {gameId}</div>;
}
