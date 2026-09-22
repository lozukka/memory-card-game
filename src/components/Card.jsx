function Card({ id, image, alt, onCardClick }) {
  return (
    <>
      <img src={image} alt={alt} height={200} onClick={() => onCardClick(id)} />
    </>
  );
}

export default Card;
