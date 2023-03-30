import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn, FaInstagram, FaLinkedin, FaTwitter, FaTwitterSquare } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'; 
import Logo from '../assets/best_logo.png';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt='Logo' style={{width: '50px'}} />
        </div>

        {/* Menu*/} 
        
            <ul className='hidden md:flex'>
                <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='works' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
            </ul>
        

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        { /* Mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='works' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        </ul>

        { /* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#19376D]'>
                    <a  className='flex justify-between items-center w-full text-gray-300' 
                        href='https://www.linkedin.com/in/utkarsh-shrivastava-454203209/'>
                        LinkedIn<FaLinkedin size={30}/> 
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FF5F9E]'>
                    <a  className='flex justify-between items-center w-full text-gray-300' 
                        href='https://www.instagram.com/utkarsh_s07/?igshid=YmMyMTA2M2Y%3D'>
                        Instagram<FaInstagram size={30}/> 
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#537FE7]'>
                    <a  className='flex justify-between items-center w-full text-gray-300' 
                        href='https://mobile.twitter.com/Utkarsh70238997'>
                        Twitter<FaTwitter size={30}/> 
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a
                    className='flex justify-between items-center w-full text-gray-300'
                    href='https://github.com/Utkarsh2312'
                    >
                    Github <FaGithub size={30} />
                </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='mailto:utkarsh.s2312@gmail.com'
                    >
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a
                        className='flex justify-between items-center w-full text-gray-300'
                        href='https://drive.google.com/file/d/1Vgw3KTkfqlx0YGRRgsAh_hdUJ5TyCZ_B/view?usp=share_link'
                    >
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar