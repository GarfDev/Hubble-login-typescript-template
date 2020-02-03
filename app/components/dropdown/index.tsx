import React, { useState, MouseEvent } from "react";

const Dropdown: React.FC = () => {
    const [ displayMenu, setDisplayMenu ] = useState(false)

    function showDropdownMenu(event: MouseEvent) {
        event.preventDefault()
        setDisplayMenu(true)
        document.addEventListener('click', hideDropdownMenu)

        function hideDropdownMenu() {
            setDisplayMenu(false)
            document.removeEventListener('click', hideDropdownMenu)
        };
    };

    return (
        <div  className="dropdown" style = {{background:"red",width:"200px"}} >
         <div className="button" onClick={showDropdownMenu}> My Setting </div>

          { displayMenu ? (
          <ul>
         <li><a className="active" href="#Create Page">Create Page</a></li>
         <li><a href="#Manage Pages">Manage Pages</a></li>
         <li><a href="#Create Ads">Create Ads</a></li>
         <li><a href="#Manage Ads">Manage Ads</a></li>
         <li><a href="#Activity Logs">Activity Logs</a></li>
         <li><a href="#Setting">Setting</a></li>
         <li><a href="#Log Out">Log Out</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>    
       )
}

export default Dropdown