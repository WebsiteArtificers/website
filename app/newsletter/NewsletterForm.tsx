import './newsletter.css'

export default function NewsletterForm() {
    return <form className='newsletter__form'>
        <div className='newsletter__form--container'>
            <div className='newsletter__input--container'>
                <label htmlFor='firstName' className='newsletter__form--label'>First Name</label>
                <input placeholder='First name' required title='firstName' id='firstName' className='newsletter__form--input'/>
            </div>
            <div className='newsletter__input--container'>
                <label htmlFor='email' className='newsletter__form--label'>Email</label>
                <input placeholder='example@example.com' required title='email' id='email' className='newsletter__form--input'/>
            </div>
            <div className='newsletter__input--container'>
                <label htmlFor='frequency' className='newsletter__form--label'>Frequency</label>
                <select required title='frequency' id='frequency' className='newsletter__form--input'>
                    <option disabled>How often would you like receive our letters?</option>
                    <option value='1-100'>Weekly</option>
                    <option value='100-500'>Biweekly</option>
                    <option value='500-5000'>Monthly</option>
                    <option value='5000+'>Yearly</option>
                </select>
            </div>
        </div>
        <button type='submit' className='newsletter__form--button button__tertiary'>Join newsletter</button>
        <p className='newsletter__disclaimer--paragraph'>
            By submitting this form, you confirm that you have read and understood <a href='/privacy-policy'>Website Artificers' Privacy Policy</a>. This site is protected by reCAPTCHA and the <a href='https://policies.google.com/privacy' target="_blank" rel="noopener noreferrer">Google Privacy Policy</a> and <a href='https://policies.google.com/terms' target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
        </p>
    </form>
}