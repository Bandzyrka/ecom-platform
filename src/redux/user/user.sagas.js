import { takeLatest, call, put, all } from "redux-saga/effects";
import { signInSucces, signInFailure } from "./user.actions";
import userActionTypes from "./user.types";
import { googleProvider, auth, createUserProfileDocument } from '../../firebase/firebase.utils'

export function* getSnapShotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(signInSucces({id: userSnapshot.id,  ...userSnapshot.data()}))
    } catch (error) {
        yield put(signInFailure(error))
    }
}

export function* signInWithGoogle()
{
    try {
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}
export function* onGoogleSignInStart(){
    yield takeLatest(userActionTypes.SIGN_IN_WITH_GOOGLE_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: {email, password} }){
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapShotFromUserAuth(user)
    } catch (error) {
        yield put(signInFailure(error))
    }
}
export function* onEmailSignInStart(){
    yield takeLatest(userActionTypes.SIGN_IN_WITH_EMAIL_START, signInWithEmail)
}

export default function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
}