import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getUser } from '../Redux/UserSlice';
import styles from '../Style/User.module.css'
import User from './User';
import styless from '../Style/Info.module.css'
import MoonLoader from "react-spinners/ClipLoader";
import lods from '../Style/loading.module.css'

export default function ListUser() {
    

    //read api
    const users = useSelector(state => state.user.data.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    //navigate
    const navigate= useNavigate()
    //functions
    const handlDt = (e)=>{
        navigate(`DetailUser/${e.target.id}`)
    }
    const handlTd = (e)=>{
        navigate(`ListTodo/${e.target.id}`)
    }

    try {
        

        return (
            <>
            <h1 className={styless.titlebig} >List Users</h1>
            
           
            <div  className={styles.cadr} >
                
    
                {users.map(item => (
                    
                    
                        <User id={item.id} handlTd={handlTd} handlDt={handlDt} firstName={item.firstName} lastName={item.lastName} image={item.image} />
                    
                ))}
    
    
    
            </div>
            </>
        )




    } catch (error) {
        
        return(
            <MoonLoader className={lods.lod} size={100} color="#36d7b7" />

        )



    }

   
}
