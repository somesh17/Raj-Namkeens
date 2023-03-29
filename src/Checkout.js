import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import Header from './Header';

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
    <Header/>
    <div className='checkout'>
        <div className='checkout__left'>
          {/* <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='checkout_ad_img'
          /> */}
          <h2 style={{width:'1050px', height:'80px'}}>AD Section</h2>
            <div>
              <h3>Hello, {user?.email}</h3>
              <h2 className='checkout__title'>Your Shopping Basket</h2>
              {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
              ))}
              {/* Checkout Product */}
              {/* Checkout Product */}
              {/* Checkout Product */}
              {/* Checkout Product */}
            </div>
        </div>
      
      <div className='checkout__right'>
        <Subtotal />
      </div>

        
    </div>
    </>
  )
}


export default Checkout