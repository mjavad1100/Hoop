import React from 'react';
import img1 from '../assets/hope-01.svg';
import styles from './baner.module.css';
const Headertop = () => {
    return (
        <div style={{height:"50px",backgroundColor:"#2e5b56", display:"flex",justifyContent:"center" , alignItems:"center"}}>
                            <img src={img1}className={styles.baner} style={{ position:"relative",top:"20px", width:"120px",justifyItems:"center", height: "60px" }}/>

        </div>
    );
}

export default Headertop;
