import React, { Component } from 'react';

import styles from './Services.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CopyIcon from '../../assets/images/icon_copy.svg';

class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarNum: 7,
            balance: 213920,
            payout: 159465
        }
    }

    render () {
        return (
            <div>
                <Sidebar />
                <div className={styles.Container}>
                    <Header balance={this.state.balance} payout={this.state.payout}/>
                    <div className={styles.MainContent}>
                        <div className={styles.ContentTitle}>
                            <h2>Services</h2>
                        </div>
                        <div className={styles.FilterContent}>
                            <div className={styles.FilterBox}>
                                <label>Filter</label>
                                <input type="text" id="filter" name="filter"/>
                            </div>
                            <div className={styles.FilterReset}>
                                <button className={styles.ResetButton}>Reset</button>
                            </div>
                        </div>
                        <div className={styles.ServicesContents}>
                            <div className={styles.ServicesContent}>
                                <div className={styles.ServicesSummary}>
                                    <span>Sitecostructor.io</span>
                                    <p>Description</p>
                                </div>
                                <div className={styles.PromocodeContent}>
                                    <div className={styles.Promocode}>
                                        <label>Promocode</label>
                                        <div className={styles.PromocodeInputBox}>
                                            <input type="text" id="promocode"/>
                                            <img src={CopyIcon} />
                                        </div>
                                    </div>
                                    <button className={styles.ActivateBonous}>Activate bonus</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ServicesContents}>
                            <div className={styles.ServicesContent}>
                                <div className={styles.ServicesSummary}>
                                    <span>Sitecostructor.io</span>
                                    <p>Description</p>
                                </div>
                                <div className={styles.PromocodeContent}>
                                    <div className={styles.Promocode}>
                                        <label>Promocode</label>
                                        <div className={styles.PromocodeInputBox}>
                                            <input type="text" id="promocode"/>
                                            <img src={CopyIcon} />
                                        </div>
                                    </div>
                                    <button className={styles.ActivateBonous}>Activate bonus</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ServicesContents}>
                            <div className={styles.ServicesContent}>
                                <div className={styles.ServicesSummary}>
                                    <span>Sitecostructor.io</span>
                                    <p>Description</p>
                                </div>
                                <div className={styles.PromocodeContent}>
                                    <div className={styles.Promocode}>
                                        <label>Promocode</label>
                                        <div className={styles.PromocodeInputBox}>
                                            <input type="text" id="promocode"/>
                                            <img src={CopyIcon} />
                                        </div>
                                    </div>
                                    <button className={styles.ActivateBonous}>Activate bonus</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.ServicesContents}>
                            <div className={styles.ServicesContent}>
                                <div className={styles.ServicesSummary}>
                                    <span>Sitecostructor.io</span>
                                    <p>Description</p>
                                </div>
                                <div className={styles.PromocodeContent}>
                                    <div className={styles.Promocode}>
                                        <label>Promocode</label>
                                        <div className={styles.PromocodeInputBox}>
                                            <input type="text" id="promocode"/>
                                            <img src={CopyIcon} />
                                        </div>
                                    </div>
                                    <button className={styles.ActivateBonous}>Activate bonus</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Services;