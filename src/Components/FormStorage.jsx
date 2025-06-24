// import { useState } from "react";

// function FormStorage(){
//     const [user,setUser]=useState({
//     name:"Mrunay",
//     sname:"Katole",
//     mob:8459847402
// })
//     function setData(){
//         localStorage.setItem("user",JSON.stringify(user))
//     }
//     function getData(){
//      let newUser= JSON.parse(localStorage.getItem ("user"))
//      console.log(newUser)
//     }
//     return(
//         <>
//         <div id="form">
//         <h1>Local/Sessional Storage</h1>
//         <button onClick={()=>setData()}>Set-Data</button>
//         <button onClick={()=>getData()}>Get-Data</button>
//         </div>
//         </>
//     );
// }
// export default FormStorage;

import { useState } from "react";

function FormStorage(){
    const[user,setUser]=useState({
        name:"",
        sname:"",
        email:"",
        info:"",
        gender:"",
        num:""
    })
    function handlechange(event){
        let {name,value}=event.target;
        setUser((prev)=>({...prev,[name]:value}));
    }
    function setData(){
        localStorage.setItem("user",JSON.stringify(user))
    }
    function getData(){
       let newUser= JSON.parse(localStorage.getItem("user")) 
       console.log(newUser)
    }
    function senddata(e){
        e.preventDefault();
        setUser({
            name:"",
            sname:"",
            email:"",
            info:"",
            gender:"",
            num:""
        })
        console.log(setData())

    }
    function showData(){

    }
    return(
        <>
        <form onSubmit={senddata}>
            <lable>First-Name:</lable><br/>
            <input type="text" placeholder="Enter F-Name" name="name" value={user.name} onChange={handlechange}/>
            <lable>Last-Name:</lable><br/>
        <input type="text" placeholder="Enter S-Name" name="sname" value={user.sname}  onChange={handlechange}/>
        <lable>Email-Id:</lable><br/>
        <input type="email" placeholder="Enter Email-id" name="email" value={user.email} onChange={handlechange}/>
        <lable>Mob/Ph.No::</lable><br/>
        <input type="number" placeholder="Enter Mob" name="num" value={user.num} onChange={handlechange}/>
        <label>Gender:</label><br/>
        <input type="radio" name="gender" value={user.gender} onChange={handlechange}/>Male
        <input type="radio" name="gender" value={user.gender} onChange={handlechange}/>Female
        <input type="radio" name="gender" value={user.gender} onChange={handlechange}/>Other
        <br/>
        <lable>Additional-Info:</lable>
        <textarea name="info"  rows="10" value={user.email} onChange={handlechange}></textarea>
        <button type="submit">Save to LocalStorage</button>
        <button type="button" onClick={getData}>Load from LocalStorage</button>
        </form>
        <h1>Name:- {user.name}</h1>
        <h1>S-name:- {user.sname}</h1>
        <h1>Email-Id:- {user.email}</h1>
        
        </>

    );
}
export default FormStorage;