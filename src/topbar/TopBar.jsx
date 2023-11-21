import "./topbar.css"

export default function topbar() {
  return (
    <div className='top'>
      <div className="top-left">
      <i className = "topIcon fa-brands fa-square-facebook"></i>
      <i className = "topIcon fa-brands fa-square-twitter"></i>
      <i className = "topIcon fa-brands fa-square-pinterest"></i>
      <i className = "topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="top-right">
        <img  className="topImg" src="https://i.imgur.com/stnadtw.png" alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}
