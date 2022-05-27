import React, { useState } from 'react'
import Header from './Header'

const Searchstudent = () => {
  var [admissionno,setAdmissionNo]=useState("");
  const subdata=()=>{
    const data={"admissionno":admissionno}
    console.log(data)
  }
  return (
    <div>
       <Header/>
         <div class="Container">
    <div class="row g-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-4">
              
                
                
               
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Admission No </label>
                    <input onChange={(e)=>setAdmissionNo(e.target.value)} type="text" class="form-control"/>
                </div>
                
              
        
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"> 
            <button onClick={subdata} class="btn btn-success">Search</button>
            </div>
        </div>
        </div>
    </div>
</div></div>
  )
}

export default Searchstudent