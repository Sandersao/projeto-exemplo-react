import { useEffect, useState } from "react"
import jogoDi from "../client/injection/assets/jogoDi";
import JogoFiltro from "../client/filter/JogoFiltro";
import Pagination from "../client/adapter/Pagination";

export default function JogoView() {
    const [requestCount, setRequestCount] = useState(0)
    const [jogoList, setJogoList] = useState([])
    const [page, setPage] = useState(0)

    const jogoService = jogoDi.makeJogoService()
    const jogoFiltro = new JogoFiltro()

    const pagination = new Pagination();

    useEffect(() => {
        jogoService
            .list(jogoFiltro)
            .then((result) => {
                return pagination
                    .paginate(result, page, 3)
            })
            .then(paginatedRegister => {
                setRequestCount(requestCount + 1)
                setJogoList(paginatedRegister)
            })
            .catch((err) => {
                console.error(err);
            });
    }, [page])

    const decrementPage = () => {
        const prevPage = page - 1 < 0 ? 0 : page - 1
        setPage(prevPage)
    }

    const incrementPage = () => {
        const nextPage = page + 1
        setPage(nextPage)
    }

    return (
        <>
            <button onClick={decrementPage}>Prev</button>
            <button onClick={incrementPage}>Next</button>
            {jogoList.map(jogo => <img key={jogo.id} src={jogo.thumbnail}></img>)}
        </>
    );
}