import { combineComponents } from '../utils/combainedComponents';
import { ProductsProvider } from "./products_context";
import { FilterProvider } from "./filter_context";
import { CartProvider } from "./cart_context";
import { UserProvider } from "./user_context";

const providers = [
    ProductsProvider,
    FilterProvider,
    CartProvider,
    UserProvider,
]

export const AppContextProvider = combineComponents(...providers);