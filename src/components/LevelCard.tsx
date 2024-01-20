type Props = {
    emoji: string,
    currentLevel: string,
    desc: string,
    selected: boolean,
    onClick: () => void
}

export const LevelCard = ({emoji, currentLevel, desc, selected, onClick}: Props) => {
    return (
        <div 
            className={`group flex items-center p-5 border transition-colors ease-linear mb-3 rounded-md
            ${selected ? 'border-emerald-500' : 'border-slate-800 hover:border-zinc-500 cursor-pointer'}`}
            onClick={onClick}
        >
            <div className={`px-2 py-[10px] lg:py-3 inline-flex justify-center items-center rounded-full
            transition-colors ease-linear 
                ${selected ? 'bg-emerald-600' : 'bg-slate-900 group-hover:bg-slate-800 cursor-pointer'}`}>
                <p className="text-3xl">{emoji}</p>
            </div>
            <div className="flex flex-col ml-5">
                <p className="font-bold">Sou {currentLevel}</p>
                <p className="text-sm text-zinc-300">{desc}</p>
            </div>
        </div>
    )
}