import React from 'react'
import style from  './Navbar.module.css'

function Navbar({onPageChange}) {
    const navbarItemArray = ['Blogs','Discussion','Uploads','About','FAQs','Contact']

  return (
    <header className={style.navHeader} id='navHeader'>
        <nav className={style.navbar} id='navbar'>
            <div className={style.navbarLogo} id='navbarLogo'>
                <button className={style.logoButton} id='logoButton'>
                    <img src="images/logo1.png" alt="logo" id='logo'/>
                    <span id='CodeBlogName' className={style.CodeBlogName}>CodeBlog</span>
                </button>
            </div>
            <div className={style.navbarOption} id='navbarOption'>
                <ul className={style.navbarList} id='navbarList'>
                    {navbarItemArray.map((item, index) => {
                        return (
                            <li key={index} className={style.navbarItem} id={`navbarItem${item}`}>
                                <button onClick={()=>onPageChange(item)} className={style.navbarLinkButton} id={`navbarLinkButton${item}`}>{item}</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={style.navbarRight} id='navbarRight'>
                <button className={style.notificationButton}><img src="images/notification.png" alt="Notification" id='notificationLogo'/></button>
                <div className={style.navbarProfile} id='navbarProfile'>
                    <button className={style.profileButton} id='profileButton'><img src="images/profile-photo.png" alt="Profile" id='profileLogo'/></button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar