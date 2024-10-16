import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import UseAxiosPublik from "../../Hoks/usehoks/UseAxiosPublik";





export const Authcontext = createContext();
const auth = getAuth(app);

const Authprovaider = ({ children }) => {
    const [user, setuser] = useState();
    const [lodding, setloddin] = useState(true);
    const googleprovider= new GoogleAuthProvider();
    const axiosPulic=UseAxiosPublik();

    const creatUser = (email, password) => {
        setloddin(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
const updetuserProfile= (name,photo) => {
   return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}


    const login = (email, password) => {
        setloddin(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googlelogine = () => {
        setloddin(true);
        return signInWithPopup(auth,googleprovider)
         
    }
    const loguot = () => {
        setloddin(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            if(currentUser){
            // get token and store
            const userinfo= {email : currentUser.email}
                axiosPulic.post('/jwt',userinfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('acces-token',res.data.token)
                    }
                })
            }
            else{
                // do sumthing
                localStorage.removeItem('acces-token')
            }
            setloddin(false)
         
        })
        return () => {
            return unsubscribe
        }
    }, [axiosPulic])



    const Aoutinfo = {
        user,
        lodding,
        creatUser,
        login,
        loguot,
        updetuserProfile,
        googlelogine 
    }

    return (
        <Authcontext.Provider value={Aoutinfo}>
            {children}
        </Authcontext.Provider>
    );
};
Authprovaider.propTypes = {
    children: PropTypes.object
};
export default Authprovaider;