import React, { useState } from 'react'
import Header from './Header'

const Addfaculty = () => {
    var[name,setName]=useState("");
    var[education,setEducation]=useState("");
    var[address,setAddress]=useState("");
    var[mobileno,setMobileno]=useState("");
    var[pincode,setPincode]=useState("");
    var[district,setDistrict]=useState("");
    const subData=()=>{
        const data={"name":name,"education":education,"address":address,"mobileno":mobileno,"pincode":pincode,"district":district}
        console.log(data)
    }
  return (
    <div>
        <Header/><div class="Container">
    <div class="row g-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-4">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                 
                    <label for="" class="form-label">Name </label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" class="form-control"/>
                </div>

                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Education </label>
                    <input onChange={(e)=>setEducation(e.target.value)} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <textarea onChange={(e)=>setAddress(e.target.value)} name="" id="" cols="10" rows="5" class="form-control">Address</textarea>
                 
                </div>
               
                
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Mobile No </label>
                    <input onChange={(e)=>setMobileno(e.target.value)} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Pincode </label>
                    <input onChange={(e)=>setPincode(e.target.value)} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> 
                <label for="" class="form-label"> District </label>
                    <input onChange={(e)=>setDistrict(e.target.value)} type="text" class="form-control"/></div>
        
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"> 
            <button onClick={subData} class="btn btn-success">Login</button>
            </div>
        </div>
        </div>
    </div>
</div></div>
  )
}

export default Addfaculty