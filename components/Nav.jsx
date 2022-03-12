import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-slate-400 flex items-center justify-between'>
      <ul className='flex p-3 justify-evenly w-60'>
        <li>Home</li>
        <li>Players</li>
        <li>World</li>
      </ul>
      <div className="flex px-5">menu</div>
    </nav>
  )
}

export default Nav
