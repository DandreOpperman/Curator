import { Link } from "react-router-dom";
// import { formatDate } from "../../utils/utils";
// import { FaThumbsUp } from "react-icons/fa";
// import { FaComments } from "react-icons/fa";
// import { FaPen } from "react-icons/fa";
export function ItemCard({ item }) {
  return (
    <div className="card" key={item.id}>
      <h2 className="card-title">{item.title}</h2>
      {Object.keys(item.images).length === 0 ? (
        <img
          className="card-img"
          src="https://image.shutterstock.com/image-vector/no-item-found-vector-flat-260nw-2085975523.jpg"
        />
      ) : (
        <img className="card-img" src={item.images.print.url} />
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
