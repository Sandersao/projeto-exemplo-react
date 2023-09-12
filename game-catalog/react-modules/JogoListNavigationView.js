export default function JogoListNavigationView({ entriesPerPage, decrementPage, incrementPage, changeEntriesPerPage, actual, jogoList}) {
    return (<>
        <button onClick={decrementPage}>Prev</button>
        <button onClick={incrementPage}>Next</button>
        <input type="number" name="entrie-count" maxLength={1} value={entriesPerPage} onInput={changeEntriesPerPage} />
        <span>{actual}/{jogoList.length}</span>
    </>)
}