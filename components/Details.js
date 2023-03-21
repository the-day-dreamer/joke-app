import styles from '@/styles/Details.module.css'
import { useState } from 'react';
const Details = () => {
    const[welcome , setWelcome] = useState(true)
    const[jokeVisible , setJokeVisible] = useState(false)
    const[punchlineVisible , setPunchlineVisible] = useState(false)
    const[buttonVisible , setButtonVisible] = useState(true)
    const[joke , setJoke] = useState()
    const[punchline , setPunchline] = useState()
    const handleJoke = ()=>{
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res=>res.json())
        .then(data=>{
            setJoke(data.setup)
            setPunchline(data.punchline)
            console.log(punchline)
            setWelcome(false)
            setJokeVisible(true)
            setButtonVisible(true)
            setPunchlineVisible(false)


        })
    }
    const handlePunchline = ()=>{
        setPunchlineVisible(true)
        setButtonVisible(false)
    }
    return ( 
        <div className={styles.details}>
            {welcome && (
                <div className={styles.welcome}>Welcome to jokify.com</div>
            )}
            {
                jokeVisible && (
                    <div className={styles.joke}>{joke}</div>
                )
            }
            {buttonVisible && (<div className={styles.buttonBox} onClick = {handlePunchline}><button className={styles.detailsButton}>GET PUNCHLINE</button></div>)}
            {
                punchlineVisible && (
                    <div className={styles.punchline}>{punchline}</div>
                )
            }
            <div className={styles.buttonBox} onClick = {handleJoke}><button className={styles.detailsButton}>GET JOKES!</button></div>
        </div>
     );
}
 
export default Details;