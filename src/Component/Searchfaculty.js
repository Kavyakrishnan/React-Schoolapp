import React, { useState } from 'react'
import Header from './Header'

const Searchfaculty = () => {
    var [name,setName]=useState("");
    const subdata=()=>{
        const data={"name":name}
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
                
              
        
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"> 
            <button onChange={subdata} class="btn btn-success">Search</button>
            </div>
        </div>
        </div>
    </div>
</div></div>
  )
}

export default Searchfaculty