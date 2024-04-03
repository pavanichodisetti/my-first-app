// Welcome.js
import React from "react";
import { PlayerNames } from "./Players";

function Welcome() {
    return (
      <div>
        <h1>Welcome to all Players</h1>
        <PlayerNames name="anitha"/>
        <PlayerNames name="pavani"/>
        <PlayerNames name="balaji"/>
      </div>
    );
}

export default Welcome;
