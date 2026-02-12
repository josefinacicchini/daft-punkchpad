import { SAMPLES } from "../data/samples";
import Pad from "./Pad";

export default function Grid() {
   const rowConfigs = [
    { text: "text-pad-magenta", glow: "bg-pad-magenta shadow-glow-magenta" },
    { text: "text-pad-cyan", glow: "bg-pad-cyan shadow-glow-cyan" },
    { text: "text-pad-yellow", glow: "bg-pad-yellow shadow-glow-yellow" },
    { text: "text-pad-green", glow: "bg-pad-green shadow-glow-green" }
    ];

    return (
        <div className="grid grid-cols-4 gap-3 md:gap-6 p-6 md:p-10 
            max-w-[640px] mx-auto 
            bg-zinc-900/80 rounded-[2.5rem] 
            border-t border-zinc-700/50 border-x border-zinc-800
            shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7),_inset_0_2px_4px_rgba(255,255,255,0.05)]">
            {SAMPLES.map((sample, index) => {
                const config = rowConfigs[Math.floor(index / 4)];
                return <Pad key={sample.id} data={sample} config={config} />;
            })}
        </div>
    );
}


