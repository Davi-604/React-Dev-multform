'use client'

import { useForm } from "@/contexts/FormContext";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useEffect, useState } from "react";

const Page = () => {
  const [nameField, setNameField] = useState('');
  const router = useRouter();
  const formCtx = useForm()
  
  useEffect (() => {
    formCtx?.dispatch({
      type: 'setCurrentStep',
      payload: {
        currentStep: 1
      }
    })

  }, [])
  
  const skipStepBtn = () => {
    if (nameField.trim() !== '') {
      router.push('/step2');
      formCtx?.dispatch({
        type: 'setName',
        payload: {
          name: nameField
        }
      });
    } else {
      alert ('Digite o seu nome para avançar!')
    }
  };
  const handleSkipStep = (e: KeyboardEvent) => {
    if (e.code.toLowerCase() === 'enter') {
      if (nameField.trim() !== '') {
        router.push('/step2');
        formCtx?.dispatch({
          type: 'setName',
          payload: {
            name: nameField
          }
        })
      } else {
        alert ('Digite o seu nome para avançar!');
      }
    }
  }

  return (
    <div className="flex flex-col">
      <p className="text-zinc-300 text-sm">
      Passo 1/3
      </p>
      <h1 className="text-3xl font-semibold my-5">
        Vamos começar com o seu nome 
      </h1>
      <p className="text-zinc-300 text-sm mb-20 lg:mb-24">
       Preencha o campo abaixo com o seu nome.
      </p>
      
      <label >
          <p className="text-sm text-left">Seu nome</p>
          <input 
              type="text"
              className="px-4 py-3 border-[3px] w-full border-emerald-100 bg-transparent outline-none text-lg font-semibold rounded-md
              transition-colors ease-linear focus:border-emerald-500"
              autoFocus
              value={nameField}
              onChange={e => setNameField(e.target.value)}
              onKeyUp={e => handleSkipStep(e)}
          />
      </label>
      <button 
          className="px-6 lg:px-4 py-4 mx-auto lg:mx-0 rounded-full max-w-[150px] bg-emerald-600 text-lg font-semibold mt-7 
          transition-colors ease-linear hover:bg-emerald-700"
          onClick={skipStepBtn}
      >
          Próximo
      </button>
    </div>
  )
};

export default Page