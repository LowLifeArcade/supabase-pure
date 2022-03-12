import React from 'react'
import supabase from '../utlis/supabase';

export async function getServerSideProps({ params }) {
  const { data: post } = await supabase
    .from('posts')
    .select('*, comments(*)')
    .eq('id', params.id)
    .single();

  return {
    props: {
      post,
    },
  };
}

export default function PostPage({post}) {
  return <>
    <h1 className='text-xl'>{post.title}</h1>
    <p>{post.content}</p>
    {JSON.stringify(post.comments)}
  </>
}
