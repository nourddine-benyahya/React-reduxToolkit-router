import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from  '../Style/Header.module.css'

export default function Acceuil() {
  return (
    <div>
        <h1 className={styles.header} >Gestion Des tache</h1>
        
        <Outlet/>

    </div>
  )
}
