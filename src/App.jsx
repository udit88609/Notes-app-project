import React, { useState } from 'react'
import './index.css'

 const App = () => {
    const[title,newtitle]=useState('')
    const[detail,newdetail]=useState('')
    const[task,newtask]=useState([])


  function submit(elem){
    elem.preventDefault()
    console.log(title,detail)
    newtitle('')
    newdetail('')
   const copytask=[...task]
   copytask.push({title,detail})
   newtask(copytask)
   
   

  }
  function deletenote(idx){
    
    const copytask=[...task]

    copytask.splice(idx,1)
    newtask(copytask)

  }

  
  return (
    <div className='bg-black lg:flex h-screen text-white  '>
      
      <form  onSubmit={function(elem){
        submit(elem)}} className='flex flex-col lg:w-1/2 p-10 gap-5 ' >
        <h1 className='font-bold text-3xl'>
          Add Notes
        </h1>
     <input 
       
      className='px-5 py-2 w-full border-2 rounded-2xl'
      type='text'
       placeholder=' Enter task '
       value={title}
       onChange={function(elem){
        newtitle(elem.target.value);
       
       }}/>
   <textarea  
   value={detail}
   onChange={function(elem){
    newdetail(elem.target.value)
   }}
   className='px-5 py-5  border-2 rounded-2xl'  type='text' placeholder='Enter detail'/>
    <button className='bg-amber-50 active:scale-95  text-black py-2 rounded-2xl'>Add notes</button>
    

     </form>
     <div className='gap-5 lg:border-l-2 p-10 lg:w-1/2  bg-gray-900  '>
     <h1 className='text-3xl  font-bold'> Your notes</h1>
     <div className='flex overflow-auto h-[90%] items-start justify-start   flex-wrap gap-5 m-5'> 

      {task.map(function(elem,idx){
       return( <div key={idx}  className='bg-amber-100  h-50 w-40 flex  flex-col justify-between px-4 py-2  rounded-2xl'>
       <div>  <h3 className='text-black  font-bold text-2xl underline'> {elem.title}</h3>
       <p className='text-black mt-2 text-gray text-xs '> {elem.detail}</p>
       </div>

       <button onClick={function(){
        deletenote(idx)

       }} className='text-black font-bold px-2 py-1 bg-gray-500 rounded-xl active:scale-90'> Delete </button>
      
       </div>
       )
      })}
      

         
   
      </div>
       

      </div>
       
      
     
   
    </div>
  )
}

export default App
