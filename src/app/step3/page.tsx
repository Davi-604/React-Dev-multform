'use client'

import { useForm } from "@/contexts/FormContext"
import { useRouter } from "next/navigation";
import { KeyboardEvent, RefObject, useEffect, useRef, useState } from "react";

const Page = () => {
    const formCtx = useForm();
    const router = useRouter(); 

    const githubInputRef = useRef<HTMLInputElement>(null);

    const [emailField, setEmailField] = useState('');
    const [githubField, setGithubField] = useState('');

    useEffect (() => {
        if (formCtx?.state.name === '') {
            router.push('/')
        } else {
            formCtx?.dispatch({
                type: 'setCurrentStep',
                payload: {
                    currentStep: 3
                }
            })
        };
    }, []);

    const backStepBtn = () => {
        router.back()
    }

    const handleNextInput = (e: KeyboardEvent, nextInputRef: React.RefObject<HTMLInputElement>) => {
        if (e.code.toLowerCase() === 'enter') {
            e.preventDefault();
            if (nextInputRef.current) {
                nextInputRef.current.focus();
            }
        }
    }

    const finalizeRegisterBtn = () => {
        if (emailField.trim() !== '' && githubField.trim() !== '') {
            formCtx?.dispatch({
                type: 'setEmail',
                payload: {
                    email: emailField
                }
            });
            formCtx?.dispatch({
                type: 'setGithub',
                payload: {
                    github: githubField
                }
            });
        } else {
            alert('Preencha os campos com os seu dados!')
        };

        if (
            formCtx?.state.currentStep !== 0 && formCtx?.state.email.trim() !== '' && 
            formCtx?.state.github.trim() !== '' && formCtx?.state.name.trim() !== ''
        ) {
            router.push('step4/')
        }
    };
    const handleFinalizeRegister = (e: KeyboardEvent) => {
        if (e.code.toLowerCase() === 'enter') {
            if (emailField.trim() !== '' && githubField.trim() !== '') {
                formCtx?.dispatch({
                    type: 'setEmail',
                    payload: {
                        email: emailField
                    }
                });
                formCtx?.dispatch({
                    type: 'setGithub',
                    payload: {
                        github: githubField
                    }
                });
            } else {
                alert('Preencha os campos com os seu dados!')
            };
            
            if (
                formCtx?.state.currentStep !== 0 && formCtx?.state.email.trim() !== '' && 
                formCtx?.state.github.trim() !== '' && formCtx?.state.name.trim() !== ''
            ) {
                router.push('step4/')
            }
        }
    }

    return (
        <div className="">
            <div className="flex flex-col">
                <p className="text-zinc-300 text-sm">
                    Passo 3/3
                </p>
                <h1 className="text-3xl font-semibold my-5">
                    Legal {formCtx?.state.name}, onde te achamos?
                </h1>
                <p className="text-zinc-300 text-sm mb-20 lg:mb-24">
                    Preencha com os seus contatos para conseguirmos te achar e entrar em contato.
                </p>
                
                <label >
                    <p className="text-sm text-left">Qual o seu email?</p>
                    <input 
                        type="email"
                        className="px-4 py-3 border-[3px] lg:w-[700px] border-emerald-100 bg-transparent outline-none text-lg font-semibold rounded-md
                        transition-colors ease-linear focus:border-emerald-500"
                        autoFocus
                        value={emailField}
                        onChange={e => setEmailField(e.target.value)}
                        onKeyUp={e => handleNextInput(e, githubInputRef)}
                    />
                </label>
                <label className="mt-5">
                    <p className="text-sm text-left">Qual o seu github?</p>
                    <input 
                        type="text"
                        required
                        className="px-4 py-3 border-[3px] lg:w-[700px] border-emerald-100 bg-transparent outline-none text-lg font-semibold rounded-md
                        transition-colors ease-linear focus:border-emerald-500"
                        value={githubField}
                        ref={githubInputRef}
                        onChange={e => setGithubField(e.target.value)}
                        onKeyUp={e => handleFinalizeRegister(e)}
                    />
                </label>
                <div className="flex justify-center items-center mt-10">
                    <button 
                        className="px-4 py-3 mr-5 hover:text-zinc-300 transition-colors ease-linear" 
                        onClick={backStepBtn}
                    >
                        Voltar
                    </button>
                    <button 
                        className="px-3 py-4 rounded-full w-[250px] bg-emerald-600 text-lg
                        transition-colors ease-linear hover:bg-emerald-700"
                        onClick={finalizeRegisterBtn}
                    >
                        Finalizar o cadastro
                    </button>
                </div>
            </div>  
        </div>
    )
}

export default Page