import { NavLink, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import '../css/main.css';

function Messages(){
    let {url} = useParams('url');
    return(
        <div className="messages">
            <div className="head">
                <div className="left">
                    <div className="image-div">
                        <div className="image"></div>
                    </div>
                    <div className="about">
                        <div className="username">{url}</div>
                        <div className='date-ago'>last seen 5 minute ago</div>
                    </div>
                </div>
                <div className="right">
                    <div className="search"><i class="fas fa-search"></i></div>
                    <div className="phone"><i class="fa-solid fa-phone"></i></div>
                    <div className="dot"><i class="fas fa-ellipsis-h"></i></div>
                </div>
            </div>
            <div className="main">
                <div className="all-messages">
                    <div className="read-messages">
                        
                        <div className="my-message">
                            <div className="content">Salam necesen?</div>
                        </div>
                        <div className="my-message">
                            <div className="content">ne vaxt geleceksen?</div>
                        </div>
                        <div className="my-message">
                            <div className="content">gelende xeber edersen sene sozum olacqq yadinnan cixmazki?</div>
                        </div>
                        <div className="my-message">
                            <div className="content">Lorem ipsum dolor sit,  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quam quos doloremque praesentium delectus labore, quod dicta voluptas aliquam nam, sunt cupiditate dolores. Officia repellat sapiente voluptas, perferendis aliquam a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis labore id ex. Placeat reiciendis quos, tempora porro sapiente officiis, harum iusto qui animi repellendus obcaecati, eaque explicabo alias quam facilis? amet consectetur adipisicing elit. Sapiente aut magni dolore itaque, molestias vitae assumenda odio quia neque ab sed dolorum corporis hic alias quod ut eius, vel dolores?</div>
                        </div>
                        <div className="target-message">
                            <div className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae delectus nulla? Corporis magni quibusdam ea aliquam enim ad eos? Culpa ex quo iusto explicabo. Velit veniam unde soluta neque.</div>
                        </div>
                     
                       
                    </div>
                    <div className="write-messages">
                        <textarea name="" id="" cols="30" rows="10" placeholder='Messages'></textarea>
                        <i class="fa-solid fa-microphone"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

function  Welecome(){
    return(
        <div className="welecome">
            <i class="fas fa-user-secret"></i>
            <h1 className='welecome'>Welecome Anonim messages</h1>
            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fugiat maxime debitis eveniet eius odio nihil accusamus repellat enim reprehenderit temporibus corporis, repudiandae, veniam fugit harum est aut, ullam blanditiis.</div>
            {/* <img src={require('../images/welecome.webp')} alt="" /> */}
        </div>
    )
}

function Main(){
    return(
        <div className="main">
            <div className="left">


                <div className="header">
                    <div className="button">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <input type="text" placeholder='Search'/>
                </div>
                <div className="center">
                    <div className="messages">

                        {/* one user message */}
                        {/* <i class="fas fa-check-double"></i> */}
                        
                        <NavLink className='message-a' to='/sebuhi-quliyev'>
                            <div className="message-div">
                                <div className="left">
                                    {/* <img src={require('../images/user1.jpeg')} alt="" /> */}
                                    <div className="image"></div>
                                </div>
                                <div className="center">
                                    <div className="username">Sebuhi Quliyev</div>
                                    <div className="last-message"><i class="fas fa-check"></i> Salam necesiz? ne vaxt geleceksiz? helloasasasas
                                    asasasasasasasasasa
                                    saasasasas</div>
                                </div>
                                <div className='right'>
                                    <div className="date">Sonday</div>
                                    <div className='messages'>12</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className='message-a' to='rufet-nuriyev'>
                            <div className="message-div">
                                <div className="left">
                                    {/* <img src={require('../images/user1.jpeg')} alt="" /> */}
                                    <div className="image"></div>
                                </div>
                                <div className="center">
                                    <div className="username">Aysel Hesenova</div>
                                    <div className="last-message"><i class="fas fa-check"></i> Isler haqqinda melumat ver</div>
                                </div>
                                <div className='right'>
                                    <div className="date">Sonday</div>
                                    <div className='messages'>4</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink className='message-a' to='/muxtar-bayramov'>
                            <div className="message-div">
                                <div className="left">
                                    {/* <img src={require('../images/user1.jpeg')} alt="" /> */}
                                    <div className="image"></div>
                                </div>
                                <div className="center">
                                    <div className="username">Alex Tom </div>
                                    <div className="last-message"><i class="fas fa-check-double"></i> Important for me</div>
                                </div>
                                <div className='right'>
                                    <div className="date">Sonday</div>
                                    <div className='messages'>1</div>
                                </div>
                            </div>
                        </NavLink>

                    </div>
                    <div className="contact"></div>
                </div>
                <div className="footer">
                    <label htmlFor="choice">
                        <input type="radio" name='choice'/>
                        <i class="fa-solid fa-message"></i>
                    </label>
                    <label htmlFor="choice">
                        <input type="radio" name='choice'/>
                        <i class="fas fa-credit-card"></i>
                    </label>
                    <label htmlFor="choice">
                        <input type="radio" name='choice'/>
                        <i class="fa-solid fa-plus"></i>
                    </label>
                    <label htmlFor="choice">
                        <input type="radio" name='choice'/>
                        <i class="fa-solid fa-address-book"></i>
                    </label>
                    <label htmlFor="choice">
                        <input type="radio" name='choice'/>
                        <i class="fa-solid fa-gear"></i>
                    </label>
                </div>

            </div>
            <div className="right">
                <Outlet />
            </div>
        </div>
    )
}




export { Messages, Welecome };
export default Main;