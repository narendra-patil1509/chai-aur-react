import React from 'react'

function Card({username,btnTxt="Click me"}) {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/18133772/pexels-photo-18133772/free-photo-of-a-heron-on-a-swamp.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              {username}
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black bg-blue-400 p-3 rounded'>{btnTxt}</button>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
  )
}

export default Card
