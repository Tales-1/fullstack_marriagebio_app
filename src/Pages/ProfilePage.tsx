import { useParams, Link } from "react-router-dom";

const ProfilePage = ({ profileData }: any) => {
  let { profileId } = useParams();
  const currentProfile = profileData.find(
    (profile: any) => profile["Unique Number"] === profileId
  );

  if (!currentProfile) {
    return <div>Profile not found.</div>;
  }
  return (
    <div>
      <Link to="/" className="text-sm hover:opacity-70">&lt;--- 
      <span className="underline">Back to Profiles</span></Link>
      <br/><br/>
      <div>
        <h1 className="text-lg">{currentProfile["Unique Number"]}</h1><br/>
        <span className="underline">Gender:</span> {currentProfile["Gender"]}<br/>
        <span className="underline">Age:</span> {currentProfile["Age"]}<br/>
        <span className="underline">Height:</span> {currentProfile["Height"]}<br/>
        <span className="underline">Status:</span> {currentProfile["Status: "]}<br/>
        <span className="underline">Ethnicity:</span> {currentProfile["Ethnicity: "]}<br/>
        <span className="underline">Nationality:</span> {currentProfile["Nationality"]}<br/>
        <span className="underline">Location:</span> {currentProfile["Location: "]}<br/>
        <span className="underline">Education:</span> {currentProfile["Education:"]}<br/>
        <span className="underline">Employment:</span> {currentProfile["Employment:"]}<br/>
        <span className="underline">Willing to Relocate?</span> {currentProfile["Willing to relocate: "]}<br/>
        <span className="underline">Family/Siblings:</span> {currentProfile["Family/ Siblings"]}<br/>
        <span className="underline">Languages Spoken:</span>  {currentProfile["Languages spoken: "]}<br/>
        <span className="underline">I celebrate:</span> {currentProfile["Do you celebrate any of the following: Milad, Khatam, Bursi."]}<br/>
        <span className="underline">Do you have a beard?</span> {currentProfile["Do you have a beard? (Male)"]}<br/>
        <span className="underline">Do you wear a hijab?</span> {currentProfile["Do you wear any of the following?"]}<br/>
        <span className="underline">About myself:</span>  {
          currentProfile[
            "About Me: Please provide a description of yourself, including your personal qualities, faith, personality, interests, and background?"
          ]
        }<br/>
        <span className="underline">Age Preferred:</span> {currentProfile["Age range:"]}<br/>
        <span className="underline">Preferred Ethnicity:</span> {currentProfile["Preferred Ethnicity"]}<br/>
        <span className="underline">Deen Expectations:</span> {currentProfile["Deen expectations:"]}<br/>
        <span className="underline">Education/Career Expectations:</span> {currentProfile["Education/ career expectations:"]}<br/>
        <span className="underline">I would accept a person who is:</span>  {
          currentProfile[
            "I would accept a person who is: Divorced, widowed, has children, a revert."
          ]
        } <br/>
        <span className="underline">What are you looking for in your future spouse?</span> {
          currentProfile[
            "Please provide details about the qualities and characteristics you seek in your potential spouse."
          ]
        }<br/>
        <span className="underline">Any comments: </span>{currentProfile["Any further comments"]}<br/>
        <span className="underline">Contact:</span> {currentProfile["Who to contact?"]}<br/>
        <span className="underline">Contact Name:</span> {currentProfile["Parent or Guardian's Name "]}<br/>
        <span className="underline">Contact Number:</span> 0{
          currentProfile[
            "Please provide the contact details of a parent or suitable senior guardian (unless in exceptional circumstances) to be added to the WhatsApp group. Only female relatives will be added to the group."
          ]
        }<br/>
      </div>
    </div>
  );
};

export default ProfilePage;
