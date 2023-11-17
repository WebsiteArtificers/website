"use client"
import './salesComponents.css'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { client } from '@/sanity/client'

export default function SalesRight() {

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [companySize, setCompanySize] = useState('1-100')
    const [message, setMessage] = useState('')
    const [connection, setConnection] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const uniqueId = uuid().toString();

        const timestamp = new Date().toISOString();

        const formData: Object = {
            fullname,
            id: uniqueId,
            email,
            company,
            companySize,
            message,
            connection,
            publishedAt: timestamp,
        }
        
        try {
            await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            //await supabase.from('SalesForm').insert([formData]);
        } catch (error) {
            console.error(error)
        }

        //setFullname('')
        //setEmail('')
        //setCompany('')
        //setCompanySize('1-100')
        //setMessage('')
        //setConnection('')

        //handleLocationChange('/thank-you');
    }

    function handleLocationChange(url: string) {
        window.location.href = url;
    }

    return (
        <div className='salesRight__container'>
            <form className='salesRight__form' onSubmit={handleSubmit}>
                <div className='salesRight__subcontainer'>
                    <div className='salesRight__subcontainer--subcontainer'>
                        <label className='salesRight__subcontainer--container__label' htmlFor='fullname'>Full Name</label>
                        <input
                        required
                        className='salesRight__subcontainer--container__input'
                        id='fullname' name='fullname'
                        placeholder='First and last name'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}/>
                    </div>
                    <div className='salesRight__subcontainer--subcontainer'>
                        <label className='salesRight__subcontainer--container__label' htmlFor='email'>Work Email</label>
                        <input
                        required
                        className='salesRight__subcontainer--container__input'
                        id='email'
                        name='email'
                        placeholder='example@company.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className='salesRight__subcontainer'>
                    <div className='salesRight__subcontainer--subcontainer'>
                        <label className='salesRight__subcontainer--container__label' htmlFor='company'>Company</label>
                        <input
                        required
                        className='salesRight__subcontainer--container__input'
                        id='company' name='company'
                        placeholder='Company name'
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}/>
                    </div>
                    <div className='salesRight__subcontainer--subcontainer'>
                        <label className='salesRight__subcontainer--container__label' htmlFor='companySize'>Company Size</label>
                        <select title='companySize' onChange={(e) => setCompanySize(e.target.value)} value={companySize} required className='salesRight__subcontainer--container__input' id='companySize' name='companySize' placeholder='Company size'>
                            <option disabled>Number of employees</option>
                            <option value='1-100'>1-100</option>
                            <option value='100-500'>100-500</option>
                            <option value='500-5000'>500-5000</option>
                            <option value='5000+'>5000+</option>
                        </select>
                    </div>
                </div>
                <div className='salesRight__subcontainer'>
                    <div className='salesRight__subcontainer--subcontainer textarea__container'>
                        <label className='salesRight__subcontainer--container__label' htmlFor='message'>Message <span>(Optional)</span></label>
                        <textarea
                        className='salesRight__subcontainer--subcontainer__textarea'
                        id='message'
                        name='message'
                        placeholder='Tell us about your projects, timelines, needs, etc'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                </div>
                <div className='salesRight__subcontainer'>
                    <div className='salesRight__subcontainer--subcontainer'>
                        <label className='salesRight__subcontainer--container__label' htmlFor='connection'>Where did you find us? <span>(Optional)</span></label>
                        <input
                        className='salesRight__subcontainer--container__input'
                        id='connection'
                        name='connection'
                        placeholder='How did you hear about DAV?'
                        value={connection}
                        onChange={(e) => setConnection(e.target.value)}/>
                    </div>
                    <div className='salesRight__subcontainer--subcontainer'>
                        <button type='submit' className='salesRight__subcontainer--subcontainer__button button__secondary'>Contact Sales</button>
                    </div>
                </div>
            </form>
        </div>
    )
}