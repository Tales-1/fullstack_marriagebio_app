import { Data } from "../App";

export default function copyBio(profile:Data) {
    let text = `
*Marriage Profile Bio*

*${profile[1]}*
*Gender:* ${profile[3]}
*Age:* ${profile[4]}
*Height:* ${profile[5]}
*Status:* ${profile[6]}
*Ethnicity:* ${profile[7]}
*Nationality:* ${profile[34]}
*Location:* ${profile[8]}
*Education:* ${profile[9]}
*Employment:* ${profile[10]}

*Willing to Relocate?* ${profile[11]}
*Family/Siblings:* ${profile[12]}

*Languages Spoken:* ${profile[13]}
*Do you celebrate (Milad, Khatam, Bursi)?:* ${profile[14]}
*Do you have a beard?* ${profile[29]}
*Do you wear a hijab?* ${profile[15]}

*About myself:* ${profile[16]}

*Age Preferred:* ${profile[17]}
*Preferred Ethnicity:* ${profile[18]}
*Deen Expectations:* ${profile[19]}

*Education/Career Expectations:* ${profile[20]}

*I would accept a person who is (Divorced, widowed, has children, a revert):* ${profile[21]}

*What are you looking for in your future spouse*? ${profile[22]}

*Any comments*:${profile[23]}

*Contact:* ${profile[24]}
*Contact Name:* ${profile[25]}
*Contact Number:* 0${profile[26]}`;
    navigator.clipboard.writeText(text);
  }