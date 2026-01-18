import { useDispatch, useSelector } from "react-redux";
import CartMenu from "./CartMenu";
import { clearcart } from "../../util/cartSlice";

let Cart=()=>{
    const dispatch = useDispatch();
    const cartCards=useSelector((store)=>store.cart.items);

    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold gradient-text">Your Cart</h1>
              <p className="text-gray-400 mt-1">{cartCards.length} items in your cart</p>
            </div>
            {cartCards.length > 0 && (
              <button 
                onClick={() => dispatch(clearcart())}
                className="flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full hover:bg-red-500/30 transition-all duration-300"
              >
                <span>🗑️</span>
                Clear Cart
              </button>
            )}
          </div>
          
          {/* Cart Content */}
          {cartCards.length === 0 ? (
            <div className="glass-effect rounded-2xl p-12 text-center">
              <div className="text-6xl mb-4">🛒</div>
              <h2 className="text-2xl font-bold text-white mb-2">Your cart is empty</h2>
              <p className="text-gray-400 mb-6">Looks like you haven't added anything yet</p>
              <a href="/" className="btn-primary inline-block">
                Browse Restaurants
              </a>
            </div>
          ) : (
            <div className="glass-effect rounded-2xl overflow-hidden">
              <CartMenu data1={cartCards}/>
              
              {/* Cart Footer */}
              <div className="border-t border-gray-700 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-xl font-bold text-white">
                    ₹{cartCards.reduce((total, item) => {
                      return total + (item.card.info.price || item.card.info.defaultPrice || 0) / 100;
                    }, 0).toFixed(2)}
                  </span>
                </div>
                <button className="btn-primary w-full py-3 text-lg">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
}

export default Cart;