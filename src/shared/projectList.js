import marbleTheoryImg from '../images/project-marbletheory.png'
import marbleTheoryVid from "../images/videos/marbletheory.mp4"
import ssPrintsPlusImg from '../images/project-ssprintsplus.png'
import ssPrintsPlusVid from "../images/videos/ssprints.mp4"
import greyAreaServicesImg from '../images/project-greyarea.png'
import greyAreaServicesVid from "../images/videos/greyarea.mp4"

const PROJECTS = [
  {
    id: "project1",
    name: "Marble Theory Design",
    description: "Marble Theory Design is local graphic design and branding firm which was in need of a landing page for new clients. As a member of the co-founding team, I was tasked with designing and building this website. My tools of choice for this website were React, custom CSS, and Bootstrap for select built-in components and grid system.",
    image: marbleTheoryImg, 
    video: marbleTheoryVid,
    github: "https://github.com/rscole87/mt_website_react_v2",
    demo: "http://www.marbletheory.com",
  },

  {
    id: "project2",
    name: "SS Prints-Plus",
    description: "SS Prints-Plus is a local small business that did not have any existing web presence. The owner was looking to have website to send prospective clients as well as recieve order inquiries via a submission form. I was commissioned to design and build this website to meet their needs. Built using HTML, CSS, and vanilla JavaScript, this website also leverages the use of Bootstrap slider and modal components.",
    image: ssPrintsPlusImg,
    video: ssPrintsPlusVid,
    github: "https://github.com/rscole87/ssprintsplus_website_bootstrap",
    demo: "http://www.ssprintsplus.com",
  },

  {
    id: "project3",
    name: "Grey Area Services",
    description: "Grey Area Services is a local private investigative agency who commissioned me and my colleagues at Marble Theory Design to design and build a website for their new business. After receiving design specifications from my design partners, I proceded to build this website using React, Bootstrap (via the ReactStrap library), and custom CSS. ",
    image: greyAreaServicesImg,
    video: greyAreaServicesVid,
    github: "https://github.com/rscole87/grey_area_site",
    demo: "http://www.greyareaservices.com",
  },
];

export default PROJECTS;
