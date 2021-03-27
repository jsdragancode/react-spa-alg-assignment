import React, { Component } from 'react';

import styles from './Sidebar.css';

// import icons
import Logo from '../../assets/images/logo.svg';
import MenuItemActive from '../../assets/images/icon_active.svg'; 
import MenuItemInactive from '../../assets/images/icon_inactive.svg'; 

class Sidebar extends Component {
    render () {
        const MenuItems = [];
        
        for (let i = 0; i < 8; i ++) {
            MenuItems[i] = (
                <div key={i} className={styles.MenuItemContent}>
                    <img src={i === 6 ? MenuItemActive : MenuItemInactive} alt="Menu Item"/>
                </div>
            )
        }

        return (
            <div className={styles.Sidebar}>
                <div className={styles.Logo}>
                    <a href="/#"><img src={Logo} alt="Logo"/></a>
                </div>
                {MenuItems}
            </div>
        );
    }
};

export default Sidebar;