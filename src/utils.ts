import { Data } from "./App";

export default function copyBio(profile:Data) {
    let text = `
*Marriage Profile Bio*

*${profile["Unique_Number"]}*
*Gender:* ${profile["Gender"]}
*Age:* ${profile["Age"]}
*Height:* ${profile["Height"]}
*Status:* ${profile["Status:_"]}
*Ethnicity:* ${profile["Ethnicity:_"]}
*Location:* ${profile["Location:_"]}
*Education:* ${profile["Education:"]}
*Employment:* ${profile["Employment:"]}

*Willing to Relocate?* ${profile["Willing_to_relocate:_"]}
*Family/Siblings:* ${profile["Family/_Siblings"]}

*Languages Spoken:* ${profile["Languages_spoken:_"]}
*I celebrate:* ${profile["Do_you_celebrate_any_of_the_following?"]}
*Do you wear a hijab?* ${profile["Do_you_wear_any_of_the_following?"]}

*About myself:* ${profile["About_Me:_Please_provide_a_description_of_yourself,_including_your_personal_qualities,_faith,_personality,_interests,_and_background?"]}

*Age Preferred:* ${profile["Age_range:"]}
*Preferred Ethnicity:* ${profile["Preferred_Ethnicity"]}
*Deen Expectations:* ${profile["Deen_expectations:"]}

*Education/Career Expectations:* ${profile["Education/_career_expectations:"]}

*I would accept a person who is:* ${profile["Would_you_accept_a_person_who_is:"]}

*What are you looking for in your future spouse*?${profile["Please_provide_details_about_the_qualities_and_characteristics_you_seek_in_your_potential_spouse."]}

*Any comments*:${profile["Any_further_comments"]}

*Contact:* ${profile["Who_to_contact?"]}
*Contact Name:* ${profile["Parent_or_Guardian's_Name_"]}
*Contact Number:* 0${profile["Please_provide_the_contact_details_of_a_parent_or_suitable_senior_guardian_(unless_in_exceptional_circumstances)_to_be_added_to_the_WhatsApp_group._Only_female_relative_will_be_added_to_the_group."]}`;
    navigator.clipboard.writeText(text);
    
  }