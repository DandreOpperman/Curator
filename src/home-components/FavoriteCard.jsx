export function FavoritesCard({ favorite }) {
  return (
    <div className="card" key={favorite.id}>
      <h2 className="card-title">{favorite.title}</h2>
      {Object.keys(favorite.images).length === 0 ? (
        <img
          className="card-img"
          src="https://image.shutterstock.com/image-vector/no-item-found-vector-flat-260nw-2085975523.jpg"
        />
      ) : (
        <img className="card-img" src={favorite.images.print.url} />
      )}
      {/*       
          <div className="card-info">
            <p className="card-date">
              <FaPen className="icon" />
              {formatDate(article)}
            </p>
            <p className="card-votes">
              <FaThumbsUp className="icon" /> {article.votes}
            </p>
            <p className="card-comments">
              <FaComments className="icon" /> {article.comment_count}
            </p>
          </div> */}
    </div>
  );
}
