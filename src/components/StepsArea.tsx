'use client'

import { useForm } from "@/contexts/FormContext"
import { StepItem } from "./StepItem";
import { useRouter } from "next/navigation";

export const StepsArea = () => {
    const formCtx = useForm();
    const router = useRouter()

    const verifyRequistsToPath = (path: string) => {
        if (formCtx?.state.name.trim() === '') {
            router.push('/');
        } else if (formCtx?.state.currentStep === 3 && formCtx?.state.email.trim() === '' && formCtx?.state.github.trim() === '') {
            router.push('step3/');
        } else {
            router.push(path);
        }
    }

    return (
        <div className="grid grid-cols-2 items-center mt-10 order-1 lg:order-none lg:mr-16 lg:flex lg:flex-col">
            <StepItem 
                title="Pessoal"
                desc="Se identifique"
                url="/assets/images/profile.svg"
                active={formCtx?.state.currentStep === 1}
                onClick={() => verifyRequistsToPath('/')}
            />
            <StepItem 
                title="Profissional"
                desc="Seu nível"
                url="/assets/images/book.svg"
                active={formCtx?.state.currentStep === 2}
                onClick={() => verifyRequistsToPath('step2/')}
            />
            <StepItem 
                title="Contatos"
                desc="Como te achar"
                url="/assets/images/mail.svg"
                active={formCtx?.state.currentStep === 3}
                onClick={() => verifyRequistsToPath('step3/')}
            />
            <StepItem 
                title="Resultado"
                desc="Confira aqui"
                url="/assets/images/join.svg"
                active={formCtx?.state.currentStep === 4}
                onClick={() => verifyRequistsToPath('step4/')}
            />
        </div>
    )
}