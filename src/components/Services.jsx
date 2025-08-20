import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

        const servicesData = [
            {
                title: 'Advertising' ,
                description: 'Turning bold ideas into powerful campaigns that connect, engage, and inspire.',
                icon: assets.ads_icon,
            },
            {
                title: 'Conatent marketing' ,
                description: 'Helping you plan and deliver strategies that bring measurable results.',
                icon: assets.marketing_icon,
            },
            {
                title: 'Contetnt writing' ,
                description: 'Crafting impactful words that drive your marketing success..',
                icon: assets.content_icon,
            },
            {
                title: 'Social media' ,
                description: 'Building strong social media presence to keep your audience engaged and connected.',
                icon: assets.social_icon,
            },

        ]

  return (
    <motion.div  
    initial="hidden"
     whileInView="visible"
     transition={{staggerChildren: 0.2}}
     viewport={{once: true}}
    id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl-px-40 pt-30 text-gray-700 dark:text-white'>
        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>
        <Title title='How can we help?' desc='From strategy to execution we craft digital solutions that move your buisness forward.'/>

        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service , index)=> (
                <ServiceCard key={index} service={service} index={index}/>
            ))}
        </div>
    </motion.div>
  )
}

export default Services