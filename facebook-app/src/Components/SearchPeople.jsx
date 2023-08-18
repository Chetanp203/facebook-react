import React from 'react';
import "./Search.css"

const SearchPeople = () => {
    return (
        <div className='search-con'>

            <div className="search-left">
                <h2>Search results</h2>
                <hr />
                <h6>Filters</h6>
                <div className="flex">
                    <div className="circle">
                        <i className="fa-solid fa-photo-film" style={{ color: '#000000' }}></i>
                    </div>
                    <h6>All</h6>
                </div>
                <div className="flex">
                    <div className="circle">
                        <i className="fa-solid fa-message" style={{ color: '#000000' }}></i>
                    </div>
                    <h6>Posts</h6>
                </div>
                <div className="flex">
                    <div className="circle">
                        <i className="fa-solid fa-user-group" style={{ color: '#0d0d0d' }}></i>
                    </div>
                    <h6>People</h6>
                </div>
                <div className="flex">
                    <div className="circle">
                        <i className="fa-solid fa-images" style={{ color: '#0a0a0a' }}></i>
                    </div>
                    <h6>Photos</h6>
                </div>
                <div className="flex">
                    <div className="circle">
                        <i className="fa-brands fa-youtube" style={{ color: '#030303' }}></i>
                    </div>
                    <h6>Videos</h6>
                </div>
                <div className="flex">
                    <div className="circle">
                        <i className="fa-solid fa-store" style={{ color: '#000000' }}></i>
                    </div>
                    <h6>Marketplace</h6>
                </div>
                <div className="flex">
                    <div className="circle">
                        <i className="fa-solid fa-flag" style={{ color: '#000000' }}></i>
                    </div>
                    <h6>Pages</h6>
                </div>
                <div className="flex">
                    <div className="circle">
                        <i class="Namefa-solid fa-location-dot" style={{ color: '#000000' }}></i>
                    </div>
                    <h6>Places</h6>
                </div>
                <div className="flex">
                    <div className="circle">
                        <i className="fa-solid fa-users" style={{ color: '#050505' }}></i>
                    </div>
                    <h6>Groups</h6>
                </div>
                <div className="flex">
                    <div className="circle">
                        <i className="fa-solid fa-calendar-day" style={{ color: ' #0d0d0' }}></i>
                    </div>
                    <h6>Events</h6>
                </div>
            </div>


            <div className="search-right">
                <h4>People</h4>

                <div className="request">
                    <div className="flex">
                        <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t1.6435-1/174377444_3948061958549051_2655885879548714644_n.jpg?stp=dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bWmclITuBYcAX8uD3Fv&_nc_ht=scontent.fbom5-1.fna&oh=00_AfC-C9-9KbE022-RFa1cPVNaKX_ycJNuyCLNrZOM8ZNRRA&oe=65069387" />
                        <div>
                            <span><b>Sanket Sawant</b></span><br />
                            <span>5 mutual friends</span>
                        </div>
                    </div>
                    <button>Add friend</button>
                </div>

                

                <div className="request">
                    <div className="flex">
                        <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-1/357477282_3105203966441120_4032645172840321364_n.jpg?stp=dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kedzNpL3AO4AX8CGDuo&_nc_ht=scontent.fbom5-1.fna&oh=00_AfD9uqXUClm2eZuOUgMHP9xj--X6ZDN7EZkp9orqWgEXbA&oe=64E4EFFE" />
                        <div>
                            <span><b>Hamid Shaikh</b></span><br />
                            <span>9 mutual friends</span>
                        </div>
                    </div>
                    <button>Add friend</button>
                </div>

                <div className="request">
                    <div className="flex">
                        <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-1/363829659_1298570347720954_2794610890262832352_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=gykkSbLnUqQAX_jZXQe&_nc_ht=scontent.fbom5-1.fna&oh=00_AfD7-zWBLPS5T0omZ4d_DjPUDx13hnxYbqUiw1F5tXsHYQ&oe=64E40E01" />
                        <div>
                            <span><b>Prayas Mhatre</b></span><br />
                            <span>16 mutual friends</span>
                        </div>
                    </div>
                    <button>Add friend</button>
                </div>

                <div className="request">
                    <div className="flex">
                        <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t1.6435-1/107998648_961426367632906_8953513950356993461_n.jpg?stp=c0.0.160.160a_dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ukIuiUYPZJAAX8Ax-R-&_nc_ht=scontent.fbom5-1.fna&oh=00_AfAdU-UKzvofVTnPhHwsevjJ2lpK2yiTcGRAoZdviql42w&oe=6506CB7F" />
                        <div>
                            <span><b>Vaibhav Patil</b></span><br />
                            <span>10 mutual friends</span>
                        </div>
                    </div>
                    <button>Add friend</button>
                </div>

                <div className="request">
                    <div className="flex">
                        <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t31.18172-1/23799896_919914588161701_2344610582830399715_o.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=geeSBff8hwwAX9_DyCE&_nc_ht=scontent.fbom5-1.fna&oh=00_AfBjkmBze1ZIkLGlVw2sAIOygI-a9G4G5sTP57X5-UZ7lA&oe=6506D03E" />
                        <div>
                            <span><b>Ashish More</b></span><br />
                            <span>8 mutual friends</span>
                        </div>
                    </div>
                    <button>Add friend</button>
                </div>

                <div className="request">
                    <div className="flex">
                        <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t1.6435-1/130272964_10222233673705021_5394039807459640437_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vMiz4KajfA8AX_rq93-&_nc_ht=scontent.fbom5-1.fna&oh=00_AfArnbhyzsbCoGhtgr4-sNHv_mj9NXjrFttOkGUPgm6yJw&oe=6506F142" />
                        <div>
                            <span><b>Sagar Shetty</b></span><br />
                            <span>9 mutual friends</span>
                        </div>
                    </div>
                    <button>Add friend</button>
                </div>

                <button className='see-more'>See more</button>


            </div>


        </div>
    )
}

export default SearchPeople