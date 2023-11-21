
import "./post.css"

export default function Post({img,cat,title,date,desc}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
              {cat}
          </span>
        </div>
        <span className="postTitle">
            {title}
        </span>
        <hr />
        <span className="postDate">{date}</span>
      </div>
      <p className="postDesc">
       {desc}
      </p>
    </div>
  )
}
