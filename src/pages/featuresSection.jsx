import React from 'react'
import FeatureBtn from '../components/featureBtn'
import FeatureCard from '../components/featureCard'

function featuresSection() {
  return (
    <div className='feature-section'>
       <h1>
         FEATURES WITH MORE WONDERS
       </h1>
       <div className="content-container">
          <FeatureBtn/>
          <FeatureCard/>
       </div>
    </div>
  )
}

export default featuresSection