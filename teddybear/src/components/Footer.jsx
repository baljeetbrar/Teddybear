import React from 'react'

const Footer = () => {
  return (
    <>
       <footer className="main-footer ">
    <div className="footer-ribbon">
        <div className="row footer-row container">
            <div className="col-lg-4">
                <img src="./images/rd-bc-stuffinside-rev.webp" alt="stuffinside"/>
            </div>
            <div className="col-lg-6 vertical-align">
                <h3>LOG IN NOW TO GET THE INSIDE STUFF!</h3>
                <p>Join the Bonus Club or log in now to earn points, redeem rewards, and <br/>get exclusive access.</p>
            </div>
            <div className="col-lg-2 button-block">
                <a href="" className="footer-button">Join Now</a>
            </div>
        </div>
    </div>
    <div className="main-footer ">
        <ul className="footer-list flex-list container">
            <li className="subscribe">
                <span><img src="./images/footer-logo.png" alt="footer-logo"/></span>
                <div className="content-asset">
                    <p><strong>Add a Little More <img className="footer-heart" alt="Heart Illustration" src="./images/heart.jpg" title="Heart Illustration"/> to Your Inbox!</strong></p>
                    <p>Don’t miss out on PAWsome sales, new arrivals and more.</p>
                
                    <form novalidate="novalidate" className="form-section">
                        <div className="subscribe-form">
                             <input type="email" id="footLg-email" name="emailAddress" placeholder="Enter Your Email" aria-label="Enter Your Email" value=""/>
                        </div>
                        <div className="button-wrap">
                             <a href="" className="button" id="ft-email-signup">Sign Up Now</a>
                        </div>
                    </form>
                </div>
                    <div className="checkbox-wrapper">
                        <input type="checkbox" id="footLg-opt-in" name="footLg-opt-in" className="checkbox"/>
                        <label for="footLg-opt-in" className="ftlg-opt-in">Yes, please add me to the Build-A-Bear email list to find out about special promotions, events and more! <br/><span style={{"font-size" : ".6rem;"}}>By signing, I agree to the Build-A-Bear Global Privacy Policy. To find out how your personal information will be used please read our <a href="https://www.buildabear.com/privacy-policy.html" target="_blank">Global Privacy Policy</a>.</span> </label>
                    </div>
                    <div>
                        <div className="share-buttons">
                            <div className="social-bug-wrap">
                                <p>Share Your Story with #buildabear</p>
                                <ul className="social-bugs">
                                
                                <li>
                                <a href="https://www.tiktok.com/@buildabear" target="_blank" title="TikTok">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#1D3557" d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258a6.228 6.228 0 0 1-1.137-.966c-.849-.971-1.166-1.956-1.282-2.645h.004c-.097-.573-.057-.943-.05-.943h-3.865v14.943c0 .2 0 .399-.008.595c0 .024-.003.046-.004.073c0 .01 0 .022-.003.033v.009a3.28 3.28 0 0 1-1.65 2.604a3.226 3.226 0 0 1-1.6.422c-1.8 0-3.26-1.468-3.26-3.281c0-1.814 1.46-3.282 3.26-3.282c.341 0 .68.054 1.004.16l.005-3.936a7.178 7.178 0 0 0-5.532 1.62a7.583 7.583 0 0 0-1.655 2.04c-.163.281-.779 1.412-.853 3.246c-.047 1.04.266 2.12.415 2.565v.01c.093.262.457 1.158 1.049 1.913a7.856 7.856 0 0 0 1.674 1.58v-.01l.009.01c1.87 1.27 3.945 1.187 3.945 1.187c.359-.015 1.562 0 2.928-.647c1.515-.718 2.377-1.787 2.377-1.787a7.43 7.43 0 0 0 1.296-2.153c.35-.92.466-2.022.466-2.462V8.273c.047.028.672.441.672.441s.9.577 2.303.952c1.006.267 2.363.324 2.363.324V6.153c-.475.052-1.44-.098-2.429-.59Z"></path></svg>
                                </a>
                                </li>
                                
                                <li>
                                <a href="https://www.facebook.com/Buildabear/" target="_blank" title="Facebook">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.04467C0 12.022 2.88867 15.3293 6.66667 16V10.222H4.66667V8H6.66667V6.222C6.66667 4.222 7.95533 3.11133 9.778 3.11133C10.3553 3.11133 10.978 3.2 11.5553 3.28867V5.33333H10.5333C9.55533 5.33333 9.33333 5.822 9.33333 6.44467V8H11.4667L11.1113 10.222H9.33333V16C13.1113 15.3293 16 12.0227 16 8.04467C16 3.62 12.4 0 8 0C3.6 0 0 3.62 0 8.04467Z" fill="#1D3557"></path>
                                </svg>
                                </a>
                                </li>
                                
                                <li>
                                <a href="https://www.instagram.com/buildabear/" target="_blank" title="Instagram">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.70182 0.048C5.55491 0.00872726 5.82691 0 8 0C10.1731 0 10.4451 0.00945454 11.2975 0.048C12.1498 0.0865454 12.7316 0.222545 13.2407 0.419636C13.7738 0.621091 14.2575 0.936 14.6575 1.34327C15.0647 1.74255 15.3789 2.22545 15.5796 2.75927C15.7775 3.26836 15.9127 3.85018 15.952 4.70109C15.9913 5.55564 16 5.82764 16 8C16 10.1731 15.9905 10.4451 15.952 11.2982C15.9135 12.1491 15.7775 12.7309 15.5796 13.24C15.3789 13.7739 15.0642 14.2576 14.6575 14.6575C14.2575 15.0647 13.7738 15.3789 13.2407 15.5796C12.7316 15.7775 12.1498 15.9127 11.2989 15.952C10.4451 15.9913 10.1731 16 8 16C5.82691 16 5.55491 15.9905 4.70182 15.952C3.85091 15.9135 3.26909 15.7775 2.76 15.5796C2.22612 15.3789 1.74241 15.0642 1.34255 14.6575C0.935549 14.2579 0.620593 13.7745 0.419636 13.2407C0.222545 12.7316 0.0872727 12.1498 0.048 11.2989C0.00872726 10.4444 0 10.1724 0 8C0 5.82691 0.00945454 5.55491 0.048 4.70255C0.0865454 3.85018 0.222545 3.26836 0.419636 2.75927C0.620889 2.22551 0.936086 1.74205 1.34327 1.34255C1.74257 0.935637 2.2258 0.620686 2.75927 0.419636C3.26836 0.222545 3.85018 0.0872727 4.70109 0.048H4.70182ZM11.2327 1.488C10.3891 1.44945 10.136 1.44145 8 1.44145C5.864 1.44145 5.61091 1.44945 4.76727 1.488C3.98691 1.52364 3.56364 1.65382 3.28145 1.76364C2.90836 1.90909 2.64145 2.08145 2.36145 2.36145C2.09603 2.61967 1.89177 2.93402 1.76364 3.28145C1.65382 3.56364 1.52364 3.98691 1.488 4.76727C1.44945 5.61091 1.44145 5.864 1.44145 8C1.44145 10.136 1.44945 10.3891 1.488 11.2327C1.52364 12.0131 1.65382 12.4364 1.76364 12.7185C1.89164 13.0655 2.096 13.3804 2.36145 13.6385C2.61964 13.904 2.93455 14.1084 3.28145 14.2364C3.56364 14.3462 3.98691 14.4764 4.76727 14.512C5.61091 14.5505 5.86327 14.5585 8 14.5585C10.1367 14.5585 10.3891 14.5505 11.2327 14.512C12.0131 14.4764 12.4364 14.3462 12.7185 14.2364C13.0916 14.0909 13.3585 13.9185 13.6385 13.6385C13.904 13.3804 14.1084 13.0655 14.2364 12.7185C14.3462 12.4364 14.4764 12.0131 14.512 11.2327C14.5505 10.3891 14.5585 10.136 14.5585 8C14.5585 5.864 14.5505 5.61091 14.512 4.76727C14.4764 3.98691 14.3462 3.56364 14.2364 3.28145C14.0909 2.90836 13.9185 2.64145 13.6385 2.36145C13.3803 2.09605 13.066 1.89179 12.7185 1.76364C12.4364 1.65382 12.0131 1.52364 11.2327 1.488ZM6.97818 10.4662C7.54884 10.7037 8.18428 10.7358 8.77595 10.5569C9.36762 10.378 9.87883 9.99921 10.2223 9.48527C10.5657 8.97132 10.72 8.35409 10.6589 7.73899C10.5978 7.12388 10.3251 6.54907 9.88727 6.11273C9.60817 5.8338 9.2707 5.62023 8.89915 5.48738C8.5276 5.35453 8.13122 5.30572 7.73854 5.34445C7.34586 5.38318 6.96666 5.50849 6.62822 5.71137C6.28979 5.91424 6.00054 6.18963 5.78131 6.51771C5.56208 6.84579 5.41832 7.21839 5.36038 7.6087C5.30243 7.99901 5.33175 8.3973 5.44621 8.77492C5.56068 9.15254 5.75744 9.50008 6.02234 9.79253C6.28724 10.085 6.61369 10.315 6.97818 10.4662ZM5.09236 5.09236C5.4742 4.71053 5.92751 4.40764 6.4264 4.20099C6.92529 3.99434 7.46 3.88798 8 3.88798C8.54 3.88798 9.07471 3.99434 9.5736 4.20099C10.0725 4.40764 10.5258 4.71053 10.9076 5.09236C11.2895 5.4742 11.5924 5.92751 11.799 6.4264C12.0057 6.92529 12.112 7.46 12.112 8C12.112 8.54 12.0057 9.07471 11.799 9.5736C11.5924 10.0725 11.2895 10.5258 10.9076 10.9076C10.1365 11.6788 9.09058 12.112 8 12.112C6.90942 12.112 5.86352 11.6788 5.09236 10.9076C4.32121 10.1365 3.88798 9.09058 3.88798 8C3.88798 6.90942 4.32121 5.86352 5.09236 5.09236ZM13.024 4.50036C13.1186 4.41111 13.1944 4.30377 13.2468 4.18471C13.2992 4.06565 13.3271 3.93729 13.329 3.80722C13.3309 3.67716 13.3067 3.54803 13.2578 3.4275C13.2089 3.30696 13.1363 3.19746 13.0443 3.10548C12.9524 3.0135 12.8429 2.94091 12.7223 2.89201C12.6018 2.84311 12.4727 2.81889 12.3426 2.82079C12.2125 2.82268 12.0842 2.85066 11.9651 2.90305C11.8461 2.95545 11.7387 3.0312 11.6495 3.12582C11.4759 3.30984 11.3808 3.55427 11.3845 3.80722C11.3882 4.06017 11.4903 4.30173 11.6692 4.48061C11.8481 4.6595 12.0896 4.76162 12.3426 4.76531C12.5955 4.769 12.84 4.67396 13.024 4.50036Z" fill="#1D3557"></path>
                                </svg>
                                </a>
                                </li>
                                
                                <li>
                                <a href="https://twitter.com/buildabear" target="_blank" title="Twitter">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6947 1.9006C18.9704 2.21303 18.1822 2.43788 17.3704 2.52545C18.2133 2.02471 18.8445 1.23362 19.1455 0.300601C18.3546 0.771108 17.4882 1.10104 16.5846 1.27575C16.207 0.872024 15.7502 0.5504 15.2428 0.330915C14.7355 0.11143 14.1883 -0.00121132 13.6355 9.82343e-06C11.3988 9.82343e-06 9.59999 1.81303 9.59999 4.03788C9.59999 4.3503 9.63786 4.66273 9.6994 4.96332C6.35029 4.78817 3.36331 3.18817 1.37751 0.738471C1.01568 1.3565 0.826067 2.06019 0.828402 2.77634C0.828402 4.17752 1.54083 5.41302 2.62722 6.13965C1.98699 6.11444 1.36176 5.93846 0.802366 5.62604V5.67575C0.802366 7.63787 2.18935 9.26391 4.03787 9.63787C3.69079 9.72803 3.33374 9.77415 2.97515 9.77515C2.71242 9.77515 2.4639 9.74912 2.21302 9.71361C2.72426 11.3136 4.21302 12.4757 5.9858 12.5136C4.59881 13.6 2.86154 14.2391 0.975147 14.2391C0.636686 14.2391 0.32426 14.2272 0 14.1894C1.78935 15.3373 3.91242 16 6.19881 16C13.6213 16 17.6828 9.85089 17.6828 4.51362C17.6828 4.33847 17.6828 4.16332 17.671 3.98817C18.4568 3.41303 19.1455 2.7006 19.6947 1.9006Z" fill="#1D3557"></path>
                                </svg>
                                </a>
                                </li>
                                
                                <li>
                                <a href="https://www.youtube.com/c/buildabear/videos" target="_blank" title="Youtube">
                                <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.2446 2.1966C21.1258 1.77269 20.8943 1.3889 20.5748 1.08604C20.2462 0.773862 19.8436 0.550554 19.4048 0.437193C17.7625 0.00433624 11.1831 0.00433634 11.1831 0.00433634C8.44023 -0.0268707 5.69802 0.110386 2.97196 0.415331C2.53315 0.537067 2.13123 0.765365 1.80194 1.07992C1.47839 1.39123 1.24403 1.77511 1.12161 2.19573C0.827525 3.78002 0.684638 5.38867 0.694876 6.99999C0.684382 8.60987 0.826919 10.218 1.12161 11.8043C1.24141 12.2231 1.47489 12.6053 1.79932 12.9139C2.12374 13.2226 2.52774 13.4456 2.97196 13.5637C4.63605 13.9957 11.1831 13.9957 11.1831 13.9957C13.9295 14.0269 16.6752 13.8896 19.4048 13.5847C19.8436 13.4713 20.2462 13.248 20.5748 12.9358C20.8942 12.633 21.1254 12.2492 21.2437 11.8252C21.5455 10.2416 21.6922 8.63225 21.6819 7.02011C21.7045 5.40114 21.558 3.78423 21.2446 2.19573V2.1966ZM9.09141 9.99414V4.00673L14.5655 7.00087L9.09141 9.99414Z" fill="#1D3557"></path>
                                </svg>
                                </a>
                                </li>
                                
                                <li>
                                <a href="https://www.pinterest.com/buildabear/" target="_blank" title="Pinterest">
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.68457 8C0.68457 11.4153 2.82524 14.3313 5.8379 15.4787C5.76457 14.854 5.68657 13.824 5.85457 13.1013C5.99924 12.48 6.78857 9.14267 6.78857 9.14267C6.78857 9.14267 6.55057 8.666 6.55057 7.96C6.55057 6.85333 7.1919 6.02667 7.99124 6.02667C8.67124 6.02667 8.99924 6.53667 8.99924 7.148C8.99924 7.83133 8.5639 8.85267 8.33924 9.8C8.1519 10.5927 8.73724 11.2393 9.51857 11.2393C10.9339 11.2393 12.0226 9.74667 12.0226 7.592C12.0226 5.68467 10.6519 4.352 8.69524 4.352C6.4299 4.352 5.0999 6.05133 5.0999 7.808C5.0999 8.49267 5.36324 9.226 5.69257 9.62533C5.72065 9.65549 5.74049 9.69237 5.75018 9.73242C5.75987 9.77247 5.75909 9.81434 5.7479 9.854C5.68724 10.106 5.55257 10.6467 5.52657 10.7573C5.49124 10.9027 5.41124 10.934 5.2599 10.8633C4.26524 10.4007 3.6439 8.94667 3.6439 7.77867C3.6439 5.266 5.46857 2.95933 8.90524 2.95933C11.6679 2.95933 13.8152 4.928 13.8152 7.55867C13.8152 10.3033 12.0852 12.5127 9.68257 12.5127C8.87524 12.5127 8.11724 12.0927 7.85724 11.5973C7.85724 11.5973 7.4579 13.1187 7.36124 13.4907C7.17324 14.2133 6.6519 15.128 6.32857 15.6473C7.0739 15.8767 7.86457 16 8.68457 16C13.1026 16 16.6846 12.418 16.6846 8C16.6846 3.582 13.1026 0 8.68457 0C4.26657 0 0.68457 3.582 0.68457 8Z" fill="#1D3557"></path>
                                </svg>
                                </a>
                                </li>
                                </ul>
                                </div>
                        </div>
                </div>
            </li>
            <li className="help">
                <h2>Help</h2>
                <ul className="footer-menu-list">
                    <li>FAQs</li>
                    <li>Pick Up in Store</li>
                    <li>Find-A-Bear</li>
                    <li>Corporate Enquiries</li>
                    <li>Product Safety</li>
                    <li>Recalls</li>
                    <li>Quality Issue</li>
                    <li>Return Policy</li>
                    <li>Satisfaction Guarantee</li>
                    <li>Shipping Information</li>
                </ul>
            </li>
            <li className="about-us">
                <h2>About Us</h2>
                <ul className="footer-menu-list">
                    <li>FAQs</li>
                    <li>Pick Up in Store</li>
                    <li>Find-A-Bear</li>
                    <li>Corporate Enquiries</li>
                    <li>Product Safety</li>
                </ul>
                <h2>Events</h2>
                    <ul className="footer-menu-list">
                    <li>Return Policy</li>
                    <li>Satisfaction Guarantee</li>
                    <li>Shipping Information</li>
                    </ul>
            </li>
            <li className="guest-experience">
                <h2>Guest Experience</h2>
                <p>Need assistance?</p>
                <p><a href="tel:1-877-789-2327"><i className="iconoir-phone"></i> 1-877-789-BEAR (2327)</a></p>
                <p>Mon-Fri: 7 am – 5 pm CST</p>
                <p>Sat &amp; Sun: 9 am – 3 pm CST</p>
                <p><a href="/contact-us"><i className="contact-us"></i> Contact Us</a></p>
                <div className="country-selector globale-selector">
                    <div className="current-country" tabindex="0" title="Open country selector for international pricing and availability">
                    <i className="flag-icon flag-icon-ca"></i>
                    <span>Canada</span>
                    </div>
                    </div>
            </li>
        </ul>
    </div>
</footer>
<footer className="copyright ">
<div className="footer-top-wrapper container">   
    <ul className="privacypolicy-list flex-list container">
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Do Not Share My Personal Information</a></li>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">CA Supply Chain</a></li>
        <li><a href="">Cookie Preferences</a></li>
    </ul>
</div>
<div className="footer-bottom-wrapper">
    <div className="reserved-rights">
        ©1999-2023 Build-A-Bear Workshop, Inc. All rights reserved.
    </div>
</div>
</footer> 
    </>
  )
}

export default Footer