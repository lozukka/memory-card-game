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
      </div>
    </>
  );
}

export default Card;
