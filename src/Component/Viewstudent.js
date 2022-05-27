import React from 'react'
import Header from './Header'

const Viewstudent = () => {
    var Views=[
        {
            "name":"kavya",
            "rollno":"13",
            "address":"xxxx",
            "admissiono":"33445",
            "mobileno":"98368383",
            "class":"mca",
            "parentsname":"Maya",

        },
        {
            "name":"Arathi",
            "rollno":"3",
            "address":"xxx",
            "admissiono":"38663",
            "mobileno":"98637836",
            "class":"mca",
            "parentsname":"remya",

        },
        {
            "name":"Arush",
            "rollno":"7",
            "address":"xxx",
            "admissiono":"83633",
            "mobileno":"98653633",
            "class":"mca",
            "parentsname":"vidhya",

        },
    ]
  return (
    <div>
        <Header/>
        <div class="Container">
    <div class="row g-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-4">
            <table class="table table-primary">
  <thead>
      <tr>
     <th scope="col">No</th>
     <th scope="col">Name</th>
     <th scope="col">Rollno</th>
     <th scope="col">Address</th>
     <th scope="col">Admissiono</th>
     <th scope="col">Mobileno</th>
     <th scope="col">Class</th>
     <th scope="col">parentsname</th>
     </tr>

  </thead>
  
  <tbody>
      {Views.map((value,key)=>{
          return<tr>

       <th scope="Row">1</th>  
     <td>{value.name}</td>
     <td>{value.rollno} </td>
     <td>{value.address}</td>
     <td>{value.admissiono}</td>
     <td>{value.mobileno}</td>
     <td>{value.class} </td>
     <td>{value.parentsname}</td>
    </tr>
         
      })}
    
    
  </tbody>
</table>
              
                
                
              
                
              
        
           
        </div>
        </div>
    </div>
</div></div>
  )
}

export default Viewstudent