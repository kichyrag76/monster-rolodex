import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {CardList} from './components/cardLists/cardList.component'
import {SearchBox} from './components/search-box/searchBox.component'

//Instead of the function we can also use the class to render the html
class MonsterApp extends Component {
  //This is a class using render function to do the same thing
  //what App function does
  constructor(){
    super();
    //Component constructor gives us access to the state variable
    /** 
    this.state = {
      monsters : [
          {
              name : "Frankestein",
              id :"100"
          },
          {
            name : "Dracula",
            id:"101"
        },
        {
            name : "Zombie",
            id : "102"
        }
      ]
    };
    **/
    this.state = {
        monsters :[],
        searchField: ''
    };

    //Lecture 39 using the Class Methods and Arrow function. Replacing e=> to function call 
    //Binding the function context so this keyword works properly inside of function
    this.handleChange = this.handleChange.bind(this);
  }

  //One of the Lifecycle method is the componentDidMount and using the we are going to fetch data from rest
  componentDidMount(){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then (users => {
          console.log(users);
          return users;
      })
      .then(users => this.setState({monsters: users}));
  }

  // Exercise 39 using Bind
  handleChange(e) {
      this.setState({searchField : e.target.value});
  }

  render(){
     /*Destructuring*/
    const {monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
        )  
      /**
      return (
          <div className="MonsterApp">
          <CardList name = "Raghu">
              <h1> Raghu Krishnamurthy</h1>
              {
                  this.state.monsters.map(monster => (
                      <h1 key = {monster.id}>{monster.name}</h1>
                  ))
              }
          </CardList>
          </div>
        );
  }**/
      /** Lecture 33 Part 1 - search filed with target value.
      return (
          <div className="MonsterApp">
              <input type='search' placeholder='search monster' onChange={e => console.log(e.target.value)}/>
          <CardList monsters = {this.state.monsters} />
          </div>
        );
        */
       /* Lecture 33 Part 2 - Search field with setting state of the search field
       return (
        <div className="MonsterApp">
            <input type='search' 
                placeholder='search monster' 
                onChange={e => {
                    this.setState({searchField: e.target.value}, ()=> console.log(this.state));
                }}/>
        <CardList monsters = {this.state.monsters} />
        </div>
      );
      */

      /* Lecture 33 Part 3 - Search field with setting state of the search field cleaner version
      return (
        <div className="MonsterApp">
            <SearchBox
                placeholder = 'search Monsters'
                handleChange = { e => this.setState({searchField: e.target.value})  } 
            />
        <CardList monsters = {filteredMonsters} />
        </div>
      );
      */
     //Lecture 39 using the Class Methods and Arrow function. Replacing e=> to function call
      return (
        <div className="MonsterApp">
            <h1>Monster Rolodex</h1>  
            <SearchBox
                placeholder = 'search Monsters'
                handleChange = { this.handleChange} 
            />
        <CardList monsters = {filteredMonsters} />
        </div>
      );
  }
}
export default MonsterApp;
