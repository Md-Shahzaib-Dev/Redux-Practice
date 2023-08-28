import React, { useState } from 'react'

const Dashboard = () => {

    // make state variables.
    const [list, setList] = useState([])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [changeBtn, setChangeBtn] = useState(true)
    const [indexing, setIndexing] = useState("")

    // function for addItem.
    const addItem = () => {
        if (title !== '' && desc !== '') {
            const copyList = [...list];
            copyList.push({ title, desc });
            setList(copyList);
            setTitle('');
            setDesc('');
        } else {
            alert('Please, fill the form');
        }
    };

    // function for deleteItem.
    const deleteItem = (index) => {
        const copyList = [...list]
        copyList.splice(index, 1)
        setList(copyList)
    };

    // function for editItem.
    const editItem = (index) => {
        const copyList = [...list]
        const edit = copyList[index]
        setTitle(edit)
        setIndexing(index)
        setChangeBtn(false)
    };

    // function for updateItem.
    const updateItem = () => {
        const copyList = [...list]
        copyList[indexing] = title
        setList(copyList)
        setChangeBtn(true)
        setTitle('');
        setDesc('');
    };

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Create and Update your (TODO'S)</h1>
                    <div className="mb-4">
                        <label htmlFor="title" className="block mb-2 font-medium text-left text-white">Todo Title</label>
                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Todo title..." required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 font-medium text-left text-white">Todo Description</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Todo description..."></textarea>
                    </div>
                    <button className="block w-full text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center" onClick={changeBtn ? addItem : updateItem}>{changeBtn ? "Add Todo" : "Update Todo"}</button>
                </div>
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Your Todo's </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Your created todo's display here. You can add, edit and delete your todo's any time.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {list && list.length > 0 ?
                        <>
                            {list.map((item, index) => {
                                return (
                                    <div className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative">
                                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900">
                                                <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">THE SUBTITLE</h2>
                                                <h1 className="title-font text-lg font-medium text-white mb-3">{item.title}</h1>
                                                <p className="leading-relaxed">{item.desc}</p>
                                                <button className='text-white' onClick={() => deleteItem(index)}>Delete</button>
                                                <button className='text-white' onClick={() => editItem(index)}>Edit</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                        :
                        <p>No Todo's to display. Add Todo's to get started!</p>
                    }
                </div>
            </div>
        </section>
    )
}

export default Dashboard;