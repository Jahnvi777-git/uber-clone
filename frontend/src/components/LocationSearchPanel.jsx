import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, near Kapoor's cafe, near abc school, hyderabad",
    "222, near Kapoor's cafe, near abc school, hyderabad",
    "777, near Kapoor's cafe, near abc school, hyderabad",
    "444, near Kapoor's cafe, near abc school, hyderabad",
    "25B, near Kapoor's cafe, near abc school, hyderabad",
    "7777, near Kapoor's cafe, near abc school, hyderabad",
    "2222, near Kapoor's cafe, near abc school, hyderabad",
  ];
  return (
    <div>
      {locations.map((location, index) => (
        <div
          onClick={() => {
            props && props.setVehiclePanelOpen && props.setVehiclePanelOpen(true)
            props && props.setPanelOpen && props.setPanelOpen(false)
          }}
          key={index}
          className="flex items-center p-3 border-2 active:border-black rounded-lg gap-4 my-3 justify-start"
        >
          <h2 className="bg-[#eee] p-2 h-10 w-12 flex items-center justify-center rounded-full">
            <i className="ri-map-pin-fill text-xl"></i>
          </h2>
          <h4 className="font-medium">{location}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
