"use client"
import { useState } from 'react'
import WebsiteOffering from "./offeringComponents/websiteOffering/WebsiteOffering"
import DataOffering from "./offeringComponents/dataOffering/DataOffering"
import BackendOffering from "./offeringComponents/backendOffering/BackendOffering"
import './offeringDescription.css'

export default function OfferingDescription() {

    const [ activateLeft, setActivateLeft ] = useState(true)
    const [ activateRight, setActivateRight ] = useState(false)
    const [ activateCenter, setActivateCenter ] = useState(false)

    function handleActivateLeft() {
        setActivateLeft(true)

        setActivateCenter(false)
        setActivateRight(false)
    }

    function handleActivateCenter() {
        setActivateCenter(true)
        
        setActivateRight(false)
        setActivateLeft(false)
    }

    function handleActivateRight() {
        setActivateRight(true)

        setActivateLeft(false)
        setActivateCenter(false)
    }

    function renderComponents() {
        if (activateLeft) return <WebsiteOffering />
        else if (activateRight) return <BackendOffering />
        else if (activateCenter) return <DataOffering />
        else return <WebsiteOffering />
    }

    return (
        <div className='offeringDescription__container'>
            <div className='offeringDescription__button--container'>
                <button onClick={handleActivateLeft} className={`offeringDescription__button ${activateLeft === true ? 'active' : ''} left`}>Website</button>
                <button onClick={handleActivateCenter} className={`offeringDescription__button ${activateCenter === true ? 'active' : ''} center`}>Data</button>
                <button onClick={handleActivateRight} className={`offeringDescription__button ${activateRight === true ? 'active' : ''} right`}>Backend</button>
            </div>
            <div>
                {renderComponents()}
            </div>
        </div>
    )
}