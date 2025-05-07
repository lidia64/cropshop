import React from 'react';

const Blogs = () => {
    const articles = [
        {
            title: "The Benefits of Organic Farming",
            date: "2023-10-01",
            content: "Organic farming is a sustainable way to grow crops that benefits both the environment and health."
        },
        {
            title: "Top 10 Tips for Successful Farming",
            date: "2023-09-15",
            content: "Here are some essential tips to help you succeed in your farming endeavors."
        },
        {
            title: "Innovations in Agriculture",
            date: "2023-08-20",
            content: "Explore the latest technologies and innovations that are transforming the agricultural industry."
        }
    ];

    return (
        <div className="blogs">
            <h1>Blogs</h1>
            {articles.map((article, index) => (
                <div key={index} className="blog-post">
                    <h2>{article.title}</h2>
                    <p><em>{article.date}</em></p>
                    <p>{article.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Blogs;