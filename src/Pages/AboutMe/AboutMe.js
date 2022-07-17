import React from 'react'
import { NavBar } from '../../Components/NavBar/NavBar'
import { Header } from '../../Components/AboutMeComponents/Header'
import { MiddleComponent } from '../../Components/AboutMeComponents/MiddleComponent'
export const AboutMe = () => {
    return (
        <>
            <NavBar />
            <Header/>
            <MiddleComponent/>
        </>
    )
}
