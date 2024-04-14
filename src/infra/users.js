import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

export function userLogin(setUser, userData) {
    signInWithEmailAndPassword(auth, userData.email, userData.password)
        .then((credenciais) => {
            setUser((obj) => {
                const r = {
                    ...obj,
                    ["email"]: userData.email,
                    ["id"]: credenciais.user.uid,
                };
                return r;
            });
            alert("You have successfully logged in!");
        })
        .catch((error) => {
            alert("Invalid login: " + error.message);
        });
}

export function userLogout(setUser) {
    signOut(auth).then(() => {
        setUser({ id: "", email: "", password: "" });
    });
}

export function createAccount(user, setUser) {
    createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((credenciais) => {
            setUser((obj) => {
                const r = {
                    ...obj,
                    ["id"]: credenciais.user.uid,
                };
                return r;
            });
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert("Error creating account: " + errorMessage);
        });
}