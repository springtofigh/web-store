import React, { Component } from 'react';

import styles from './NotFound.module.css';

class NotFound extends Component {
    render() {
        return (
            <div className={styles.container}>
                <h1>Something you search is not found :( </h1>
            </div>
        );
    }
}

export default NotFound;