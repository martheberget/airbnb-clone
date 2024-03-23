import star from "../assets/star.png";

export function Card(props) {
  let img = `../src/assets/${props.card.coverImg}`;
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <>
      <div className="card">
        {badgeText && <div className="card__badge">{badgeText}</div>}
        <img
          className="card__img"
          src={img}
          alt="img"
        />
        <div className="card__stats">
          <img
            className="card__icon-star"
            src={star}
            alt="star icon"
          />
          <span className="card__rating">{props.card.stats.rating}</span>
          <span className="card__review-count">({props.card.stats.reviewCount})</span>
          <span className="card__dot"> • </span>
          <span className="card__country">{props.card.location}</span>
        </div>
        <h2 className="card__title">{props.card.title}</h2>
        <p className="card__price">
          <b>From ${props.card.price}</b> / person
        </p>
      </div>
    </>
  );
}
