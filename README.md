# REACT-Employee-Directory

## Overview
This is a simple application built with React. It pulls information of 200 random imaginary users and displays some of that information, sorted alphabetically on first name of the users. The uses can be searched by first, last, or full name.

## functionality
This app is built with React.js, and uses React Hooks technology. The API call is within a useEffect lifecycle hook, and state information is passed to the various componenets using the context API and useContext hook. The searching is performes by a ternary operator that triggers if there is a search term when a button is pressed (when the button is pressed, the search term is stored in state and passed down to the displaying componenet using context). If there IS a search term, the app filters out users that dont fit the search and displays the remaining users. Both the full display and the filtered display are sorted alphabetically using a custum sorting function.

## Deployed link
https://tzvik15.github.io/REACT-Employee-Directory/
