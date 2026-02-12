import { useState, useEffect } from "react";

export default function Pad({ data, config }) {
    const [isActive, setIsActive] = useState(false);

    const playSound = () => {
        const audio = new Audio(`/sounds/${data.id}.mp3`);
        setIsActive(true);
        audio.currentTime = 0;
        
        audio.play().catch(err => console.log("Interacción necesaria", err));

        setTimeout(() => {
            setIsActive(false);
        }, 150);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (data.key && e.key.toLowerCase() === data.key.toLowerCase()) {
                playSound();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [data.key, data.id]);

    return (
        <button 
            onMouseDown={playSound}
            className={`
                relative aspect-square w-full md:w-28 md:h-28 max-w-[120px] 
                rounded-lg transition-all duration-75
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