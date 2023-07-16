import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1, 
            speed: 450
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12"
        >
        </div>
      </motion.div>
    </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary-text-[17px]
        max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. 
        Morbi tempus iaculis urna id volutpat. Pellentesque habitant morbi tristique senectus. 
        Et ligula ullamcorper malesuada proin libero nunc consequat interdum. 
        Elit pellentesque habitant morbi tristique senectus. 
        Id semper risus in hendrerit gravida rutrum quisque non tellus. 
        Convallis aenean et tortor at risus viverra adipiscing at in. 
        Amet consectetur adipiscing elit duis tristique. 
      </motion.p>

      <div className="mt-20 flex 
      flex-wrap gap-10">
      {services.map((service, index) => {
        <ServiceCard key={service.title} index={index} {...service} />     
      })}
      </div>
    </>
  )
}

export default About