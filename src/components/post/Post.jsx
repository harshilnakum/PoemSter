import "./post.css"
export default function Post() {
  return (
    <div className='post'>
        <img className="postImg" src="/images/postimg.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span><span className="postCat">Life</span>
            </div>
            <span className="postTitle">Lorem Ipsum asdasdasd asdasd</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi optio voluptas delectus excepturi, in inventore veritatis aspernatur porro repellat ipsa provident consectetur? Accusantium neque commodi corporis eos! Perferendis, exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi optio voluptas delectus excepturi, in inventore veritatis aspernatur porro repellat ipsa provident consectetur? Accusantium neque commodi corporis eos! Perferendis, exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi optio voluptas delectus excepturi, in inventore veritatis aspernatur porro repellat ipsa provident consectetur? Accusantium neque commodi corporis eos! Perferendis, exercitationem.
        </p>
    </div>
  )
}
