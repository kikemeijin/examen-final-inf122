"use client";
import Image from "next/image";
import style from './Pokedex.module.css';
import Info from "./Info.js";
import { useState } from "react";
function Pokedex(){
    const url="https://pokeapi.co/api/v2/pokemon/2";
    const [pokemon,setPokemon]=useState("/vercel.svg");
    const [name,setName]=useState("...");
    const [id,setId]=useState(2);
    const [type,setType]=useState("...");
    const [height,setHeight]=useState(0);
    const [weight,setWeight]=useState(0);
    const [abili,setAbili]=useState("...");
    const [hp,setHP]=useState(0);
    const [atk,setAtk]=useState(0);
    const [def,setDef]=useState(0);
    const [spd,setSpd]=useState(0);
    fetch(url).then(respuesta=>respuesta.json())
        .then(datos=>{setPokemon(datos.sprites.front_default),setId(datos.id)
            ,setName(datos.species.name)
            ,setType(datos.types[0].type.name),setHeight(datos.height)
            ,setWeight(datos.weight)
            ,setAbili(datos.abilities[0].ability.name)
            ,setHP(datos.stats[0].base_stat),setAtk(datos.stats[1].base_stat)
            ,setDef(datos.stats[2].base_stat),setSpd(datos.stats[3].base_stat)
    })
    return(
        <div className={style.contenedor}>
            <h2 className={style.title}>My Pokemon</h2>
            <h1 className={style.nombre}>{name}</h1>
            <div className={style.id}>
                <p>#{id}</p>
                <Image src={pokemon} alt="pokemon" width={300} height={300}></Image>
            </div>
            <Info type={type} Height={height/10} Weight={weight/10} Abilities={abili}
            Hp={hp}Attack={atk}Defense={def}Speed={spd}></Info>
        </div>
    );
}
export default Pokedex;