import React, { useState } from 'react'
import Header from './Header';

const Addstudent = () => {
    var[name,setName]=useState("");
    var[rollno,setRollno]=useState("");
    var[address,setAddress]=useState("");
    var[admissiono,setAdmission]=useState("");
    var[mobileno,setMobileno]=useState("");
   var[sclass,setClass]=useState("");
   var[parentsname,setParents]=useState("");
   const subdata=()=>{
       const data={"name":name,"rollno":rollno,"address":address,"admissionno":admissiono,"mobileno":mobileno,"class":sclass,"parents":parentsname}
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
                 
                    <label for="" class="form-label">Name </label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control"/>
                </div>

                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Roll No </label>
                    <input onChange={(e)=>setRollno(e.target.value)} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <textarea onChange={(e)=>setAddress(e.target.value)} name="" id="" cols="10" rows="5" class="form-control">Address</textarea>
                 
                </div>
               
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Admission No </label>
                    <input onChange={(e)=>setAdmission(e.target.value)} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Mobile No </label>
                    <input onChange={(e)=>setMobileno(e.target.value)} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Class </label>
                    <input onChange={(e)=>setClass(e.target.value)} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> 
                <label for="" class="form-label"> Parents Name </label>
                    <input onChange={(e)=>setParents(e.target.value)} type="text" class="form-control"/></div>
        
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"> 
            <button onClick={subdata} class="btn btn-success">Login</button>
            </div>
        </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addstudent