// import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import CartPage from './common/cart-page';
import React from 'react';
import { Steps } from 'antd';
import Progrerss from './Progress';
const description = 'This is a description';

const Wishliat = () => {
    return (
        <CommonLayout parent="home" title="cart">
            <Progrerss curren={1}/>
            {/* <div className='container mt-4'>

             <Steps
    current={1}
    status="error"
    items={[
      {
        title: 'SHOPPING CART',
       
      },
      {
        title: 'CHECKOUT',
        
      },
      {
        title: 'ORDER STATUS',
        
      },
    ]}
  />
            </div> */}
            <CartPage />
        </CommonLayout>
    )
}

export default Wishliat;