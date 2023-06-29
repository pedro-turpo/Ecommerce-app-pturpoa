import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/userInfo.slice";
import cart from "./slices/cart.slice";

export default configureStore({
    reducer: {
        /* Here add the global states */
        userInfo,
        cart
    }
}
)