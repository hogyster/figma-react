import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

// const Header = ({ siteTitle }) => (
//   <div className="Header">
//     <div className="HeaderGroup"> 
//       <Link to="/">
//         <img src={require('../images/logo-designcode.svg')} width-="30" />
//       </Link>
//       <Link to="/courses">Courses</Link>
//       <Link to="/downloads">Downloads</Link>
//       <Link to="/workshops">Courses</Link>
//       <Link to="/buy">
//         <button>Buy</button>
//       </Link>
//     </div>
//   </div>
// )

// make above stateless comp to stateful
 class Header extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }
// Ask window to listen to event scroll and then to change the function
// called the handle scroll
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    // give the data about where the data has scrolled, positioning of it
    const scrollTop = window.pageYOffset
  
    if (scrollTop > 50) {
      this.setState({hasScrolled: true})
    } else {
      this.setState({ hasScrolled: false})
    }
  }


   render() {
     return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup"> 
        <Link to="/">
          <img src={require('../images/logo-designcode.svg')} width-="30" />
        </Link>
        <Link to="/courses">Courses</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/workshops">Courses</Link>
        <Link to="/buy">
          <button>Buy</button>
        </Link>
      </div>
    </div>
     )
   }
 }
export default Header
