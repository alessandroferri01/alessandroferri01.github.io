'use client'

import React from 'react'

//Components
import FormContact from '../components/Contact/FormContact'

//Lottie
import Lottie from 'lottie-react'
import contact_animation from '../../../public/contact_animation.json'

export default function Contact() {
  return (
    <div>
      <Lottie animationData={contact_animation} loop={false} />
      <FormContact />
    </div>
  )
}

