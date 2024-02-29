import './rewards.css';

export default function Page() {
    return (
        <div className='rewards__container'>
            <h2 className='rewards__subheader'>Join Our Tiered Commission</h2>
            <h1 className='rewards__header'>Affiliate Program</h1>
            <div className='rewards__subcontainer--introduction'>
                <div className='rewards__introduction--header__container'>
                    <div className='rewards__introduction--svg__subcontainer'>
                        <Introduction />
                    </div>
                    <div className='rewards__introduction--header__subcontainer'>
                        <h2 className='rewards__introduction--header'>What is the <span>Artificer Affiliate Program?</span></h2>
                    </div>
                </div>
                <div className='rewards__introduction--paragraph__container'>
                    <p className='rewards__introduction--paragraph'>
                        The <span>Artificer Affiliate Program</span> is simply a way for you to earn money by referring clients to us.
                        The <span>Artificer Affiliate Program</span> is different from other affiliate programs in that it is a <span>tiered commission</span> program.
                    </p>
                    <p className='rewards__introduction--paragraph'>
                        As you refer more client to use you will earn a higher commission percentage.
                        We offer several different services at different price points and we offer a percentage of the sale to you in return for bringing us new clients.
                    </p>
                    <p className='rewards__introduction--paragraph'>
                        Below is a more detailed breakdown of how our tiered commission affiliate program works!
                    </p>
                </div>
            </div>
            <div className='rewards__subcontainer--tiers'>
                <h2 className='rewards__tiers--header'>How it works</h2>
                <div className='rewards__tiers--container'>
                    <div className='rewards__tiers--subcontainer'>
                        <h4 className='rewards__tiers--subheader rewards__starter'>Starter <span>Affiliate</span></h4>
                        <p className='rewards__tiers--paragraph'>1-2 clients referred</p>
                        <h3 className='rewards__tiers--percentage'>20<span>% of subscription price</span></h3>
                    </div>
                    <div className='rewards__tiers--subcontainer'>
                        <h4 className='rewards__tiers--subheader rewards__standard'>Standard <span>Affiliate</span></h4>
                        <p className='rewards__tiers--paragraph'>4-6 clients referred</p>
                        <h3 className='rewards__tiers--percentage'>25<span>% of subscription price</span></h3>
                    </div>
                    <div className='rewards__tiers--subcontainer'>
                        <h4 className='rewards__tiers--subheader rewards__professional'>Professional <span>Affiliate</span></h4>
                        <p className='rewards__tiers--paragraph'>7+ clients referred</p>
                        <h3 className='rewards__tiers--percentage'>30<span>% of subscription price</span></h3>
                    </div>
                </div>
                <p className='rewards__tiers--chain'><span>Additionally, if anyone you refer to us also refers new clients,</span> you receive 5% from those sales.</p>
                <p className='rewards__tiers--disclaimer'><span>Disclaimer: Payments are not continuous.</span> Affiliates will only receive one payment per successful referral.</p>
            </div>
            <div className='rewards__subcontainer--faq'>
                <h2 className='rewards__faq--header'>What's next?</h2>
                <div className='rewards__faq--subcontainer'>
                    <div className='rewards__faq--affiliates__container'>
                        <h3 className='rewards__faq--affiliates__header'>Become an affiliate</h3>
                        <p className='rewards__faq--affiliates__paragraph'>
                            If you're ready to start earning a commission on every client you refer to us, click the button below to get started.
                        </p>
                        <a className='rewards__faq--affiliates__link' href='/contact/affiliates'>
                            <button className='rewards__faq--affiliates__button button__tertiary'>Become an affiliate</button>
                        </a>
                    </div>
                    <div className='rewards__faq--contact__container'>
                        <h3 className='rewards__faq--contact__header'>Got questions?</h3>
                        <p className='rewards__faq--contact__paragraph'>
                            We're here to help. If you have any questions about our affiliate program, please don't hesitate to reach out to us.
                        </p>
                        <a className='rewards__faq--contact__link' href='/contact/customer-service'>
                            <button className='rewards__faq--contact__button button__quaternary'>Contact our support team</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Introduction() {
  return (
    <svg
      id="_x32_"
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
    >
      <path
        d="M288.8.457C178.31-6.342 85.278 63.166 87.382 176.416l-.084 10.25-48.003 84.767a16.337 16.337 0 00-.613 14.876 16.275 16.275 0 0011.682 9.218l29.666 8.188 9.312 89.896a31.114 31.114 0 0010.634 22.51 31.026 31.026 0 0023.771 7.412l23.694 1.892a16.322 16.322 0 0112.712 4.056 16.388 16.388 0 015.445 12.2V512h200.419v-47.602c0-13.666 4.712-44.909 13.675-59.206 32.488-51.948 85.381-79.587 94.301-186.14C482.914 112.515 419.328 8.5 288.8.457zm138.154 198.128h-20.099c-4.89-.008-8.861-3.978-8.87-8.869v-12.38c0-4.533-3.689-8.222-8.222-8.222-4.541 0-8.23 3.689-8.23 8.222v12.38c.008 13.99 11.34 25.314 25.322 25.322H424.1c-9.449 38.996-35.478 53.685-61.575 38.945-17.007-9.619-15.559-23.976-23.49-35.887v-43.504c0-4.533-3.69-8.222-8.231-8.222s-8.222 3.69-8.222 8.222v30.604c-11.809-5.06-30.613-8.307-62.01-8.307-8.503 0-16.35-.068-23.669-.205v-33.049a8.23 8.23 0 00-8.23-8.231c-4.542 0-8.222 3.681-8.222 8.231v32.598c-66.534-2.59-76.315-13.283-81.546-40.172a104.822 104.822 0 01-.503-4.763h34.924c16.563 0 29.991-13.428 29.991-29.982v-12.951c0-4.541-3.688-8.222-8.231-8.222a8.221 8.221 0 00-8.221 8.222v12.951c-.017 7.472-6.066 13.522-13.539 13.538h-34.967c2.011-22.885 12.823-41.595 29.625-58.704 12.84-13.096 28.679-23.243 46.648-30.136v25.178c.05 7.055 2.522 14.246 7.276 20.362 2.385 3.034 5.419 5.778 9.125 7.771 3.68 2.01 8.068 3.22 12.746 3.212h26.438c4.541 0 8.222-3.689 8.222-8.222 0-4.541-3.681-8.23-8.222-8.23h-26.438c-1.926-.009-3.468-.452-4.933-1.236-2.173-1.159-4.201-3.297-5.632-5.922-1.423-2.59-2.156-5.624-2.131-7.736V40.799c13.641-3.527 28.202-5.393 43.428-5.393 3.868 0 7.787.119 11.707.366 34.506 2.122 64.378 12.942 87.774 31.532v72.328c0 4.55 3.69 8.238 8.231 8.238s8.221-3.689 8.221-8.238v-56.81c.436.485.887.954 1.321 1.448 23.567 27.273 36.27 64.906 35.938 104.823a166.596 166.596 0 01-.749 9.492z"
      />
      <path
        d="M322.582 86.171c-4.541 0-8.23 3.689-8.23 8.23v26.583c-.009 5.742-4.66 10.428-10.421 10.437h-29.335c-4.541 0-8.222 3.672-8.222 8.214 0 4.55 3.681 8.238 8.222 8.238h29.335c14.851-.025 26.873-12.039 26.873-26.889V94.401c0-4.541-3.681-8.23-8.222-8.23z"
      />
    </svg>
  );
}
