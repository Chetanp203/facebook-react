import React from 'react';
import "./Navbar.css"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const router = useNavigate();
  return (
    <div className='fb-navbar'>
      <div className="logo">
        <img onClick={()=>router("/")}  src="https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png" />
      </div>

      <div className="searchbar">
        <input type="text" placeholder='Search Facebook' />
        <i className="fa-solid fa-magnifying-glass" style={{ color: '#333333' }}></i>
      </div>

      <div className="pages">
        <div className="page1">
          <i className="fa-solid fa-house fa-xl" style={{ color: '#007ecc' }}></i>
        </div>
        <div className="page1">
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-facebook-watch-4560241-3789515.png?f=webp" />
        </div>
        <div className="page1">
          <img src="https://cdn.icon-icons.com/icons2/3237/PNG/512/website_social_media_marketplace_facebook_menu_selling_icon_197234.png" />
        </div>
        <div className="page1">
          <img src="https://t4.ftcdn.net/jpg/02/78/97/71/360_F_278977125_bu72oaGKJ4cwP8UUP5arD9ajQ2dNhkH9.jpg" />
        </div>
        <div className="page1">
          <img src="https://clipground.com/images/video-game-icon-clipart-3.jpg" />
        </div>
      </div>


      <div className="profile-section">
        <div className="ps-1">
          <img src="data:image/png;base64,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" />
        </div>
        <div className="ps-1">
          <img src="https://static.vecteezy.com/system/resources/previews/022/227/325/original/messenger-logo-icon-free-png.png" />
        </div>
        <div className="ps-1">
          <img src="https://images.vexels.com/media/users/3/223298/isolated/preview/d3c070ed1d488a95f3789c88b7c95674-notifications-bell-icon-flat.png" />
        </div>
        <div className="ps-1" >
          <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-6/316407627_2285357611642990_1364941092960111903_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=dwjfNvJf_BYAX-bJPrq&_nc_ht=scontent.fbom5-1.fna&oh=00_AfB5iY275SlPm6xmjJqCttDjRi0qwhqwQ0_umWSPK47Mlg&oe=64DEC744" data-bs-toggle="dropdown" aria-expanded="false" />
          {/* <ul >
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
          {/*****drop down div******/}
          <div className="dropdown-menu">
            <div className='p-1'>
              <span>
                <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-6/316407627_2285357611642990_1364941092960111903_n.jpg?_nc_cat=104&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=dwjfNvJf_BYAX-bJPrq&_nc_ht=scontent.fbom5-1.fna&oh=00_AfB5iY275SlPm6xmjJqCttDjRi0qwhqwQ0_umWSPK47Mlg&oe=64DEC744" />
                <span onClick={()=>router("/profile")}>Chetan Patil</span>
              </span>
              <hr />
              <h6>See all profiles</h6>
            </div>
            <div className='p-2'>
              <i className="fa-solid fa-gear fa-xl" style={{ color: '#121212' }}></i>
              <h6>Settings & privacy</h6>
            </div>
            <div className='p-2'>
              <i className="fa-regular fa-circle-question fa-xl" style={{ color: '#121212' }}></i>
              <h6>Help & support</h6>
            </div>
            <div className='p-2'>
              <i className="fa-solid fa-moon fa-xl" style={{ color: '#030303' }}></i>
              <h6>Display & accessibility</h6>
            </div>
            <div className='p-2'>
              <i className="fa-solid fa-message fa-xl" style={{ color: '#0a0a0a' }}></i>
              <h6>Give feedback</h6>
            </div>
            <div className='p-2'>
              <i className="fa-solid fa-right-from-bracket fa-xl" style={{ color: '#000000' }}></i>
              <h6>Logout</h6>
            </div>

            <p>Privacy  · Terms  · Advertising  · Ad choices </p>
            <p>  · Cookies  ·more · Meta © 2023</p>
          </div>

        </div>

        {/* <div class="dropdown">


        </div> */}


      </div>

    </div>
  )
}

export default Navbar