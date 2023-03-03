import { Data } from "./App";

export default function copyBio(profile:Data) {
    let text = `
*Marriage Profile Bio*

*${profile["Unique_Number"]}*
*Gender:* ${profile["Gender"]}
*Age:* ${profile["Age"]}
*Height:* ${profile["Height"]}
*Status:* ${profile["Status"]}
*Ethnicity:* ${profile["Ethnicity"]}
*Location:* ${profile["Location"]}
*Education:* ${profile["Education"]}
*Employment:* ${profile["Employment"]}

*Willing to Relocate?* ${profile["Willing_to_relocate"]}
*Family/Siblings:* ${profile["Family/_Siblings"]}

*Languages Spoken:* ${profile["Languages_spoken"]}
*I celebrate:* ${profile["Do_you_celebrate_any_of_the_following?"]}
*Do you wear a hijab?* ${profile["Do_you_wear_any_of_the_following?"]}

*About myself:* ${profile["About_Me:_(personality,_family,_faith)"]}

*Age Preferred:* ${profile["Age_range"]}
*Preferred Ethnicity:* ${profile["Preferred_Ethnicity"]}
*Deen Expectations:* ${profile["Deen_expectations"]}

*Education/Career Expectations:* ${profile["Education/_career_expectations"]}

*I would accept a person who is:* ${profile["Would_you_accept_a_person_who_is"]}

*What are you looking for in your future spouse*?${profile["Please_describe_what_you_are_looking_for_in_your_future_spouse"]}

*Any comments*:${profile["Any_further_comments"]}

*Contact:* ${profile["Who_to_contact?"]}
*Contact Name:* ${profile["Parent_or_Guardian's_Name_(Optional)"]}
*Contact Number:* 0${profile["Parent_or_Guardian's_Contact_Number"]}`;
    navigator.clipboard.writeText(text);
    
  }