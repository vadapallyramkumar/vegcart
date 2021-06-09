import React from 'react';
import { cartDetails } from '../Static/Cart'

function Cart(props) {
    const card = {
        width: '18%',
        float: "left",
        alignItems: 'center'
    }
    const cardImage = {
        width: "75%",
        maxHeight: '150px'
    }

    return (
        <>
        {
            cartDetails.map((item) => {
                return (
                    <div className="card m-2" style={card}>
                        <img src={item.path} style={cardImage} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-primary" onClick={props.addCount}>Add to cart</button>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default Cart
