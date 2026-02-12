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
                relative aspect-square w-full md:w-28 md:h-28 max-w-[120px] 
                rounded-lg transition-all duration-75
                flex items-center justify-center p-2 uppercase text-[9px] md:text-[11px] font-black
                ${isActive 
                    ? `${config.glow} text-white scale-95 translate-y-1 ring-2 ring-white/20` 
                    : `bg-white/90 text-zinc-600 border-b-[6px] border-zinc-400 hover:bg-white`
                }
            `}
        >
            {data.label}
        </button>
    );
}
