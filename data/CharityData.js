// Event images
import sixKForWater from 'public/img/charity/6k-for-water.jpg';
import bloodDrive from 'public/img/charity/blood-drive.jpg';
import caseComp from 'public/img/charity/case-comp.jpg';
import greatestShave from 'public/img/charity/greatest-shave.jpg';
import hscWorkshop from 'public/img/charity/hsc-workshops.jpg';
import pokerNight from 'public/img/charity/poker.jpg';
import caseComp2021 from 'public/img/charity/case-comp2021.png';
import funRun from 'public/img/charity/funRun.jpg';

// Sponsor charity images
import ILF from "public/img/charity/logos/ilf.png";
import Leukaemia from "public/img/charity/logos/leukaemia_foundation.png";
import Dignity from "public/img/charity/logos/share_the_dignity.png";
import Starlight from "public/img/charity/logos/starlight.png";
import Variety from "public/img/charity/logos/variety.png";
import WorldVision from "public/img/charity/logos/world_vision.png";

// Upcoming event images
import FHF from "public/img/charity/upcoming/40_hour_famine.png";
import WGS from "public/img/charity/upcoming/worlds_greatest_shave.png";

const START = 2019;
const END = 2021;

const EVENTS = [
  [
    {
      "title": "Poker Night",
      "image": pokerNight,
      "description": `You've proven you can dress the part, but can you play the part? To demonstrate that, you'll have to bring your poker face down to the Round(full)house for the Co-op Soc Charity Poker Night!
          Stakes are high and bets will be dicey. Odds might just be stacked in your favour.
          Prizes include the chance to win some cold hard cash 💸💸🤑Winners have the opportunity to donate half of the profits to a charity of their choice, and help benefit those for whom the chips are down.
          (Some of the charities include: Goods for Girls, Beyond Blue, Movember and many more!)`,
      "link": "https://www.facebook.com/events/1190826104438705/",
    },
    {
      "title": "Blood Drive",
      "image": bloodDrive,
      "description": `Want to B somebody's type? 😉
          Together with the Australian Red Cross Blood Service, you can!
          On Monday 1st July – Saturday 6th July at the Town Hall Donor Centre, 483 George St, Sydney, donation appointments are available from 7:30am – 7:00pm.
          It only takes an hour, but your blood donation could save the lives of three people.`,
      "link": "https://www.facebook.com/events/870944186595660/",
    },
    {
      "title": "6K for Water",
      "image": sixKForWater,
      "description": `Next Sunday, Co-op Soc will be going to the Global 6K for Water event!
          6 kilometres is the average distance people in developing countries walk to access water.
          That's why, people around the world will walk or run that distance as part of Global 6K for Water - raising funds to help bring life-changing clean water to children and communities in need.`,
      "link": "https://www.facebook.com/events/440597310021840/",
    },
    {
      "title": "HSC Workshop",
      "image": hscWorkshop,
      "description": `An HSC Workshop run by Co-ops to help highschoolers in the stressful pre-HSC time.`,
      "link": "https://www.facebook.com/events/2137899859788914/",
    },
  ],
  [
    {
      "title": "Case Competition",
      "image": caseComp,
      "description": `Co Op Soc's very first Charity Case Comp is here! This is your chance to show off your case cracking skills and creativity!
          This isn't your average case comp - we've partnered with Share The Dignity, a charity organisation focused on providing sanitary products to homeless women, fighting for domestic violence and supporting all women in Australia. They need YOUR help with a REAL project!`,
      "link": "https://www.facebook.com/events/1464813253706083/",
    },
    {
      "title": "Greatest Shave",
      "image": greatestShave,
      "description": `41 aussies are diagnosed with 🅱️lood cancer every day - by donating money for World's Greatest Shave, you'll be part of a community on a mission to shave the world from 🅱️lood cancer!!
          Any donation amount is appreciated, whether it be $5, $50, or your whole fortnightly payment. Let's help accelerate 🅱️lood cancer research to reach the Leukaemia Foundation's bold new goal: zero lives lost to blood cancer by 2035. ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ༼ つ ◕_◕ ༽つ`,
      "link": "https://www.facebook.com/events/311139309863383/",
    },
  ],
  [
    {
      // Special items specifically for the case comp
      "special": "casecomp",
      // Regular
      "title": "Case Comp 2021",
      "image": caseComp2021,
      "description": `Get ready to put your thinking caps on 🧢 and problem-solve for a good cause💡, because Co-op Soc is excited to present our 2021 Charity Case Competition!! 🙌
          This isn't your average case competition - we've partnered with The Indigenous Literacy Foundation, a national book industry charity committed to lifting literacy levels in remote Indigenous communities for children across Australia. They need YOUR help to solve a REAL issue!📚✏️
          This competition is open for all years and streams, and is suitable for all levels of case competition experience! Note that non Co-op students can register in a team, but each group must have a minimum of 1 Co-op student.
          Choose to register in a team of 3-4 people or enter as an individual and we'll place you in a team. 👥
          This is your chance to use your skill set to give back to the community. Don't miss this opportunity to help make a meaningful impact! 🙋‍♀️✅⚖️`,
      "link": "https://www.facebook.com/events/343320683808154/",
    },
    {
      "title": "Fun Run",
      "image": funRun,
      "description": `🏃GET ACTIVE FOR A GOOD CAUSE 🏃
          Slip on your running shoes👟, grab all your mates👫 and get running!! 🏃‍♀️
          This April 11th, Co-op Soc is hosting our very first Fun Run! Join us for a fun-filled, feel-good day as we run (or walk) 10km to fundraise for Variety - the Children's Charity! ❤️ We will be starting at The Spit and then passing through some of the most beautiful tracks that Sydney has to offer. 🌄 End at Manly Beach for refreshing snacks & drinks to reward yourself!! 🍩 Get keen and sign-up using the form below by the 28th of March.`,
      "link": "https://www.facebook.com/events/286927249456511/",
    },
  ],
];

const SPONSORS = [
  {
    "name": "Indigenous Literacy Foundation",
    "image": ILF,
    "link": "https://www.indigenousliteracyfoundation.org.au/"
  },
  {
    "name": "Leukaemia Foundation",
    "image": Leukaemia,
    "link": "https://www.leukaemia.org.au/"
  },
  {
    "name": "Share the Dignity",
    "image": Dignity,
    "link": "https://www.sharethedignity.org.au/"
  },
  {
    "name": "Starlight Children's Foundation",
    "image": Starlight,
    "link": "https://www.starlight.org.au/"
  },
  {
    "name": "Variety",
    "image": Variety,
    "link": "https://www.variety.org.au/home/"
  },
  {
    "name": "World Vision",
    "image": WorldVision,
    "link": "https://www.worldvision.com.au/"
  },
];

const UPCOMING = [
  {
    "name": "40 Hour Famine",
    "image": FHF,
    "date": "17th June 2021",
  },
  {
    "name": "World's Greatest Shave",
    "image": WGS,
    "date": "15th Oct 2021",
  },
];

export {
  START, END, EVENTS, SPONSORS, UPCOMING
};
