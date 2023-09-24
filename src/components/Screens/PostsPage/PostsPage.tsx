import { JsonPlaceholderService } from "@/services/jsonplaceholder/jsonplaceholder.service";
import {useEffect, useState} from "react";
import { IPost } from "@/shared/types/post.interface";
import PostCard from "@/components/Screens/PostsPage/Components/PostCard";
import axios from "axios";

const PostsPage = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    useEffect(() => {
        if(fetching){
            console.log('fetching')
            axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
                .then(response => {
                    setPosts(prevPosts => [...prevPosts, ...response.data]);
                    setCurrentPage(prevState => prevState + 1)
                })
                .finally(() => setFetching(false))
        }
    }, [currentPage, fetching, posts])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    // @ts-ignore
    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)
        }
    }
    // const getUsersData = async () => {
    //     return await Promise.all([JsonPlaceholderService.getUsersData()]);
    // };

    // const { isLoading } = useQuery(
    //     ["getUsersData"],
    //     async () => getUsersData(),
    //     {
    //         keepPreviousData: true,
    //         staleTime: 100_000,
    //     }
    // );

    return (
        <div>
                <>
                    <div>
                        {posts
                            .map((post: IPost, index: number) => (
                                <PostCard
                                    key={index}
                                    userId={post.userId}
                                    id={post.id}
                                    title={post.title}
                                    body={post.body}
                                />
                            ))}
                    </div>
                </>
        </div>
    );
};

export default PostsPage;