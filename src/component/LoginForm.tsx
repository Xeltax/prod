import {inspect} from "util";
import styles from '@/styles/component/LoginForm.module.scss'
import {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion"
import styles2 from "@/styles/component/LoginForm.module.scss";
import {connectUser, User} from "@/pages/api/user";
import {cookies} from "next/headers";
import {signIn, signOut, useSession} from "next-auth/react";

export default function LoginForm(props : { open: boolean }) {

    const loginFormRef = useRef()
    const [loginForm, setLoginForm] = useState(false);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { data: session, status } = useSession()

    const user : User={
        username: username,
        password: password,
        email : "",
        completeName : "",
    }

    useEffect(() => {
        setLoginForm(props.open)
        window.addEventListener('mousedown', handleOutsideClick);
        return () => window.removeEventListener('mousedown', handleOutsideClick);
    }, [props.open]);

    function handleOutsideClick(event:any) {
        // @ts-ignore
        if (loginFormRef.current && !loginFormRef.current.contains(event.target)) {
            setLoginForm(false)
        }
    }

    return (
        <>
            {loginForm && !session &&
                // @ts-ignore
                <motion.div  ref={loginFormRef} className={styles.loginFormContainer}>
                    <h1>Login</h1>
                    <form className={styles.loginForm} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.formGroup}>
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" id="password" name="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className={styles.formGroup}>
                            <button onClick={()=>signIn("credentials",{"username" : username, "password" : password})}>Se connecter</button>
                        </div>
                    </form>
                </motion.div>
            }

            {loginForm && session &&
                <div className={styles.loginFormContainer}>
                    <button onClick={() => signOut()}>Se déconnecter</button>
                </div>
            }
        </>
    )
}