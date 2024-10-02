import React, { useEffect } from 'react'
import Navbar from '../component/Navbar'
import Card from '../component/Card'

const Home = () => {

    const fetchBlogs = async () => {
    const response=    await axios.get("http://localhost:3000/blog")
    }
    useEffect(() => {
fetchBlogs()
    }, [])
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