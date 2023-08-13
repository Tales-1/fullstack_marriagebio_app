import { Data } from "./App";
import copyBio from "./utils";
import { Link } from "react-router-dom";
import man from "./assets/muslim.png"
import woman from "./assets/hijab.png"

interface Props {
  profiles: Data[];
  filter: string | null;
}

interface ProfileProps {
  profile: Data;
  index: number;
}

const Profiles: React.FC<Props> = ({ profiles, filter }) => {
  let filteredProfiles = profiles.filter((profile) => {
    if (!filter) return profile;
    if (filter === "Sent") return profile[30].toLowerCase() === "yes";
    if (filter === "Unsent") return profile[30].toLowerCase() !== "yes";
    return filter === profile[3];
  });

  return (
    <div className="flex flex-col items-center gap-6 lg:flex-row lg:flex-wrap lg:justify-center lg:w-3/5 m-auto z-10">
      {!profiles.length ? (
        <p>Loading...</p>
      ) : filteredProfiles.length > 0 ? (
        filteredProfiles.map((profile, index) => {
          return <Profile profile={profile} index={index} key={index} />;
        })
      ) : (
        <h1>No profiles match the filter.</h1>
      )}
    </div>
  );
};

export const Profile: React.FC<ProfileProps> = ({ profile, index }) => {
  return (
    <>
      <div className="card-container" key={index}>
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

          <Link
          to={`/profilepage/${profile[1]}`}
          className="underline hover:opacity-70 text-xs xl:text-[0.82rem]"
        >
          View Profile
        </Link>

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
    </>
  );
};

export default Profiles;
