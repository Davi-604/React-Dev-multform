'use client'

import { ActionsType, FormReducer } from "@/reducers/FormReducer";
import { UserResult } from "@/types/UserResult";
import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

type FormCtxType = {
    state: UserResult,
    dispatch: Dispatch<ActionsType>
}

const FormContext = createContext<FormCtxType | undefined>(undefined);

export const FormProvider = ({children}: {children: ReactNode}) => {
    const initialData: UserResult = {
        currentStep: 0,
        name: '',
        level: 0,
        email: '',
        github: ''   
    }

    const [state, dispatch] = useReducer(FormReducer, initialData);

    return (
        <FormContext.Provider value={{state, dispatch}}>
            {children}
        </FormContext.Provider>
    )
};

export const useForm = () => {
    const context = useContext(FormContext)

    if (useForm !== undefined) {
        return context
    } else {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }
};