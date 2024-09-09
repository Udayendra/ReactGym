import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

export const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>{
        open && (
            <motion.div 
            initial = {{opacity: 0, y: -100}}
            animate = {{opacity: 1, y: 0}}
            exit = {{opacity: 0, y: -100}}
            transition = {{duration: 0.3}}
             className='absolute top-20 left-0 w-full h-screen  z-20'
            >
              <div className='text-xl uppercase font-semibold bg-primary text-white py-10 m-6 rounded-3xl'>
                <ul className='flex flex-col items-center justify-center gap-10'>
                  <li>Home</li>
                  <li>Explore More</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                </ul>
              </div>
                
            </motion.div>
        )
        } 
    </AnimatePresence>
  )
}
