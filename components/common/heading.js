import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
import Animate from '../../pages/layouts/animation/animation';
import {Fade} from 'react-reveal';

const Heading = ({title, inner, line ,hrClass,heading}) => {
    return (
        <>
                <Animate animationType={Fade} right big >
            <div className={`d-flex justify-content-center align-items-center ${title}`}>
            <h4 className={`mt-5 text-center heading text-underline `} style={{color:"#241E1E",fontfamily: "Outfit, Sans-serif",fontSize:"30px",fontWeight:"800",textTransform:"uppercase"}}>{heading}</h4>
              
                        {/* <div className="line"></div> 
                        <hr role="tournament6"></hr> */}
                 
            </div>
                    
                </Animate>
          
        </>
    )
}

export default Heading;