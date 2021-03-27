import React, { Component } from 'react';
import axios from 'axios';

// import styles
import styles from './Services.css';

// import components
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// import icon
import CopyIcon from '../../assets/images/icon_copy.svg';

// import CopyToClipboard
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarNum: 7,
            balance: 213920,
            payout: 159465,
            servicesArray: [],
            filter: '',
            promocode: '',
            activate: false
        }
    }

    componentDidMount() {
        this.getServices();
    }

    // get all services data from mock api
    getServices = () => {
        axios.get(`api/services`)
            .then((res) => {
                this.setState({
                    servicesArray: res.data.services
                });
            })
            .catch((e) => {
                console.error("axios error =>", e.toString());
            });
    }

    // handle the filter value
    handleFilter = e => {
        this.setState({
            filter: e.target.value
        })
    }

    // reset the filter by clicking reset button
    handleFilterReset = () => {
        this.setState({
            filter: ''
        })
    }

    // change the clicked service status to 'Activated'
    handleActivate = id => {
        axios.patch(`api/services/${id}`, {
            activated: true
        })
        .then((res) => {
            this.getServices();
        })
        .catch((e) => {
            console.log(e);
        })
    }

    render () {
        let matchedServices = [];
        let servicesResult = '';

        // get matched services with filter's value
        if ( !this.state.filter ) {
            matchedServices = [...this.state.servicesArray];
        } else {
            for (let key in this.state.servicesArray) {
                if ( this.state.servicesArray[key].title.toLowerCase().includes(this.state.filter.toLowerCase() ) ) {
                    matchedServices.push(this.state.servicesArray[key]);
                }
            }
        }

        // show matched services
        servicesResult = matchedServices.map(service => {
            return (
                <div className={styles.ServicesContents} key={service.id}>
                    <div className={styles.ServicesContent}>
                        <div className={styles.ServicesSummary}>
                            <span>{service.title}</span>
                            <p>{service.description}</p>
                        </div>
                        <div className={styles.PromocodeContent}>
                            <div className={styles.Promocode}>
                                <label>Promocode</label>
                                <div className={styles.PromocodeInputBox}>
                                    <input type="text" id="promocode" value={service.promocode} disabled={true}/>
                                    <CopyToClipboard text={service.promocode}>
                                        <img src={CopyIcon} alt="Copy Icon" />
                                    </CopyToClipboard>
                                </div>
                            </div>
                            <button className={service.activated ? styles.ActivateBonous : styles.InActivateBonous} onClick={() => this.handleActivate(service.id)}>{service.activated ? "Activated" : "Activate bonus"}</button>
                        </div>
                    </div>
                </div>
            );
        });

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
                                <input type="text" id="filter" value={this.state.filter} onChange={this.handleFilter}/>
                            </div>
                            <div className={styles.FilterReset}>
                                <button className={styles.ResetButton} onClick={this.handleFilterReset}>Reset</button>
                            </div>
                        </div>
                        {servicesResult}
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Services;