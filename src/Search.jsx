import React from 'react';
import "tachyons";
const Search = ({search,searchChange}) =>{
   
return(
    <div>
        
      <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='Search Robots' name='search'  onChange={searchChange}/> 
    
    </div>

);

}

export default Search;