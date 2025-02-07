import { RiAppsLine } from "react-icons/ri";
import { RiCodeSSlashFill } from "react-icons/ri";
import { BiLandscape } from "react-icons/bi";
import { RiRocketLine } from "react-icons/ri";
import { IoWifiSharp } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";


import teamImg1 from '../assets/images/lady1.png';
import teamImg2 from '../assets/images/lady2.png';
import teamImg3 from '../assets/images/gent2.png';
import teamImg4 from '../assets/images/gent3.png';

import blogImg from '../assets/images/video.png';
import articleImg from '../assets/images/article.png';
import caseStudyImg from '../assets/images/case-study.png';

export const navLinks = [
  {
    path: 'Home',
    display: 'Home',
  },
  {
    path: '#about',
    display: 'About',
  },
  {
    path: '#service',
    display: 'Service',
  },
  {
    path: '#projects',
    display: 'Projects',
  },
  {
    path: '#blog',
    display: 'Blog',
  },
]


export const counterData = [
  {
    number:'2k',
    title: 'Clients'
  },
  {
    number:'320',
    title: 'Running Project'
  },
  {
    number:'500',
    title: 'Projects Completed'
  },
]

export const servicesData = [
  {
    icon: RiAppsLine,
    title: 'App Development',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    icon: RiCodeSSlashFill,
    title: 'Web Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    icon: BiLandscape,
    title: 'Graphics Design',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
  {
    icon: RiRocketLine,
    title: 'Digittal Marketing',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
]


export const aboutData = [
  {
    icon: IoWifiSharp,
    title: 'First working process',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio libero natus ab molestiae, doloremque soluta perferendis magnam architecto dolorem saepe distinctio aut velit eaque perspiciatis aspernatur? Impedit repellat rerum ipsam.'
  },
  {
    icon: RiCustomerService2Fill,
    title: '24/7 Support',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio libero natus ab molestiae, doloremque soluta perferendis magnam architecto dolorem saepe distinctio aut velit eaque perspiciatis aspernatur? Impedit repellat rerum ipsam.'
  },
  {
    icon: IoIosPeople,
    title: 'Dedicated team',
    desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio libero natus ab molestiae, doloremque soluta perferendis magnam architecto dolorem saepe distinctio aut velit eaque perspiciatis aspernatur? Impedit repellat rerum ipsam.'
  },
]


export const teamMembers = [ 
  {
    img: teamImg1,
    name: 'Candice Xavier',
    position: 'Product Developer'
  },
  {
    img: teamImg2,
    name: 'Sue McLurry',
    position: 'Backend Developer'
  },
  {
    img: teamImg3,
    name: 'David Jones',
    position: 'Product Designer'
  },
  {
    img: teamImg4,
    name: 'Brian Cooper',
    position: 'Frontend Developer'
  }

]

export const blogData = [
  {
    img: blogImg,
    title: 'Video',
    desc: 'To know about work. Watch the video f....',
    link: '#'
  },
  {
    img: articleImg,
    title: 'Articles',
    desc: 'Do you want to improve the way your brand interacts with customer? lets talk....',
    link: '#'
  },
  {
    img: caseStudyImg,
    title: 'Case Study',
    desc:'Boost your conversation rate',
    link: '#'
  }
]

export const quickLinks = [
  {
    path: '#',
    display: 'Marketing'
  },
  {
    path: '#',
    display: 'Analytics'
  },
  {
    path: '#',
    display: 'Commerce'
  }
]

export const quickLinksCompany= [
  {
    path: '#about',
    display: 'About'
  },
  {
    path: '#blog',
    display: 'Blog'
  },
  {
    path: '#',
    display: 'Jobs'
  },
]



export const quickLinksSupport= [
  {
    path: '#',
    display: 'FAQ'
  },
  {
    path: '#',
    display: 'Documentation'
  },
  {
    path: '#',
    display: 'Guides'
  },
]