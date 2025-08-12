import { Outlet,Link } from "react-router-dom"
import InPageNavigation from "./inPageNavigation"


function Navbar() {
  return (
  <div className="min-h-screen bg-white text-black">
    
     <InPageNavigation teams={[{title:"Match",sppath:"/"},{title:"News",sppath:"/news"},{title:"Table",sppath:"/pointsTable"}]} >
     <Link to={"/"}><p>Match</p></Link>
     <Link to={"/news"}><p>News</p></Link>
      <Link to={"/pointsTable"}><p>Table</p></Link>
   
     
     </InPageNavigation>
 
    <Outlet></Outlet>
  </div>


  )
}

export default Navbar