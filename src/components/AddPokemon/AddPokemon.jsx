import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { pokeContext } from "../../context/pokeContext";


const AddPokemon = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { foundPokemons, setFoundPokemons } = useContext(pokeContext)
  const onSubmit = (data) => {
    console.log(data);
    const newData = {
      abilities: [
        {
          ability: {
            name: data.abilityOne
          }
        },
        {
          ability: {
            name: data.abilityTwo
          }
        }
      ],
      id: data.id,
      name: data.name,
      sprites: {
        front_default: data.image
      },
      types: [
        {
          type: {
            name: data.typeOne
          }
        },
        {
          type: {
            name: data.typeTwo
          }
        }
      ]

    }
    setFoundPokemons([...foundPokemons, newData])
  }
  return (
    <section>
      {/* Using handleSubmit will validate all inputs before submit them */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Add (or register) your input to the hook with "register" function to be validated on submit */}
        <label>ID:
          <input {...register("id", { required: true, minLength: 4 })} />
          {errors.id && "This field is required"}
        </label>
        <label >Name:
          <input {...register("name", { required: true, minLength: 3 })} />
          {errors.name && "This field is required"}
        </label>
        <label >Image:
          <input {...register("image", { required: true, minLength: 3 })} />
          {errors.image && "This field is required"}
        </label>
        <label >Type one:
          <select {...register("typeOne", { required: true })}>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="ice">Ice</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
            {errors.typeOne && "This field is required"}
          </select>
        </label>
        <label >Type two:
          <select {...register("typeTwo")}>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="ice">Ice</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
          </select>
        </label>
        <label >Ability one:
          <input {...register("abilityOne", { required: true, minLength: 3 })} />
          {errors.abilityOne && "This field is required"}
        </label>
        <label >Ability two:
          <input {...register("abilityTwo", { required: true, minLength: 3 })} />
          {errors.abilityTwo && "This field is required"}
        </label>
        <input type="submit" value="Add this new Pokemon!" />
      </form>
    </section>
  );
};

export default AddPokemon;
