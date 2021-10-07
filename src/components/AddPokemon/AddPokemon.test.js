import React from "react";
import { shallow } from "enzyme";
import AddPokemon from "./AddPokemon";

describe("AddPokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddPokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
