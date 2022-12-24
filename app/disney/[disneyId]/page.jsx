import React from 'react'
import Image from 'next/image'
import styles from './disney.module.css'

const fetchDisney = async (disneyId) => {
    const url = `https://api.disneyapi.dev/characters/${disneyId}`
    const res = await fetch(url);
    const character = await res.json();
    console.log(character)
    return character;
}
async function CharacterPage({params: {disneyId}}) {
    const character = await fetchDisney(disneyId)


  return (
    <div className={styles.card}>
      <div>
      <h2>{character.name}</h2>
        <img className={styles.image} src={character.imageUrl} alt="Disney character" />
      </div>
     
        <div>
        {character.films.length ? <h3>Movies:</h3> : "" }
        {character.films
              ? character.films.map((film) => (
                  <p key={character._id}> {film}</p>
                ))
              : ""}
                {character.tvShows.length ? <h3>TV Shows:</h3> : "" }
            {character.tvShows
              ? character.tvShows.map((show) => (
                  <p key={character._id}>{show}</p>
                ))
              : ""}
              
              {character.parkAttractions.length ? <h3>Disney Park Attractions:</h3> : "" }

              {character.parkAttractions
              ? character.parkAttractions.map((attraction) => (
                  <p key={character._id}>{attraction}</p>
                ))
              : ""}
              {character.videoGames.length ? <h3>Video Games:</h3> : "" }

              {character.videoGames
              ? character.videoGames.map((game) => (
                  <p key={character._id}>{game}</p>
                ))
              : ""}
        </div>
       

    </div>
  )
}

export default CharacterPage