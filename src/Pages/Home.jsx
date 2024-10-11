import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Card from '../component/Card'
import axios from 'axios'

const Home = () => {
    const [blogs, setBlogs] = useState([])
    const fetchBlogs = async () => {
        const response = await axios.get("http://localhost:3000/blog")
        setBlogs(response.data.data)
    }


    // console.log(blogs)
    useEffect(() => {
        fetchBlogs()
    }, [])

    return (

        <>
            <Navbar />



            <div className=' flex flex-wrap mt-16'>
                {
                    blogs.map((blog) => {
                        return (

                            <Card blog={blog} />
                        )
                    })
                }

            </div>
        </>
    )
}

export default Home