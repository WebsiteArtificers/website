import './about.css'

export default function Values() {
    return <div className='values__container'>
        <h2 className='values__container--header'>Our <span>Values</span></h2>
        <div className='values__container--subcontainer'>
            <div className='values__subcontainer--subcontainer'>
                <h3 className='values__container--subcontainer__header'>Boldness</h3>
                <p className='values__container--subcontainer__paragraph'>Boldness means having the courage to stand out. We are boldly ingenuitive and committed to creativity, pushing ourselves to think outside the box and exploring areas of hidden opportunity.</p>
            </div>
            <div className='values__subcontainer--subcontainer'>
                <h3 className='values__container--subcontainer__header'>Credibility</h3>
                <p className='values__container--subcontainer__paragraph'>We are fully honest and transparent in our interactions with our clients and our team. We are committed to doing the right thing, even when no one is watching, even when it's easier to cut corners.</p>
            </div>
            <div className='values__subcontainer--subcontainer'>
                <h3 className='values__container--subcontainer__header'>Creativity</h3>
                <p className='values__container--subcontainer__paragraph'>We are always looking for new ways to improve our services and deliver greater values to our clients. Creativity means taking risks, and it means having a growth mentality. We are never stagnant and we are always moving forward.</p>
            </div>
            <div className='values__subcontainer--subcontainer'>
                <h3 className='values__container--subcontainer__header'>Intentionality</h3>
                <p className='values__container--subcontainer__paragraph'>Everything is done with a purpose and with an end goal in mind. We treat out customers and our teams with intentionality as we look to grow with them and foster impeccable character both inside and outside of our community.</p>
            </div>
        </div>
    </div>
}