export const HYDRATE_TILES = 'redux/idea/HYDRATE_TILES';
export const VOTE_UP = 'redux/idea/VOTE_UP';
export const VOTE_DOWN = 'redux/idea/VOTE_DOWN';

const defaultState = {
  ideas: []
};

export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case HYDRATE_TILES:
      return {
        ideas: water
    }
    case VOTE_UP:
      return {
        ...state,
      }
    case VOTE_DOWN:
      return {
        ...state,
      }
    default:
      return state;
  }
}

export function hydrateTiles() {
  return {
    type: HYDRATE_TILES
  }
}

export function voteUp(id) {
  return {
    type: VOTE_UP,
    id
  }
}

export function voteDown(id) {
  return {
    type: VOTE_DOWN,
    id
  }
}


const water = [
  {
    id: 2,
    title: 'interesting title!',
    desc:
      'Develop a repo structure and format that makes it easy to read and edit text content, but also readily converts to JSON for consumption by myGA.',
    author: 'matt.brendzel@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 3,
    title: 'interesting title!',
    desc:
      'In line with our "Radical Reskilling" push, it would be helpful to have a web app calculator on our site (or a microsite) where people could calculate the ROI of training by inputting current salary of a given employee (Y), desired role they want that person to move into (X), and the calculator could use industry data (cost of hiring X, average salary of X) to show how much the company would save by retraining Y instead)\n\nWe could use this calculator for lead generation (enter your email for a full report), and in sales conversations.',
    author: 'anand@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 4,
    title: 'interesting title!',
    desc: 'One search engine for Github, Confluence, JIRA, Google Docs, etc.',
    author: 'nick@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 5,
    title: 'interesting title!',
    desc:
      'For Remote PT classes, we use Slack and Zoom. While extremely effective, they are not elegant in the way we are able to set them up. For students with one monitor in PT classes, an easy way to be able to view Zoom and Slack at the same time on the same screen while being able to toggle out Slack with an IDE, browser, Excel, etc. as needed would help with student experience. Right now students have to cascade their windows behind Slack and manually set up where Zoom and Slack go on their screens. A shell of some sort that would help the apps fit where they need to go would be an amazing way to make these two apps feel like a holistic experience.',
    author: 'adi@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 6,
    title: 'interesting title!',
    desc:
      'An Ideas board where everyone across the entire company could post ideas and they could be upvoted and discussed, allowing us to do a constant "hackathon ideas" kind of process all the time',
    author: 'timc@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 7,
    title: 'interesting title!',
    desc:
      'Set up a "Help Needed" ticket label in Jira and create a tool for discovery/exploration.',
    author: 'anna.rankin@generalassemb.ly',
    type: 'Proposal',
    votes: 0,
    progress: {
      members: ['Anna'],
      status: 0
    }
  },
  {
    id: 8,
    title: 'interesting title!',
    desc: 'Student progress chatbot, virtual learning environment (VR), prototyping tool for accessibility, a career prep/strategy/planning development tool, mentoring platform, ',
    author: 'zach.thomas@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 9,
    title: 'interesting title!',
    desc:
      'Instructor Dashboard that is all inclusive of training materials, student progress tracking, lectures, etc.',
    author: 'taylor.ferrari@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['taylor ferrari', 'sofie khan', 'enrique', 'george gray', 'jason hu'],
      status: 0
    }
  },
  {
    id: 10,
    title: 'interesting title!',
    desc:
      'I would love if the Outcomes Tracker could automatically pull our e-mail communications with students. We currently have to copy and paste our communications. ',
    author: 'andrew.kumar@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 11,
    title: 'interesting title!',
    desc:
      'We are using Front App to manage emails and pull customer satisfaction metrics for local Student Experience teams. Front has the ability to connect with internal systems; we would like someone to build an API that connects Front to Core so that we can have student information and communication tools available in one space. This would drastically reduce the amount of back and forth and searching local teams need to do and would streamline the process of responding to and managing student needs. ',
    author: 'samantha.barrow@generalassemb.ly',
    type: 'Proposal',
    votes: 0,
    progress: {
      members: ['Chuck Hardy', 'David Workman', 'Jon Rojas', 'Antony Donovan', 'Kyle Eberle'],
      status: 0
    }
  },
  {
    id: 12,
    title: 'interesting title!',
    desc:
      'Map a learning path(concepts, skills, assessment scores, etc) against Burning Glass to net out a matrix of job & salary opportunity in "real-ish" time that matches the new skills an individual has acquired from GA.',
    author: 'bryan.berger@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 13,
    title: 'interesting title!',
    desc:
      '1. Create a companion/instructor bot that accompanies you throughout the GA experience.\n\n2. Construct a dynamic GA platform that personalizes the experience the more a user interacts with it.\n\n3. Design a mobile-first GA website for tablet and/or phone that enhances the experience via device-specific functionality.\n\n4. How can GA utilize technology like augmented reality to improve the virtual classroom experience and make it more interactive?',
    author: 'kyle.eberle@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 14,
    title: 'interesting title!',
    desc:
      'Ant Design Reverse-Design/Engineering Exercise: Soon we are gonna have all these easily implementable Ant Design components at our disposal. Explore how we might employ them to improve our existing product experiences. ',
    author: 'jason@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 15,
    title: 'interesting title!',
    desc: 'Staff Learning Paths',
    author: 'jon.rojas@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 16,
    title: 'interesting title!',
    desc: 'Code pieces',
    author: 'tim@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 17,
    title: 'interesting title!',
    desc: 'Hackathon participation tracker',
    author: 'matthew.fritz@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 18,
    title: 'interesting title!',
    desc: 'Help the unemployed understand how GA could help',
    author: 'chuck@ga.co',
    type: 'Proposal',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 19,
    title: 'interesting title!',
    desc:
      "Automatically set Slack DND when in a meeting. Check users Google Calendar and during meetings mark them as DND. https://github.com/matiassingers/awesome-slack#javascript",
    author: 'chuck@ga.co',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 20,
    title: 'interesting title!',
    desc:
      'MacOS App that allows you to mute all notifications (including Browers) with a single toggle and backed on your Calendar',
    author: 'chuck@ga.co',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 21,
    title: 'interesting title!',
    desc:
      'Speech to Glossary - An Instructor is teaching a class. As they speak Students are automatically, with a minor delay be presented with the explanations and resources for specific terms that were mentioned. For example. DevOps is a field some of you might wish to look into. With platforms like AWS, Heroku and Google Cloud and tools suck as DC/OS it is an exciting time. The “Speech to Glossary” will explain what each turn in bold means and provided additional resource in real time to allow Students to remained focused on what is being said which have as much context and understanding. Would include the creation or integration into a Glossary for Students. Spike https://github.com/ChuckJHardy/SpeechToGlossary/tree/spike-one',
    author: 'chuck@ga.co',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 22,
    desc:
      'Build an "office hours" app to faciliate mentorship inside of GA between employees. Allow people to volunteer their time, list the things they\'re likely to be helpful with, and allow people to view the list and schedule appointments',
    author: 'timc@ga.co',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['tim cheadle'],
      status: 0
    }
  },
  {
    id: 23,
    desc:
      'Learning path timeline creator. Drag and drop units/modules into any arrangement (admin tool)',
    author: 'bryan.berger@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 24,
    desc:
      '"The Enterprise Deal Maker" a self-sufficient iPad mobile experience for selling enterprise deals. To enable Enterprise sales to create a high-level learning path based on the goals of the company (in-person, at the time of discussion right on an iPad, similar to the Bonobos experience)',
    author: 'bryan.berger@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['Bryan Berger'],
      status: 0
    }
  },
  {
    id: 25,
    desc: 'myGA Demo Accounts v2.0',
    author: 'bryan@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['Bryan Horvath'],
      status: 0
    }
  },
  {
    id: 26,
    desc:
      "Buddy Matching - When GA students start the pre-course work for an Immersive or an online course, they often don't have anyone to reach out to ask questions or to help them stay accountable. Let's start them off on the right foot by matching them to someone else in their cohort/instance. It can be an opt-in system that matches students and provides contact info for their match.",
    author: 'terry.vanduyn@generalassemb.ly',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['Terry VanDuyn', 'Anna Rankin'],
      status: 0
    }
  },
  {
    id: 27,
    desc:
      'Use machine learning to identify how accurate is the website design part of the DM1 Credentials product. The idea is to use TensorFlow (https://www.tensorflow.org/) to create an algorithm we can use to rate how correct an exercise answer is.',
    author: 'enrique@ga.co',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 28,
    desc:
      'forums/stack overflow type FAQ/community while in an LMS learning path',
    author: 'wilson',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 29,
    desc: 'tracking student referrals in core',
    author: 'wilson',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 30,
    desc: '',
    author: '',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 31,
    desc:
      'Instructor & Student dashboard with class and student info. Focus: Student health metrics',
    author: 'Phillipe Luchansky & Zach Thomas',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['Susi Remondi', 'Philippe Luchansky', 'Zach Thomas', 'David Workman', 'Michael Finneran'],
      status: 0
    }
  },
  {
    id: 32,
    desc: 'Assessment predictions with machine learning',
    author: 'James Willock',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['James Willock', 'David Klein'],
      status: 0
    }
  },
  {
    id: 33,
    desc: 'Automated Credential Question Quality Check',
    author: 'Jonathan Kaczynski',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['David Klein'],
      status: 0
    }
  },
  {
    id: 34,
    desc: 'Learn skills and see what jobs you can apply for',
    author: 'nick ward?',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['Nick Ward', 'Jeff Yustman', 'Shiren', 'Kyle'],
      status: 0
    }
  },
  {
    id: 35,
    desc: 'Lesson Feedback',
    author: 'wilson',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['Abigail', 'Wilson', 'Graham'],
      status: 0
    }
  },
  {
    id: 36,
    desc: '',
    author: '',
    type: 'Build',
    votes: 0,
    progress: {
      members: [],
      status: 0
    }
  },
  {
    id: 37,
    desc: 'Discovery Ideas',
    author: 'wilson',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['Taylor' ,'Kevin' ,'Wilson'],
      status: 0
    }
  },
  {
    id: 38,
    desc: 'Offline Study Guides',
    author: '',
    type: 'Build',
    votes: 0,
    progress: {
      members: ['Tim'],
      status: 0
    }
  }
];
