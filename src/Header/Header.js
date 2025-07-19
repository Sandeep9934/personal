import React from 'react';
import "./Header.css"
function Header() {
    return (
       <div className='main'>
       <div className='logo'>
        <p>Brand</p>
       </div>
       <div className='input'><input type="text" placeholder='Search Your Product'/></div>
       <div className='login'>Login</div>
       <div className='cart'>Cart</div>
       </div>
    );
}

export default Header;
