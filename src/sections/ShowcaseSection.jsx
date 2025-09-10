import React from 'react'

const ShowCaseSection = () => {
    return (
        <div id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>

                    {/* LEFT */}

                    <div className='first-project-wrapper'>
                        <div className='image-wrapper'>
                            <img src="/images/project1.png" alt="Ryde" />

                        </div>
                        <div className='text-content'>
                            <h2>ON-Demand Rides Made  Simple With a PowerFull ,  UserFriendly App called Ride.</h2>
                            <p className='text-white-50 md:text-xl '> 
                                An app build with React Native , Expo, & TailwindCss for a fast, user-friendly experiences.

                            </p>
                        </div>
                    </div>

                    {/* RIGHT*/}

                </div>
            </div>
        </div>
    )
}

export default ShowCaseSection;
