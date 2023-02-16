import React from 'react'
import Aside from './components/Aside'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'

export default function App() {
    return (
        <>
            <Header />
            <main>
                <div className='container b_tbdr h-100'>
                    <div className='row h-100'>
                        <Aside cls="d_left_aside">Left Aside</Aside>
                        <Section></Section>
                        <Aside cls="d_right_aside">Right Aside</Aside>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}

