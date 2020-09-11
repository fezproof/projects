import React from "react";
import Centeriser from "./Centeriser";

export default { title: "Components/Centeriser" };

export const Empty = () => <Centeriser></Centeriser>;

export const Centered = () => (
  <Centeriser>
    <h1>Almost before we knew it, we had left the ground.</h1>
  </Centeriser>
);
