import React from "react";

const Article = ({id, author, text}) => {
    const styles = {
        margin: "20px",
        
    }
    return (
        <>
            <article style={styles}>
                <h3>{id}</h3>
                <p>{author}</p>
                <p>{text}</p>
            </article>
        </>
    )
}
export default Article;