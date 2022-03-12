import React from 'react';
import Body from '../components/Body';
import Nav from '../components/Nav';
import supabase from '../utlis/supabase';

const Cards = ({ posts }) => {
  const cards = [
    {
      title: 'Discounts',
      author: 'Billy',
      content: 'stuff that happened happened again and again',
    },
    {
      title: 'Concerts',
      author: 'Billy',
      content:
        'stuff that happened happened again and again that happened happened again and againthat happened happened again and againthat happened happened again and againthat happened happened again and againthat happened happened again and againthat happened happened again and again appened happened again and againappened happened again and againappened happened again and againappened happened again and againappened happened again and againappened happened again and again',
    },
    {
      title: 'Jump Start ',
      author: 'Billy',
      content:
        'stuff that happened happened again and again that happened happened again and againthat happened happened again and againthat happened happened again and againthat happened happened again and againthat happened happened again and againthat happened happened again and again appened happened again and againappened happened again and againappened happened again and againappened happened again and againappened happened again and againappened happened again and again',
    },
  ];
  return (
    <ul>
      {posts.map((card, i) => {
        return (
          <li key={i}>
            <article className="outline outline-1 my-4 rounded-2xl pb-4 shadow-lg shadow-slate-400">
              <div className="flex justify-end px-4">...</div>
              <div className="flex items-center justify-between py-3">
                <h1 className="pl-2">{card.title}</h1>
                <div className="pr-4">{card.author}</div>
              </div>
              <section className="outline outline-1 outline-orange-600 min-h-[100px] shadow shadow-slate-600">
                <p className="p-2">{card.content}</p>
              </section>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

const SideBarIcon = ({ icon, text = 'tool tip' }) => (
  <div className="cursor-pointer relative flex items-center justify-center h-12 w-12 mt-2 mx-auto shadow-lg bg-gray-600 text-green-400   hover:bg-green-700 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 ease-linear group">
    {icon}
    <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
      {text}
    </span>
  </div>
);

const SideBar = ({ children }) => {
  return (
    <div
      className=" top-0 
    left-0 h-screen w-16 
    bg-slate-400 
    flex flex-col
    shadow-sm">
      {children}
    </div>
  );
};

export default function App({ posts }) {
  console.log(supabase.auth.user())
  const icons = ['Dude', 'Where', 'Is', 'MyCar'];
  console.log(posts);
  return (
    <>
      {/* <Nav /> */}
      {/* <Cards /> */}
      {/* <div className="outline outline-1 shadow-md shadow-gray-600 p-4 rounded h-40 divide-y-2 m-4">
        some content
        <div className="divide-y-2">test</div>
        <div className="divide-y-2">test</div>
        <div className="divide-y-2">test</div>
      </div> */}
      <div className="flex ">
        <SideBar>
          {icons.map((icon, i) => {
            return <SideBarIcon key={i} icon={icon} />;
          })}
          <SideBarIcon icon="test" />
        </SideBar>
        <Cards posts={posts} />
        {/* <pre>{JSON.stringify(posts, null, 2)}</pre> */}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data: posts, error } = await supabase.from('posts').select('*');

  if (error) {
    console.log(error)
    throw new Error('error');
  }
  return {
    props: {
      posts,
    },
  };
}
