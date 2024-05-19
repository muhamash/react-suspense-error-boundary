/* eslint-disable no-unused-vars */
import fetchPost from "../api/FetchPost";

/* eslint-disable react/prop-types */
const response = fetchPost('https://jsonplaceholder.typicode.com/posts?_limit=10')

export default function PostSelector({ onSelectPost }) {
    // const posts = resource.read();
    // throw new Promise(()=>console.log('promise'))
    // throw FetchPost();
    // throw response
    // response.read();

    return (
        <div>
            <select onChange={onSelectPost}>
                <option value="">Select Post</option>
                {response.read().map((post) => (
                    <option key={post.id} value={post.id}>
                        {post.title}
                    </option>
                ))}
            </select>
        </div>
    );
}