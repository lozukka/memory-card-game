import "../styles/card.css";

function Card({ id, image, alt, onCardClick }) {
  return (
    <>
      <div className="card">
        <img
          src={image}
          alt={alt}
          height={200}
          onClick={() => onCardClick(id)}
        />
        <h3>{alt}</h3>
      </div>
    </>
  );
}

export default Card;
