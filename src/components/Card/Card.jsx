import React from "react";

const Card = (props) => {
  // Store all the elements
  let allAbilities = props.info.abilities.map((a) => a.ability.name)
  let allTypes = props.info.types.map((t) => t.type.name)
  let pokemon = {
    name: props.info.name,
    image: props.info.sprites.front_default,
    abilities: allAbilities,
    types: allTypes,
    id: props.info.id
  }
  const { name, image, abilities, types, id } = pokemon
  return (
    <article className="card">
      <div className="name_id">
        <h3 className="card_name">{name}</h3>
        <span className="card_id">{id}</span>
      </div>
      <img src={image} alt={name} className="card_image" />
      <div className="types_abilities">
        <div className="card_types">
          <h5 className="types_title">Types</h5>
          {types.map((type, i) => {
            return <p key={i} className="info">{type}</p>
          })}
        </div>
        <div className="card_abilities">
          <h5 className="abilities_title">Abilities</h5>
          {abilities.map((ab, i) => {
            return <p key={i} className="info">{ab}</p>
          })}
        </div>
      </div>


    </article>
  )
}
export default Card;