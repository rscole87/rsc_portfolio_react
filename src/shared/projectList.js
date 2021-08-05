import BaseApparel from '../images/project-base-apparel.png';
import BookmarkManager from '../images/project-bookmark-manager.png'
import IntroComponent from '../images/project-intro-component.png'
import SmashBracket from '../images/project-smash-bracket.png'
import TipCalculator from '../images/project-tip-calc.png'
import TodoList from '../images/project-todo-list.png'

const PROJECTS = [
  {
    id: "project1",
    name: "Base Apparel",
    description: "Landing page for a new clothing retailer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: BaseApparel, 
    video: "../images/videos/base_apparel.mp4",
    github: "",
    demo: "",
  },

  {
    id: "project2",
    name: "Intro Component",
    description: "Registration form for online learning platform. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: IntroComponent,
    video: "../images/videos/intro_component.mp4",
    github: "",
    demo: "",
  },

  {
    id: "project3",
    name: "Bookmark Manager",
    description: "Website for a bookmark management platform Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: BookmarkManager,
    video: "../images/videos/bookmark.mp4",
    github: "",
    demo: "",
  },

  {
    id: "project4",
    name: "Smash Tourney Bracket",
    description: "Tournament registration form and bracket tracker.",
    image: SmashBracket,
    video: "../images/videos/smash_bracket.mp4",
    github: "",
    demo: "",
  },

  {
    id: "project5",
    name: "To-Do List",
    description: "Task tracking application.",
    image: TodoList,
    video: "../images/videos/to_do_list.mp4",
    github: "",
    demo: "",
  },

  {
    id: "project6",
    name: "Tip Calculator",
    description: "Tip calculator for individuals and groups.",
    image: TipCalculator,
    video: "../images/videos/tip_calc.mp4",
    github: "https://github.com/rscole87/tip_calculator_v1",
    demo: "https://infallible-noether-583f03.netlify.app/",
  },
];

export default PROJECTS;
