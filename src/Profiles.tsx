import { Data } from "./App";
import copyBio from "./utils";

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
    if(filter === "Sent") return profile["Sent"].toLowerCase()  === "yes"
    if(filter === "Unsent") return profile["Sent"].toLowerCase() === "no"
    return filter === profile["Gender"]
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


const Profile:React.FC<ProfileProps> = ({profile, index}) => {

  console.log(profile)
  return (
    <div className="flex flex-col gap-3 text-center" key={index}>
      <span>Unique Number:{profile["Unique_Number"]}</span>
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
        {profile["Gender"]}
      </button>
      {profile["Sent"] == "yes" ? (
        <span className="green">Sent</span>
      ) : (
        <span className="red">Unsent</span>
      )}
    </div>
  );
}

export default Profiles