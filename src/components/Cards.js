import React, { Component } from "react";

import Card from "./Card";
import styles from "./Cards.module.css";

import iphonex from "../images/iphone1.png";
import iphone1 from "../images/iphone2.jpg";
import iphone2 from "../images/iPhone3.jpg";
import iphone3 from "../images/iphone4.jpg";

class Cards extends Component {
    constructor() {
        super()
        this.state = {
            phoneDeta : [{id:1 , image:iphonex , name:"Iphone 13" , cost:"800 $"} ,
                         {id:2 , image:iphone1 , name:"Iphone 13" , cost:"600 $"},
                         {id:3 , image:iphone2 , name:"Iphone 13" , cost:"550 $"},
                         {id:4 , image:iphone3 , name:"Iphone 13" , cost:"500 $"},
        ]
        }
    }
    render() {
         
        return (
            <div className={styles.container}>
                {this.state.phoneDeta.map(phone => <Card key={phone.id} image={phone.image} name={phone.name} cost={phone.cost} id={phone.id} /> )}
            </div>
        );
    }
}

export default Cards;