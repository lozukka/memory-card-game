import "../styles/card.css";

function Card({ id, image, alt, onCardClick, disabled }) {
  return (
    <>
      <div
        className={`card ${disabled ? "disabled" : ""}`}
        onClick={() => !disabled && onCardClick(id)}
      >
        <img src={image} alt={alt} height={180} />
        <h3>{alt}</h3>
      </div>
    </>
  );
}

export default Card;
