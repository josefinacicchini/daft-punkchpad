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
        <div className="grid grid-cols-4 gap-4 p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800">
            {SAMPLES.map((sample, index) => {
                const config = rowConfigs[Math.floor(index / 4)];
                return <Pad key={sample.id} data={sample} config={config} />;
            })}
        </div>
    );
}

