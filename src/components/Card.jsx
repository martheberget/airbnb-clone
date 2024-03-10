import star from "../assets/star.png";

export function Card(props) {
  return (
    <>
      <div className="card">
        <img
          className="card__img"
          src={props.img}
          alt="img"
        />
        <div className="card__stats">
          <img
            className="card__icon-star"
            src={star}
            alt="star icon"
          />
          <span className="card__rating">{props.rating}</span>
          <span className="card__review-count">{props.reviewCount} • </span>
          <span className="card__country">{props.country}</span>
        </div>
        <h2 className="card__title">{props.title}</h2>
        <p className="card__price">From ${props.price} / person</p>
      </div>
    </>
  );
}
