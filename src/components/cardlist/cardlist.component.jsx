import React from "react";
import {Card} from '../card/card.component';
import "./cardlist.styles.css";


export const CardList = ({ monsters }) => (
    <div className="cardlist"> 
    {monsters.map(monster => ( <Card key={monsters.id} monster={monsters} /> 
    ))} 
    </div>
    );
    
export default CardList;