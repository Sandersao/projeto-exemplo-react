import { useCallback, useEffect, useState } from "react"
import jogoDi from "../client/injection/assets/jogoDi";
import JogoFiltro from "../client/filter/JogoFiltro";
import Pagination from "../client/adapter/Pagination";
import JogoView from "./JogoView";
import JogoListNavigationView from "./JogoListNavigationView";

export default function JogoListView() {
    const [jogoList, setJogoList] = useState([])
    const [jogoListPaginated, setJogoListPaginated] = useState([])
    const [page, setPage] = useState(0)
    const [entriesPerPage, setEntriesPerPage] = useState(1)

    const jogoService = jogoDi.makeJogoService()
    const jogoFiltro = new JogoFiltro()

    const pagination = new Pagination();

    useEffect(() => {
        console.log('Passou aqui');
        const keyHanddler = (e) => {
            switch (e.key) {
                case 'ArrowRight':
                    incrementPage()
                    break;
                case 'ArrowLeft':
                    decrementPage()
                    break;

                default:
                    console.log(`No action for ${e.key}`);
                    break;
            }
        }
        window.addEventListener("keyup", keyHanddler)
        return () => window.removeEventListener("keyup", keyHanddler)
    })

    useEffect(() => {
        jogoService
            .list(jogoFiltro)
            .then(paginatedRegister => {
                setJogoList(paginatedRegister)
            })
            .catch((err) => {
                console.error(err);
            });
    }, [])

    useEffect(() => {
        setJogoListPaginated(
            pagination
                .paginate(
                    jogoList,
                    page,
                    entriesPerPage
                )
        )
    }, [jogoList, page, entriesPerPage])

    const decrementPage = () => {
        let prevPage = page - 1
        if (prevPage < 0) {
            prevPage = 0
        }
        console.log(prevPage);
        setPage(prevPage)
    }

    const incrementPage = () => {
        let nextPage = page + 1
        console.log(page, nextPage);
        setPage(nextPage)
    }

    const changeEntriesPerPage = (e) => {
        setEntriesPerPage(e.nativeEvent.target.value)
        // e.nativeEvent.target.value = entriesPerPage
    }

    return (<>
        <JogoListNavigationView
            entriesPerPage={entriesPerPage}
            decrementPage={decrementPage}
            incrementPage={incrementPage}
            changeEntriesPerPage={changeEntriesPerPage}
            actual={page}
            jogoList={jogoList}
        />
        {jogoListPaginated.map(jogo => <JogoView
            key={jogo.id}
            thumbnail={jogo.thumbnail}
        />)}
    </>
    );
}