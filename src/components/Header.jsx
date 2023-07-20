import React from 'react'

const Header = () => {
  return (
      <>
      <section className="top_banner ">
        <section className="container"> 
            <ul className="top_banner_logo flex-list">
                <li className="banner_logo"><span><img src="../../public/images//header-logo-bab-sm.jpg" alt="" /></span></li>
                <li className="banner_logo"><span><img src="../../public/images//header-logo-bearcave-sm.jpg" alt="" /></span></li>
            </ul>
            <ul className="top_banner_list flex-list">
                <li><p>Square One, Mississauga</p></li>src/images/asteric.png
                <li><p>
                    <span className="Top_banner_icon"><i className="bi bi-geo-alt"></i></span>
                    <span>Find a Store</span></p></li>
                <li><p>
                    <span className="Top_banner_icon"><i className="bi bi-truck"></i>
                    </span>
                    <span>Track Order</span></p></li>
            </ul>
        </section>
    </section>
    <section className="top_banner_ribbon">
        <div className="ribbon_info ">
            <p>Up to 50% off NEW Markdowns! Shop Clearance</p>
        </div>
    </section>
    </>
  )
}

export default Header