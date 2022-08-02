import { takeLatest, call, put, all } from "typed-redux-saga";
import { USER_ACTION_TYPES } from '../user/user.types';
import { clearCart } from './cart.actions'

export function* clearCartOnSignOut() {
    yield* put(clearCart())
}
export function* onSignOutSucces() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}
export function* cartSagas() {
    yield* all([call(onSignOutSucces)])
}