import React from "react"
import cart from '../img/cart.jpg'
import phone from '../img/phone.jpg'

function Home (){
    return(
        <div>
            <div className="add-to-cart">
                <img src={cart}/>
            </div>
            <h2>Home Component</h2>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src={phone}/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        i-Phone
                    </span>
                    <span>
                        price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
export default Home;