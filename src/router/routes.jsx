import { createBrowserRouter } from 'react-router-dom';
import AppLayout from "../ui/AppLayout";
import Home from "../ui/Home";
import Menu from "../features/menu/Menu";
import Cart from "../features/cart/Cart";
import Order from "../features/order/Order";
import Error from "../ui/Error";
import { loader as pizzaMenu } from "../features/menu/Menu";
import { loader as orderLoader } from "../features/order/Order";
import { action as orderAction } from "../features/order/CreateOrder";
import CreateOrder from "../features/order/CreateOrder";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />,
                loader: pizzaMenu
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/order/new',
                element: <CreateOrder />,
                action: orderAction
            },
            {
                path: '/order/:orderId',
                element: <Order />,
                loader: orderLoader,
                errorElement: <Error />
            }
        ]
    }
]);