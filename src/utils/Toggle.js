// import React, { useEffect, useState } from 'react';
// import '../styles/toggle.css';
// import { setTheme } from '../utils/themes';
// import lightIcon from '../logo-images/light-mode.png';
// import darkIcon from '../logo-images/dark-mode.png';

// export default function Toggle() {
//     const [togClass, setTogClass] = useState('dark');
//     let theme = localStorage.getItem('theme');

//     const handleOnClick = () => {
//         if (localStorage.getItem('theme') === 'theme-dark') {
//             setTheme('theme-light');
//             setTogClass('light')
//         } else {
//             setTheme('theme-dark');
//             setTogClass('dark')
//         }
//     }

//     useEffect(() => {
//         if (localStorage.getItem('theme') === 'theme-dark') {
//             setTogClass('dark')
//         } else if (localStorage.getItem('theme') === 'theme-light') {
//             setTogClass('light')
//         }
//     }, [theme])

//     return (
//         <div>
//             {
//                 togClass ==="light"?
//                 <input type="image" src={lightIcon} className="toggle-icon" onClick={handleOnClick}/> 
//                 :
//                 <input type="image" src={darkIcon} className="toggle-icon" onClick={handleOnClick}/>
//             }
//         </div>
//     )
// }
