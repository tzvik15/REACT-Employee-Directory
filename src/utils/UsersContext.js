import React from "react";

const UsersContext = React.createContext({
    users: [],
   // searching: false,
    searchTerm: "",
    //searching: () => {}
    onClick: () => undefined
  });
  
  export default UsersContext;