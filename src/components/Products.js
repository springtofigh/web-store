import React, { Component } from 'react';
import styles from './Products.module.css';
import Cards from './Cards';

class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards/>
            </div>
        );
    }
}

export default Products;