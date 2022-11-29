
import React, { createContext, useState } from "react";

export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}



export interface UsersContextType {
    users: User[] | null;
    setUsers: React.Dispatch<React.SetStateAction<User[] | null>>

}
export interface userContextProviderProps {
    children: React.ReactNode
}

export const MainContext = createContext<UsersContextType | null>([] as unknown as UsersContextType);


const MainProvider = ({ children }: userContextProviderProps) => {
    const [users, setUsers] = useState<User[] | null>([] as unknown as User[]);


    return (
        <MainContext.Provider value={{ users, setUsers }}>
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;

