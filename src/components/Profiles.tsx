import { Data } from "../App";
import copyBio from "./utils";
import { Link } from "react-router-dom";
import man from "../assets/muslim.png";
import woman from "../assets/hijab.png";
import { useState } from "react";
import ViewProfileModal from "./ViewDetails";
import ViewDetails from "./ViewDetails";

interface Props {
  profiles: Data[];
}

interface ProfileProps {
  profile: Data;
  index: number;
}

const Profiles: React.FC<Props> = ({ profiles }) => {
  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:flex-wrap lg:justify-center lg:w-3/5 m-auto z-10">
      {!profiles.length ? (
        <p>Loading...</p>
      ) : profiles.length > 0 ? (
        profiles.map((profile, index) => {
          return <Profile profile={profile} index={index} key={index} />;
        })
      ) : (
        <h1>No profiles match the filter.</h1>
      )}
    </div>
  );
};

export const Profile: React.FC<ProfileProps> = ({ profile, index }) => {
  const [viewDetails, setViewDetails] = useState(false);
  function toggleViewDetails() {
    setViewDetails((prev) => !prev);
  }

  return (
    <div className="card-container relative" key={index}>
      <ViewDetails 
        isVisible={viewDetails} 
        toggleDetails={toggleViewDetails} 
        profile={profile}
        />
      
      <div className="main-section">
        <strong>{profile[1]}</strong>
        <div className="image-container">
          <div className="image">
            <img src={profile[3] === "Male" ? man : woman} alt="" />
          </div>
          <span className="gender">{profile[3]}</span>
          {profile[30].toLowerCase() == "yes" ? (
            <small className="green">Sent</small>
          ) : (
            <small className="red">Unsent</small>
          )}
        </div>

        <button onClick={toggleViewDetails}>View</button>
      </div>

      <div className="copy-bio-container">
        <button
          className="copy-bio"
          onClick={() => {
            copyBio(profile);
            setTimeout(() => {
              window.open("https://web.whatsapp.com");
            }, 1000);
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Profiles;
