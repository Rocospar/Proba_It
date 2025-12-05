import React from 'react';

function PostsPage() {
  const [posts] = React.useState([
    { id: 1, title: 'First Post', content: 'This is my first post!' },
    { id: 2, title: 'Second Post', content: 'Another interesting post' }
  ]);

  return (
    <div style={{ padding: '30px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Posts</h1>
      <button style={{
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginBottom: '20px'
      }}>
        Create New Post
      </button>

      <div>
        {posts.map(post => (
          <div key={post.id} style={{
            backgroundColor: 'white',
            padding: '15px',
            marginBottom: '15px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsPage;
