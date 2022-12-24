import React from "react";
import Link from "next/link";
import styles from "./[disneyId]/disney.module.css";

const fetchDisneys = async () => {
    const randomNumber = Math.floor(Math.random() * 148) + 1;
  const url = `https://api.disneyapi.dev/characters?page=${randomNumber}`;
  const res = await fetch(url);
  const disneys = await res.json();
  console.log(disneys);
  return disneys;
};

export default async function disneysList() {
  const disneys = await fetchDisneys();
  return (
    <>
      <ul className={styles.listContainer}>
        {/* <a href={disneys.nextPage}> Next Page of Characters</a> */}
        {disneys.data.map((disney) => (
          <li key={disney._id}>
            <Link className={styles.link} href={`/disney/${disney._id}`}>
              <h2> {disney.name}</h2>
            </Link>
          
          </li>
        ))}
      </ul>
    </>
  );
}
