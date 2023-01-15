const Card = ({
  srcUrl,
  alt,
  bg_class,
  userName,
  user_title,
  card_small_text,
  card_bold_text,
}) => {
  return (
    <>
      <div className={` card-wrapper ${bg_class}`}>
        <div className="card-header">
          <div className="card-image-wrapper">
            <img src={srcUrl} alt={alt} />
          </div>
          <div className="card-header-text">
            <span className="user-name"> {userName} </span>
            <span className="user-title"> {user_title} </span>
          </div>
        </div>
        <div className="card-bold-text">
          <p> {card_bold_text} </p>
        </div>
        <div className="card-small-text">
          <p> {card_small_text} </p>
        </div>
      </div>
    </>
  );
};

export default Card;
