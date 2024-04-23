"use client";
import './pricingFAQ.css';
import { DownArrow } from '@/icons/icons';
import { useState } from 'react';

export default function PricingFAQ() {
    const [faqState, setFaqState] = useState([
        {
            id: 1, question: "Why wouldn't I just hire a full-time website designer?",
            answer: "Good question! The annual cost of a full-time developer or designer often exceeds $100,000, plus benefits. In addition to that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.  With the Standard and Professional plans, you can pause and resume your subscription as often as you need to ensure you're only paying us when you have work available for them.",
            show: false,
            rotate: false
        },
        {
            id: 2,
            question: "How fast will my requests be fulfilled?",
            answer: "That depends on your plan.  The higher-tier plans will be prioritized and given faster response times.  We work as hard as we can to make sure that your requests for your website are delivered in a timely and effective manner.",
            show: false,
            rotate: false
        },
        {
            id: 3,
            question: "Is there a limit to how many requests I can have?",
            answer: "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
            show: false,
            rotate: false
        },
        {
            id: 4,
            question: "How does the pause feature work?",
            answer: "We understand you may not have enough design work to fill up entire month.  Perhaps you only have one or two design requests at the moment.  That's where pausing your subscription comes in handy, and that's why you may want to consider our Standard or Professional plans.  Billing cycles are based on 31 day period.  Let's say you sign up and use the service for 21 days, and then decide to pause your subscription.  This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.",
            show: false,
            rotate: false
        },
        {
            id: 5,
            question: "What programs do you use?",
            answer: "We use several different programs and frameworks to build, design, and deploy our applications. We use JavaScript, HTML, CSS, WordPress, Shopify, NextJS, ReactJS, SQL, Supabase, Vercel, AWS, Google Cloud, Sanity, and much much more to build and deploy your websites.  This might seem like a lot, but we're the professionals when it comes to building websites and applications.  We also use applications like Adobe Illustrator, Canva, and Figma for design jobs.",
            show: false,
            rotate: false
        },
        {
            id: 6,
            question: "How do I request website work?",
            answer: "We are very flexible when it comes to requesting work.  Many of our clients simply email us their requests.  Anything that can be easily linked or shared is fair game.",
            show: false,
            rotate: false
        },
        {
            id: 7,
            question: "What if I am not satisfied with the work?",
            answer: "No worries!  We'll keep revising it until you are satisfied.",
            show: false,
            rotate: false
        },
        {
            id: 8,
            question: "What kind of work don't you do?",
            answer: "We do a ton of work with website development and design, including the design of logos or other branding materials.  We do not, however, do any work with 3D modeling, gifs or animations, document design (i.e. medical forms or contracts), extensive print design (i.e. books or magazines), or any other work that is not directly related to website design or development.  We also do not do any work that is illegal or unethical.  We reserve the right to refuse service to anyone for any reason.  If you need photography or videography services, we do have a partner company that does that kind of work.  Email contact@websiteartificers.com to get their information.",
            show: false,
            rotate: false
        },
        {
            id: 9,
            question: "What if I only have a single request?",
            answer: "All of our plans come with the ability to pause the plan.  If you only have one request, you can simply pause the plan once that request has been completed, and then resume once you have more work for us to complete. Each of our plans is 31 days in length.  If you only use 15 days out of the 31 day plan, you can pause and save the remaining 16 days for later use.",
            show: false,
            rotate: false
        },
        {
            id: 10,
            question: "Do you offer refunds?",
            answer: "Due to the high-quality nature of the work that we do, we do not offer refunds.",
            show: false,
            rotate: false
        },
        {
            id: 11,
            question: "Do your prices ever change or go on discount?",
            answer: "Our prices do not go on discount.  If you would like to save money, check out our affiliate program!  We increase our prices to match the amount of demand we are experiencing.  The price of your plan will cannot change unless you do not renew your plan with us.  If you cancel your plan and then decide to renew it later, you will be subject to the new pricing.",
            show: false,
            rotate: false
        },
    ]);

    const toggleFAQ = (id: number) => {
        setFaqState(faqState.map(faq => 
            faq.id === id ? { ...faq, show: !faq.show, rotate: !faq.rotate } : faq
        ));
    };

    return (
        <div className='pricingFAQ__container'>
            <h2 className='pricingFAQ__header'>Commonly Asked Questions</h2>
            <div className='pricingFAQ__subcontainer'>
                {faqState.map(({ id, question, answer, show, rotate }) => (
                    <div key={id}>
                        <div className='pricingFAQ__question--container' onClick={() => toggleFAQ(id)}>
                            <p className='pricingFAQ__question'>{question}</p>
                            <div className={rotate ? 'rotate' : ''}>
                                <DownArrow />
                            </div>
                        </div>
                        <div className={`pricingFAQ__answer--container ${show ? '' : 'pricingFAQ__hidden'}`}>
                            <p className='pricingFAQ__answer'>{answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}