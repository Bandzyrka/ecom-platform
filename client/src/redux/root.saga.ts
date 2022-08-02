import { call, all } from "typed-redux-saga";

import { shopSagas } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.sagas'

export default function* rootSaga() {
    yield all([call(shopSagas), call(userSagas), call(cartSagas)])
}