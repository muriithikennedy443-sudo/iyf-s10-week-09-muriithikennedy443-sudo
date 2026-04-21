
import CreatePostForm from '../components/Post/CreatePostForm';

function CreatePost({ onAddPost }) {
  return (
    <div>
      <CreatePostForm onAddPost={onAddPost} />
    </div>
  );
}

export default CreatePost;