/**
 * BlueStar Lifts - Company Gallery Data
 *
 * NOTE: Replace the image files in `src/assets/company-gallery/` or update
 * the image paths below with official company photographs at any time.
 */

import officeImg from '../assets/company-gallery/company-office.jpg';
import installationImg from '../assets/company-gallery/elevator-installation.jpg';
import passengerImg from '../assets/company-gallery/passenger-elevator.jpg';
import hospitalImg from '../assets/company-gallery/hospital-elevator.jpg';
import goodsImg from '../assets/company-gallery/goods-elevator.jpg';
import panoramicImg from '../assets/company-gallery/panoramic-glass-elevator.jpg';
import teamImg from '../assets/company-gallery/engineering-team.jpg';
import projectsImg from '../assets/company-gallery/completed-building-projects.jpg';

export const companyGallery = [
  {
    id: 'company-office',
    category: 'Company Office',
    title: 'BlueStar Corporate Headquarters',
    description: 'Our modern engineering design and operations center in Hyderabad.',
    image: officeImg,
    alt: 'BlueStar Lifts corporate office and operations center'
  },
  {
    id: 'elevator-installation',
    category: 'Elevator Installation',
    title: 'Precision Hoistway Engineering',
    description: 'Certified technicians performing laser-guided shaft alignment and rail setup.',
    image: installationImg,
    alt: 'Elevator installation and engineering shaft setup'
  },
  {
    id: 'passenger-elevator',
    category: 'Passenger Elevator',
    title: 'Premium Cabin Architecture',
    description: 'High-speed, whisper-quiet passenger lifts with stainless steel hairline finishes.',
    image: passengerImg,
    alt: 'Modern passenger elevator cabin interior'
  },
  {
    id: 'hospital-elevator',
    category: 'Hospital Elevator',
    title: 'Critical Healthcare Mobility',
    description: 'Spacious stretcher lifts equipped with emergency battery descent and jerk-free travel.',
    image: hospitalImg,
    alt: 'Hospital bed and stretcher elevator'
  },
  {
    id: 'goods-elevator',
    category: 'Goods Elevator',
    title: 'Heavy-Duty Industrial Freight',
    description: 'Rugged cargo elevators engineered for warehouses, manufacturing, and logistics hubs.',
    image: goodsImg,
    alt: 'Heavy industrial goods freight elevator'
  },
  {
    id: 'panoramic-glass-elevator',
    category: 'Panoramic Glass Elevator',
    title: 'Architectural Scenic Vistas',
    description: 'Curved glass observation elevators bringing luxury aesthetic appeal to commercial atriums.',
    image: panoramicImg,
    alt: 'Panoramic observation glass elevator in modern building'
  },
  {
    id: 'engineering-team',
    category: 'Engineering Team',
    title: 'Expert Technical Professionals',
    description: 'Dedicated team of safety inspectors, mechanical engineers, and 24/7 service crew.',
    image: teamImg,
    alt: 'BlueStar Lifts engineering team on site'
  },
  {
    id: 'completed-building-projects',
    category: 'Completed Building Projects',
    title: 'Landmark Real Estate Deployments',
    description: 'Showcase of turnkey vertical mobility projects delivered across residential and commercial towers.',
    image: projectsImg,
    alt: 'Completed building tower projects by BlueStar Lifts'
  }
];

export default companyGallery;
