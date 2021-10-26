import React from 'react'

export default function Login() {
    const clickHandler = ()=> {
        console.log("Login Clicked")
    }
    return (
    <div> 
            <h2 class="mb-3 my-3">Login</h2>
            <div class="mb-3 ">
  <label for="exampleFormControlInput1" class="form-label">UserName</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Username"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Password"/>
</div>
<button onClick={clickHandler} type="button" class="btn btn-primary">Login</button>
        </div>
    )
}















