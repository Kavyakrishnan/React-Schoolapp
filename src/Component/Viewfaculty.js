import React from 'react'
import Header from './Header'

const Viewfaculty = () => {
    var  Faculty=[
        {
"name":"Manoj",
"education":"Bsc",
"address":"xxx",
"mobileno":"76435678",
"pincode":"678905",
"district":"Alappuzha",
        },
        {
            "name":"Midhun",
            "education":"Mcom",
            "address":"xxx",
            "mobileno":"95784894",
            "pincode":"657845",
            "district":"Pathanamthitta",
                    },
                    {
                        "name":"Kiran",
                        "education":"MBA",
                        "address":"xxx",
                        "mobileno":"985894784",
                        "pincode":"674448",
                        "district":"Thiruvalla",
                                },
    ]
   
  return (

    <div><Header/>
    <div class="Container">
    <div class="row g-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-4">
            <table class="table">
  <thead>
    <tr>
    <th scope="col">No</th>
    <th scope="col">Name</th>
    <th scope="col">Education</th>
    <th scope="col">Address</th>
    <th scope="col">Mobileno</th>
    <th scope="col">Pincode</th>
    <th scope="col">District</th>

    </tr>
  </thead>
  <tbody>
     
      {Faculty.map((value,key)=>{
return<tr>

<th scope="row">1</th>
      <td>{value.name}</td>
      <td>{value.education}</td>
      <td>{value.address}</td>
      <td>{value.mobileno}</td>
      <td>{value.pincode}</td>
      <td>{value.district}</td>
</tr>
      })}
    
    
  </tbody>
</table>                
                
        </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Viewfaculty