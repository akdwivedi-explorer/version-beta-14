"use client";
import { useState } from 'react';
import HeaderN from '../../components/ngodashboard/HeaderN';
import SidebarN from '../../components/ngodashboard/SidebarN';
import HomeN from '../../components/ngodashboard/HomeN';

function Dashboardn() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  // Function to toggle the sidebar
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  // Define an empty function for onPostMessageClick (or add your logic here)
  const handlePostMessageClick = () => {
    // Add any logic for posting messages, if needed
    console.log("Post message clicked");
  };

  return (
    <div className="flex h-screen">
      {/* Pass the onPostMessageClick prop to SidebarN */}
      <SidebarN
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        onPostMessageClick={handlePostMessageClick} // Pass this prop
      />
      <div className="flex-1 flex flex-col">
        <HeaderN OpenSidebar={OpenSidebar} />
        <div className="flex-1 overflow-auto p-4">
          <HomeN />
        </div>
      </div>
    </div>
  );
}

export default Dashboardn;
