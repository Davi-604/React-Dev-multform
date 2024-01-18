'use client'

import { LevelCard } from "@/components/LevelCard";
import { useForm } from "@/contexts/FormContext"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
    const formCtx = useForm();
    const router = useRouter();

    useEffect (() => {
        if (formCtx?.state.name === '') {
            router.push('/')
        } else {
            formCtx?.dispatch({
                type: 'setCurrentStep',
                payload: {
                    currentStep: 2
                }
            })
        }
    }, []);

    const backStepBtn = () => {

        router.back()
    };

    const setLevel = (level: 0 | 1) => {
        formCtx?.dispatch({
            type: 'setLevel',
            payload: {
                level,
            }
        })
    }

    return (
        <div className="flex flex-col max-w-full">
            <p className="text-zinc-300 text-sm">
                Passo 2/3
            </p>
            <h1 className="text-3xl font-semibold my-5">
                {formCtx?.state.name}, o que melhor descreve você?
            </h1>
            <p className="text-zinc-300 text-sm mb-20 lg:mb-24">
                Escolha a opção pela a qual você melhor se indentifica atualmente.  
            </p>

            <LevelCard 
                emoji='🥳'
                currentLevel="iniciante"
                desc="Comecei a programar a menos de 2 anos"
                selected={formCtx?.state.level === 0}
                onClick={() => setLevel(0)}
            />
            <LevelCard 
                emoji='😎'
                currentLevel="programador"
                desc="Já programo há 2 anos ou mais" 
                selected={formCtx?.state.level === 1}
                onClick={() => setLevel(1)}
            />
            <div className="flex justify-center items-center mt-5">
                <button 
                    className="px-4 py-3 mr-5 hover:text-zinc-300 transition-colors ease-linear" 
                    onClick={backStepBtn}
                >
                    Voltar
                </button>
                <Link href={'step3/'}>
                    <button className="px-4 py-4 rounded-full w-[150px] bg-emerald-600 text-lg
                    transition-colors ease-linear hover:bg-emerald-700">
                        Próximo
                    </button>
                </Link>
            </div>
            
        </div>
    )
}

export default Page