import { ReactNode } from "react"
import { Header } from "./Header"
import { StepsArea } from "./StepsArea"

type Props = {
    children: ReactNode
}

export const MainContainer = ({children}: Props) => {
    return (
        <>
            <Header />
            <div className="flex flex-col lg:flex-row lg:pl-28">
                <StepsArea />
                <div className="lg:mt-10">
                 {children}
                </div>
            </div>
        </>
    )
}