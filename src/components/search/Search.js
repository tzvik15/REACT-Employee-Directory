import React, {useContext} from "react"
import "./search.css";
//import Results from "../results/Results"
import UsersContext from "../../utils/UsersContext"


function Form ({handleClick}) {
    //const state = useContext(UsersContext);
    // const [searchTerm, setSearchTerm] = useState("");
    // const [searching, setSearching] = useState(false);
    

    // useEffect(() => {
    //     if (searching) {
    //         console.log ("here");
    //         console.log(Results);

    //         setSearching(false)
    //     }
    // },[searching])

// const searching=(event)=>{
//     event.preventDefault();
//     let searchedFor = event.target.parentNode.previousElementSibling.value;
//    //state.onClick(searchedFor);
//    handleClick(searchedFor)
   
// }
//searching(event)
//previousElementSibling:
    return (
    <>
      <h2>Search Employees</h2>  
    <form>
        <div className=" input-group">
            
            <input type="text" className="form-control" id="inputFiels" placeholder="John Doe"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2" 
                onClick={(event)=>{let searchedFor = event.target.parentNode.previousElementSibling.value; handleClick(searchedFor) }  }>Button</button>
            </div>
            
        </div>
        <small id="searchHelp" className="form-text text-muted">Search for employee/s by name</small>
    </form>



</>
    )
}
//handleClick(searchedFor)
export default Form;
