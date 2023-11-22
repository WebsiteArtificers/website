"use client"
import './customerServiceComponents.css'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { writeClient } from '@/sanity/client';

export default function CustomerServiceRight() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [currentPlan, setCurrentPlan] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const uniqueId = uuid().toString();

        const timestamp = new Date().toISOString();
        
        const formData: Object = {
            fullname,
            id: uniqueId,
            email,
            message,
            publishedAt: timestamp,
        }
        
        try {
            //await writeClient.create({_type: 'contactCustomerSupportForm', ...formData});
            //await supabase.from('SalesForm').insert([formData]);
        } catch (error) {
            console.error(error)
        }

        setFullname('')
        setEmail('')
        setMessage('')
        setCurrentPlan('')

        handleLocationChange('/thank-you');
    }

    function handleLocationChange(url: string) {
        window.location.href = url;
    }

    return (
        <div className='customerServiceRight__container'>
            <form className='customerServiceRight__form' onSubmit={handleSubmit}>
                <div className='customerServiceRight__subcontainer'>
                    <div className='customerServiceRight__subcontainer--subcontainer'>
                        <label className='customerServiceRight__subcontainer--container__label' htmlFor='fullname'>Full Name</label>
                        <input
                        required
                        className='customerServiceRight__subcontainer--container__input'
                        id='fullname' name='fullname'
                        placeholder='First and last name'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}/>
                    </div>
                    <div className='customerServiceRight__subcontainer--subcontainer'>
                        <label className='customerServiceRight__subcontainer--container__label' htmlFor='email'>Email</label>
                        <input
                        required
                        className='customerServiceRight__subcontainer--container__input'
                        id='email'
                        name='email'
                        placeholder='example@company.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='customerServiceRight__subcontainer'>
                    <div className='customerServiceRight__subcontainer--subcontainer textarea__container'>
                        <label className='customerServiceRight__subcontainer--container__label' htmlFor='message'>Message <span>(Optional)</span></label>
                        <textarea
                        className='customerServiceRight__subcontainer--subcontainer__textarea'
                        id='message'
                        name='message'
                        placeholder='Tell us how we can assist you'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                </div>
                <div className='customerServiceRight__subcontainer'>
                    <div className='customerServiceRight__subcontainer--subcontainer'>
                        <label className='customerServiceRight__subcontainer--container__label' htmlFor='plan'>What is your current plan? <span>(Optional)</span>
                        <p>Can be found at <a href='/account' target="_blank" rel="noopener noreferrer">websiteartificers.com/account</a></p>
                        </label>
                        <input
                        className='customerServiceRight__subcontainer--container__input'
                        id='plan'
                        name='plan'
                        placeholder='Standard or Professional?'
                        value={currentPlan}
                        onChange={(e) => setCurrentPlan(e.target.value)}/>
                    </div>
                    <div className='customerServiceRight__subcontainer--subcontainer'>
                        <button type='submit' className='customerServiceRight__subcontainer--subcontainer__button button__secondary'>Contact customerService</button>
                    </div>
                </div>
                <p className='customerServiceRight__disclaimer--paragraph'>
                    By submitting this form, you confirm that you have read and understood <a href='/privacy-policy'>Website Artificers' Privacy Policy</a>. This site is protected by reCAPTCHA and the <a href='https://policies.google.com/privacy' target="_blank" rel="noopener noreferrer">Google Privacy Policy</a> and <a href='https://policies.google.com/terms' target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
                </p>
            </form>
        </div>
    )
}