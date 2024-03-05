
// // import { useLocation } from 'react-router-dom';
// // import axios from 'axios';

// // // Assume you have a Dropdown component defined here
// // const Dropdown: React.FC<{ options: any[]; onSelect: (value: string) => void }> = ({ options, onSelect }) => {
// //   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// //     onSelect(event.target.value);
// //   };

// //   return (
// //     <select onChange={handleSelectChange} style={{ marginRight: '36px', width: '200px', height: '40px', borderRadius: '10px' }}>
// //       <option value="">All Devices</option>
// //       {options.map((option: any) => (
// //         <option key={option.uid} value={option.deviceid}>
// //           {option.devicename}
// //         </option>
// //       ))}
// //     </select>
// //   );
// // };
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonLabel,IonList,IonItem} from '@ionic/react';
// import Scrollbar from '../components/Scrollbar';

// const Dropdown: React.FC<{ options: any[]; onSelect: (value: string) => void }> = ({ options, onSelect }) => {
//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     onSelect(event.target.value);
//   };

//   return (
//     <div>
//     <IonMenu contentId="main-content">
//     <IonHeader>
//       <IonToolbar>
//         <IonTitle>Menu Content</IonTitle>
//       </IonToolbar>
//     </IonHeader>
//     <IonContent className="ion-padding"><IonList>
//     <IonItem routerLink="/Tab3">
//             <IonLabel>Live View</IonLabel>
//           </IonItem>
//           <IonItem routerLink="/dashboard">
//             <IonLabel>Dashboard</IonLabel>
//           </IonItem>
//           <IonItem routerLink="/dashboard/users/2">
//             <IonLabel>User 2</IonLabel>
//           </IonItem>
//         </IonList></IonContent>
//   </IonMenu>
//   <IonPage id="main-content">
//     <IonHeader>
//       <IonToolbar>
//         <IonButtons slot="start">
//           <IonMenuButton></IonMenuButton>
//         </IonButtons>
//         <IonTitle>Menu</IonTitle>
//       </IonToolbar>
//     </IonHeader>
    
//   </IonPage>
    
//     <select
//       onChange={handleSelectChange}
//       style={{ marginRight: '36px', width: '200px', height: '40px', borderRadius: '10px' }}
//     >
//       <option value="">All Devices</option>
//       {options.map((option: any) => (
//         <option key={option.uid} value={option.deviceid}>
//           {option.devicename}
//         </option>
//       ))}
//     </select>
//     </div>
//   );
// };

// const VideoContainer: React.FC<{ video: any }> = ({ video }) => (
//   <div style={{ marginBottom: '20px' }}>
//     <h2>{video.devicename}</h2>
//     <h3>{video.deviceid}</h3>
//     <iframe
//       id="fp_embed_player"
//       src={`https://restreamservers.com:8888/embed_player?urlServer=wss://restreamservers.com:8443&streamName=${video.substream}&mediaProviders=WebRTC,Flash,MSE,WSPlayer&autoplay=1`}
//       frameBorder="0"
//       width="90%"
//       height="90%"
//       style={{ overflow: 'hidden' }}
//     ></iframe>
//   </div>
// );

// const VideoPage: React.FC = () => {
//   const [videos, setVideos] = useState<any[]>([]);
//   const [selectedDevice, setSelectedDevice] = useState<string>('');

//   useEffect(() => {
//     const token = localStorage.getItem('token') || null;

//     if (token) {
//       const apiUrl = 'http://54.184.152.88:8081/devices';
//       const AUTH_TOKEN = `${localStorage.getItem('token_type')} ${localStorage.getItem('token')}`;

//       axios
//         .get(apiUrl, {
//           headers: {
//             Authorization: AUTH_TOKEN || token,
//           },
//         })
//         .then(response => {
//           setVideos(response.data);
//           console.log('response data', response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching video details:', error);
//         });
//     }
//   }, [selectedDevice]);

//   const filteredVideos = selectedDevice
//     ? videos.filter(video => video.devicename === selectedDevice)
//     : videos;

//   return (
   
//     <div>
        
        
//       <Dropdown options={videos} onSelect={(value: string) => setSelectedDevice(value)} />
      
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
//           gap: '56px',
//           padding: '30px',
//         }}
//       >
//         {filteredVideos.map(video => (
//           <VideoContainer key={video.uid} video={video} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoPage;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   IonButtons,
//   IonContent,
//   IonHeader,
//   IonMenu,
//   IonMenuButton,
//   IonPage,
//   IonTitle,
//   IonToolbar,
//   IonLabel,
//   IonList,
//   IonItem,
// } from '@ionic/react';
// import Scrollbar from '../components/Scrollbar';

// // Types
// interface Video {
//   uid: string;
//   devicename: string;
//   deviceid: string;
//   substream: string;
// }

// const Dropdown: React.FC<{ options: Video[]; onSelect: (value: string) => void }> = ({ options, onSelect }) => {
//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     onSelect(event.target.value);
//   };

//   return (
//     <div>
//       <IonMenu contentId="main-content">
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>Menu Content</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent className="ion-padding">
//           <IonList>
//             <IonItem routerLink="/Tab3">
//               <IonLabel>Live View</IonLabel>
//             </IonItem>
            
//             {options.map((option: Video) => (
//               <IonItem key={option.uid} onClick={() => onSelect(option.devicename)}>
//                 <IonLabel>{option.devicename}</IonLabel>
//                 {/* {options.map(option => (
//         <option key={option.uid} value={option.deviceid}>
//           {option.devicename}
//         </option> */}
//               </IonItem>
//             ))}
//             <IonItem routerLink="/logout">
//   <IonLabel>Logout</IonLabel>
// </IonItem>
//           </IonList>
//         </IonContent>
//       </IonMenu>
//       <IonPage id="main-content">
//         <IonHeader>
//           <IonToolbar>
//             <IonButtons slot="start">
//               <IonMenuButton></IonMenuButton>
//             </IonButtons>
//             <IonTitle>Menu</IonTitle>
//           </IonToolbar>
//         </IonHeader>

//         <select
//           onChange={handleSelectChange}
//           style={{ marginRight: '36px', width: '200px', height: '40px', borderRadius: '10px' }}
//         >
//           <option value="">All Devices</option>
//           {options.map((option: Video) => (
//             <option key={option.uid} value={option.deviceid}>
//               {option.devicename}
//             </option>
//           ))}
//         </select>
//       </IonPage>
//     </div>
//   );
// };

// const VideoContainer: React.FC<{ video: Video }> = ({ video }) => (
//   <div style={{ marginBottom: '20px' }}>
//     <h2>{video.devicename}</h2>
//     <h3>{video.deviceid}</h3>
//     <iframe
//       id="fp_embed_player"
//       src={`https://restreamservers.com:8888/embed_player?urlServer=wss://restreamservers.com:8443&streamName=${video.substream}&mediaProviders=WebRTC,Flash,MSE,WSPlayer&autoplay=1`}
//       frameBorder="0"
//       width="90%"
//       height="90%"
//       style={{ overflow: 'hidden' }}
//     ></iframe>
//   </div>
// );

// const VideoPage: React.FC = () => {
//   const [videos, setVideos] = useState<Video[]>([]);
//   const [selectedDevice, setSelectedDevice] = useState<string>('');

//   useEffect(() => {
//     const token = localStorage.getItem('token') || null;

//     if (token) {
//       const apiUrl = 'http://54.184.152.88:8081/devices';
//       const AUTH_TOKEN = `${localStorage.getItem('token_type')} ${localStorage.getItem('token')}`;
// //       const filteredVideos = selectedDevice
// //   ? videos.filter(video => video.devicename.trim().toLowerCase() === selectedDevice.trim().toLowerCase())
// //   : videos;
 

//       axios
//         .get(apiUrl, {
//           headers: {
//             Authorization: AUTH_TOKEN || token,
//           },
//         })
//         .then(response => {
//           setVideos(response.data);
//           console.log('response data', response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching video details:', error);
//         });
//         console.log("video details",videos);
//         console.log("selected device",selectedDevice);
//     }
//   }, [selectedDevice]);

// //   const filteredVideos = selectedDevice
// //   ? videos.filter(video => video.devicename.trim().toLowerCase() === selectedDevice.trim().toLowerCase())
// //   : videos;
// const filteredVideos = selectedDevice
//   ? videos.filter(video => {
//       const selectedDeviceString = String(selectedDevice).toLowerCase();
//       const videoDeviceNameString = String(video.devicename).toLowerCase();

//       console.log('Selected Device (String):', selectedDeviceString);
//       console.log('Video Device Name (String):', videoDeviceNameString);

//       const isMatch = videoDeviceNameString.includes(selectedDeviceString);
//       console.log('Is Match:', isMatch);

//       return isMatch;
//     })
//   : videos;


//   return (
//     <div>
//       <Dropdown options={videos} onSelect={(value: string) => setSelectedDevice(value)} />

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
//           gap: '56px',
//           padding: '30px',
//         }}
//       >
//         {filteredVideos.map(video => (
//           <VideoContainer key={video.uid} video={video} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonList,
  IonItem,
} from '@ionic/react';
import Scrollbar from '../components/Scrollbar';
import Dropdown from '../components/Dropdown';

// Types
interface Video {
  uid: string;
  devicename: string;
  deviceid: string;
  substream: string;
}

// const Dropdown: React.FC<{ options: Video[]; onSelect: (value: string) => void }> = ({ options, onSelect }) => {
//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     onSelect(event.target.value);
//   };

//   return (
//     <div>
//       <IonMenu contentId="main-content">
//         <IonHeader>
//           <IonToolbar>
//             <IonTitle>Menu Content</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//         <IonContent className="ion-padding">
//           <IonList>
//             <IonItem routerLink="/Tab3">
//               <IonLabel>Live View</IonLabel>
//             </IonItem>
//             <IonItem routerLink="/list-eventss">
//               <IonLabel>List Events</IonLabel>
//             </IonItem>
//             <IonItem routerLink="/list">
//               <IonLabel>Dashboard</IonLabel>
//             </IonItem>

//             {/* Map through options and create menu items */}
            
//             {/* Logout option */}
//             <IonItem routerLink="/logout">
//               <IonLabel>Logout</IonLabel>
//             </IonItem>
//           </IonList>
//         </IonContent>
//       </IonMenu>
//       <IonPage id="main-content">
//         <IonHeader>
//           <IonToolbar>
//             <IonButtons slot="start">
//               <IonMenuButton></IonMenuButton>
//             </IonButtons>
//             <IonTitle>Menu</IonTitle>
//           </IonToolbar>
//         </IonHeader>

//         {/* Dropdown for filtering devices */}
//         <select
//           onChange={handleSelectChange}
//           style={{ marginRight: '36px', width: '200px', height: '40px', borderRadius: '10px' }}
//         >
//           <option value="">All Devices</option>
//           {/* Map through options and create dropdown items */}
//           {options.map((option: Video) => (
//             <option key={option.uid} value={option.devicename}>
//               {option.devicename}
//             </option>
//           ))}
//         </select>
//       </IonPage>
//     </div>
//   );
// };

const VideoContainer: React.FC<{ video: Video }> = ({ video }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2>{video.devicename}</h2>
    <h3>{video.deviceid}</h3>
    <iframe
      id="fp_embed_player"
      src={`https://restreamservers.com:8888/embed_player?urlServer=wss://restreamservers.com:8443&streamName=${video.substream}&mediaProviders=WebRTC,Flash,MSE,WSPlayer&autoplay=1`}
      frameBorder="0"
      width="90%"
      height="90%"
      style={{ overflow: 'hidden' }}
    ></iframe>
  </div>
);

const VideoPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<string>('');

  useEffect(() => {
    const token = localStorage.getItem('token') || null;

    if (token) {
      const apiUrl = 'http://54.184.152.88:8081/devices';
      const AUTH_TOKEN = `${localStorage.getItem('token_type')} ${localStorage.getItem('token')}`;

      axios
        .get(apiUrl, {
          headers: {
            Authorization: AUTH_TOKEN || token,
          },
        })
        .then(response => {
          setVideos(response.data);
          console.log('response data', response.data);
        })
        .catch(error => {
          console.error('Error fetching video details:', error);
        });
    }
  }, []);

  // Apply filtering based on selected device
  const filteredVideos = selectedDevice
    ? videos.filter(video => {
        const selectedDeviceString = String(selectedDevice).toLowerCase();
        const videoDeviceNameString = String(video.devicename).toLowerCase();
        return videoDeviceNameString.includes(selectedDeviceString);
      })
    : videos;

  return (
    <IonContent className="ion-padding" scrollY={true}>

    <div>
      <Dropdown options={videos} onSelect={(value: string) => setSelectedDevice(value)} />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '56px',
          padding: '30px',
        }}
      >
        {filteredVideos.map(video => (
          <VideoContainer key={video.uid} video={video} />
        ))}
      </div>
    </div>
    </IonContent>
  );
};

export default VideoPage;
