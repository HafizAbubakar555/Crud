import { useState } from "react";



function App() {
  const [data , setData] =useState([]);
  const [fullName , setFullname]=useState("");
  const [fullEmail , setFullEmail]=useState("");
  const [fullAge , setFullAge]=useState("");
  const [btn , setBtn]=useState("Submit");
  const [idx , setIdx]=useState("");


  const fullname = (e)=>{
    setFullname(e.target.value)
  }
  const fullemail = (e)=>{
    setFullEmail(e.target.value)
  }
  const fullage = (e)=>{
    setFullAge(e.target.value)
  }

// create function
  const create = ()=>{
    let newData = [...data]
    let object = {
      name:fullName,
      email:fullEmail,
      age:fullAge,
    }
    if (fullName == "" || fullEmail == "" || fullAge == ""){
      alert("Please fill your full Form")
    }else{
      newData.push(object);
      setData(newData)
    }
  }

// delete function

const handleDelete= (index)=>{
  if(window.confirm("Are you sure to delete this user")){
    const newData = data.filter((x,dIndex)=> dIndex !== index)
    setData(newData);
  }
    
}

// edit function
const handleEdit= (index)=>{
  let newData = data[index];
  setFullname(newData.name);
  setFullEmail(newData.email);
  setFullAge(newData.age)
  setIdx(index);
  setBtn("Save")
}


//updat function
const update = ()=>{  
  const newData = idx;
  console.log(newData)
  let index = data[newData]
  console.log(index)
  index.name = fullName;
  index.email=fullEmail;
  index.age=fullAge;

  setBtn("Submit")
}




  const handleSumbit = ()=>{
    let choise = btn ==="Submit";

    if(choise){
      create();
      setFullname('');
      setFullEmail('');
      setFullAge('');
    }else{
      update();
      setFullname('');
      setFullEmail('');
      setFullAge('');
    }
  }


  return (
    <div className="w-full flex flex-col justify-center items-center mt-14">
      <h1 className="text-white font-bold text-4xl mb-4">React Crud</h1>
      <div className="bg-blue-900 flex flex-col justify-center items-center p-7 rounded-2xl">
        <form>
          <div className="flex flex-col  p-4">
            <input onChange={fullname} value={fullName} className="w-60 sm:w-96 mb-4 h-12 shadow-inner shadow-gray-600 rounded-3xl placeholder:text-slate-700 text-slate-700 pl-5" type="text" placeholder="Enter your Name" />
            <input onChange={fullemail} value={fullEmail} className="w-60 sm:w-96 mb-4 h-12 shadow-inner shadow-gray-600 rounded-3xl placeholder:text-slate-700 text-slate-700 pl-5" type="email" placeholder="Enter your Email" />
            <input onChange={fullage} value={fullAge} className="w-60 sm:w-96 mb-4 h-12 shadow-inner shadow-gray-600 rounded-3xl placeholder:text-slate-700 text-slate-700 pl-5" type="number" placeholder="Enter your Age" />
          </div>
        </form>
        <button onClick={handleSumbit} className="w-28 h-12 border-2 border-white text-white rounded-3xl hover:bg-white hover:text-blue-900">{btn}</button>
      </div>  

      <table className="w-[80%] mt-20 border-collapse">
        <thead>
          <tr>
            <th className="bg-white text-blue-900 border-2 border-blue-900 py-3 text-lg w-[25%]">Name</th>
            <th className="bg-white text-blue-900 border-2 border-blue-900 py-3 text-lg w-[30%]">Email</th> 
            <th className="bg-white text-blue-900 border-2 border-blue-900 py-3 text-lg w-[10%]">Age</th>
            <th className="bg-white text-blue-900 border-2 border-blue-900 py-3 text-lg w-[30%]">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val,index)=>{
              return(
                <tr key={index}>
                  <td className="bg-white text-blue-900 border-2 border-blue-900 py-3 text-lg w-[25%] text-center">{val.name}</td>
                  <td className="bg-white text-blue-900 border-2 border-blue-900 py-3 text-lg w-[30%] text-center">{val.email}</td> 
                  <td className="bg-white text-blue-900 border-2 border-blue-900 py-3 text-lg w-[10%] text-center">{val.age}</td>
                  <td className="bg-white text-blue-900 border-2 border-blue-900 py-3 text-lg w-[30%] text-center">
                    <button onClick={()=>{handleEdit(index)}} className="w-20 border-2 border-green-900 text-green-900 font-medium rounded-3xl mr-5 hover:bg-green-900 hover:text-white">Edit</button>
                    <button onClick={()=>{handleDelete(index)}}  className="w-20 border-2 border-red-900 text-red-900 font-medium rounded-3xl ml-5 hover:bg-red-900 hover:text-white">Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
