import React from 'react';
import "./Profile.css"
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const router = useNavigate();
    return (
        <div id="parent-con">
            <div id="profile-con">
                <div className="cover-photo">
                    <img src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2019/07/29194350/FH2_Dodge_Charger_FFE-e1564481686306-1-1576x900.jpg" />
                    <div className='pc-1'>
                        <i className="fa-solid fa-face-laugh" style={{ color: '#ffffff' }}></i>
                        <h6>Create with avatar</h6>
                    </div>
                    <div className='pc-2'>
                        <i className="fa-solid fa-camera" style={{ color: '#ffffff' }}></i>
                        <h6>Edit cover photo</h6>
                    </div>
                </div>

                <div className="profile-con">
                    <img className='p-pic' src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-6/316407627_2285357611642990_1364941092960111903_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5PoRr_1PAPkAX85x_z3&_nc_ht=scontent.fbom5-1.fna&oh=00_AfBSC-Jbya3qya96APu6-xlDl6zX_r2yKtTJb7dZ6HTL1w&oe=64E2BBC4" />

                    <div className='username'>
                        <h1>Chetan Patil</h1>
                        <p>817 friends</p>
                    </div>

                    <div className='profile-btns'>
                        <button className='add-story' onClick={()=>router("/create")}>+ Add to story</button>
                        <button className='edit-profile' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit profile</button>

                        {/* *****edit profile****** */}
                        <form class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel" style={{ paddingLeft: "200px" }}>Edit profile</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div className="details-update">
                                        <div className="flex-j">
                                            <h5>Profile picture</h5>
                                            <p>Edit</p>
                                        </div>
                                        <img className='pp' src="https://scontent.fbom5-1.fna.fbcdn.net/v/t39.30808-6/316407627_2285357611642990_1364941092960111903_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5PoRr_1PAPkAX85x_z3&_nc_ht=scontent.fbom5-1.fna&oh=00_AfBSC-Jbya3qya96APu6-xlDl6zX_r2yKtTJb7dZ6HTL1w&oe=64E2BBC4" />
                                    </div>

                                    <div className="details-update">
                                        <div className="flex-j">
                                            <h5>Cover photo</h5>
                                            <p>Edit</p>
                                        </div>
                                        <img className='cp' src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2019/07/29194350/FH2_Dodge_Charger_FFE-e1564481686306-1-1576x900.jpg" />
                                    </div>

                                    <div className="details-update">
                                        <div className="flex-j">
                                            <h5>Avatar</h5>
                                            <p>Edit</p>
                                        </div>
                                        <img className='av' src="https://scontent.fbom5-1.fna.fbcdn.net/v/t58.21685-6/270821329_1506508810118314_265961333465368111_n.png?stp=dst-png_p210x210&_nc_cat=109&ccb=1-7&_nc_sid=eac8f0&_nc_ohc=5qwC4pmEQjIAX8uEuVz&_nc_ht=scontent.fbom5-1.fna&oh=00_AfAXrQ8bf0Wto3vvbC2AtVtXqaw9kq84ijMmebHzvxTYZA&oe=64DE976A" />
                                    </div>

                                    <div className="details-update">
                                        <div className="flex-j">
                                            <h5>Bio</h5>
                                            <p>Add</p>
                                        </div>
                                        <input type="text" placeholder='Describe yourself...' />
                                    </div>
                                    <div className="details-update">
                                        <div className="flex-j">
                                            <h5>Customise your Intro</h5>
                                            <p>Edit</p>
                                        </div>
                                    </div>

                                    <div className='my-details'>
                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png" />
                                        <p>Lives in <b>Navi Mumbai (New Mumbai),India</b></p>
                                    </div>
                                    <div className='my-details'>
                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png" />
                                        <p>From <b>Panvel</b></p>
                                    </div>
                                    <div className='my-details'>
                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yq/r/S0aTxIHuoYO.png" />
                                        <p>Single</p>
                                    </div>
                                    <div className='my-details'>
                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yE/r/mp_faH0qhrY.png" />
                                        <p>Joined on January 2013</p>
                                    </div>
                                    <div className='my-details'>
                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/OyWm6cSjuMt.png" />
                                        <p>Followed by <b>164 people</b></p>
                                    </div>
                                    <div className='my-details'>
                                        <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/LPnnw6HJjJT.png" />
                                        <span>patilchetan.17</span>
                                    </div>

                                    <div className="details-update">
                                        <div className="flex-j">
                                            <h5>Hobbies</h5>
                                            <p>Edit</p>
                                        </div>
                                    </div>

                                    <div className="details-update">
                                        <div className="flex-j">
                                            <h5>Featured</h5>
                                            <p>Edit</p>
                                        </div>
                                        <img className='fp' src="https://static.xx.fbcdn.net/rsrc.php/v3/yN/r/gL1slwup025.png" />
                                    </div>

                                    <button className='about-info'>Edit Your About Info</button>


                                </div>
                            </div>
                        </form>
                        {/* ******************************* */}

                    </div>

                </div>

                <div className='profile-category'>
                    <ul>
                        <li>Posts</li>
                        <li>About</li>
                        <li>Friends</li>
                        <li>Photos</li>
                        <li>Videos</li>
                        <li>Reels</li>
                        <li>More</li>
                    </ul>
                </div>




            </div>
            
        </div>
    )
}

export default Profile