import React from 'react';
import BeforeFooter from './BeforeFooter';
import FooterNew from './FooterNew';
import Header from './Header';
import HeaderTop from './HeaderTop';
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <>
    <HeaderTop/>
    <Header />
        <div className='home'>
            <div className='home__container'>
                <img
                className='home__image' 
                src="./images/banner.jpeg"
                // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg"
                alt="home banner"
                />

                <div className='home__row'>
                    <Product 
                    id="12342314212"
                    title="Indori Mixture"
                    price={29.99} 
                    rating={5}
                    // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    image="./images/namkeen_08.jpeg"
                    
                    />
                    <Product 
                    id="12342314212"
                    title="Ratlami Mixture"
                    price={29.99}
                    rating={4}
                    // image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    image="./images/namkeen_06.jpeg"
                    />

                    <Product 
                    id="12342314212"
                    title="Ratlami Mixture"
                    price={29.99}
                    rating={4}
                    // image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    image="./images/namkeen_08.jpeg"
                    />

                    <Product 
                    id="12342314212"
                    title="Ratlami Mixture"
                    price={29.99}
                    rating={4}
                    // image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    image="./images/namkeen_06.jpeg"
                    />

                    
                    
                </div>

                <div className='home__row'>
                <Product 
                    id="12342314"
                    title="Indore Namkeen"
                    price={199.99}
                    rating={3}
                    // image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    image="./images/namkeen_06.jpeg"
                    
                    />
                <Product 
                    id="123423144"
                    title="AIndori Mixture"
                    price={98.99}
                    rating={3}
                    image="./images/namkeen_06.jpeg"
                    
                    />
                <Product 
                    id="123423145"
                    title="Indori Mixture"
                    price={98.99}
                    rating={4}
                    image="./images/namkeen_06.jpeg"
                />

                <Product 
                    id="123423145"
                    title="Indori Mixture Indori MixtureIndori MixtureIndori MixtureIndori Mixture"
                    price={98.99}
                    rating={4}
                    image="./images/namkeen_06.jpeg"
                />

                
                    
                </div>

                <div className='home__row'>
                <Product 
                    id="12342314567"
                    title="Indori Namkeen"
                    price={199.99}
                    rating={3}
                    image="./images/namkeen_06.jpeg"
                    
                    />
                
                    
                </div>

                
            </div>
        </div>

        <BeforeFooter />
        <FooterNew />
    </>
  )
}

export default Home