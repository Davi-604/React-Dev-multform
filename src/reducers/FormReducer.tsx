import { UserResult } from "@/types/UserResult";

type NameAction = {
    type: 'setName',
    payload: {
        name: string
    }
};
type CurrentStepAction = {
    type: 'setCurrentStep',
    payload: {
        currentStep: number
    }
};
type LevelAction = {
    type: 'setLevel',
    payload: {
        level: 0 | 1
    }
};
type EmailAction = {
    type: 'setEmail',
    payload: {
        email: string
    }
};
type GithubAction = {
    type: 'setGithub',
    payload: {
        github: string
    }
}


export type ActionsType = NameAction | CurrentStepAction | LevelAction | EmailAction | GithubAction;

export const FormReducer = (state: UserResult, action: ActionsType) => {
    switch (action.type) {
        case 'setName':
            return {...state, name: action.payload.name};
        case 'setCurrentStep':
            return {...state, currentStep: action.payload.currentStep};
        case 'setLevel':
            return {...state, level: action.payload.level};
        case 'setEmail':
            return {...state, email: action.payload.email};
        case 'setGithub':
            return {...state, github: action.payload.github};

        default: 
            return state
    }
}