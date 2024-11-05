import { useEffect, useState } from "react";
import "./App.css";
import Kartyak from "./components/kartyak/Kartyak";

function App() {

  const [lista, setLista] = useState([0, 0, 1, 1, 2, 2, 3, 3]);

  function listatKever() {
    let templist = [...lista];
    let eredmenyLista = [];
    while (templist.length > 0) {
      const randomSzam = parseInt(Math.random() * templist.length);
      console.log(templist)
      eredmenyLista.push(templist[randomSzam]);
      templist.splice(randomSzam, 1)
    }
    return eredmenyLista;
  }

  useEffect(() => {
    // A lista keverése csak egyszer fut le a komponens betöltésekor
    setLista(listatKever());
  }, []);

  return (
    <div className="App">
      <header className="App-header">Karsai Bence</header>
      <article>
        <Kartyak lista={lista} />
      </article>
    </div>
  );
}

export default App;
