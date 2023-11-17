import React, { useEffect, useRef, useState } from 'react'

const Animate = ({ children, animationType, ...props }) => {
    let Element = animationType
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);
    console.log(props,"props")
  
    useEffect(() => {
      const handleScroll = () => {
        const targetElement = targetRef.current;
        const targetPosition = targetElement.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const threshold = 0.6// Adjust this threshold as needed
  
        setIsVisible(targetPosition.top <= windowHeight * threshold);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div  ref={targetRef} >
        <Element {...props} when={isVisible}  >
            {children}
        </Element>
        </div>
    )
}

export default Animate