"use client"
import React from "react"
import {
    QueryClientProvider,
    QueryClient,
    Hydrate
} from "@tanstack/react-query"
import { store } from "@/store/store"
import { Provider } from "react-redux"
import Header from "@/components/Layout/Header/Header";

function MainProvider({ children }: React.PropsWithChildren) {
    const [client] = React.useState(new QueryClient())

    return (
        <QueryClientProvider client={client}>
            <Hydrate>
                <Provider store={store} serverState={null}>
                        <Header/>
                        {children}
                </Provider>
            </Hydrate>
        </QueryClientProvider>
    )
}

export default MainProvider