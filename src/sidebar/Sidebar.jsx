import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.imgur.com/stnadtw.png"
          alt="" />
        <p>
        Hello there, I'm Sahil Pahuja, aspiring to become a full-stack web developer. My enthusiasm lies in the world of coding—I find joy in crafting digital solutions and exploring the endless possibilities technology offers. Delving into new technologies is where I thrive; experimenting with fresh tools and frameworks keeps my passion for development alive. I'm dedicated to honing my skills and embracing the ever-evolving landscape of web development.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItems">Life</li>
          <li className="sidebarListItems">Music</li>
          <li className="sidebarListItems">Style</li>
          <li className="sidebarListItems">Sports</li>
          <li className="sidebarListItems">Tech</li>
          <li className="sidebarListItems">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW</span>
        <div className="sidebarSocial">
          <i className="sideIcon fa-brands fa-square-facebook"></i>
          <i className="sideIcon fa-brands fa-square-twitter"></i>
          <i className="sideIcon fa-brands fa-square-pinterest"></i>
          <i className="sideIcon fa-brands fa-square-instagram"></i>
        </div>
        </div>
      </div>
    
  )
}
