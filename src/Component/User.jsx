import React from 'react'
import styles from '../Style/User.module.css'
export default function User(props) {

    return (

        <div className={styles.card} >
                <div><img className={styles.img} src={props.image} alt="" /></div>
                <div>{props.firstName} {props.lastName}</div>
                <input className={styles.btn} id={props.id} onClick={props.handlDt} type="button" value="Detail User" /> <br />
                <input className={styles.btn} id={props.id} onClick={props.handlTd} type="button" value="List Des tach" /> <br />   
        </div>
    )
}
