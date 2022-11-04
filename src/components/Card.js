import React, {Component} from "react";
import { Link } from "react-router-dom";

import styles from "./Card.module.css";
import down from "../images/down.svg";
import up from "../images/up.svg";

class Card extends Component {

    constructor() {
        super();
        this.state = {
            conuter : 0,
        }
    }

    downHandler = () => {
        if (this.state.conuter >= 1) {
            this.setState(prevState => ({
            conuter: prevState.conuter - 1 ,
        }))
    } 
}

        

    upHandler = () => {
        this.setState(prevState => ({
            conuter: prevState.conuter + 1 ,
        }))
    }


    render() {
        const {image, name, cost , id} =this.props;
        const {conuter} = this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="Smart phone" />
                <h3>
                    <Link to={`{/products/${id}`}>{name}</Link>
                </h3>
                <p>{cost} {conuter ? `* ${conuter} = ${conuter * Number(cost.split(" ")[0])} $` : ""}</p>

                <div className={styles.conuter}>
                        <img className={!conuter ? styles.deactive : ""} src={down} alt="arrow" onClick={this.downHandler}/>
                        <span>{conuter}</span>
                        <img src={up} alt="arrow" onClick={this.upHandler}/>
                </div>
            </div>
        );
    }
}

export default Card;