
import { useEffect, React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/UserSlice';
import { useParams } from "react-router";
import styles from '../Style/Info.module.css'
import MoonLoader from "react-spinners/ClipLoader";
import lods from '../Style/loading.module.css';

export default function DetailUser() {



    const { id } = useParams();

    console.log(id)
    //read api
    const users = useSelector(state => state.user.data.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser());
    }, []);




    try {
        const userInfo = users.filter(item => (item.id == id))[0]
        console.log(userInfo)


        return (
            <div>
                <h1 className={styles.titlebig} >DetailUser</h1>
                <div className={styles.parent} >

                    <div >
                        <h2 className={styles.titel} >personell info</h2>
                        <div>
                            <div className={styles.back} ><img src={userInfo.image} alt="" /></div>
                            <div className={styles.parentinfo} >
                                <div>
                                    <h3 className={styles.tit} >firstName</h3>
                                    <p>{userInfo.firstName}</p>
                                </div>

                                <div>
                                    <h3 className={styles.tit} >lastName</h3>
                                    <p>{userInfo.lastName}</p>
                                </div>

                                <div>
                                    <h3 className={styles.tit} >age</h3>
                                    <p>{userInfo.age}</p>
                                </div>

                                <div>
                                    <h3 className={styles.tit} >gender</h3>
                                    <p>{userInfo.gender}</p>
                                </div>
                                <div>
                                    <h3 className={styles.tit} >birthDate</h3>
                                    <p>{userInfo.birthDate}</p>
                                </div>
                                <div>
                                    <h3 className={styles.tit} >bloodGroup</h3>
                                    <p>{userInfo.bloodGroup}</p>
                                </div>
                                <div>
                                    <h3 className={styles.tit} >eyeColor</h3>
                                    <p>{userInfo.eyeColor}</p>
                                </div>
                                <div>
                                    <h3 className={styles.tit} >eyeColor</h3>
                                    <p>{userInfo.eyeColor}</p>
                                </div>
                                <div>
                                    <h3 className={styles.tit} >weight</h3>
                                    <p>{userInfo.weight}</p>
                                </div>
                                <div>
                                    <h3 className={styles.tit} >height</h3>
                                    <p>{userInfo.height}</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h2 className={styles.titel}  >Contact Info</h2>
                        <div className={styles.parentinfo} >
                            <div>
                                <h3 className={styles.tit} >email</h3>
                                <p>{userInfo.email}</p>
                            </div>

                            <div>
                                <h3 className={styles.tit} >phone</h3>
                                <p>{userInfo.phone}</p>
                            </div>

                            <div>
                                <h3 className={styles.tit} >address</h3>
                                <p>{userInfo.address.address}</p>
                            </div>

                            <div>
                                <h3 className={styles.tit} >department</h3>
                                <p>{userInfo.department}</p>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
        )

    } catch (error) {

        <MoonLoader className={lods.lod} size={100} color="#36d7b7" />

    }


}
