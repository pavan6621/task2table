import { useState } from "react";
import './App.css';
function Table() {
    let [array,setArray]=useState([])
    let [inputdata,setInputdata] = useState({name:"",lastname:"",mail:"",address:"",number:""})
     let [index,setIndex]=useState()
     let [bolin,setBolin]=useState(true)
     let {name,lastname,mail,address,number} =inputdata;
     let [search,setSearch]=useState([])

    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }
    
    function addinputdata(){
        setArray([...array,{name,lastname,mail,address,number}])
        setInputdata({name:"",lastname:"",mail:"",address:"",number:""})
    }

    function deletedata(i){
        let total=[...array]
        total.splice(i,1)
        setArray(total)
    }
    function updatedata(i){
        let{name,lastname,mail,address,number}=array[i]
         setInputdata({name,lastname,mail,address,number})
         setBolin(true)
         setIndex(i)
    }
    function updateinfo(){
         let total=[...array]
         total.splice(index,1,{name,lastname,mail,address,number})
         setArray(total)
         setBolin(false)
         setInputdata({name:"",lastname:"",mail:"",address:"",number:""})
        
    }
    function seae(e){
        setSearch(e.target.value)
        
        
    }

  
        return (
      <div >
          <from>
         <p>
            
         <h3>Regestration Form</h3>
          name :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type='text' autoComplete='off' name='name' value={inputdata.name ||""} onChange={data} placeholder='Enter Name' /> <br/><br/>
          lastName:
          <input type='text' autoComplete='off' name='lastname' value={inputdata.lastname ||""} onChange={data} placeholder='Enter lastName' /> <br/><br/>
          mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type='mail' name='mail' value={inputdata.mail ||""} onChange={data} placeholder='Enter mail' /> <br/><br/>
          address:&nbsp;&nbsp;&nbsp;&nbsp;
          <input type='text'  name='address' value={inputdata.address ||""} onChange={data} placeholder='Enter address' /> <br/><br/>
          Number:&nbsp;&nbsp;&nbsp;&nbsp;
          <input type='number'  name='number' value={inputdata.number || ""} onChange={data} placeholder='Enter number' /> <br/><br/> 
          <button onClick={!bolin?addinputdata:updateinfo}>{!bolin?'submit':'Update data'}</button>
         </p>
          </from>
           <br/><br/><br/>
           <p>
           <input type="text" onChange={seae}  placeholder='search' />
           <h3>Table</h3>
           <table  >
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Lastname</td>
                    <td>Mail</td>
                    <td>Address</td>
                    <td>Number</td>
                    <td>Update</td>
                    <td>Delete</td>
                </tr>
            {
array && array.filter((j)=>{return search.length!==0? j.name.includes(search):j}).map(
(item,i)=>{
    return(
        <tr>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.mail}</td>
            <td>{item.address}</td>
            <td>{item.number}</td>
            <td><button onClick={()=>updatedata(i)}>Update</button></td>
            <td><button onClick={()=>deletedata(i)}>Delete</button></td>
        </tr>
    )
}

)
            }
            </tbody>
           </table>
           </p>
      </div>
    );
  }
  
  export default Table;