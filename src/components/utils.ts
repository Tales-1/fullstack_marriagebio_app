import { Data } from "../App";

export default function copyBio(profile:Data) {
    let text = `
*Marriage Profile Bio*

*${profile["Unique Number"]}*
*Gender:* ${profile["Gender"]}
*Age:* ${profile["Age"]}
*Height:* ${profile["Height"]}
*Status:* ${profile["Status: "]}
*Ethnicity:* ${profile["Ethnicity: "]}
*Nationality:* ${profile["Nationality"]}
*Location:* ${profile["Location: "]}
*Education:* ${profile["Education:"]}
*Employment:* ${profile["Employment:"]}

*Willing to Relocate?* ${profile["Willing to relocate: "]}
*Family/ Siblings:* ${profile["Family/ Siblings"]}

*Languages Spoken:* ${profile["Languages spoken: "]}
*Do you celebrate (Milad, Khatam, Bursi)?:* ${profile["Do you celebrate any of the following: Milad, Khatam, Bursi."]}
*Do you have a beard?* ${profile["Do you have a beard? (Male)"]}
*Do you wear a hijab?* ${profile["Do you wear any of the following?"]}

*About myself:* ${profile["About Me: Please provide a description of yourself, including your personal qualities, faith, personality, interests, and background?"]}

*Age Preferred:* ${profile["Age range:"]}
*Preferred Ethnicity:* ${profile["Preferred Ethnicity"]}
*Deen Expectations:* ${profile["Deen expectations:"]}

*Education/Career Expectations:* ${profile["Education/ career expectations:"]}

*I would accept a person who is (Divorced, widowed, has children, a revert):* ${profile["I would accept a person who is: Divorced, widowed, has children, a revert."]}

*What are you looking for in your future spouse*? ${profile["Please provide details about the qualities and characteristics you seek in your potential spouse."]}

*Any comments*:${profile["Any further comments"]}

*Contact:* ${profile["Who to contact?"]}
*Contact Name:* ${profile["Parent or Guardian's Name "]}
*Contact Number:* 0${profile["Please provide the contact details of a parent or suitable senior guardian (unless in exceptional circumstances) to be added to the WhatsApp group. Only female relatives will be added to the group."]}`;
    navigator.clipboard.writeText(text);
  }