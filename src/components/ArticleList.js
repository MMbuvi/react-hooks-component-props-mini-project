import React from "react";
import Article from "./Article";

function ArticleList ({posts}) {
    const postArray = posts.map(post =>
                    <Article 
                    key = {post.id}
                    title = {post.title}
                    date = {post.date}
                    minutes = {post.minutes}
                    preview = {post.preview}/>
    )
    return (
        <main>
            {postArray}
        </main>
    )
    }        
export default ArticleList;