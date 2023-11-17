import React, { Fragment } from 'react';
import Link from 'next/link';

const LogoImage = ({ logo }) => {
    console.log(logo)
    return (
        <Fragment>
            <Link href={'/'} >
                <a>
                    <img src={`/assets/images/logo.png`} alt="" className="img-fluid"  style={{width:"116px"}}/>
                </a>
            </Link>
        </Fragment>
    )
}

export default LogoImage;