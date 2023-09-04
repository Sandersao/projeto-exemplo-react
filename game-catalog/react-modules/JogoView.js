export default function JogoView(thumbnail, incrementPage, decrementPage) {
    return (
        <>
            <button onClick={decrementPage}>Prev</button>
            <button onClick={incrementPage}>Next</button>
            <img src={thumbnail}></img>
        </>
    )
}