import CategoriesSidebar from "./CategoriesSidebar";

type LayoutProps = {
    children: React.ReactNode;
};

export default async function MainContainer({ children }: LayoutProps) {
    return (
        <main className="flex gap-9">
            <div className="w-1/2 max-w-80">
                <CategoriesSidebar />
            </div>
            <div className="flex-1 flex flex-col gap-4">{children}</div>
        </main>
    );
}
