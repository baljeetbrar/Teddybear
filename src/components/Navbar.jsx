import React from 'react'

const Navbar = () => {
  return (
    <>
       <div className="sticky-navbar">
    <section className="main_logo_list container flex-list">
        <div className="search_bar">
            <div className="header-search">
                <form action="/search" role="search" method="get" name="simpleSearch" novalidate="novalidate" className="search_form">
                    <input type="text" id="search" placeholder="Search" autocomplete="off" />
                    <button type="submit">
                        <span className="search-icon"><i className="bi bi-search"></i></span>
                    </button>
                </form>
            </div>
        </div>
        <div className="web_logo">
            <p><img src="images/workshop-logo-default.png" alt=""/></p>
        </div>
        <div className="login_bar ">
            <ul className="login_bar_list flex-list">
                <li className="sign_up">
                    <p>
                        <span><i className="bi bi-person"></i></span>
                        <span>Log In / Sign Up</span>
                    </p>
                </li>
                <li className="parties">
                    <p>
                        <span><i className="icon-party"><img src="images/party.png" alt=""/></i></span>
                        <span>Parties</span>
                    </p>
                </li>
                <li className="cart">
                    <p>
                        <span><i className="bi bi-bag-heart"></i></span>
                        <span>Bag</span>
                    </p>
                </li>
            </ul>
        </div>
    </section>
    <nav className="navbar_wrapper container">
        <ul className="navbar_list flex-list">
            <li>The Bear Builder</li>
            <li className="dropdown"><span>Giftshop</span>
                <div className="dropdown-wrapper"> 
                    <ul className="main-submenu-wrapper">
                        <span className="see-all-link">Shop All Gifting</span>
                        <ul className="navbar-submenu-col1 vertical-menu">
                            <li className="menu-list-title">FEATURED</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gift Finder</a></li>
                            <li><a>Furever Flower Shoppe</a></li>
                            <li><a>First Responders</a></li>
                            <li><a>HeartBox</a></li>
                            <li><a>Gift Boxes</a></li>
                            <li><a>Pajama Shops</a></li>
                            <li><a>Gift Cards</a></li>
                            <li><a>Embroidered Gifts</a></li>
                            <li><a>Luxury Gifts</a></li>
                        </ul>
                        <ul className="navbar-submenu-col2 vertical-menu">
                            <li className="menu-list-title">OCCASIONS</li>
                            <li className="shop-all"><a>Shop All </a></li>
                            <li><a>Birthday</a></li>
                            <li><a>Pride</a></li>
                            <li><a>Graduation</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Wedding</a></li>
                            <li><a>Get Well</a></li>
                            <li><a>Encouragment</a></li>
                            <li><a>Congratulations</a></li>
                            <li><a>Good Luck</a></li>
                            <li><a>Thank You</a></li>
                        </ul>
                        <ul className="navbar-submenu-col3 vertical-menu">
                            <li className="menu-list-title">INTEREST</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Girl Scouts of the USA</a></li>
                            <li><a>MLB- Baseball</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Disney</a></li>
                            <li><a>NFL - Football</a></li>
                            <li><a>Military</a></li>
                            <li><a>Sports</a></li>
                            <li><a>Soccer</a></li>
                            <li><a>Cheerleading</a></li>
                            <li><a>NHL- Hockey</a></li>
                        </ul>
                        <ul className="navbar-submenu-col4 vertical-menu">
                            <li className="menu-list-title">GIFTS BY RECIPIENT</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts for Baby</a></li>
                            <li><a>Gifts for Couples</a></li>
                            <li><a>Gifts for Kids</a></li>
                            <li><a>Gifts for Adults</a></li>
                            <li><a>Gifts for Teens</a></li>
                            <li><a>Gifts for Mom</a></li>
                            <li><a>Gifts for Dad</a></li>
                            <li><a>Gifts for Teachers</a></li>
                        </ul>
                        <ul className="navbar-submenu-col5 vertical-menu">
                            <li className="menu-list-title">PRICE</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts Under $30</a></li>
                            <li><a>Gifts Under $60</a></li>
                            <li><a>Gifts Over $60</a></li>
                        </ul>
                        <ul className="navbar-submenu-col6 vertical-menu">
                            <li className="menu-list-title">ADDITIONAL INFORMATION</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Corporate Giving</a></li>
                            <li><a>Shop My Store</a></li>
                            <li><a>Shipping Details</a></li>
                        </ul>
                    </ul>
                </div>
            </li>
            <li>Gift Finder</li>
            <li className="dropdown"><span>Stuffed Animals & Clothing</span>
                <div className="dropdown-wrapper"> 
                    <ul className="main-submenu-wrapper stuffed-animal-clothing">
                        <span className="see-all-link">Shop All Gifting</span>
                        <ul className="navbar-submenu-col1 vertical-menu">
                            <li className="menu-list-title">FEATURED</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gift Finder</a></li>
                            <li><a>Furever Flower Shoppe</a></li>
                            <li><a>First Responders</a></li>
                            <li><a>HeartBox</a></li>
                            <li><a>Gift Boxes</a></li>
                            <li><a>Pajama Shops</a></li>
                            <li><a>Gift Cards</a></li>
                            <li><a>Embroidered Gifts</a></li>
                            <li><a>Luxury Gifts</a></li>
                        </ul>
                        <ul className="navbar-submenu-col2 vertical-menu">
                            <li className="menu-list-title">OCCASIONS</li>
                            <li className="shop-all"><a>Shop All </a></li>
                            <li><a>Birthday</a></li>
                            <li><a>Pride</a></li>
                            <li><a>Graduation</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Wedding</a></li>
                            <li><a>Get Well</a></li>
                            <li><a>Encouragment</a></li>
                            <li><a>Congratulations</a></li>
                            <li><a>Good Luck</a></li>
                            <li><a>Thank You</a></li>
                        </ul>
                        <ul className="navbar-submenu-col3 vertical-menu">
                            <li className="menu-list-title">INTEREST</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Girl Scouts of the USA</a></li>
                            <li><a>MLB- Baseball</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Disney</a></li>
                            <li><a>NFL - Football</a></li>
                            <li><a>Military</a></li>
                            <li><a>Sports</a></li>
                            <li><a>Soccer</a></li>
                            <li><a>Cheerleading</a></li>
                            <li><a>NHL- Hockey</a></li>
                        </ul>
                        <ul className="navbar-submenu-col4 vertical-menu">
                            <li className="menu-list-title">GIFTS BY RECIPIENT</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts for Baby</a></li>
                            <li><a>Gifts for Couples</a></li>
                            <li><a>Gifts for Kids</a></li>
                            <li><a>Gifts for Adults</a></li>
                            <li><a>Gifts for Teens</a></li>
                            <li><a>Gifts for Mom</a></li>
                            <li><a>Gifts for Dad</a></li>
                            <li><a>Gifts for Teachers</a></li>
                        </ul>
                        <ul className="navbar-submenu-col5 vertical-menu">
                            <li className="menu-list-title">PRICE</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts Under $30</a></li>
                            <li><a>Gifts Under $60</a></li>
                            <li><a>Gifts Over $60</a></li>
                        </ul>
                        <ul className="navbar-submenu-col6 vertical-menu">
                            <li className="menu-list-title">ADDITIONAL INFORMATION</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Corporate Giving</a></li>
                            <li><a>Shop My Store</a></li>
                            <li><a>Shipping Details</a></li>
                        </ul>
                    </ul>
                </div>
            </li>
            <li className="dropdown"><span>Characters</span>
                <div className="dropdown-wrapper"> 
                    <ul className="main-submenu-wrapper characters">
                        <span className="see-all-link">Shop All Gifting</span>
                        <ul className="navbar-submenu-col1 vertical-menu">
                            <li className="menu-list-title">FEATURED</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gift Finder</a></li>
                            <li><a>Furever Flower Shoppe</a></li>
                            <li><a>First Responders</a></li>
                            <li><a>HeartBox</a></li>
                            <li><a>Gift Boxes</a></li>
                            <li><a>Pajama Shops</a></li>
                            <li><a>Gift Cards</a></li>
                            <li><a>Embroidered Gifts</a></li>
                            <li><a>Luxury Gifts</a></li>
                        </ul>
                        <ul className="navbar-submenu-col2 vertical-menu">
                            <li className="menu-list-title">OCCASIONS</li>
                            <li className="shop-all"><a>Shop All </a></li>
                            <li><a>Birthday</a></li>
                            <li><a>Pride</a></li>
                            <li><a>Graduation</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Wedding</a></li>
                            <li><a>Get Well</a></li>
                            <li><a>Encouragment</a></li>
                            <li><a>Congratulations</a></li>
                            <li><a>Good Luck</a></li>
                            <li><a>Thank You</a></li>
                        </ul>
                        <ul className="navbar-submenu-col3 vertical-menu">
                            <li className="menu-list-title">INTEREST</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Girl Scouts of the USA</a></li>
                            <li><a>MLB- Baseball</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Disney</a></li>
                            <li><a>NFL - Football</a></li>
                            <li><a>Military</a></li>
                            <li><a>Sports</a></li>
                            <li><a>Soccer</a></li>
                            <li><a>Cheerleading</a></li>
                            <li><a>NHL- Hockey</a></li>
                        </ul>
                        <ul className="navbar-submenu-col4 vertical-menu">
                            <li className="menu-list-title">GIFTS BY RECIPIENT</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts for Baby</a></li>
                            <li><a>Gifts for Couples</a></li>
                            <li><a>Gifts for Kids</a></li>
                            <li><a>Gifts for Adults</a></li>
                            <li><a>Gifts for Teens</a></li>
                            <li><a>Gifts for Mom</a></li>
                            <li><a>Gifts for Dad</a></li>
                            <li><a>Gifts for Teachers</a></li>
                        </ul>
                        <ul className="navbar-submenu-col5 vertical-menu">
                            <li className="menu-list-title">PRICE</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts Under $30</a></li>
                            <li><a>Gifts Under $60</a></li>
                            <li><a>Gifts Over $60</a></li>
                        </ul>
                        <ul className="navbar-submenu-col6 vertical-menu">
                            <li className="menu-list-title">ADDITIONAL INFORMATION</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Corporate Giving</a></li>
                            <li><a>Shop My Store</a></li>
                            <li><a>Shipping Details</a></li>
                        </ul>
                    </ul>
                </div>
            </li>
            <li className="dropdown"><span>Sale</span>
                <div className="dropdown-wrapper"> 
                    <ul className="main-submenu-wrapper sale">
                        <span className="see-all-link">Shop All Gifting</span>
                        <ul className="navbar-submenu-col1 vertical-menu">
                            <li className="menu-list-title">FEATURED</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gift Finder</a></li>
                            <li><a>Furever Flower Shoppe</a></li>
                            <li><a>First Responders</a></li>
                            <li><a>HeartBox</a></li>
                            <li><a>Gift Boxes</a></li>
                            <li><a>Pajama Shops</a></li>
                            <li><a>Gift Cards</a></li>
                            <li><a>Embroidered Gifts</a></li>
                            <li><a>Luxury Gifts</a></li>
                        </ul>
                        <ul className="navbar-submenu-col2 vertical-menu">
                            <li className="menu-list-title">OCCASIONS</li>
                            <li className="shop-all"><a>Shop All </a></li>
                            <li><a>Birthday</a></li>
                            <li><a>Pride</a></li>
                            <li><a>Graduation</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Wedding</a></li>
                            <li><a>Get Well</a></li>
                            <li><a>Encouragment</a></li>
                            <li><a>Congratulations</a></li>
                            <li><a>Good Luck</a></li>
                            <li><a>Thank You</a></li>
                        </ul>
                        <ul className="navbar-submenu-col3 vertical-menu">
                            <li className="menu-list-title">INTEREST</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Girl Scouts of the USA</a></li>
                            <li><a>MLB- Baseball</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Disney</a></li>
                            <li><a>NFL - Football</a></li>
                            <li><a>Military</a></li>
                            <li><a>Sports</a></li>
                            <li><a>Soccer</a></li>
                            <li><a>Cheerleading</a></li>
                            <li><a>NHL- Hockey</a></li>
                        </ul>
                        <ul className="navbar-submenu-col4 vertical-menu">
                            <li className="menu-list-title">GIFTS BY RECIPIENT</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts for Baby</a></li>
                            <li><a>Gifts for Couples</a></li>
                            <li><a>Gifts for Kids</a></li>
                            <li><a>Gifts for Adults</a></li>
                            <li><a>Gifts for Teens</a></li>
                            <li><a>Gifts for Mom</a></li>
                            <li><a>Gifts for Dad</a></li>
                            <li><a>Gifts for Teachers</a></li>
                        </ul>
                        <ul className="navbar-submenu-col5 vertical-menu">
                            <li className="menu-list-title">PRICE</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts Under $30</a></li>
                            <li><a>Gifts Under $60</a></li>
                            <li><a>Gifts Over $60</a></li>
                        </ul>
                        <ul className="navbar-submenu-col6 vertical-menu">
                            <li className="menu-list-title">ADDITIONAL INFORMATION</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Corporate Giving</a></li>
                            <li><a>Shop My Store</a></li>
                            <li><a>Shipping Details</a></li>
                        </ul>
                    </ul>
                </div>
            </li>
            <li className="dropdown"><span>New Arrivals</span>
                <div className="dropdown-wrapper"> 
                    <ul className="main-submenu-wrapper new_arrivals">
                        <span className="see-all-link">Shop All Gifting</span>
                        <ul className="navbar-submenu-col1 vertical-menu">
                            <li className="menu-list-title">FEATURED</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gift Finder</a></li>
                            <li><a>Furever Flower Shoppe</a></li>
                            <li><a>First Responders</a></li>
                            <li><a>HeartBox</a></li>
                            <li><a>Gift Boxes</a></li>
                            <li><a>Pajama Shops</a></li>
                            <li><a>Gift Cards</a></li>
                            <li><a>Embroidered Gifts</a></li>
                            <li><a>Luxury Gifts</a></li>
                        </ul>
                        <ul className="navbar-submenu-col2 vertical-menu">
                            <li className="menu-list-title">OCCASIONS</li>
                            <li className="shop-all"><a>Shop All </a></li>
                            <li><a>Birthday</a></li>
                            <li><a>Pride</a></li>
                            <li><a>Graduation</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Wedding</a></li>
                            <li><a>Get Well</a></li>
                            <li><a>Encouragment</a></li>
                            <li><a>Congratulations</a></li>
                            <li><a>Good Luck</a></li>
                            <li><a>Thank You</a></li>
                        </ul>
                        <ul className="navbar-submenu-col3 vertical-menu">
                            <li className="menu-list-title">INTEREST</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Girl Scouts of the USA</a></li>
                            <li><a>MLB- Baseball</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Disney</a></li>
                            <li><a>NFL - Football</a></li>
                            <li><a>Military</a></li>
                            <li><a>Sports</a></li>
                            <li><a>Soccer</a></li>
                            <li><a>Cheerleading</a></li>
                            <li><a>NHL- Hockey</a></li>
                        </ul>
                        <ul className="navbar-submenu-col4 vertical-menu">
                            <li className="menu-list-title">GIFTS BY RECIPIENT</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts for Baby</a></li>
                            <li><a>Gifts for Couples</a></li>
                            <li><a>Gifts for Kids</a></li>
                            <li><a>Gifts for Adults</a></li>
                            <li><a>Gifts for Teens</a></li>
                            <li><a>Gifts for Mom</a></li>
                            <li><a>Gifts for Dad</a></li>
                            <li><a>Gifts for Teachers</a></li>
                        </ul>
                        <ul className="navbar-submenu-col5 vertical-menu">
                            <li className="menu-list-title">PRICE</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts Under $30</a></li>
                            <li><a>Gifts Under $60</a></li>
                            <li><a>Gifts Over $60</a></li>
                        </ul>
                        <ul className="navbar-submenu-col6 vertical-menu">
                            <li className="menu-list-title">ADDITIONAL INFORMATION</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Corporate Giving</a></li>
                            <li><a>Shop My Store</a></li>
                            <li><a>Shipping Details</a></li>
                        </ul>
                    </ul>
                </div>
            </li>
            <li className="dropdown"><span>Kids & Adults</span>
                <div className="dropdown-wrapper"> 
                    <ul className="main-submenu-wrapper kids_adults">
                        <span className="see-all-link">Shop All Gifting</span>
                        <ul className="navbar-submenu-col1 vertical-menu">
                            <li className="menu-list-title">FEATURED</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gift Finder</a></li>
                            <li><a>Furever Flower Shoppe</a></li>
                            <li><a>First Responders</a></li>
                            <li><a>HeartBox</a></li>
                            <li><a>Gift Boxes</a></li>
                            <li><a>Pajama Shops</a></li>
                            <li><a>Gift Cards</a></li>
                            <li><a>Embroidered Gifts</a></li>
                            <li><a>Luxury Gifts</a></li>
                        </ul>
                        <ul className="navbar-submenu-col2 vertical-menu">
                            <li className="menu-list-title">OCCASIONS</li>
                            <li className="shop-all"><a>Shop All </a></li>
                            <li><a>Birthday</a></li>
                            <li><a>Pride</a></li>
                            <li><a>Graduation</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Wedding</a></li>
                            <li><a>Get Well</a></li>
                            <li><a>Encouragment</a></li>
                            <li><a>Congratulations</a></li>
                            <li><a>Good Luck</a></li>
                            <li><a>Thank You</a></li>
                        </ul>
                        <ul className="navbar-submenu-col3 vertical-menu">
                            <li className="menu-list-title">INTEREST</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Girl Scouts of the USA</a></li>
                            <li><a>MLB- Baseball</a></li>
                            <li><a>New Baby</a></li>
                            <li><a>Disney</a></li>
                            <li><a>NFL - Football</a></li>
                            <li><a>Military</a></li>
                            <li><a>Sports</a></li>
                            <li><a>Soccer</a></li>
                            <li><a>Cheerleading</a></li>
                            <li><a>NHL- Hockey</a></li>
                        </ul>
                        <ul className="navbar-submenu-col4 vertical-menu">
                            <li className="menu-list-title">GIFTS BY RECIPIENT</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts for Baby</a></li>
                            <li><a>Gifts for Couples</a></li>
                            <li><a>Gifts for Kids</a></li>
                            <li><a>Gifts for Adults</a></li>
                            <li><a>Gifts for Teens</a></li>
                            <li><a>Gifts for Mom</a></li>
                            <li><a>Gifts for Dad</a></li>
                            <li><a>Gifts for Teachers</a></li>
                        </ul>
                        <ul className="navbar-submenu-col5 vertical-menu">
                            <li className="menu-list-title">PRICE</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Gifts Under $30</a></li>
                            <li><a>Gifts Under $60</a></li>
                            <li><a>Gifts Over $60</a></li>
                        </ul>
                        <ul className="navbar-submenu-col6 vertical-menu">
                            <li className="menu-list-title">ADDITIONAL INFORMATION</li>
                            <li className="shop-all"><a>Shop All</a></li>
                            <li><a>Corporate Giving</a></li>
                            <li><a>Shop My Store</a></li>
                            <li><a>Shipping Details</a></li>
                        </ul>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</div>
    <section className="Shipping_rates">
        <div className="ribbon_info">
            <p>Enjoy our great international shipping rates</p>
        </div>
    </section>

    </>
  )
}

export default Navbar