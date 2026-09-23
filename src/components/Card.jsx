import "../styles/card.css";

function Card({ id, image, alt, onCardClick, disabled }) {
  return (
    <>
      <div className="card">
        <img
          src={image}
          alt={alt}
          height={200}
          className={disabled ? "disabled" : ""}
          onClick={() => !disabled && onCardClick(id)}
        />
        <h3>{alt}</h3>
      </div>
    </>
  );
}

export default Card;
