import { Data } from "./App";
import copyBio from "./utils";
import { Link } from "react-router-dom";

interface Props {
    profiles:Data[]
    filter:string | null
}

interface ProfileProps { 
  profile:Data
  index: number
}


const Profiles: React.FC<Props> = ({profiles, filter}) => {
  let filteredProfiles = profiles.filter((profile) => {
    if(!filter) return profile
    if(filter === "Sent") return profile[30].toLowerCase()  === "yes"
    if(filter === "Unsent") return profile[30].toLowerCase() !== "yes"
    return filter === profile[3]
  })
  
    return (
      <>
        {!profiles.length ? (
          <p>Loading...</p>
        ) : (
          filteredProfiles.length > 0 ?  filteredProfiles.map((profile, index) => {
            return(
              <Profile profile={profile} index={index} key={index} />
            )  
          }) :<h1>No profiles match the filter.</h1>
        )}
      </>
      )
  };


export const Profile:React.FC<ProfileProps> = ({profile, index}) => {

  return (
    <div className="flex flex-col gap-3 text-center" key={index}>
      <span>{profile[1]}</span>
      <button
        className="p-2 border-[1px] border-black shadow-md dark:border-white"
        onClick={() => {
          copyBio(profile);
          setTimeout(() => {
            window.open("https://web.whatsapp.com")
          },1000)
          ;
        }}
      >
        {profile[3]}
      </button>

      <Link to={`/profilepage/${profile[1]}`} className="underline hover:opacity-70 text-xs xl:text-[0.82rem]">View Profile</Link>

      {profile[30].toLowerCase() == "yes" ? (
        <span className="green text-sm">Sent</span>
      ) : (
        <span className="red text-sm">Unsent</span>
      )}
    </div>
  );
}

export default Profiles