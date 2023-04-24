import axios from 'axios'
import React from 'react'


const TaskList = () => {
    let[element,setElement]=React.useState([])
   
    
    
    React.useEffect(()=>{
         axios.get("http://localhost:8080/todo/get")
         .then((response)=>{
            setElement(response.data)
            
         })
         .catch()
    })

  console.log(element)
  return (
    <>
    <div className="container">
     <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
            <center><h3>All Task's</h3></center>
            <table className='table'>
                <thead>
                    <th></th>
                    <th>Task Name</th>
                    <th>Task Status</th>
                    <th></th>
                </thead>
                <tbody>
                  {
                        element.map((ele,index)=>{
                                return   <tr key={index}>
                                    <button className='btn btn-sm btn-info mt-2' onClick={()=>{
                                    try{
                                          axios.delete(`http://localhost:8080/todo/delete/${ele.value}`)
                                          alert("task deleted succesfully")
                                    }catch(e){
                                      alert(e)
                                    }
                                    }}>delete</button>
                                    <td>{ele.value}</td>
                                    <td>{ ele.valueType}</td>
                                    <button className='btn btn-sm btn-primary mt-2'    onClick={()=>{
                                      try{
                                         axios.put(`http://localhost:8080/todo/update/${ele.value}`,{
                                         "valueType":"Completed"
                                         })
                                        console.log("deleted")
                                        alert("Task Status Changed")
                                      }catch(e){
                                        alert(e)
                                      }
                                    }}> Complete</button>
                                 
                                </tr>
                        })
                  }
                </tbody>
            </table>
        </div>
     </div>
    </div>
    </>
  )
}

export default TaskList