import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const basename = process.env.PUBLIC_URL || '/';

function TopBar() {
  return (
    <div className="top-bar">
      KAYO ANG LEODY KO!
    </div>
  );
}

function Header() {
  return (
    <header className="main-header">
      <Link to="/" className="logo-link">
        <div className="logo-placeholder">KA LEODY 2025</div>
      </Link>
    </header>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => setOpen((o) => !o);
  const handleClose = () => setOpen(false);
  return (
    <nav className="nav-bar">
      <button className={`nav-toggle${open ? ' open' : ''}`} onClick={handleToggle} aria-label="Toggle navigation">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <div className={`nav-links${open ? ' show' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>About</NavLink>
        <NavLink to="/platform" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>Platform</NavLink>
        <NavLink to="/news" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>News</NavLink>
        <NavLink to="/events" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>Events</NavLink>
        <NavLink to="/get-involved" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>Get Involved</NavLink>
        <NavLink to="/donate" className={({ isActive }) => 'nav-btn contribute' + (isActive ? ' active' : '')} onClick={handleClose}>Contribute</NavLink>
        <NavLink to="/shop" className={({ isActive }) => 'nav-btn shop' + (isActive ? ' active' : '')} onClick={handleClose}>Shop</NavLink>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-section hero-with-image">
      <img src={process.env.PUBLIC_URL + '/leody-banner.png'} alt="Leody de Guzman for Senate" className="hero-img" />
      <div className="hero-content hero-content-overlay">
        <h1>"A New Golden Age for the Filipino Worker"</h1>
        <p>Leodegario "Ka Leody" de Guzman, Senatorial Candidate</p>
        <div className="hero-actions">
          <Link to="/donate" className="hero-btn contribute">Contribute</Link>
          <Link to="/get-involved" className="hero-btn volunteer">Volunteer</Link>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <div className="page">
      <h2>About Ka Leody</h2>
      <p><strong>Leodegario "Ka Leody" Quitain de Guzman</strong> (born July 25, 1959) is a Filipino socialist labor rights activist who ran for president in the 2022 Philippine presidential elections, under the Partido Lakas ng Masa. He is currently the chairperson of the Bukluran ng Manggagawang Pilipino, a socialist federation of militant trade unions. He has also sought seats in the Senate in 2019 and 2025.</p>
      <h3>Activism & Leadership</h3>
      <ul>
        <li>Became involved in activism after the assassination of Benigno Aquino Jr., joining the "Tarlac to Tarmac" march and leading the Aris Philippines branch of JAJA.</li>
        <li>Organizer for Alyansa ng mga Manggagagawa sa Pasig (ALMAPAS), 1984-1990.</li>
        <li>Elected to the regional executive council of Kilusang Mayo Uno (KMU) in 1991, then co-founded Bukluran ng Manggagawang Pilipino (BMP) in 1993.</li>
        <li>Served as BMP's deputy secretary general (1993-1996), general secretary (1996-2005), president (2005-2018), and chair (2018-present).</li>
        <li>Active in protests and campaigns against various administrations and policies, including the Estrada impeachment, Arroyo's state of emergency, and Duterte's war on drugs.</li>
        <li>Board member of PhilRights and Bulig Visayas, and representative to international labor organizations.</li>
      </ul>
      <h3>Political Career</h3>
      <ul>
        <li><strong>2016 House of Representatives bid:</strong> First nominee of Sanlakas partylist (no seat won).</li>
        <li><strong>2019 Senate bid:</strong> Senate candidate under Partido Lakas ng Masa, focused on ending contractualization and mining reform. Placed 38th of 62 candidates.</li>
        <li><strong>2022 presidential campaign:</strong> Presidential candidate for Partido Lakas ng Masa, running on systemic change and labor issues.</li>
        <li><strong>2025 Senate bid:</strong> Senate candidate under Partido Lakas ng Masa, placed 34th with over 4 million votes.</li>
      </ul>
    </div>
  );
}

function Platform() {
  return (
    <div className="page">
      <h2>Platform & Stances</h2>
      {/* Media for End Contractualization */}
      <div className="platform-media">
        <img src={process.env.PUBLIC_URL + '/rally-photo.jpg'} alt="Ka Leody at labor rally" className="media-img" />
        <div>
          <h3>End Contractualization</h3>
          <p>Ka Leody leads workers in a rally to end contractualization and fight for job security.</p>
        </div>
      </div>
      {/* Media for For the People */}
      <div className="platform-media">
        <img src={process.env.PUBLIC_URL + '/for-the-people.jpg'} alt="Ka Leody voting with the people" className="media-img" />
        <div>
          <h3>For the People</h3>
          <p>Ka Leody stands with ordinary Filipinos, championing fair elections and true representation for all. His platform is rooted in the needs and voices of the people.</p>
        </div>
      </div>
      <ul>
        <li>End contractualization ("endo") and increase workers' wages</li>
        <li>Abolish the Mining Act of 1995</li>
        <li>Suspend the TRAIN law tax system</li>
        <li>Support renewable energy and review deregulation laws</li>
        <li>Oppose the return of the death penalty</li>
        <li>Support stipends for poor students and Universal Basic Income</li>
        <li>Support legalization of divorce and medical marijuana</li>
        <li>Support the Bangsamoro Basic Law, abortion rights, and same-sex marriage</li>
        <li>Oppose constitutional change under Duterte, lowering criminal age, extension of Martial Law, and red-tagging</li>
        <li>End political dynasties</li>
        <li>Abolish NTF-ELCAC and repeal the Anti-Terrorism Law of 2020</li>
        <li>Amend the rice tariffication law and review military agreements with the U.S.</li>
        <li>Prioritize labor affairs and address rising prices of basic goods</li>
        <li>Other stances: opposed the return of the death penalty, supported stipends for poor students, Universal Basic Income, legalization of divorce, medical marijuana, Bangsamoro Basic Law, abortion, and same-sex marriage. Opposed constitutional change under Duterte, lowering criminal age, extension of Martial Law, and red-tagging. Called for an end to political dynasties, abolition of NTF-ELCAC, and repeal of the Anti-Terrorism Law of 2020. Advocated for amending the rice tariffication law, reviewing military agreements with the U.S., addressing rising prices, and prioritizing labor affairs.</li>
      </ul>
    </div>
  );
}

function News() {
  return (
    <div className="page">
      <h2>News</h2>
      {/* Example embedded YouTube video */}
      <div className="media-video">
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/QPrf-QrrEPo" title="YouTube video" frameBorder="0" allowFullScreen></iframe>
      </div>
      <p>Latest news and updates about the campaign.</p>
      {/* To add more videos, copy the media-video div and update the YouTube link */}
    </div>
  );
}
function Events() {
  return <div className="page"><h2>Events</h2><p>Upcoming campaign events and rallies.</p></div>;
}
function GetInvolved() {
  return <div className="page"><h2>Get Involved</h2><p>Volunteer, join, or support the campaign.</p></div>;
}
function Donate() {
  return <div className="page"><h2>Contribute</h2><p>Support Ka Leody's campaign with your donation.</p></div>;
}
function Shop() {
  return <div className="page"><h2>Shop</h2><p>Official campaign merchandise coming soon.</p></div>;
}
function Home() {
  return (
    <>
      <Hero />
    </>
  );
}

function App() {
  return (
    <Router basename={basename}>
      <div className="App">
        <TopBar />
        <Header />
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <footer>
          <div className="footer-social">
            <a href="https://www.facebook.com/KaLeodyDeGuzman" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src={process.env.PUBLIC_URL + '/fb.png'} alt="Facebook" className="footer-icon" />
            </a>
            <a href="https://x.com/LeodyManggagawa" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src={process.env.PUBLIC_URL + '/x.png'} alt="X" className="footer-icon" />
            </a>
            <a href="https://www.youtube.com/@KaLeodyDeGuzman" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src={process.env.PUBLIC_URL + '/youtube.png'} alt="YouTube" className="footer-icon" />
            </a>
            <a href="mailto:kaleody.manggagawa@gmail.com" aria-label="Email">
              <img src={process.env.PUBLIC_URL + '/email.png'} alt="Email" className="footer-icon" />
            </a>
          </div>
          <p>&copy; 2025 Leodegario "Ka Leody" de Guzman. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
