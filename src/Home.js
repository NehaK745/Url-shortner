import React from 'react'
import './Home.css';
import {db} from './firebase';
import {v4 as uuidv4} from 'uuid';
function Home() {
    const [url, setUrl] = React.useState('');
    const code = uuidv4();
    const handleSubmit = async(e) => {
        e.preventDefault();
       await db.collection('urls').add({
            url: url,
            code: code

        })
        alert("This is your URL - https://url-shortner-b9e51.firebaseapp.com/l/" + code);
    }
    return (
        <div className="container">
            <div className="w3-center w3-animate-top">
                <h1>Short your URL</h1>
            </div>
        <form onSubmit={handleSubmit}>
        <div>
            <input type="text" value={url} placeholder="Enter the URL" onChange={(e) => setUrl(e.target.value)} />
    
           <button type="submit">Get URL</button>
        </div>
        </form>
        </div>
    )
}

export default Home
