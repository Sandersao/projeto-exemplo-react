import { useState } from "react"
import jogoDi from "../client/injection/assets/jogoDi";
import JogoFiltro from "../client/filter/JogoFiltro";

export default function JogoView() {
    const [jogoList, setJogoList] = useState([])

    const jogoService = jogoDi.makeJogoService()
    const jogoFiltro = new JogoFiltro()

    jogoService
        .list(jogoFiltro)
        .then((result) => {
            console.log(result);
            setJogoList(result)
            console.log(jogoList);
        }).catch((err) => {
            console.error(err);
        });

    return (
        jogoList.map(jogo => <img key={jogo.id} src={jogo.src}></img>)
    );
}