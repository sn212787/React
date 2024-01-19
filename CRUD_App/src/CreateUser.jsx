import React from "react";

function CreateUser(){

    return(

        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <form>
        <h2>Add User</h2>
        <div className="mb-2">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter Your Name" className="form-control" />
        </div>
        <div>
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter Your Email" className="form-control" />
        </div>
        <div>
        <label htmlFor="">Age</label>
        <input type="text" placeholder="Enter Your Age" className="form-control" />
        </div>
        <button className="btn btn-success">Submit</button>
        </form>
        </div>
    )

}


export default CreateUser