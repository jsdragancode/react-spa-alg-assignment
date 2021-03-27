import React from 'react';

import styles from './Footer.css';

const footer = (props) => {
    let currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className={styles.Copyright}>
                <span>&#169; IT Promocodes, {currentYear}</span>
            </div>
        </footer>
    );
};

export default footer;