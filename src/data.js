import DanielAvatar from "./instructions/images/image-daniel.jpg";
import WalterAvatar from "./instructions/images/image-jonathan.jpg";
import KiraAvatar from "./instructions/images/image-kira.jpg";
import PatrickAvatar from "./instructions/images/image-patrick.jpg";
import JeanAvatar from "./instructions/images/image-jeanette.jpg";

const data = [
  {
    srcUrl: DanielAvatar,
    alt: " Daniel-Clifford-avatar",
    userName: " Daniel Clifford",
    user_title: " Verified Graduate",
    card_bold_text: ` I received a job offer mid-course, and the subjects I learned were current, if not more so, 
  in the company I joined. I honestly feel I got every penny’s worth.`,
    card_small_text: ` “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
  transition and have heard some people who had an amazing experience here. I signed up 
  for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
  The next 12 weeks was the best - and most grueling - time of my life. Since completing 
  the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”`,
    bg_class: "card-bg-purple",
  },
  {
    srcUrl: WalterAvatar,
    alt: " Jonathan-Walters-avatar",
    userName: " Jonathan Walters",
    user_title: " Verified Graduate",
    card_bold_text: `The team was very supportive and kept me motivated`,
    card_small_text: ` 
  “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
  for a big company. This was one of the best investments I’ve made in myself. ”`,
    bg_class: "card-bg-light-grey",
  },
  {
    srcUrl: JeanAvatar,
    alt: " Jeanette-Harmon-avatar",
    userName: "Jeanette Harmon",
    user_title: " Verified Graduate",
    card_bold_text: `An overall wonderful and rewarding experience`,
    card_small_text: `  “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
  while doing something I love. ” `,
    bg_class: "card-bg-white",
  },
  {
    srcUrl: PatrickAvatar,
    alt: "Patrick-Abrams-avatar",
    userName: "Patrick Abrams",
    user_title: " Verified Graduate",
    card_bold_text: ` Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
  learning from their experiences was easy.`,
    card_small_text: ` “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
  gave me the confidence necessary to be able to go out in the world and present myself as a capable 
  junior developer. The standard is above the rest. You will get the personal attention you need from 
  an incredible community of smart and amazing people. ”
 `,
    bg_class: "card-bg-dark-blue",
  },
  {
    srcUrl: KiraAvatar,
    alt: " Kira-Whittle-avatar",
    userName: "  Kira Whittle",
    user_title: " Verified Graduate",
    card_bold_text: ` Such a life-changing experience. Highly recommended!`,
    card_small_text: `“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend! ” `,
    bg_class: "card-bg-wnite card-kira",
  },
];

export default data;
