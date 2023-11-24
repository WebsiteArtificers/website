import './newsletter.css'
import NewsletterForm from './NewsletterForm'
import NewsletterDescription from './NewsletterDescription'

export default function NewsletterPage() {
    return <div className="newsletter__container">
            <h1 className='newsletter__header'>Join the Artificer Community</h1>
            <p className='newsletter__paragraph'>Receive weekly updates, best practices, and event invites. <span>Unsubscribe at any time.</span></p>
            <NewsletterForm />
            <NewsletterDescription />
        </div>
}