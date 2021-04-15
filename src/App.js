import React,{useEffect,useState} from 'react';

const geoapi = "https://freegeoip.app/json/"; // api url variable for geo location
const gitapi ="https://api.github.com/users"; // api url variable for git users
const d = new Date().toDateString();            // new date variable     


const App = () => {


const [data,setData] = useState([]);          // state declaration for data
const [users,setUsers] = useState([]);        // state declaration for users

const getData = async()=> {                   // asyn function for data fetching from api
    
    const response = await fetch(geoapi)      // await fetch method from api url var
    const data = await response.json();       // converting response into json file
    setData(data);                            // setting the api data to setstate function
} 

const getUsers = async()=> {                  // asyn function for data fetching from api
    
    const responseGit = await fetch(gitapi)   // await fetch method from api url var
    const   users = await responseGit.json()  // setting the api data to setstate function
    setUsers(users);                          // setting the api data to setstate function
}

useEffect(()=> {                              // use effect func to to invoke fetch funcs
    getData()
    getUsers()
 },[])                                        // empty array in dependancy to run use effect only once after innitial render of page 


const {zip_code,city,region_name,country_name} = data   // destructing the object properties
//const {avatar_url,login,id} = users


    return (
        <div className="cont">         
             <h1 className="main-h">GitHub Users</h1>
           <div className="grid-d">
                { users.map((user)=>{                                // map to iterate through each user
                    const {avatar_url,login,id,type} = user;
                 return <div className="mp">
                     <img src={avatar_url} alt="" />
                     <div className="nm">
                          <h2>{login}</h2>
                     <p>{type}</p>
                     </div>
                    
                 </div>
                } )}
            </div>
            <div className="Dt-sec">
                <h2>Active user from</h2>
                <h3>{zip_code}</h3>
                <h3>{city}</h3>
                <h3>{region_name}</h3>
                <h3>{country_name}</h3>
                <h3>{d}</h3>
            </div>
         
        </div>
    );
}

export default App
