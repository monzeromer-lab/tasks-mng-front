import React from 'react';
import axios from 'axios'; // Assuming you're using axios for fetching

async function getProfileData() {
  try {
    const response = await axios.get('http://localhost:3001/users/profile');
    return response.data;
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return {}; // Return an empty object in case of error
  }
}

export default async function Navigation() {
  const profileData = await getProfileData();

  return (
    <>
      <nav className="h-16 w-full bg-white flex flex-row items-center">
        <div className="flex flex-row">
          <h1>{profileData.name || 'Your Name'}</h1> {/* Use data or fallback */}
        </div>
        <div className="flex flex-row">
          {/* Add other elements based on profile data if needed */}
        </div>
      </nav>
    </>
  );
}
