import React, {useState} from "react";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const posts = await response.json();

        const changedPosts = posts.map((post) => post.title);

        setPosts(changedPosts);
    };

    const getPost = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        const postsNeed = await response.json();

        const changedPost = postsNeed.map((postNeed) => {
            const inputValue = document.getElementsByClassName("Id")[0].value;

            if (postNeed.id === Number(inputValue)) {
                return postNeed.body;
            }
        });

        setPosts(changedPost);
    };

    return (
        <div className="App">
            <br />
            <input className="Id" placeholder="ID" />
            <button onClick={getPost}>Получить конкретный пост</button>
            <br />
            <br />
            <div>Список постов:</div>
            <div>
                {posts.map((post, index) => (
                    <div key={index}>
                        <br />
                        {post}
                    </div>
                ))}
            </div>
            <br />
            <button onClick={getPosts}>Получить посты</button>
            <br />
            <br />
        </div>
    );
}

export default App;
