import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Admission Details</a>
      
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" to="/">Addstudent</Link>
          </li>
          <li class="nav-item">
           <Link class="nav-link" to="/search">Searchstudent</Link>
          </li>
          <li class="nav-item">
           <Link class="nav-link" to="/addf">Addfaculty</Link>
          </li>
          <li class="nav-item">
           <Link class="nav-link" to="/searchf">Searchfaculty</Link>
          </li>
         
          <li class="nav-item">
            <Link class="nav-link"to="/views">Viewstudent</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"to="/viewsf">Viewfaculty</Link>
          </li>
        </ul>
       
       
      </div>
    </div>
  </nav></div>
  )
}

export default Header