import bitcoin from '../assets/projects/bitcoin.webp'
import plane from '../assets/projects/plane.gif'
import stock from '../assets/projects/stock.gif'
import finance from '../assets/projects/finance.gif'


export const HERO_CONTENT = `I am a student at IIT Guwahati, pursuing a degree in Mechanical Engineering and Minor in Electronics and Communication Engineering. My passion lies in web development, with additional expertise in data structures and algorithms, blockchain, and machine learning. I have developed a decentralized medical ledger using Ethereum and IPFS and a full-stack airline management system during my summer project with the Coding Club, IITG. I have also achieved notable results in competitive programming, including solving 140+ quality DSA problems on Leetcode and a 'Pupil' on Codeforces.`;





export const PROJECTS = [
  {
    title: "LifeLedger- A Decentralised Medical Records Ledger",
    image: bitcoin,
    description:
      "Developed and deployed a decentralized medical ledger using Ethereum Blockchain and IPFS, enhancing user control over medical reports and digital identity security. Implemented use controlled access where hospitals can add reports with user consent reports are easy to verify and hence reliable, and emergency data is accessible to hospitals in critical situations. Designed a responsive user interface with React JS, leveraging custom CSS, Bootstrap, and Media Queries for optimal user experience across devices and MongoDB for search list functionality"
     ,
    technologies: ["React", "Node.js", "MongoDB", "Blockchain"],
    website: "https://lifeledger.vercel.app/",
    github: "https://github.com/SatadipIITG11/fec_ps"
  },
  {
    title: "Airline Booking And Management System",
    image: plane,
    description:
      "Developed an Airline Booking and Management using MERN Stack where Users can do Flight Ticket Reservation, download E-tickets, View Travel History and Submit Travel Feedback by logging into their Accounts. Featuring Real-Time Flight Updates and Secure payments using Stripe Payment Gateway Integration, enabling efficient travel planning for Users Worldwide.Built an Admin Portal for effective flight Management: Flight Scheduling, Configuration Seats and Cost Matrix.",
    technologies: ["React", "MongoDB", "Node.js", "Express"],
    website: "https://flyhigh-gamma.vercel.app/",
    github: "https://github.com/Kushanava-Ghosh/Airline-Management/tree/main"
  },
  {
    title: "Crypto Navigator",
    image: stock,
    description:
      "Leveraged React for the core framework, Material-UI for a modern and responsive design, Axios for real-time API data fetching, and Chart.js for interactive data visualization. Utilized the CoinGecko API for fetching up-to-date cryptocurrency data and deployed the project using Netlify, enabling users to track and analyze real-time price trends efficiently. Integrated Framer Motion for smooth animations, React Toastify for user-friendly notifications, and React Web Share for easy link sharing.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    website: "https://cryptonavigator.netlify.app/",
    github: "https://github.com/Cryptocurrency-Price-Tracker/Cryptocurrency-Price-Tracker"
  },
  {
    title: "Financely- Personal Finance Tracker",
    image: finance,
    description:
      "Developed a user-friendly finance management tool using React JS and ANT Design, complemented by Firebase for backend data storage. Implemented react-firebase-hooks for real-time data synchronization. Integrated data parsing with Papaparse, interactive charts using @ant-design/charts.",
    technologies: ["React", "Firebase", "Express"],
    website: "#",
    github: "https://github.com/Personal-Financial-Tracker/PersonalFinanceTracker"
  },
];

export const CONTACT = {
  address: "IIT Guwahati, North Assam, India",
  phoneNo: "+91 7629993490",
  email: "satadipdebiit2022@gmail.com",
};
