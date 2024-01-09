'use client'

import { useForm } from "@/contexts/FormContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export const Page = () => {
    const formCtx = useForm();
    const router = useRouter();

    useEffect (() => {
        if (formCtx?.state.name === '') {
            router.push('/')
        } else {
            formCtx?.dispatch({
                type: 'setCurrentStep',
                payload: {
                    currentStep: 4
                }
            })
        };

    }, []);
    console.log(formCtx?.state)
    
    return (
        <div className="">
            <p className="text-zinc-300 text-sm">
                Passo 4/4
            </p>
            <h1 className="text-3xl text-center font-semibold my-5 md:text-left">
                Agora é só esperar, {formCtx?.state.name}
            </h1> 
            <p className="text-zinc-300 text-sm mb-20 text-center md:text-left lg:mb-24">
                Logo a nossa equipe entrará em contato com você.  
            </p>

            <div className="p-5 border-2 border-emerald-500 rounded-md">
                <div className="flex items-center">
                    <div className="px-2 py-3 inline-flex justify-center items-center rounded-full bg-emerald-600 mr-5">
                        <p className="text-3xl ">
                            {formCtx?.state.level === 0 ? '🤓' : '🥸'}
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-lg">
                            {formCtx?.state.level === 0 ? 'Estagiário ou junior' : 'Pleno ou sênior'}
                        </h1>
                        <p className="text-zinc-300 text-sm">
                            {formCtx?.state.level === 0 ? 'Pode receber em média de R$ 1.000 a R$ 4.000' :
                            'Pode receber em média de R$ 5.000 a R$ 20.000'}
                        </p>
                    </div>
                </div>
                <p className="text-lg font-bold text-zinc-200 mt-7 text-center">
                    Com base nas suas informações esse <br/>
                    é o nível da sua senioridade
                </p>
            </div>

        </div>
    )
};

export default Page;