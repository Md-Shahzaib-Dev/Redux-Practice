import React from 'react'

const Card = ({ title, desc, deleteItem, editItem }) => {
    return (
        <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                    <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">THE SUBTITLE</h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">{title}</h1>
                    <p className="leading-relaxed">{desc}</p>
                    <button className='text-white' onClick={() => { deleteItem() }}>Delete</button>
                    <button className='text-white' onClick={() => { editItem() }}>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Card