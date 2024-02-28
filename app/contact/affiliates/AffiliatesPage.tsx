"use client"
import './affiliates.css'
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { writeClient } from '@/sanity/client';

export default function AffiliatesPage() {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [companySize, setCompanySize] = useState('1-100')
    const [message, setMessage] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [website, setWebsite] = useState('')
    const [location, setLocation] = useState('')

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
            jobTitle,
            website,
            location,
            publishedAt: timestamp,
        }
        
        try {
            await writeClient.create({_type: 'contactAffiliatesForm', ...formData});
            //await supabase.from('SalesForm').insert([formData]);
        } catch (error) {
            console.error(error)
        }

        setFullname('')
        setEmail('')
        setCompany('')
        setCompanySize('1-100')
        setMessage('')
        setJobTitle('')
        setWebsite('')
        setLocation('')

        handleLocationChange('/thank-you');
    }

    function handleLocationChange(url: string) {
        window.location.href = url;
    }

    return <div className='affiliates__container'>
        <h1 className='affiliates__header'>Become a partner</h1>
        <p className='affiliates__paragraph'>Are you looking to grow your business with us? Send us your details and we'll be in touch!</p>
        <p className='affiliates__paragraph affiliates__subparagraph'>
            Receive a <span>5% monthly comission</span> on all sales generated from your referrals!
        </p>
        <form className='affiliates__form' onSubmit={handleSubmit}>
            <div className='affiliates__subcontainer'>
                <div className='affiliates__subcontainer--subcontainer'>
                    <label className='affiliates__subcontainer--container__label' htmlFor='fullname'>Full Name</label>
                    <input
                    required
                    className='affiliates__subcontainer--container__input'
                    id='fullname' name='fullname'
                    placeholder='First and last name'
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}/>
                </div>
                <div className='affiliates__subcontainer--subcontainer'>
                    <label className='affiliates__subcontainer--container__label' htmlFor='email'>Work Email</label>
                    <input
                    required
                    className='affiliates__subcontainer--container__input'
                    id='email'
                    name='email'
                    placeholder='example@company.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className='affiliates__subcontainer'>
                <div className='affiliates__subcontainer--subcontainer'>
                    <label className='affiliates__subcontainer--container__label' htmlFor='company'>Company</label>
                    <input
                    required
                    className='affiliates__subcontainer--container__input'
                    id='company' name='company'
                    placeholder='Company name'
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}/>
                </div>
                <div className='affiliates__subcontainer--subcontainer'>
                    <label className='affiliates__subcontainer--container__label' htmlFor='companySize'>Company Size</label>
                    <select title='companySize' onChange={(e) => setCompanySize(e.target.value)} value={companySize} required className='affiliates__subcontainer--container__input' id='companySize' name='companySize' placeholder='Company size'>
                        <option disabled>Number of employees</option>
                        <option value='1-100'>1-100</option>
                        <option value='100-500'>100-500</option>
                        <option value='500-5000'>500-5000</option>
                        <option value='5000+'>5000+</option>
                    </select>
                </div>
            </div>
            <div className='affiliates__subcontainer'>
                <div className='affiliates__subcontainer--subcontainer textarea__container'>
                    <label className='affiliates__subcontainer--container__label' htmlFor='message'>Message <span>(Optional)</span></label>
                    <textarea
                    className='affiliates__subcontainer--subcontainer__textarea'
                    id='message'
                    name='message'
                    placeholder='Any additional information about your application that we should know'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}/>
                </div>
            </div>
            <div className='affiliates__subcontainer'>
                <div className='affiliates__subcontainer--subcontainer'>
                    <label className='affiliates__subcontainer--container__label' htmlFor='jobTitle'>Job title</label>
                    <input
                    required
                    className='affiliates__subcontainer--container__input'
                    id='jobTitle'
                    name='jobTitle'
                    placeholder='What is your current job title?'
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}/>
                </div>
                <div className='affiliates__subcontainer--subcontainer'>
                    <label className='affiliates__subcontainer--container__label' htmlFor='website'>Company website</label>
                    <input
                    required
                    className='affiliates__subcontainer--container__input'
                    id='website'
                    name='website'
                    placeholder='www.websiteartificers.com'
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}/>
                </div>
            </div>
            <div className='affiliates__subcontainer'>
                <div className='affiliates__subcontainer--subcontainer'>
                    <label className='affiliates__subcontainer--container__label' htmlFor='location'>Location</label>
                    <input
                    required
                    className='affiliates__subcontainer--container__input'
                    id='location'
                    name='location'
                    placeholder='Where is your company located?'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}/>
                </div>
                <div className='affiliates__subcontainer--subcontainer'>
                    <button type='submit' className='affiliates__subcontainer--subcontainer__button button__primary'>Send Application</button>
                </div>
            </div>
            <p className='affiliates__disclaimer--paragraph'>
                By submitting this form, you confirm that you have read and understood <a href='/privacy-policy'>Website Artificers' Privacy Policy</a>. This site is protected by reCAPTCHA and the <a href='https://policies.google.com/privacy' target="_blank" rel="noopener noreferrer">Google Privacy Policy</a> and <a href='https://policies.google.com/terms' target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
            </p>
        </form>
    </div>
}
