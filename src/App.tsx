import React from "react";
import "./App.css";
import { SessionProvider } from "@inrupt/solid-ui-react";
import Header from "./components/header/Header";

import Home from "./components/home/Home";

function App() {
  return (
    <SessionProvider>
      <div className="App container">
        <Header />
        <main className="banner-container">
          {/* <Home /> */}
          hello world
        </main>
      </div>
    </SessionProvider>
  );
}

export default App;
