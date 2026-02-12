import { useState } from "react";

export default function Pad({ data, config }) {
    const [isActive, setIsActive] = useState(false);

    const handlePress = () => {
        const audio = new Audio(`/sounds/${data.id}.mp3`);
        setIsActive(true);
        audio.play();
        audio.currentTime = 0;

        audio.play().catch(err => console.log("Waiting for user interaction...", err));
        setTimeout(() => {
            setIsActive(false);
        }, 150);
    };

    const handleRelease = () => {
        setIsActive(false);
    };

    return (
        <button 
            onMouseDown={handlePress}
            onMouseUp={handleRelease}
            onMouseLeave={handleRelease}
            className={`
                relative aspect-square w-full md:w-28 md:h-28max-w-[120px] rounded-md transition-all duration-75
                flex items-center justify-center p-2 uppercase text-[9px] md:text-[11px] font-black
                ${isActive 
                    ? `${config.glow} text-white scale-95 border-b-0 translate-y-1` 
                    : `bg-white/80 text-zinc-600 border-b-4 border-zinc-300 hover:bg-white`
                }
            `}
        >
            {data.label}
        </button>
    );
}
