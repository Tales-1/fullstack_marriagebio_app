import { useParams, Link } from "react-router-dom";

const ProfilePage = ({ profileData }: any) => {
  let { profileId } = useParams();
  const currentProfile = profileData.find(
    (profile: any) => profile["Unique_Number"] === profileId
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
        <h1 className="text-lg">{currentProfile["Unique_Number"]}</h1><br/>
        <span className="underline">Gender:</span> {currentProfile["Gender"]}<br/>
        <span className="underline">Age:</span> {currentProfile["Age"]}<br/>
        <span className="underline">Height:</span> {currentProfile["Height"]}<br/>
        <span className="underline">Status:</span> {currentProfile["Status:_"]}<br/>
        <span className="underline">Ethnicity:</span> {currentProfile["Ethnicity:_"]}<br/>
        <span className="underline">Location:</span> {currentProfile["Location:_"]}<br/>
        <span className="underline">Education:</span> {currentProfile["Education:"]}<br/>
        <span className="underline">Employment:</span> {currentProfile["Employment:"]}<br/>
        <span className="underline">Willing to Relocate?</span> {currentProfile["Willing_to_relocate:_"]}<br/>
        <span className="underline">Family/Siblings:</span> {currentProfile["Family/_Siblings"]}<br/>
        <span className="underline">Languages Spoken:</span>  {currentProfile["Languages_spoken:_"]}<br/>
        <span className="underline">I celebrate:</span> {currentProfile["Do_you_celebrate_any_of_the_following?"]}<br/>
        <span className="underline">Do you have a beard?</span> {currentProfile["Do_you_have_a_beard?_(Male)"]}<br/>
        <span className="underline">Do you wear a hijab?</span> {currentProfile["Do_you_wear_any_of_the_following?"]}<br/>
        <span className="underline">About myself:</span>  {
          currentProfile[
            "About_Me:_Please_provide_a_description_of_yourself,_including_your_personal_qualities,_faith,_personality,_interests,_and_background?"
          ]
        }<br/>
        <span className="underline">Age Preferred:</span> {currentProfile["Age_range:"]}<br/>
        <span className="underline">Preferred Ethnicity:</span> {currentProfile["Preferred_Ethnicity"]}<br/>
        <span className="underline">Deen Expectations:</span> {currentProfile["Deen_expectations:"]}<br/>
        <span className="underline">Education/Career Expectations:</span> {currentProfile["Education/_career_expectations:"]}<br/>
        <span className="underline">I would accept a person who is:</span>  {
          currentProfile[
            "I_would_accept_a_person_who_is:_Divorced,_widowed,_has_children,_a_revert."
          ]
        } <br/>
        <span className="underline">What are you looking for in your future spouse?</span> {
          currentProfile[
            "Please_provide_details_about_the_qualities_and_characteristics_you_seek_in_your_potential_spouse."
          ]
        }<br/>
        <span className="underline">Any comments: </span>{currentProfile["Any_further_comments"]}<br/>
        <span className="underline">Contact:</span> {currentProfile["Who_to_contact?"]}<br/>
        <span className="underline">Contact Name:</span> {currentProfile["Parent_or_Guardian's_Name_"]}<br/>
        <span className="underline">Contact Number:</span> 0{
          currentProfile[
            "Please_provide_the_contact_details_of_a_parent_or_suitable_senior_guardian_(unless_in_exceptional_circumstances)_to_be_added_to_the_WhatsApp_group._Only_female_relatives_will_be_added_to_the_group."
          ]
        }<br/>
      </div>
    </div>
  );
};

export default ProfilePage;
