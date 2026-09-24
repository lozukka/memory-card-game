import "../styles/card.css";

function Card({ id, image, alt, onCardClick, disabled }) {
  return (
    <>
      <div className="card">
        <img
          src={image}
          alt={alt}
          height={180}
          className={disabled ? "disabled" : ""}
          onClick={() => !disabled && onCardClick(id)}
        />
        <h3 className={disabled ? "disabled" : ""}>{alt}</h3>
      </div>
    </>
  );
}

export default Card;
