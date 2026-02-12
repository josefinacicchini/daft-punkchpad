import { useState } from "react";

export default function Pad({ data, config }) {
    const [isActive, setIsActive] = useState(false);

    const handlePress = () => {
        setIsActive(true);
        // Aquí irá el playSound() después
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
                relative aspect-square w-24 rounded-md transition-all duration-75
                flex items-center justify-center p-2 uppercase font-black text-[10px]
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

