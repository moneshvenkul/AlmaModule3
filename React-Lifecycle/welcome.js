import React from 'react'
import Grandchild from './grandchild';

function Welcome(props) {
    
    return <Grandchild props={props}/>
}

export default Welcome;