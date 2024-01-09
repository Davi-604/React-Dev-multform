type Props = {
    title: string,
    desc: string,
    url: string
    active: boolean,
    onClick: () => void
}

export const StepItem = ({title, desc, url, active, onClick}: Props) => {
    return (
        <div className="flex flex-col flex-wrap items-center justify-center mb-5 lg:flex-row">
            <div className="text-center  lg:w-[150px] lg:text-right lg:mr-5 ">
                <p className="font-bold ">{title}</p>
                <p className="text-sm text-zinc-300 ">{desc}</p>
            </div>
            <div className="flex items-center">
                <div 
                    className={`mt-3 p-4 rounded-full cursor-pointer lg:mt-0 ${active ? 'bg-emerald-500' : 'bg-slate-500'}`}
                    onClick={onClick}
                >
                    <img 
                        className="w-8 md:w-10"
                        src={url}
                    />
                </div>
                <div className={`hidden lg:block p-1 border-[3px] rounded-full ml-7
                    ${active ? 'bg-emerald-500 border-slate-600' : 'border-slate-500'}`}>
                </div>
            </div>
        </div>
    )
}