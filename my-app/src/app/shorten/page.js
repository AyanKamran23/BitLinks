"use client"
import React from 'react'
import { useState } from 'react'

const shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)
    const [resultlink, setresultlink] = useState()
    const [error, seterror] = useState()

    const handlesubmit = async (e) => {
        e.preventDefault();
        seterror('');
        setresultlink('');

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url, shorturl }),
            });



            const text = await response.text();
            console.log(text);
            
            const data = text ? JSON.parse(text) : {};
            // const data = await response.json();

            
            if (response.ok) {
               
                
                const generateCode = data.shorturl || shorturl;
                setresultlink(`http://localhost:3000/${generateCode}`);

                localStorage.setItem("savedShortCode", generateCode)
            } else {
                seterror(data.message || 'ERROR!')
                console.log("backend error",data.message);
                
            }
        }
        catch (err) {
            console.error(err);
            seterror('Cannot apply connecting with server')

        }

    };


    return (

        <div className="flex items-center justify-center p-15 bg-green-50/50">
            <div className="bg-white p-2 md:p-8 rounded-xl shadow-md border border-green-100 w-full max-w-sm text-center">

                <h2 className=" text-md md:text-lg font-bold text-gray-800 mb-8 text-center">Generate your short URLs</h2>

                <form onSubmit={handlesubmit} className="space-y-3">
                    <input
                        value={url}
                        type="text"
                        placeholder="Enter your long URL"
                        onChange={(e) => { seturl(e.target.value) }}
                        required
                        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 bg-gray-50/50 transition"
                    />
                    <input
                        value={shorturl}
                        type="text"
                        placeholder="Enter short code (optional)"
                        onChange={(e) => { setshorturl(e.target.value) }}
                        required
                        className="w-full px-3 py-2 text-sm rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 bg-gray-50/50 transition"
                    />

                    <button type='submit' className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg shadow transition duration-200">
                        Generate
                    </button>
                </form>
                {resultlink && (
                    <div className="mt-3 ">
                        <p className='text-sm text-gray-500 font-bold'>Your trusted short URL:</p>
                        <a className='text-md text-green-950 font-semibold' href={resultlink} target='_blank' rel='noopener noreferrer'>
                            {resultlink}
                        </a>
                    </div>
                )}
            {error && <p className='mt-6 text-red-600'>{error}</p> }

            </div>
        </div>
    )
}

export default shorten


