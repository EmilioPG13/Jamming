import React, { useState } from "react";
import styles from "./App.module.css";

function App() {
    const [searchResults, setSearchResults] = useState([
        {
            name: "Example Track Name 1",
            artist: "Example Track Artist 1",
            album: "Example Track Album 1",
            id: 1,
        },
        {
            name: "Example Track Name 2",
            artist: "Example Track Artist 2",
            album: "Example Track Album 2",
            id: 2,
        },
    ]);
}

export default App;
