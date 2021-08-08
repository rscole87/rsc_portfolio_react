import marbleTheory from '../images/project-marbletheory.png'
import ssPrintsPlus from '../images/project-ssprintsplus.png'
import greyAreaServices from '../images/project-greyarea.png'

const PROJECTS = [
  {
    id: "project1",
    name: "Marble Theory Design",
    description: "Marble Theory Design is local graphic design and branding firm which was in need of a landing page for new clients. I was tasked with designing and building the website and chose to build it using React, custom CSS, and Bootstrap.",
    image: marbleTheory, 
    video: "../images/videos/base_apparel.mp4",
    github: "https://github.com/rscole87/mt_website_react_v2",
    demo: "http://www.marbletheory.com",
  },

  {
    id: "project2",
    name: "SS Prints-Plus",
    description: "SS Prints-Plus is a local small business that did not have any existing web presence. The owner was looking to have website to send prospective clients as well as recieve order inquiries via a submission form. I was commissioned to design and build this website to meet their needs. Built using HTML, CSS, and vanilla JavaScript, this website also leverages the use of Bootstrap slider and modal components.",
    image: ssPrintsPlus,
    video: "../images/videos/intro_component.mp4",
    github: "https://github.com/rscole87/ssprintsplus_website_bootstrap",
    demo: "http://www.ssprintsplus.com",
  },

  {
    id: "project3",
    name: "Grey Area Services",
    description: "Grey Area Services is a newly-formed local private investigative agency. After receiving design specifications from a desiginer, I proceded to build this website using React, ReactStrap, and custom CSS. ",
    image: greyAreaServices,
    video: "../images/videos/bookmark.mp4",
    github: "https://github.com/rscole87/grey_area_site",
    demo: "http://www.greyareaservices.com",
  },
];

export default PROJECTS;
