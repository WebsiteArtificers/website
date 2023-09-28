import './welcome.css'

export default function Welcome() {
    return (
        <div className='welcome__container'>
            <h1 className='welcome__header'>Welcome to your piece of Virtual Real Estate</h1>
            <div className='welcome__subcontainer'>
                <div className='welcome__subcontainer--subcontainer'>
                    <h2 className='welcome__subcontainer--header one'>
                        Transcend
                    </h2>
                    <h3 className='welcome__subcontainer--subheader'>
                        audience expectations
                    </h3>
                    <p className='welcome__subcontainer--paragraph'>
                        Unleash your brand's creative expression to capture customer engagement and deliver experiences that increase and sustain revenue.
                    </p>
                </div>
                <div className='welcome__subcontainer--subcontainer'>
                    <h2 className='welcome__subcontainer--header two'>
                        Supercharge
                    </h2>
                    <h3 className='welcome__subcontainer--subheader'>
                        data and content
                    </h3>
                    <p className='welcome__subcontainer--paragraph'>
                        Centralize content and data across your business to maximize storage, optimize use, and ensure resources are used properly.
                    </p>
                </div>
                <div className='welcome__subcontainer--subcontainer'>
                    <h2 className='welcome__subcontainer--header three'>
                        Evolve
                    </h2>
                    <h3 className='welcome__subcontainer--subheader'>
                        into the future
                    </h3>
                    <p className='welcome__subcontainer--paragraph'>
                        Disrupt the market with a customizable website ecosystem using disruptive tech.
                    </p>
                </div>
            </div>
        </div>
    )
}