import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// CSS styles using CSS-in-JS with pastel/light colors
const styles = {
  footer: {
    background: 'linear-gradient(135deg, #f5f7fa, #e4e7ec, #d3d7e0)',
    color: '#3a4f66',
    overflow: 'hidden',
    position: 'relative',
  },
  footerBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.15,
    pointerEvents: 'none',
  },
  footerBackgroundCircle: {
    position: 'absolute',
    borderRadius: '50%',
    background: '#fff',
  },
  footerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '4rem 2rem 2rem',
    position: 'relative',
    zIndex: 1,
  },
  footerTop: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '3rem',
    gap: '2rem',
  },
  footerColumn: {
    flex: 1,
    minWidth: '200px',
    opacity: 0,
    transform: 'translateY(20px)',
  },
  footerLogo: {
    marginBottom: '1.5rem',
    fontSize: '1.8rem',
    fontWeight: 700,
    background: 'linear-gradient(90deg, #a6c0fe, #f68084)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  },
  footerDescription: {
    fontSize: '0.95rem',
    marginBottom: '1.5rem',
    maxWidth: '300px',
    lineHeight: 1.7,
    color: '#5e6c84',
  },
  footerHeading: {
    fontSize: '1.2rem',
    marginBottom: '1.2rem',
    position: 'relative',
    display: 'inline-block',
    color: '#3a4f66',
  },
  footerHeadingAfter: {
    content: "''",
    position: 'absolute',
    left: 0,
    bottom: '-5px',
    width: '30px',
    height: '2px',
    background: '#a6c0fe',
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.4s ease',
  },
  footerLinks: {
    listStyle: 'none',
    padding: 0,
  },
  footerLinkItem: {
    marginBottom: '0.7rem',
  },
  footerLink: {
    color: '#5e6c84',
    textDecoration: 'none',
    fontSize: '0.95rem',
    transition: 'color 0.3s, transform 0.3s',
    display: 'inline-block',
    position: 'relative',
  },
  footerLinkHover: {
    color: '#f68084',
    transform: 'translateX(5px)',
  },
  footerSocial: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  footerSocialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: 'rgba(166, 192, 254, 0.2)',
    color: '#5e6c84',
    transition: 'all 0.3s',
    position: 'relative',
    overflow: 'hidden',
  },
  footerSocialLinkHover: {
    background: 'linear-gradient(90deg, #a6c0fe, #f68084)',
    color: '#fff',
    transform: 'translateY(-5px)',
    boxShadow: '0 5px 15px rgba(166, 192, 254, 0.4)',
  },
  footerNewsletter: {
    marginTop: '1.5rem',
  },
  footerForm: {
    display: 'flex',
    maxWidth: '400px',
    marginTop: '0.8rem',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '4px',
  },
  footerInput: {
    flex: 1,
    padding: '0.8rem 1rem',
    border: 'none',
    background: 'rgba(166, 192, 254, 0.2)',
    color: '#3a4f66',
    fontSize: '0.95rem',
    transition: 'background 0.3s',
  },
  footerButton: {
    padding: '0 1.5rem',
    background: 'linear-gradient(90deg, #a6c0fe, #f68084)',
    border: 'none',
    color: '#fff',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s',
    position: 'relative',
    overflow: 'hidden',
  },
  footerButtonHover: {
    boxShadow: '0 5px 15px rgba(166, 192, 254, 0.4)',
    transform: 'translateY(-2px)',
  },
  footerDivider: {
    height: '1px',
    background: 'linear-gradient(90deg, rgba(94,108,132,0) 0%, rgba(94,108,132,0.15) 50%, rgba(94,108,132,0) 100%)',
    margin: '2rem 0',
    width: '100%',
    transform: 'scaleX(0)',
  },
  footerBottom: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.9rem',
    color: '#5e6c84',
    paddingTop: '1rem',
    gap: '1rem',
    opacity: 0,
  },
  footerCopyright: {
    color: '#5e6c84',
  },
  footerCopyrightLink: {
    color: '#a6c0fe',
    textDecoration: 'none',
  },
  footerLegal: {
    display: 'flex',
    gap: '1.5rem',
  },
  footerLegalLink: {
    color: '#5e6c84',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  footerLegalLinkHover: {
    color: '#f68084',
  },
  footerWave: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    transform: 'translateY(-98%)',
    height: '80px',
  },
  footerWavePath: {
    fill: 'none',
    stroke: 'rgba(166, 192, 254, 0.5)',
    strokeWidth: '2px',
    strokeLinecap: 'round',
  },
  // Media queries handled with conditional styles in component
};

const Footer = () => {
  const [hoverStates, setHoverStates] = useState({});
  const [emailPlaceholder, setEmailPlaceholder] = useState('Your email address');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  const footerRef = useRef(null);
  const backgroundRef = useRef(null);
  const wavePathRef = useRef(null);
  const columnsRef = useRef([]);
  const headingsRef = useRef([]);
  const dividerRef = useRef(null);
  const bottomRef = useRef(null);
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const buttonRef = useRef(null);

  // Function to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Initialize GSAP animations
  useEffect(() => {
    // Create background circles
    const footerBackground = backgroundRef.current;
    // Pastel color palette
    const colors = ['#a6c0fe', '#f68084', '#c2e9fb', '#fad0c4', '#d4fc79', '#96e6a1', '#fbc2eb'];
    
    for (let i = 0; i < 25; i++) {
      const circle = document.createElement('div');
      Object.assign(circle.style, styles.footerBackgroundCircle);
      
      const size = Math.random() * 150 + 50;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      gsap.set(circle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * 500,
        width: size,
        height: size,
        backgroundColor: color
      });
      
      footerBackground.appendChild(circle);
      
      // Animate each circle with more dynamic animation
      gsap.to(circle, {
        x: `+=${Math.random() * 500 - 250}`,
        y: `+=${Math.random() * 500 - 250}`,
        duration: Math.random() * 20 + 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }
    
    // Animate wave with more dynamic animation
    gsap.to(wavePathRef.current, {
      attr: { d: "M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,112C672,117,768,171,864,181.3C960,192,1056,160,1152,144C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" },
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
    
    // Column animations on scroll with staggered effect
    columnsRef.current.forEach((column, index) => {
      ScrollTrigger.create({
        trigger: column,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(column, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'back.out(1.2)'
          });
        }
      });
    });
    
    // Heading underline animations with spring effect
    headingsRef.current.forEach((heading) => {
      const underline = heading.querySelector('.heading-underline');
      
      ScrollTrigger.create({
        trigger: heading,
        start: 'top 90%',
        onEnter: () => {
          gsap.to(underline, {
            scaleX: 1,
            duration: 1,
            ease: 'elastic.out(1, 0.3)'
          });
        }
      });
    });
    
    // Divider animation with enhanced effect
    ScrollTrigger.create({
      trigger: dividerRef.current,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(dividerRef.current, {
          scaleX: 1,
          duration: 1.5,
          ease: 'power3.out'
        });
      }
    });
    
    // Bottom section animation with fade up
    ScrollTrigger.create({
      trigger: bottomRef.current,
      start: 'top 95%',
      onEnter: () => {
        gsap.to(bottomRef.current, {
          opacity: 1,
          y: -10,
          duration: 1,
          ease: 'power2.out'
        });
      }
    });
    
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Handle form submission with enhanced animation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
    
    if (inputRef.current.value.trim() !== '') {
      // Enhanced success animation
      gsap.to(formRef.current, {
        boxShadow: '0 0 0 3px rgba(166, 192, 254, 0.5)',
        duration: 0.3,
        yoyo: true,
        repeat: 1
      });
      
      gsap.to(inputRef.current, {
        backgroundColor: 'rgba(246, 128, 132, 0.2)',
        duration: 0.3,
        yoyo: true,
        repeat: 1
      });
      
      inputRef.current.value = '';
      setEmailPlaceholder('Thanks for subscribing!');
      
      setTimeout(() => {
        setEmailPlaceholder('Your email address');
      }, 3000);
    }
  };

  // Handle hover state
  const handleHover = (id, isHovered) => {
    setHoverStates(prev => ({
      ...prev,
      [id]: isHovered
    }));
  };

  return (
    <footer ref={footerRef} style={styles.footer}>
      <div ref={backgroundRef} style={styles.footerBackground}></div>
      
      <div style={styles.footerWave}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            ref={wavePathRef} 
            style={styles.footerWavePath} 
            d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,80C672,85,768,139,864,149.3C960,160,1056,128,1152,112C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
      
      <div style={styles.footerContainer}>
        <div style={{
          ...styles.footerTop,
          flexDirection: isSmallScreen ? 'column' : 'row',
          gap: isSmallScreen ? '2.5rem' : '2rem'
        }}>
          {/* Column 1: Brand Info */}
          <div 
            ref={el => columnsRef.current[0] = el} 
            style={{
              ...styles.footerColumn,
              minWidth: isSmallScreen ? '100%' : '200px'
            }}
          >
            <div style={styles.footerLogo}>YourBrand</div>
            <p style={styles.footerDescription}>
              Creating innovative solutions for a connected world. We help businesses transform their digital presence.
            </p>
            <div style={styles.footerSocial}>
              <a 
                href="#" 
                style={{
                  ...styles.footerSocialLink,
                  ...(hoverStates['social-twitter'] ? styles.footerSocialLinkHover : {})
                }}
                onMouseEnter={() => handleHover('social-twitter', true)}
                onMouseLeave={() => handleHover('social-twitter', false)}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a 
                href="#" 
                style={{
                  ...styles.footerSocialLink,
                  ...(hoverStates['social-facebook'] ? styles.footerSocialLinkHover : {})
                }}
                onMouseEnter={() => handleHover('social-facebook', true)}
                onMouseLeave={() => handleHover('social-facebook', false)}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a 
                href="#" 
                style={{
                  ...styles.footerSocialLink,
                  ...(hoverStates['social-instagram'] ? styles.footerSocialLinkHover : {})
                }}
                onMouseEnter={() => handleHover('social-instagram', true)}
                onMouseLeave={() => handleHover('social-instagram', false)}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a 
                href="#" 
                style={{
                  ...styles.footerSocialLink,
                  ...(hoverStates['social-linkedin'] ? styles.footerSocialLinkHover : {})
                }}
                onMouseEnter={() => handleHover('social-linkedin', true)}
                onMouseLeave={() => handleHover('social-linkedin', false)}
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div 
            ref={el => columnsRef.current[1] = el} 
            style={{
              ...styles.footerColumn,
              minWidth: isSmallScreen ? '100%' : '200px'
            }}
          >
            <h3 
              ref={el => headingsRef.current[0] = el} 
              style={styles.footerHeading}
            >
              Quick Links
              <span 
                className="heading-underline" 
                style={{
                  ...styles.footerHeadingAfter,
                  display: 'block',
                }}
              />
            </h3>
            <ul style={styles.footerLinks}>
              {['Home', 'About Us', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((link, index) => (
                <li key={index} style={styles.footerLinkItem}>
                  <a 
                    href="#" 
                    style={{
                      ...styles.footerLink,
                      ...(hoverStates[`quick-${index}`] ? styles.footerLinkHover : {})
                    }}
                    onMouseEnter={() => handleHover(`quick-${index}`, true)}
                    onMouseLeave={() => handleHover(`quick-${index}`, false)}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div 
            ref={el => columnsRef.current[2] = el} 
            style={{
              ...styles.footerColumn,
              minWidth: isSmallScreen ? '100%' : '200px'
            }}
          >
            <h3 
              ref={el => headingsRef.current[1] = el} 
              style={styles.footerHeading}
            >
              Services
              <span 
                className="heading-underline" 
                style={{
                  ...styles.footerHeadingAfter,
                  display: 'block',
                }}
              />
            </h3>
            <ul style={styles.footerLinks}>
              {['Web Development', 'Digital Marketing', 'UI/UX Design', 'Mobile Apps', 'E-commerce Solutions', 'SEO Optimization'].map((service, index) => (
                <li key={index} style={styles.footerLinkItem}>
                  <a 
                    href="#" 
                    style={{
                      ...styles.footerLink,
                      ...(hoverStates[`service-${index}`] ? styles.footerLinkHover : {})
                    }}
                    onMouseEnter={() => handleHover(`service-${index}`, true)}
                    onMouseLeave={() => handleHover(`service-${index}`, false)}
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div 
            ref={el => columnsRef.current[3] = el} 
            style={{
              ...styles.footerColumn,
              minWidth: isSmallScreen ? '100%' : '200px'
            }}
          >
            <h3 
              ref={el => headingsRef.current[2] = el} 
              style={styles.footerHeading}
            >
              Newsletter
              <span 
                className="heading-underline" 
                style={{
                  ...styles.footerHeadingAfter,
                  display: 'block',
                }}
              />
            </h3>
            <p style={styles.footerDescription}>
              Subscribe to our newsletter to receive updates and valuable insights.
            </p>
            <div style={styles.footerNewsletter}>
              <form ref={formRef} style={styles.footerForm} onSubmit={handleSubmit}>
                <input 
                  ref={inputRef}
                  type="email" 
                  placeholder={emailPlaceholder}
                  required
                  style={styles.footerInput}
                />
                <button 
                  ref={buttonRef}
                  type="submit" 
                  style={{
                    ...styles.footerButton,
                    ...(hoverStates['subscribe-btn'] ? styles.footerButtonHover : {})
                  }}
                  onMouseEnter={() => handleHover('subscribe-btn', true)}
                  onMouseLeave={() => handleHover('subscribe-btn', false)}
                >
                  Subscribe
                </button>
              </form>
            </div>
            <p style={{...styles.footerDescription, marginTop: '1rem', fontSize: '0.8rem'}}>
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div ref={dividerRef} style={styles.footerDivider}></div>
        
        <div 
          ref={bottomRef} 
          style={{
            ...styles.footerBottom,
            flexDirection: isSmallScreen ? 'column' : 'row',
            alignItems: isSmallScreen ? 'flex-start' : 'center',
          }}
        >
          <div style={styles.footerCopyright}>
            &copy; {new Date().getFullYear()} <a href="#" style={styles.footerCopyrightLink}>YourBrand</a>. All Rights Reserved.
          </div>
          <div style={{
            ...styles.footerLegal,
            flexDirection: isSmallScreen ? 'column' : 'row',
            gap: isSmallScreen ? '0.8rem' : '1.5rem',
          }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
              <a 
                key={index}
                href="#" 
                style={{
                  ...styles.footerLegalLink,
                  ...(hoverStates[`legal-${index}`] ? styles.footerLegalLinkHover : {})
                }}
                onMouseEnter={() => handleHover(`legal-${index}`, true)}
                onMouseLeave={() => handleHover(`legal-${index}`, false)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;