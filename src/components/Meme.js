import React, { useEffect, useState } from 'react'
import { FcAddImage } from 'react-icons/fc'
//import memesData from '../data/memesData'



export const Meme = () => {


    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    })

    const [img, setImg] = useState()




    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setImg(data))
    }, [])






    const handleChange = (event) => {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value

        }))

    }



    const handleClick = () => {
        const Memes = img.data.memes;
        const RandomMeme = Memes[Math.floor(Math.random() * Memes.length)]
        const url = RandomMeme.url

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))


    }


    return (
        <div className='meme-container container text-center'>
            <div className="row mt-5 text-center">
                <div className="col">
                    <input type='text'
                        className='form-control'
                        placeholder='First text'
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText} />
                </div>
                <div className="col">
                    <input type='text'
                        className='form-control'
                        placeholder='Last Text'
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText} />
                </div>
            </div>

            <div className="row mt-5 text-center">
                < button onClick={handleClick} className='btn'>Get a new Meme display <FcAddImage size={30} /></button>
            </div>



            <div className='meme container text-center mt-3'>
                <img src={meme.randomImage} alt="meme" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </div >
    )
}
