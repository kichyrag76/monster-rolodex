import React from 'react';
import './cardList.styles.css'
import {Card} from '../card/card.component'

//Lecture 30 part 1
/**
export const CardList = (props) => (
 <div className = 'cardList'>
            {props.monsters.map(monster => (
                <h1 key = {monster.id}>{monster.name}</h1>
            ))}
    </div>
);
**/

//Lecture 30 Part 2 to use card component to style and card list to display the cardList
export const CardList = (props) => (
    <div className = 'cardList'>
               {props.monsters.map(monster => (
                <Card key = {monster.id} monster = {monster} />
               ))}
       </div>
   );
//Lecture 29
/**
 * export const CardList = props =>{
 * console.log(props);
 * return <div> {props.children} </div>;
 * }
 */