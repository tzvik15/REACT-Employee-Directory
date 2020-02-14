import React, { useState, useEffect, useContext } from "react";
import "./results.css";
//import API from "../../utils/API";
import UsersContext from "../../utils/UsersContext"

const Results = () => {
  // const [usersState, setUsersState] = useState({
  //   users: []
  // });
  const test = useContext(UsersContext);

 

  return (
    
    <div>
      <table className="table table-striped table-light">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Phone #</th>
            <th scope="col">Picture</th>
          </tr>
        </thead>
        <tbody>
          {

          test.searchTerm === "" ?
          (test.users.map((item, index) => (
            <>
              <tr>
                <td>{index + 1}</td>
                <td>{item.name.first + " " + item.name.last}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
                <td>{item.phone}</td>
                <td>
                  <img src={item.picture.thumbnail} alt=""></img>
                </td>
              </tr>
            </>
          ))
          ) : (
            <>
            <h1>{test.users.filter()}</h1>
            </>
          )
          
          }
        </tbody>
      </table>
    </div>
    
  );
};

export default Results;
