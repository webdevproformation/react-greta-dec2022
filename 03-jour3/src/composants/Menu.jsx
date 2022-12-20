const Menu = ( {titre} ) => {
    return ( 
        <div className="bg-warning">
            <nav className="navbar navbar-expand container">
                <span className="navbar-nav">{ titre }</span>
            </nav>
        </div>
     );
}
 
export default Menu;