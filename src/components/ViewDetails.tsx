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
      <p>{profile["Age"]} years old</p>
      <p>H: {profile["Height"]}</p>
      <p>Ethnicity: {profile["Ethnicity: "]}</p>
      <p>Nationality: {profile["Nationality"]}</p>
      <p>Location: {profile["Location: "]}</p>

      <button onClick={toggleDetails} className="mt-4 text-3xl">&#10006;</button>
    </div>
  </div>
  );
}
