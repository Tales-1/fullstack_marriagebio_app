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
      <Link to="/" className="text-sm">Back to Profiles</Link><br/>
      <div>
        {currentProfile["Unique_Number"]}<br/><br/>
        Gender: {currentProfile["Gender"]}<br/>
        Age: {currentProfile["Age"]}<br/>
        Height: {currentProfile["Height"]}<br/>
        Status: {currentProfile["Status:_"]}<br/>
        Ethnicity: {currentProfile["Ethnicity:_"]}<br/>
        Location: {currentProfile["Location:_"]}<br/>
        Education: {currentProfile["Education:"]}<br/>
        Employment: {currentProfile["Employment:"]}<br/>
        Willing to Relocate? {currentProfile["Willing_to_relocate:_"]}<br/>
        Family/Siblings: {currentProfile["Family/_Siblings"]}<br/>
        Languages Spoken: {currentProfile["Languages_spoken:_"]}<br/>
        I celebrate: 
        {currentProfile["Do_you_celebrate_any_of_the_following?"]}<br/>
        Do you have a beard? {currentProfile["Do_you_have_a_beard?_(Male)"]}<br/>
        Do you wear a hijab? 
        {currentProfile["Do_you_wear_any_of_the_following?"]}<br/>
        About myself: 
        {
          currentProfile[
            "About_Me:_Please_provide_a_description_of_yourself,_including_your_personal_qualities,_faith,_personality,_interests,_and_background?"
          ]
        }<br/>
        Age Preferred: {currentProfile["Age_range:"]}<br/>
        Preferred Ethnicity: {currentProfile["Preferred_Ethnicity"]}<br/>
        Deen Expectations: {currentProfile["Deen_expectations:"]}<br/>
        Education/Career Expectations: 
        {currentProfile["Education/_career_expectations:"]}<br/>
        I would accept a person who is: 
        {
          currentProfile[
            "I_would_accept_a_person_who_is:_Divorced,_widowed,_has_children,_a_revert."
          ]
        }<br/>
        What are you looking for in your future spouse?
        {
          currentProfile[
            "Please_provide_details_about_the_qualities_and_characteristics_you_seek_in_your_potential_spouse."
          ]
        }<br/>
        Any comments:{currentProfile["Any_further_comments"]}<br/>
        Contact: {currentProfile["Who_to_contact?"]}<br/>
        Contact Name: {currentProfile["Parent_or_Guardian's_Name_"]}<br/>
        Contact Number: 0
        {
          currentProfile[
            "Please_provide_the_contact_details_of_a_parent_or_suitable_senior_guardian_(unless_in_exceptional_circumstances)_to_be_added_to_the_WhatsApp_group._Only_female_relatives_will_be_added_to_the_group."
          ]
        }<br/>
      </div>
    </div>
  );
};

export default ProfilePage;
