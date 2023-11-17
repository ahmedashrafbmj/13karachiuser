// import React from 'react';
// import CommonLayout from '../../../components/shop/common-layout';
// import CartPage from './common/cart-page';
import React from 'react';
import { Steps } from 'antd';
// const description = 'This is a description';

const Progrerss = ({curren}) => {
    return (
       
            <div className='container mt-4'>

             <Steps
    current={curren}
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
            </div>
        
    )
}

export default Progrerss;