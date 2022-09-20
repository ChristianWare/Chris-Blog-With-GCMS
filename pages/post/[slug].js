import Author from "../../components/Author";
import Categories from "../../components/Categories";
import Comments from "../../components/Comments";
import CommentsForm from "../../components/CommentsForm";
import PostDetail from "../../components/PostDetail";
import PostWidget from "../../components/PostWidget";
import { getPosts, getPostDetails } from "../../services/index";


const PostDetails = () => {
  return (
    <div className='contianer mx-auto px-10 mb8'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
        <div className='col-span-1 lg:col-span-4'>
            <div className="relative lg:sticky top-8">
                <PostWidget />
                <Categories />
            </div>
        </div>
      </div>
    </div>
  );
};
export default PostDetails;
