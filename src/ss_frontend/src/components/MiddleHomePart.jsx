import React, { useEffect, useState } from 'react'
import TextInput from './TextInput'
import HomePost from './HomePost'
import { useAuth } from '../hooks/UseAuth'
import { useMutation } from '@tanstack/react-query'
import { ss_backend } from "../../../declarations/ss_backend";

const MiddleHomePart = ({ setCurrPost, currPost }) => {
  const { isAuthenticated, user } = useAuth();
  const [posts, setPosts] = useState([]);

  const { status: statusFetchingData, mutate: dataMutate } = useMutation({
    mutationKey: ["checkFetch"],
    mutationFn: fetchDatas,
  });

  async function fetchDatas() {
    await fetchPosts();
    // await fetchFriendHeader();
    return true;
  }


  async function fetchPosts() {
    const fetchedPosts = await ss_backend.getAllPosts();
    // console.log(fetchedPosts);
    
    if (fetchedPosts.ok) {
      setPosts(fetchedPosts.ok);
    }
  }

  useEffect(() => {
    dataMutate();
  }, [user, posts]);

  return (
    <div className='w-1/2 h-full flex flex-col justify-start'>
      {
        isAuthenticated && <TextInput />
      }
      <div className=' flex flex-col gap-6'>
        {posts.length != 0 &&

          posts.map((post) => {
            return (
              <HomePost choosePost={setCurrPost} post={post} refetch={dataMutate} />
            );
          })

        }

        {/* <HomePost choosePost={setCurrPost} postId={"dummy"} />

        <HomePost choosePost={setCurrPost} postId={"dummy"} /> */}
      </div>
    </div>
  )
}

export default MiddleHomePart