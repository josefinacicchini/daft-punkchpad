import Grid from "./Grid";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="layout min-h-screen flex flex-col bg-daft-black">
            <header className="py-12 text-center">
                <h1 className="text-5xl font-display text-white drop-shadow-glow-magenta">
                    Daft-Punkchpad
                </h1>
            </header>

            <main className="flex-grow flex items-center justify-center">
                <Grid />
            </main>

            <Footer />
        </div>
    );
}

export default Layout;