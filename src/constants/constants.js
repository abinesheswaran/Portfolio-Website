import { FigmaLogo } from '../icons/figma-logo';
import { HtmlLogo } from '../icons/html5-logo';
import { JavascriptLogo } from '../icons/javascript-logo';
import { ReactLogo } from '../icons/react-logo';
import bravoImg from '../images/bravo.jpg';
import promotionImg from '../images/promotion.jpg';
import teamawardImg from '../images/teamaward.jpg';

export const Menu_Items = [
  { menuName: 'About', sectionId: 'about-section', offset: 100 },
  { menuName: 'Experience', sectionId: 'experience-section', offset: 0 },
  { menuName: 'Work', sectionId: 'work-section', offset: 90 },
  { menuName: 'Contact', sectionId: 'contact-section', offset: 100 },
];

export const WORK_HISTORY = [
  {
    companyName: 'Kudelski Security',
    companyUrl: 'https://kudelskisecurity.com/',
    position: 'Associate Engineer',
    date: 'Oct 2022 - Present',
    role: [
      'Write modern, performant, maintainable and easy to debug code',
      'Work with a variety of different languages, platforms, frameworks such as JavaScript, TypeScript, React and Material UI',
      'Providing solution for really complex problems and developed a POC which help a product owner identify potential technical and logical issues.',
    ],
  },
  {
    companyName: 'Kudelski Security',
    companyUrl: 'https://kudelskisecurity.com/',
    position: 'Trainee Engineer',
    date: 'Dec 2021 - Sep 2022',
    role: [
      'Learn and deliver things swiftly with less supervision',
      'Build reusable code and libraries for future use',
      'Optimize the application for maximum speed and scalability, Ensure that all user input is validated before it is submitted to the backend',
    ],
  },
];

export const TECHNOLOGIES_WORKED = [
  'React',
  'Redux',
  'TypeScript',
  'JavaScript',
  'Material UI',
  'Bootstrap',
  'Node.js',
  'SpringBoot',
  'Git',
  'Docker',
];

export const SKILLS = [
  { logo: <ReactLogo />, name: 'React.js', width: '100px', color: '#61DAFB' },
  {
    logo: <JavascriptLogo />,
    name: 'Semicolons.',
    width: '100px',
    color: '#ECD120',
  },
  { logo: <HtmlLogo />, name: 'is Fun.', width: '100px', color: '#E54D26' },
  { logo: <FigmaLogo />, name: 'UI/UX.', width: '69px', color: '#0ACF83' },
];

export const PROJECTS = [
  {
    companyName: 'Kudelski Security',
    companyUrl: 'https://kudelskisecurity.com/',
    date: 'Aug 2021 - Present',
    projectName: 'Threat Navigator',
    discription:
      'CFC offers Managed Detection and Response services to organizations to address modern cyber threats. The UCM is a part of this service which provides the attack coverage information to the organization and allows them to focus on their security gaps',
    technologies: ['React Js', 'Node js', 'TypeScript', 'Material UI'],
  },
  {
    companyName: 'Kudelski Security',
    companyUrl: 'https://kudelskisecurity.com/',
    date: 'Nov 2022 - Present',
    projectName: 'UCM',
    discription:
      'UCM is an application used by the Kudelski’s sales team and the detection engineers to view the attack coverage information against the standard MITRE ATT&CK Framework. It provides theoretical and practical coverage that helps the sales team show our detection solutions’ efficiency to potential customers.',
    technologies: ['React Js', 'Node js', 'TypeScript', 'Bootstrap'],
  },
];

export const AWARDS = [
  {
    title: 'Bravo Award',
    role: 'Trainee Engineer',
    companyName: 'Kudelski Security',
    companyUrl: 'https://kudelskisecurity.com/',
    discription:
      'Abinesh is a quick learner and can deliver things swiftly with less supervision. He made a positive impact by undertaking Orbit Project UI & Integration work and completing them on time, this was crucial to the stake holders as they must visualize the functional features on the portal and approve them before rolling out to the customers. His commitment and willingness to go to the extra mile is appreciated by all the stakeholders',
    imageName: bravoImg,
  },
  {
    title: 'Team Award',
    role: 'Trainee Engineer',
    companyName: 'Kudelski Security',
    companyUrl: 'https://kudelskisecurity.com/',
    discription:
      'Raksha Team delivered the initial version of one of the promising & complex features of CFC - use case manager in the client portal, which is going to play a key role in driving the Kudelski Security business & many customers are looking forward to this feature. The team owned the product, collaborated exceptionally well with different teams & delivered on time. The team was quick in learning new technologies that were required for feature development & quality delivery.',
    imageName: teamawardImg,
  },
  {
    title: 'Promotion',
    role: 'Trainee Engineer',
    companyName: 'Kudelski Security',
    companyUrl: 'https://kudelskisecurity.com/',
    discription:
      'We are happy to acknowledge the contribution you have made to Nagra Kudelski in the past year. We appreciate your efforts and dedication. Considering your commitment and performance to the organization, we are glad to promote you to Associate - Engineering at Level 7.',
    imageName: promotionImg,
  },
];
