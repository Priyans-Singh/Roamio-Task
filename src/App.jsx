import React from 'react';
import HeroSection from './pages/heroSection';
import PostSection from './pages/postSection';
import FeaturesSection from './pages/featuresSection';
import TopicsSection from './pages/topicsSection';
import SecondarySectioin from './pages/secondarySectioin';
import CyberguardSection from './pages/cyberguardSection';
import TestimonialSection from './pages/testimonialSection';
import SignupSection from './pages/signupSection';
import InsightsSection from './pages/insightsSection';
import FooterSection from './pages/footerSection';

function App() {
  return (
    <div>
      <HeroSection/>
      <PostSection/>
      <FeaturesSection/>
      <TopicsSection/>
      <SecondarySectioin/>
      <CyberguardSection/>
      <TestimonialSection/>
      <SignupSection/>
      <InsightsSection/>
      <FooterSection/>
    </div>
  )
};

export default App;
