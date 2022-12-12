import { useEffect, React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../Redux/TodoSlice';
import { useParams } from "react-router";
import styles from '../Style/Todo.module.css'
import styless from '../Style/Info.module.css'
import { FcApproval, FcHighPriority } from "react-icons/fc";
import MoonLoader from "react-spinners/ClipLoader";
import lods from '../Style/loading.module.css'



export default function ListTodo() {
    const { id } = useParams();
    //read api
    const todos = useSelector(state => state.todo.data.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodo());
    }, []);

    try {

        
        const tach = todos.filter(item=>(item.userId==id))
        console.log(tach)

        return (
            <>            
            <h1 className={styless.titlebig} >List tache</h1>
            <div className={styles.parent} >
                
                {tach.map(item=>(
                    <div className={styles.child} >
                        <h2 className={item.completed?styles.com:styles.uncom} >{item.completed?<FcApproval/>:<FcHighPriority/>} {item.completed?"Completed":"UnCompleted"}</h2>
                        <h3 className={styles.hello} >User Id</h3> <h5>{item.userId}</h5>
                        <h3 className={styles.hello} >Tache</h3> <h5>{item.todo}</h5>
                        <h3 className={styles.hello} >Id tach</h3> <h5>{item.id}</h5>

                    </div>

                ))}
            </div>
            </>

        )

    } catch (error) {
       
        <MoonLoader className={lods.lod} size={100} color="#36d7b7" />
        
    }


}
