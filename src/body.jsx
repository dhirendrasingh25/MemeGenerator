import React from 'react'
import './App.css' 
import memesData from './memedata'


const body = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const[allMemeImages,setAllMemeImages]=React.useState(memesData);

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const random= Math.floor(Math.random()*memesArray.length)
        const url=memesArray[random].url
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
    }
    function handleChange(event){
        const {name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))

    }
  return (

   <main >
       <div className='form'>
       

       <input  className='form-input' placeholder='Top Text' type="text"
       name='topText' value={meme.topText} onChange={handleChange}></input>
        <input  className='form-input' placeholder='Bottom Text' type="text"
       name='bottomText' value={meme.bottomText} onChange={handleChange}></input>
        <button onClick={getMemeImage} className='button'>Get a New Meme Image</button>
       </div>
       <div className="meme">
            <img src={meme.randomImage} className="meme--image" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
   </main>
  )
}

export default body
