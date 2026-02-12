// src/components/Footer.jsx

export default function Footer() {
    return (
        <footer className="py-10 text-center text-zinc-500 text-[11px] font-medium tracking-[0.2em] uppercase">
            <div className="mb-6 space-y-2">
                <p>
                    Built with ♥ by a huge fan
                </p>
                <a 
                    href="https://github.com/josefinacicchini" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors duration-300 decoration-pad-magenta decoration-2"
                >
                    Josefina Cicchini
        </a>
                
                <p className="text-[10px] pt-4 text-zinc-700 tracking-widest">
                    Audio samples & original track belong to Daft Punk.
                </p>
                
            </div>
            
            <a 
                href="https://open.spotify.com/intl-es/track/5W3cjX2J3tjhG8zb6u0qHn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="
                    inline-flex items-center gap-3 px-6 py-2.5 
                    rounded-full border border-zinc-800 
                    text-zinc-400 hover:text-daft-cyan hover:border-daft-cyan 
                    hover:shadow-[0_0_20px_rgba(20,204,187,0.2)]
                    transition-all duration-500 ease-out group
                "
            >
                <span className="text-[10px] font-bold">Listen to this masterpiece on Spotify</span>
                <span className="text-lg group-hover:scale-110 transition-transform">🎧</span>
            </a>
        </footer>
    );
}

