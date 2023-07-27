// import React, { useState } from 'react';
// import Parse from 'parse/dist/parse.min.js';
// import ReactDOMServer from 'react-dom/server';
// import BusinessCardTemplate from '../BusinessCardTemplate';
// import { Input, QRCode, Space } from 'antd';

// function TagCard(props){
//     // state variables
//     const [loading, setLoading] = useState(false);
//     const [currentURL, setText] = useState("");
//     // Opens the E-Card in a new Window
//     const handleOpenEcard = () => {
//         {window.open('/e-card', '_blank', 'height=500, width=500')}
//     }
//     // Deletes the Tagcard and its inforamton from Back4App and UI
//     const handleTagCardDelete = async () => {
//         setLoading(true);
//         try {
//             const myClass = Parse.Object.extend('TagCard');
//             const queryDelete = new Parse.Query(myClass);
//             console.log(props.cardNickname)
//             queryDelete.equalTo('objectId',props.id);
//             const object = await queryDelete.first();
//             await object.destroy();
//             setLoading(false);
//             alert(
//                 `Success! Tag Card "${props.cardNickname}" was successfully deleted!`
//               );
//             window.location.reload(); // Reload the window after successful deletion
//         } catch (error) {
//             console.log('Error deleting object:', error);
//             setLoading(false);
//         }
//     }
//     // Generates and Downloads a QR code for user on a seperate screen
//     // To be completed in next Enstallment
//     // Test Case Failed. 
//     const QRCodeWindow = ({ currentURL }) => (
//         <Space direction="vertical" align="center">
//           <QRCode value={currentURL || "-"} />
//           <Input
//             placeholder="-"
//             maxLength={60}
//             value={currentURL}
//             onChange={(e) => setText(e.target.value)}
//           />
//         </Space>
//       );
//     const handleDownloadTagCardQRCode = () => {
//         const newWindow = window.open("", "_blank", "height=500, width=500");
//         newWindow.document.write("<html><body>");
//         newWindow.document.write("<h1>QR Code</h1>");
//         newWindow.document.write(ReactDOMServer.renderToString(<QRCodeWindow text={currentURL} />));
//         newWindow.document.write("</body></html>");
//     }

//     return(
//         <div  className='tag-card'>
//             <div className='tagCard-info'>
//                 <div className='tagCard-header-primary'>
//                       <p>{props.cardNickname}</p> 
//                 </div>
//                 <div className='tagCard-body'>            
//                     {/* decided to create a button so i can modify as needed in the css for sytling */}
//                     <button className='tagCard-button' onClick={handleOpenEcard}>
//                         Show E-Card
//                     </button> 
//                     <button className='tagCard-button' disabled={true} onClick={handleDownloadTagCardQRCode}>
//                         Show Qrcode
//                     </button>
//                     <button className='tagCard-button' onClick={handleTagCardDelete}>
//                         Delete
//                     </button> 
                       
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TagCard;

