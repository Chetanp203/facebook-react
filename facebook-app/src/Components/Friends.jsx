import React from 'react';
import "./Friends.css"
import { useNavigate } from 'react-router-dom';

const Friends = () => {
    const router = useNavigate();
  return (
    <div className='friends-con'>
        <div className="friends-left">
            <div className="flex-jus">
                <h3>Friends</h3>
                <i className="fa-solid fa-gear fa-xl" style={{color: '#0f0f0f'}}></i>
            </div>
            <div className="flex-jus">
                <div className="flex">
                <i className="fa-solid fa-user-group fa-xl" style={{color: '#050505'}}></i>
                <h5>Home</h5>
                </div>
            </div>
            <div className="flex-jus">
                <div className="flex">
                <i className="fa-solid fa-user-minus fa-xl" style={{color: '#080808'}}></i>
                <h5>Friends requests</h5>
                </div>
                <i className="fa-solid fa-chevron-right fa-xl" style={{color: '#212121'}}></i>
            </div>
            <div onClick={()=>router("/search-people")} className="flex-jus">
                <div className="flex">
                <i className="fa-solid fa-user-plus fa-xl" style={{color: '#121212'}}></i>
                <h5>Search</h5>
                </div>
                <i className="fa-solid fa-chevron-right fa-xl" style={{color: '#212121'}}></i>
            </div>
            <div className="flex-jus">
                <div className="flex">
                <i className="fa-solid fa-user fa-xl" style={{color: '#000000'}}></i>
                <h5>All Friends</h5>
                </div>
                <i className="fa-solid fa-chevron-right fa-xl" style={{color: '#212121'}}></i>
            </div>
            <div className="flex-jus">
                <div className="flex">
                <i className="fa-solid fa-gift fa-xl" style={{color: '#141414'}}></i>
                <h5>Birthdays</h5>
                </div>
            </div>
            <div className="flex-jus">
                <div className="flex">
                <i className="fa-solid fa-user fa-xl" style={{color: '#000000'}}></i>
                <h5>Custom lists</h5>
                </div>
                <i className="fa-solid fa-chevron-right fa-xl" style={{color: '#212121'}}></i>
            </div>
        </div>

        <div className="friends-right">
            <div className="flex-jus">
                <h5>People you may know</h5>
                <p>See all</p>
            </div>

            <div className="peoples">

                <div className="frnd-card">
                    <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t1.18169-1/1604476_357607694377811_1388213685_n.jpg?stp=c40.0.240.240a_dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kGjP4mlr184AX_FOScM&_nc_ht=scontent.fbom5-1.fna&oh=00_AfDrzup_BqWYjCiBQNBUMSd2Wfp7F-nTVvdCto_LMoGK0A&oe=6506B932" />
                    <h5>Sarvesh Gharat</h5>
                    <p>15 mutual friends</p>
                    <button className='add-frnd'>Add friend</button><br />
                    <button className='remove'>Remove</button>
                </div>
                <div className="frnd-card">
                    <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-1/357477282_3105203966441120_4032645172840321364_n.jpg?stp=dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kedzNpL3AO4AX8CGDuo&_nc_ht=scontent.fbom5-1.fna&oh=00_AfD9uqXUClm2eZuOUgMHP9xj--X6ZDN7EZkp9orqWgEXbA&oe=64E4EFFE" />
                    <h5>Hamid shaikh</h5>
                    <p>6 mutual friends</p>
                    <button className='add-frnd'>Add friend</button><br />
                    <button className='remove'>Remove</button>
                </div>
                <div className="frnd-card">
                    <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t1.6435-1/174377444_3948061958549051_2655885879548714644_n.jpg?stp=dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bWmclITuBYcAX8uD3Fv&_nc_ht=scontent.fbom5-1.fna&oh=00_AfC-C9-9KbE022-RFa1cPVNaKX_ycJNuyCLNrZOM8ZNRRA&oe=65069387" />
                    <h5>Sanket Sawant</h5>
                    <p>1 mutual friends</p>
                    <button className='add-frnd'>Add friend</button><br />
                    <button className='remove'>Remove</button>
                </div>
                <div className="frnd-card">
                    <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-1/363829659_1298570347720954_2794610890262832352_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=gykkSbLnUqQAX_jZXQe&_nc_ht=scontent.fbom5-1.fna&oh=00_AfD7-zWBLPS5T0omZ4d_DjPUDx13hnxYbqUiw1F5tXsHYQ&oe=64E40E01" />
                    <h5>Prayas Mhatre</h5>
                    <p>8 mutual friends</p>
                    <button className='add-frnd'>Add friend</button><br />
                    <button className='remove'>Remove</button>
                </div>
                <div className="frnd-card">
                    <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-1/328868323_562119012636699_8795039549161132236_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=-o7eCl7gWmsAX-9ow3w&_nc_ht=scontent.fbom5-1.fna&oh=00_AfDkbevqczSLCynxzMRL3vVmwD10AN7YJSDp8rAa1oGBgw&oe=64E4D354" />
                    <h5>Shruti devadiga</h5>
                    <p>2 mutual friends</p>
                    <button className='add-frnd'>Add friend</button><br />
                    <button className='remove'>Remove</button>
                </div>
                <div className="frnd-card">
                    <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-1/366698898_7078226538888218_1846410574872923903_n.jpg?stp=dst-jpg_p160x160&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_ohc=lpteOdwAs1MAX8n7s2j&_nc_ht=scontent.fbom5-1.fna&oh=00_AfD2jh3LyecxDVCiWTNG3B4E3NYHp55w_KEJOxO9rdEYpw&oe=64E40FB1" />
                    <h5>Ptathamesh shetye</h5>
                    <p>38 mutual friends</p>
                    <button className='add-frnd'>Add friend</button><br />
                    <button className='remove'>Remove</button>
                </div>
                <div className="frnd-card">
                    <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-1/368000607_122104811294007473_6536416134213182175_n.jpg?stp=c0.0.160.160a_dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jjGvh7dGB4kAX-AsUNx&_nc_ht=scontent.fbom5-1.fna&oh=00_AfBTyLncpJMqr73O5w0i4Bfj5Ukv-Pu1YOAlafFtni54_g&oe=64E4D014" />
                    <h5>Isha Thakkar</h5>
                    <p>15 mutual friends</p>
                    <button className='add-frnd'>Add friend</button><br />
                    <button className='remove'>Remove</button>
                </div>
                <div className="frnd-card">
                    <img src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-1/332451912_1579298289224931_4588776707770080538_n.jpg?stp=dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=m4F4Nc9ojpkAX80eLLM&_nc_ht=scontent.fbom5-1.fna&oh=00_AfC1ksKXIApt3olriJmWOIuUzEnFPb8kOPm3KYylRzhJSQ&oe=64E4C815" />
                    <h5>Rahul Powar</h5>
                    <p>17 mutual friends</p>
                    <button className='add-frnd'>Add friend</button><br />
                    <button className='remove'>Remove</button>
                </div>



            </div>
            
        </div>

    </div>
  )
}

export default Friends