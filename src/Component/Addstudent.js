import React from 'react'
import Header from './Header'

const Addstudent = () => {
  return (
    <div>
       <Header/>
        <div class="Container">
    <div class="row g-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-4">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                 
                    <label for="" class="form-label">Name </label>
                    <input type="text" class="form-control"/>
                </div>

                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Roll No </label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                   <textarea name="" id="" cols="10" rows="5" class="form-control">Address</textarea>
                 
                </div>
               
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Admission No </label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Mobile No </label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Class Name </label>
                    <input type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"> 
                <label for="" class="form-label"> Parents Name </label>
                    <input type="text" class="form-control"/></div>
        
           <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"> 
            <button class="btn btn-success">Login</button>
            </div>
        </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addstudent