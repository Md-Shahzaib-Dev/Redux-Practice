// import React, { useState } from 'react'

// const Form = () => {

//     // make state variables.
//     const [list, setList] = useState([])
//     const [title, setTitle] = useState('')
//     const [desc, setDesc] = useState('')
//     const [changeBtn, setChangeBtn] = useState(true)
//     const [indexing, setIndexing] = useState("")


//     console.log(list)

//     // function for addItem.
//     const addItem = () => {
//         if (title !== '' && desc !== '') {
//             const copyList = [...list];
//             copyList.push({ title, desc });
//             setList(copyList);
//             setTitle('');
//             setDesc('');
//         } else {
//             alert('Please, fill the form');
//         }
//     };

//     // function for deleteItem.
//     const deleteItem = (index) => {
//         const copyList = [...list]
//         copyList.splice(index, 1)
//         setList(copyList)
//         console.log('deleteItem function call')
//     };

//     // function for editItem.
//     const editItem = (index) => {
//         const copyList = [...list]
//         const edit = copyList[index]
//         setTitle(edit)
//         setIndexing(index)
//         setChangeBtn(false)
//         console.log('index --->', index)
//         console.log('editItem function call')
//     };

//     // function for updateItem.
//     const updateItem = () => {
//         const copyList = [...list]
//         copyList[indexing] = title
//         setList(copyList)
//         setChangeBtn(true)
//         // remove the value from input.
//         setTitle('');
//         setDesc('');
//         console.log('copyList --->', copyList)
//         console.log('updateItem function call')
//     };

//     return (
//         <>
//             <div className="flex flex-col text-center w-full mb-20">
//                 <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Create and Update your (TODO'S)</h1>
//                 <div className="mb-4">
//                     <label htmlFor="title" className="block mb-2 font-medium text-left text-white">Todo Title</label>
//                     <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="bg-gray-50 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Todo title..." required />
//                 </div>
//                 <div className="mb-4">
//                     <label htmlFor="message" className="block mb-2 font-medium text-left text-white">Todo Description</label>
//                     <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Todo description..."></textarea>
//                 </div>
//                 <button className="block w-full text-white bg-blue-500 hover:bg-blue-600 font-medium rounded-md text-sm sm:w-auto px-5 py-2.5 text-center" onClick={changeBtn ? addItem : updateItem}>{changeBtn ? "Add Todo" : "Update Todo"}</button>
//             </div>

//             {list.map((item, index) => {
//                 return (
//                     <tr key={index}>
//                         <th>{index + 1}</th>
//                         <th>{item.title}</th>
//                         <th>{item.desc}</th>
//                         <th className="d-flex align-items-center">
//                             <button onClick={() => deleteItem(index)}>DELETE</button>
//                             <button onClick={() => editItem(index)}>EDIT</button>
//                         </th>
//                     </tr>
//                 )
//             })}
//         </>
//     )
// }

// export default Form;