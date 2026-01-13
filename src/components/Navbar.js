function Navbar({ cartCount, openCart }) {
    return (
        <nav className="navbar">
            <h1>Cart Application</h1>
            <button onClick={openCart}>
                Cart ({cartCount})
            </button>

        </nav>
    )

}
export default Navbar;