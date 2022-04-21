import { useState } from "react";
import Student from "./Student";

const Search = (props)=> {
    const [StudentID, setId] = useState(null);

    const submitHandler = (e) =>{
        e.preventDefault();        
      //  props.handelCourse(StudentID);
        props.search(StudentID);
    }
    const handelChange = (e) =>{
        setId({StudentID: e.target.value});
    }
    
    return (
        <div>
            <form>
                <span>Enter Student ID:</span>
                <input type="text" name="StudentID" onChange={handelChange} required></input>
                <button type="submit" onClick={submitHandler}>Submit</button>
            </form> 
        </div>
    )
}

export default Search;