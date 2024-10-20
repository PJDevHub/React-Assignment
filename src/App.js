import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Use Link for navigation

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Array of app links and names
  const apps = [
    { name: "App 1", link: "/app1" },
    { name: "App 2", link: "/app2" },
    { name: "App 3", link: "/app3" },
    { name: "App 4", link: "/app4" },
    { name: "App 5", link: "/app5" },
    { name: "App 6", link: "/app6" },
    { name: "App 7", link: "/app7" },
    { name: "App 8", link: "/app8" },
    { name: "App 9", link: "/app9" },
    { name: "App 10", link: "/app10" },
    { name: "App 11", link: "/app11" },
    { name: "App 12", link: "/app12" }
  ];

  // Inline CSS styles
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '10px 20px',
      fontFamily: 'Arial, sans-serif',
    },
    brand: {
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    dropdownButton: {
      backgroundColor: '#333',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      padding: '10px 15px',
    },
    dropdownMenu: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      position: 'absolute',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      width: '200px',
      top: '50px',
      left: '20px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    dropdownItem: {
      display: 'block',
      padding: '10px 15px',
      color: 'black',
      textDecoration: 'none',
      fontSize: '16px',
    },
    dropdownLi: {
      borderBottom: '1px solid #eee',
    }
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.brand}>My Apps</div>
      <div className="dropdown">
        <button onClick={toggleDropdown} style={styles.dropdownButton}>
          Apps ▼
        </button>
        {isOpen && (
          <ul style={styles.dropdownMenu}>
            {apps.map((app, index) => (
              <li key={index} style={styles.dropdownLi}>
                <Link to={app.link} style={styles.dropdownItem}>
                  {app.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default App;
