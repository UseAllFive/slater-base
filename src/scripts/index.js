import '../styles/main.scss'
import '@/lib/select.js'
import app from '@/app.js'
import { fetchCart } from '@/lib/cart.js'

/**
 * load any data that your site needs on fist load
 */
Promise.all([fetchCart()]).then(([cart]) => {
    /**
     * add the cart data to the picoapp instance
     */
    app.hydrate({ cart })

    /**
     * mount any components defined on the page
     */
    app.mount()
})
