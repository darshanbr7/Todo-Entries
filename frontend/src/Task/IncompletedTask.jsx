import React from 'react'
import axios from "axios"

const IncompletedTask = () => {
  async function addTask(){

    if(task===""){
      alert("task not to be empty")
    } else{
    try{
       await axios.post("http://localhost:8080/todo/add",{
        value:task,
        valueType:taskType
       })
       alert("task added succesfully")
    }catch(error){
      alert(error)
    }
  } 
}
  const[task,setTask]=React.useState("")
  let taskType="Pending"

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 mt-5">
          
          <div className="row mt-5">
            <form onSubmit={addTask} >
            <div className="form-group">
              <label>ADD TASK</label>
            <input type="text"  className='form-control'  value={task} onChange={(e)=>{setTask(e.target.value)}}/>
            </div>
              <center>
                <button className='btn btn-primary'>Add</button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default IncompletedTask