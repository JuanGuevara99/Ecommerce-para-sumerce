import React from 'react'

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import Routers from '../../routers/Routers'


export const Layout = () => {
    return <>
        <Header />
        <div>
            <Routers />
        </div>
        <div>
            <Footer />
        </div>
    </>
}
