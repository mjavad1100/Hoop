import React from 'react';
// import img1 from '../assets/hope-01.svg';
import styles from './baner.module.css';
const Headertop = () => {
    return (
        <div style={{height:"50px",backgroundColor:"#347676", position:"sticky", top:"0",justifyContent:"center" , alignItems:"center"}}>
            <p className={styles.ptag}>Hoop Change EvereyThing</p>
        </div>
    );
}

export default Headertop;
