import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './home'
import SpeedTest from './speed'
import Usage from './usage'
import LinkedDevices from './linked_devices'
const Rout = () => {
    return (
        <>
        <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/speed-test' element ={<SpeedTest/>}/>
        <Route path='/live_usage' element ={<Usage/>}/>
        <Route path='/linked_devices' element ={<LinkedDevices/>}/>

        </Routes>
       
        </>
    )
}
export default Rout