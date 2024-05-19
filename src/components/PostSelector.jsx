/* eslint-disable react/prop-types */
export default function PostSelector({ onSelectPost }) {
    // const posts = resource.read();

    return (
        <div>
            <select onChange={onSelectPost}>
                <option value="">Select Post</option>
                {posts.map((post) => (
                    <option key={post.id} value={post.id}>
                        {post.title}
                    </option>
                ))}
            </select>
        </div>
    );
}