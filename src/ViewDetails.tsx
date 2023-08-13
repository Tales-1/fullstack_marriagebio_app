import React from "react";

type Props  = {
  isVisible:boolean
  toggleDetails: () => void
  profile: any
}

export default function ViewDetails({isVisible, toggleDetails, profile}: Props) {

  const styles = {
    opacity: isVisible ? .95 : 0,
    transition:"all 200ms ease-in-out",
    zIndex: isVisible ? 20 : -1
  }

  return (
    <div className="details-overlay" style={styles}>
    <div className="text-container mx-4 text-sm">
      <p>{profile[3]}</p>
      <p>{profile[4]} years old</p>
      <p>H: {profile[5]}</p>
      <p>Ethnicity: {profile[7]}</p>
      <p>Nationality: {profile[34]}</p>
      <p>Location: {profile[8]}</p>

      <button onClick={toggleDetails} className="mt-4 text-3xl">&#10006;</button>
    </div>
  </div>
  );
}
