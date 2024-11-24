import React, { useEffect } from 'react'
import {Container,PostCard} from '../components/index'
import service from '../Services/config'

const AllPosts = () => {
    const [Posts, setPosts] = useState([])
    useEffect(() => {},[])
    service.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })

  return (
    <div className="w-fill py-8">
        <Container>
            <div className="flex flex-wrap">
                {Posts.map((post) =>{
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard post={post}/>
                    </div>
                })}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts