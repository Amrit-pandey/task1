import { ReactNode } from "react"

export const Content = ({children}: {children: ReactNode}) => {
    return(
        <div className=" flex-grow text-black p-2 pl-[20.4rem]">{children}</div>
    )
}