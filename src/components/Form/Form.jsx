// 3rd party components
import React, { useState, useEffect, useContext } from "react";
import { useDebounce } from "use-debounce/lib";
import axios from "axios";

import { pokeContext } from "../../context/pokeContext";

// Own components
import PokeList from "../PokeList/PokeList";

const Form = () => {
  const [input_value, setInput_value] = useState("")
  const { previous, setPrevious } = useContext(pokeContext)
  const { foundPokemons, setFoundPokemons } = useContext(pokeContext)
  const [debounced] = useDebounce(input_value, 3000)

  const handleChange = async (e) => {
    setInput_value(e.target.value)
    await new Promise(resolve => setTimeout(resolve, 4000))
    e.target.value = ""
  }
  useEffect(
    () => {
      try {
        if (input_value) {
          const value = input_value.toLowerCase()
          setPrevious([...previous, value])
          let checkExist = previous.includes(value)
          if (checkExist === false && debounced !== null) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
              .then(response => {
                setFoundPokemons([...foundPokemons, response.data])
                setPrevious([...previous, response.data.id.toString(), response.data.name])
              })
          } else {
            console.log(`That pokemon already exist! Scroll down to check it!`);
          }
        }
      }
      catch (e) {
        console.log(e);
      }
    }, [debounced])
  return (
    <section className="form">
      <p className="form_title">Insert the Pokemon's name or ID to know more about them</p>
      <input type="text" name="pokemon" placeholder="Search a Pokemon!" onChange={handleChange} />
      <PokeList foundPokemons={foundPokemons} />
    </section>
  )
};

export default Form;