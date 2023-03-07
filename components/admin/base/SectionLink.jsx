import React from 'react'

function SectionLink({id, name}) {
  return (
    <li className="w-full"><a className='px-4 py-1.5 text-sm w-full block text-gray-300 hover:bg-gray-500 hover:text-gray-100 rounded transition-colors' href={`#${id}`}>{name}</a></li>
  )
}

export default SectionLink