import React from 'react'
import { useState } from 'react'

const TodoList = () => {
    const [data, setData] = useState("")
    const [list, setList] = useState([])

    function inputHandle(e) {
        let str = e.target.value
        setData(str)
    }

    function addItem(){
        setList([...list, data])
        setData("")
    }

    function removeItem(index) {
        let result = list.filter((elem, ind) => ind !== index);
        setList(result);
      }

    //   function deleteAll(){
    //     if (window.confirm("Press a button!")) {
    //         setList([])
    //       } else {
    //         alert("You canceled!")
    //       }
    //   }

  return (
    <div>
        <h1>Todo List</h1>

        <div className="input">
            <input type="text" placeholder='enter Note' value={data} onChange={(e) => inputHandle(e)}/>
            <button onClick={() => addItem()}>Add</button>
        </div>

        <table>
            <tbody  >
            {
                list?.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td>{index}. {item}
                            <button onClick={() => removeItem(index)} >remove</button>
                        
                            </td>
                            </tr>
                        )
                    })
                }
                </tbody>
        </table>
        {/* <button onClick={() => deleteAll()}>Delete All</button> */}
    </div>
  )
}

export default TodoList


































// import React, { useState } from 'react'

// const TodoList = () => {
//     const [data, setData] = useState("")
//     // const [list, setList] = useState([])
//     function inputHandle(e) {
//         setData = e.target.value
//         console.log(data)
//     }
//   return (
//     <section>
//         <h1 className="section__title">Todo List</h1>

//         <div className="input__field">
//             <input type="text" value={data}/>
//             <button  onChange={(e) => inputHandle(e)}>Add</button>
//         </div>
      
//     </section>
//   )
// }

// export default TodoList

