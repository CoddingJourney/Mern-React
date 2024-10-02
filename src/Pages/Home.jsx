import React from 'react'
import Navbar from '../component/Navbar'
import Card from '../component/Card'

const Home = () => {
    return (
        <>
            <Navbar />



            <div className=' flex flex-wrap mt-16'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Home