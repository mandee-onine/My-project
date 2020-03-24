import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart, addQuantity, subtractQuantity } from './actions/cartActions'
import { Link } from 'react-router-dom';
import '../index.css'
// import axios from 'axios';
import { Button, Popup } from 'semantic-ui-react'
import Footer from '../Footer/Footer';

class Home extends Component {


    handleClick = (id) => {
        this.props.addToCart(id);
    }

    _increaseQuantity = (id) => {
        this.props.addQuantity(id, 1);
    }

    _decreaseQuantity = (id, quantity) => {
        if (quantity > 1) {
            this.props.subtractQuantity(id, -1);
        }

    }


    render() {
        let itemList = this.props.items.map(item => {
            return (
                <div className="card" key={item.id}>

                    <div className="card-image">
                        <Popup
                            trigger={
                                <Link to="/" onClick={() => { this.handleClick(item.id) }}> <img src={item.img} alt={item.title} /></Link>
                            }
                            content='Mandee is undergoing revam will be back soon!!!!'
                            background="green"
                            inverted
                        />
                        <span className="card-title" style={{ fontSize: "20px" }}>{item.name}</span>

                    </div>
                    <h6 onClick={() => { this.handleClick(item.id) }} type="button">
                        <Link to="/">
                            <span className="btn green" onClick={() => { this._increaseQuantity.bind(item.id) }}><i className="material-icons">add</i></span>
                        </Link> : <span>Qty</span> {item.quantity}
                    </h6>

                    <div className="card-content">
                        {/* <p>{item.desc}</p> */}
                        <p><b>Selling Price: {item.price} ₹</b></p>
                        <p style={{ color: "red" }}><b><strike>MRP: {item.MRP} </strike></b></p>
                    </div>
                </div>

            )
        })

        return (
            <div className="container-fluid">

                <div className="container placeOrder">
                    <div id="quickLink">
                        <Link to="/">
                            <Popup
                                trigger={
                                    <img src="https://icon-library.net/images/order-icon-png/order-icon-png-26.jpg" alt="chat" />
                                }
                                content='This feature will be implement in next version!!!!'
                                inverted
                            />
                            <p className="font-weight-bolder">Place an Order </p>
                        </Link>
                        <Popup
                            trigger={
                                <a href="/" id="cancelorder">
                                    <img src="data:image/png;base64,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" className="mb-2" alt="chat" />
                                    <p className="font-weight-bolder">Return/Cancel Order</p>
                                </a>
                            }
                            content='This feature will be implement in next version!!!!'
                            inverted
                        />
                    </div>
                </div>
                <div className="responsive">
                    <img className="" src="https://mandeeonline.com/Assets/img/banner-landing-page_new.jpg" alt="" width="100%" />
                    <div className="Btn">
                        <button className="btn-1">Signup</button>
                        <button className="btn-1"><a href="#">Download App</a></button>
                    </div>
                </div>
                <h5 className="left">Flours</h5><br /><br /><br />
                <div>

                    <div className="box">
                        {itemList}
                    </div>
                </div>
                <h5 className="left">Pulses</h5><br /><br /><br />
                <div>
                    <div className="box">
                        {itemList}
                    </div>
                </div>
                <h5 className="left">Sugar, Salt & Jaggery</h5><br /><br /><br />
                <div>
                    <div className="box">
                        {itemList}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        itemList: state.itemList
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        addToCart: (id) => { dispatch(addToCart(id)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)