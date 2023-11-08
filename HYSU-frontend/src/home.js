import React from 'react'
import { Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import './home.css'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {GiWallet} from 'react-icons/gi'
import {BsPersonFillCheck} from 'react-icons/bs'
import {LuNetwork} from 'react-icons/lu'
import {AiFillFolderOpen} from 'react-icons/ai'
import {BsWifi} from 'react-icons/bs'
import {SiSpeedtest} from 'react-icons/si'
const Home = () =>{
    return (
        <>
        <div className='top-banner'>
            <div className='container'>
                <div className='detail'>
                <h2> Taking a closer look at your Network, but from anywhere</h2>
                
                <Link className='link' to='/live_usage'> Check wireless usage now <BsArrowRight/> </Link>
                
                </div>
                <div className='img_box'>
                    <img src='./img/research.png' height='500px' width='500px' alt='sliderimg'></img>
                </div>
            </div>
        </div>
        <div className='product_type'>
            <div className='container'>
                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/software_development.png' height='200px' width='150px' alt='Software Development'></img>
                    </div>
                    <div className='detail'>
                        <p><strong>Network Analysis </strong><LuNetwork/></p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/data_analysis.png' height='200px' width='150px' alt='Software Development'></img>
                    </div>
                    <div className='detail'>
                        <p><strong>File System</strong><AiFillFolderOpen/></p>
                    </div>
                </div>
                <div className='box'>
                    <div className='img_box'>
                        <img src='./img/network_consults.png' height='200px' width='150px' alt='Software Development'></img>
                    </div>
                    <div className='detail'>
                        <p> <strong>Wifi Management: </strong><BsWifi/></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='about'>
            <div className='container'>
            <div className='box'>
                    <div className='icon'>
                        <GiWallet/>
                    </div>
                    <div className='detail'>
                        <h3>Hyper-Elastic-Prices</h3>
                        <p>You're wallet will handle :)</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <RiCustomerService2Fill/>
                    </div>
                    <div className='detail'>
                        <h3>Hyper-Client-Support</h3>
                        <p>Call +256-770-548525/+256-751-375-366 </p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>
                        <BsPersonFillCheck/>
                    </div>
                    <div className='detail'>
                        <h3>Hyper-Proffesionals</h3>
                        <p>Been there, Done it, What next?</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Home 