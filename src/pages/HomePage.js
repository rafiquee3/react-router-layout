import React from "react";
import Article from "../components/Article";

const articles = [
    {
        id: 1,
        author: "Roman Czejarek",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
    },
    {
        id: 2,
        author: "Stefan Lipski",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
    },
    {
        id: 3,
        author: "Krzysztof Jarzyna",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
    },
    {
        id: 4,
        author: "Jack Nicolson",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
    },
    {
        id: 5,
        author: "Sylwester Stalon",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
    }
]

const HomePage = () => {
    const articlesList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return  (
        <>
            {articlesList}
        </>
    )
}

export default HomePage;