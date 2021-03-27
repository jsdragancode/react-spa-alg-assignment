import React, {useState } from 'react';

import styles from './Header.css';

const header = (props) => {
    return (
        <header>
            <div className={styles.Container}>
                <div className={styles.PayInfo}>
                    <span>Balance</span>
                    <p>{props.balance.toLocaleString('en-US').replace(',', ' ') } $</p>
                </div>
                <div className={styles.PayInfo}>
                    <span>Payout</span>
                    <p>{props.payout.toLocaleString('en-US').replace(',', ' ') } $</p>
                </div>
            </div>
        </header>
    );
};

export default header;