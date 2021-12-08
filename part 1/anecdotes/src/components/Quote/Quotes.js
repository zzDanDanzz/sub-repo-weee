import Button from './Button';
export default function Quotes({ onClick, randQuote }) {
    return (
        <>
            <h2>Q U O T E S</h2>
            <Button onClick={onClick} text={"Give me a quote"} />
            <p>"{randQuote}"</p>
        </>
    )
}