// // src/js/components/Header/Header.js
// import React from 'react';
// import { Link } from '@tata1mg/router';

// const Navbar = () => {
//   return (
//     <header style={{ 
//       background: 'white', 
//       padding: '10px 20px', 
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between'
//     }}>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <img src="/assets/dog-logo.jpg" alt="Dog Adoption Logo" style={{ height: '40px', marginRight: '10px' }} />
//         <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Dog Adoption Center</h1>
//       </div>
//       <nav>
//         <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: '#4CAF50' }}>Home</Link>
//         <Link to="/about" style={{ textDecoration: 'none', color: '#4CAF50' }}>About</Link>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedNavbar = () => {
  const navbarRef = useRef(null);
  const indicatorRef = useRef(null);
  const logoIconRef = useRef(null);
  const logoTextRef = useRef(null);
  const ctaButtonRef = useRef(null);
  const cartIconRef = useRef(null);
  const menuToggleRef = useRef(null);
  const navLinksRef = useRef(null);
  const navLinkRefs = useRef([]);
  const menuOpenRef = useRef(false);

  // Set up initial animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to(navbarRef.current, {
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(indicatorRef.current, {
      scaleX: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .to(logoIconRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.4")
    .to(logoTextRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.2")
    .to(navLinkRefs.current, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")
    .to(ctaButtonRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.4)"
    }, "-=0.4")
    .to(cartIconRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.2");

    // Set up scroll animations
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const scrollProgress = self.progress;
        gsap.to(indicatorRef.current, {
          scaleX: 0.2 + (scrollProgress * 0.8),
          duration: 0.1,
          ease: "none"
        });
        
        // Change navbar background based on scroll
        if (self.direction === 1 && self.progress > 0.05) {
          // Scrolling down
          gsap.to(navbarRef.current, {
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
            padding: "1rem 5%",
            duration: 0.3
          });
        } else if (self.direction === -1 && self.progress < 0.05) {
          // Scrolling up to the top
          gsap.to(navbarRef.current, {
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            boxShadow: "0 5px 20px rgba(0, 0, 0, 0.05)",
            padding: "1.5rem 5%",
            duration: 0.3
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Handle menu toggle
  const handleMenuToggle = () => {
    menuOpenRef.current = !menuOpenRef.current;
    
    if (menuOpenRef.current) {
      // Animate menu opening
      gsap.to(navLinksRef.current, {
        right: 0,
        duration: 0.5,
        ease: "power3.out"
      });
      
      // Animate hamburger to X
      const spans = menuToggleRef.current.querySelectorAll("span");
      gsap.to(spans[0], {
        rotation: 45,
        y: 9,
        duration: 0.3
      });
      gsap.to(spans[1], {
        opacity: 0,
        duration: 0.3
      });
      gsap.to(spans[2], {
        rotation: -45,
        y: -9,
        duration: 0.3
      });
    } else {
      // Animate menu closing
      gsap.to(navLinksRef.current, {
        right: "-100%",
        duration: 0.5,
        ease: "power3.in"
      });
      
      // Animate X back to hamburger
      const spans = menuToggleRef.current.querySelectorAll("span");
      gsap.to(spans[0], {
        rotation: 0,
        y: 0,
        duration: 0.3
      });
      gsap.to(spans[1], {
        opacity: 1,
        duration: 0.3
      });
      gsap.to(spans[2], {
        rotation: 0,
        y: 0,
        duration: 0.3
      });
    }
  };

  // Handle link hover animations
  const handleLinkEnter = (link) => {
    gsap.to(link, {
      color: "#a83f51",
      y: -2,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleLinkLeave = (link) => {
    gsap.to(link, {
      color: "#2c2c2c",
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  // Handle CTA button hover animations
  const handleButtonEnter = () => {
    gsap.to(ctaButtonRef.current, {
      backgroundColor: "#8e2d3d",
      scale: 1.05,
      duration: 0.3
    });
  };

  const handleButtonLeave = () => {
    gsap.to(ctaButtonRef.current, {
      backgroundColor: "#a83f51",
      scale: 1,
      duration: 0.3
    });
  };

  return (
    <div className="navbar-container">
      <div 
        ref={indicatorRef} 
        className="gift-indicator"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          background: 'linear-gradient(90deg, #f8d7da, #a83f51)',
          transform: 'scaleX(0)',
          transformOrigin: 'left'
        }}
      ></div>
      <nav 
        ref={navbarRef}
        className="navbar"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 5%',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 5px 20px rgba(0, 0, 0, 0.05)',
          transform: 'translateY(-100%)',
          position: 'relative',
          zIndex: 1000
        }}
      >
        <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <svg 
            ref={logoIconRef}
            className="logo-icon" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
            style={{ 
              width: '40px', 
              height: '40px', 
              fill: '#a83f51',
              opacity: 0,
              transform: 'scale(0)'
            }}
          >
            <path d="M20,6h-2.18c0.11-0.31,0.18-0.65,0.18-1c0-1.66-1.34-3-3-3c-1.54,0-2.81,1.16-2.98,2.65L12,4.68l-0.02-0.03C11.81,3.16,10.54,2,9,2 C7.34,2,6,3.34,6,5c0,0.35,0.07,0.69,0.18,1H4C2.9,6,2,6.9,2,8v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M15,4 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S14.45,4,15,4z M9,4c0.55,0,1,0.45,1,1s-0.45,1-1,1S8,5.55,8,5S8.45,4,9,4z M20,20H4v-6 h5v1.76l-2.24,2.24l1.42,1.42L12,15.59l3.83,3.83l1.42-1.42L14.99,15.76V14H20V20z M20,12h-5h-5H4V8h3.05l0.95-2h0.76l0.54,2h1.4 l-0.54-2h0.76l0.54,2h1.09l-0.54-2h0.76l0.54,2H15l0.95-2H16.7l0.95,2H20V12z"/>
          </svg>
          <h1 
            ref={logoTextRef}
            className="logo-text"
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#2c2c2c',
              marginLeft: '0.5rem',
              opacity: 0
            }}
          >
            Think Gifting
          </h1>
        </div>
        <div 
          ref={navLinksRef}
          className="nav-links"
          style={{
            display: 'flex',
            gap: '2rem',
            '@media (max-width: 768px)': {
              position: 'fixed',
              right: '-100%',
              top: '80px',
              width: '70%',
              height: 'calc(100vh - 80px)',
              backgroundColor: 'white',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '2rem',
              boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.1)'
            }
          }}
        >
          {['Home', 'Collections', 'Personalize', 'Occasions', 'About Us'].map((link, index) => (
            <a 
              key={index}
              href="#"
              ref={el => navLinkRefs.current[index] = el}
              className="nav-link"
              style={{
                position: 'relative',
                color: '#2c2c2c',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '1rem',
                padding: '0.5rem 0',
                opacity: 0,
                transform: 'translateY(20px)',
                overflow: 'hidden',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#a83f51',
                  transform: 'scaleX(0)',
                  transformOrigin: 'right',
                  transition: 'transform 0.3s ease'
                },
                ':hover::after': {
                  transform: 'scaleX(1)',
                  transformOrigin: 'left'
                }
              }}
              onMouseEnter={(e) => handleLinkEnter(e.currentTarget)}
              onMouseLeave={(e) => handleLinkLeave(e.currentTarget)}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            ref={ctaButtonRef}
            className="cta-button"
            style={{
              backgroundColor: '#a83f51',
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 600,
              cursor: 'pointer',
              opacity: 0,
              transform: 'scale(0.8)',
              overflow: 'hidden',
              position: 'relative'
            }}
            onMouseEnter={handleButtonEnter}
            onMouseLeave={handleButtonLeave}
          >
            Shop Now
          </button>
          <svg 
            ref={cartIconRef}
            className="cart-icon"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            style={{
              width: '24px',
              height: '24px',
              marginLeft: '1rem',
              cursor: 'pointer',
              opacity: 0,
              transform: 'translateY(20px)'
            }}
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <div 
            ref={menuToggleRef}
            className="menu-toggle"
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '30px',
              height: '21px',
              cursor: 'pointer',
              '@media (max-width: 768px)': {
                display: 'flex'
              }
            }}
            onClick={handleMenuToggle}
          >
            <span style={{ display: 'block', height: '3px', width: '100%', backgroundColor: '#2c2c2c', borderRadius: '3px' }}></span>
            <span style={{ display: 'block', height: '3px', width: '100%', backgroundColor: '#2c2c2c', borderRadius: '3px' }}></span>
            <span style={{ display: 'block', height: '3px', width: '100%', backgroundColor: '#2c2c2c', borderRadius: '3px' }}></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AnimatedNavbar;