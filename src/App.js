import React, { Component } from 'react';
import CardList from './CardList';
import Search from './Search';
import 'tachyons';
import './App.css';
import Scroll from './Scroll';

class App extends Component {

    constructor(props){
      super(props);
      this.state ={
        Search: '',
        robots: []

      }

    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
        return response.json();


        }).then(users =>
            {
                this.setState(
                    {
                    robots:users
                    }
                );
            }
            )


        
    }

    onSearchChange=(event)=>{

        this.setState(

            {
                Search : event.target.value
            }
        );
       

    }
    render() {

       const filteredRobots = this.state.robots.filter( robot =>{

         return robot.name.toLowerCase().includes(this.state.Search.toLowerCase());
       }

      



       );

       if(this.state.robots.length===0){

        return<h1>Loading</h1>;
       }
       else
       {
        return (
            <div className='tc'>
                <h1  className=''>Robofriends</h1>
                <Search searchChange={this.onSearchChange}/>
                <Scroll> 
                    <CardList  robots={filteredRobots}/>
                </Scroll>
               
                
            </div>
        );
       }
    }
}

export default App;