import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Todo.css'

const Todo = () => {
  const [data, setData] = useState("")
  const [list, setList] = useState([])
  const navigate = useNavigate()

  function addHandler(){
    setList([...list, data])
    setData("")
  }
  function inputHandler(val){
    let dataa = val.target.value
    setData(dataa)
  }

  function removeBtn(id){
    let rem = list.filter((elem, ind) =>{
      return id !== ind
    })
    setList(rem)
  }
  

  return (
    <div className='main-container'>
        <h1>Todo List</h1>

        <div className="container">
          <label htmlFor="inp">Enter Your Todo</label> <br />
          <input type="text" id='inp' placeholder='enter todo baby' value={data} onChange={(e) => inputHandler(e)} />
          <button id='addhandler' onClick={() => addHandler()}>Add Todo</button>
        </div>


        <div className="showList">
          <table>
            <tbody>
              {
                list.map((elem, index) =>{
                    return <tr className='table-row' key={index}>
                          <td>{index}</td>
                          <td>{elem}</td>
                          <tr>
                          <button id='addhandler' onClick={() => navigate('/update')}>update</button>
                          <button id='addhandler' onClick={() => removeBtn(index)}>Remove</button>
                          </tr >
                      </tr>
                })
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default Todo
