import React from 'react';
// import img1 from '../assets/hope-01.svg';
import styles from './baner.module.css';
const Headertop = () => {
    return (
        <div style={{height:"60px",backgroundColor:"black", display:"flex",justifyContent:"center" , alignItems:"center"}}>
            <p className={styles.ptag}>Hoop Can Change EvereyThing</p>

        </div>
    );
}

export default Headertop;
