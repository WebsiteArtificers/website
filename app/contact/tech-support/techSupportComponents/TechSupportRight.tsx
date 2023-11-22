"use client"
import './techSupportComponents.css'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { writeClient } from '@/sanity/client';

export default function TechSupportRight() {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const uniqueId = uuid().toString();

        const timestamp = new Date().toISOString();
        
        const formData: Object = {
            fullname,
            id: uniqueId,
            email,
            message,
            phone,
            publishedAt: timestamp,
        }
        
        try {
            //await writeClient.create({_type: 'contacttechSupportForm', ...formData});
            //await supabase.from('techSupportForm').insert([formData]);
        } catch (error) {
            console.error(error)
        }

        setFullname('')
        setEmail('')
        setMessage('')
        setPhone('')

        handleLocationChange('/thank-you');
    }

    function handleLocationChange(url: string) {
        window.location.href = url;
    }

    return (
            <div className='techSupportRight__container'>
                <form className='techSupportRight__form' onSubmit={handleSubmit}>
                    <div className='techSupportRight__subcontainer'>
                        <div className='techSupportRight__subcontainer--subcontainer'>
                            <label className='techSupportRight__subcontainer--container__label' htmlFor='fullname'>Full Name</label>
                            <input
                            required
                            className='techSupportRight__subcontainer--container__input'
                            id='fullname' name='fullname'
                            placeholder='First and last name'
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}/>
                        </div>
                        <div className='techSupportRight__subcontainer--subcontainer'>
                            <label className='techSupportRight__subcontainer--container__label' htmlFor='email'>Work Email</label>
                            <input
                            required
                            className='techSupportRight__subcontainer--container__input'
                            id='email'
                            name='email'
                            placeholder='example@company.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className='techSupportRight__subcontainer'>
                        <div className='techSupportRight__subcontainer--subcontainer textarea__container'>
                            <label className='techSupportRight__subcontainer--container__label' htmlFor='message'>Message <span>(Optional)</span></label>
                            <textarea
                            className='techSupportRight__subcontainer--subcontainer__textarea'
                            id='message'
                            name='message'
                            placeholder='Tell us about the issues you are experiencing with as much detail as possible'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}/>
                        </div>
                    </div>
                    <div className='techSupportRight__subcontainer'>
                        <div className='techSupportRight__subcontainer--subcontainer'>
                            <label className='techSupportRight__subcontainer--container__label' htmlFor='phone'>Phone Number <span>(Optional)</span></label>
                            <input
                            className='techSupportRight__subcontainer--container__input'
                            id='phone'
                            name='phone'
                            placeholder='We might troubleshoot over the phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}/>
                        </div>
                        <div className='techSupportRight__subcontainer--subcontainer'>
                            <button type='submit' className='techSupportRight__subcontainer--subcontainer__button button__secondary'>Contact Tech Support</button>
                        </div>
                    </div>
                    <p className='techSupportRight__disclaimer--paragraph'>
                        By submitting this form, you confirm that you have read and understood <a href='/privacy-policy'>Website Artificers' Privacy Policy</a>. This site is protected by reCAPTCHA and the <a href='https://policies.google.com/privacy' target="_blank" rel="noopener noreferrer">Google Privacy Policy</a> and <a href='https://policies.google.com/terms' target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
                    </p>
                </form>
            </div>
    )
}