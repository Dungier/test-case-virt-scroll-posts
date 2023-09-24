import React, { FC, ReactNode } from "react";

const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <main className={"flex flex-col justify-center items-center"}>
            {children}
        </main>
    );
};

export default MainContainer;
