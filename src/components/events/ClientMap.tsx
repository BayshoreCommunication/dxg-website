// import React from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';

// const ClientMap: React.FC = () => {
//   const mapStyles = {
//     height: '400px',
//     width: '100%',
//   };

//   const defaultCenter = {
//     lat: 37.7749, // Replace with your desired latitude
//     lng: -122.4194, // Replace with your desired longitude
//   };

//   return (
//     <LoadScript
//       googleMapsApiKey='AIzaSyBxqVfD44LGh_iW4BrS9AE7h3A0hI3Dv3Y
//     '
//     >
//       <GoogleMap
//         mapContainerStyle={mapStyles}
//         center={defaultCenter}
//         zoom={10}
//       />
//     </LoadScript>
//   );
// };

// export default ClientMap;

import React from 'react';

const ClientMap = () => {
  return (
    <div className='w'>
      <div className='relative h-[600px] w-full'>
        <iframe
          className='absolute left-0 top-0 h-full w-full bg-slate-500'
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus'
          // frameborder='0'
          // style='border:0;'
          // allowfullscreen=''
          // aria-hidden='false'
          // tabindex='0'
          style={{ background: 'black' }}
        ></iframe>
      </div>
    </div>
  );
};

export default ClientMap;