import React, { useContext } from "react";
import "./results.css";

import UsersContext from "../../utils/UsersContext";

const Results = () => {
  const test = useContext(UsersContext);

  const sortFun = (a, b) => {
    const nameA = a.name.first.toUpperCase();
    const nameB = b.name.first.toUpperCase();

    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  };

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
          {test.searchTerm === ""
            ? test.users.sort(sortFun).map((item, index) => (
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
            : test.users
                .filter((item, index) => {
                  if (
                    test.searchTerm === item.name.first ||
                    test.searchTerm === item.name.last ||
                    test.searchTerm === item.name.first + " " + item.name.last
                  ) {
                    return true;
                  }
                  return false;
                })
                .sort(sortFun).map((item, index) => (
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
                ))}
        </tbody>
      </table>
    </div>
  );
};
export default Results;
