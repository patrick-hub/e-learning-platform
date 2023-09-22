const dummyData = [
	{
		id: 1,
		teacher: "Mr John",
		date: "21/02/2023",
		status: "in progress",
		subject: "Physics",
		daysLeft: 3,
		deadline: "30/02/2023"
	},
	{
		id: 2,
		teacher: "Mr Saheed",
		date: "23/04/2023",
		status: "done",
		subject: "Mathematices",
		daysLeft: 4,
		deadline: "01/05/2023"
	},
	{
		id: 3,
		teacher: "Mr Raphael",
		status: "in progress",
		date: "25/05/2023",
		subject: "Economics",
		daysLeft: 5,
		deadline: "30/05/2023"
	},
	{
		id: 4,
		teacher: "Mr jane",
		date: "21/03/2023",
		status: "in progress",
		subject: "Computer",
		daysLeft: 4,
		deadline: "23/04/2023"
	},
	{
		id: 5,
		teacher: "Mr John",
		status: "done",
		date: "20/02/2023",
		subject: "Economics",
		daysLeft: 5,
		deadline: "31/06/2023"
	},
	{
		id: 6,
		teacher: "Mr John",
		status: "done",
		date: "21/06/2023",
		subject: "Further Mathematices",
		daysLeft: 3,
		deadline: "01/07/2023"
	},
];

const assignmentdata = [
	{
		id: 5,
		teacher: "Mr John",
		status: "done",
		lastActive: "21/20/2023",
		subject: "computer",
		updates: 3,
        img: '/src/svg/computer.svg'

	},
	{
		id: 6,
		teacher: "Mr Saheed",
		status: "in progress",
		lastActive: "21/22/2023",
		subject: "Mathematics",
        img: '/src/svg/maths.svg'

	},
	{
		id: 7,
		teacher: "Mr Raphael",
		status: "done",
		lastActive: "21/25/2023",
		subject: "Agric",
		updates: 5,
        img: '/src/svg/agric.svg'

	},
	{
		id: 8,
		teacher: "Mr Jane",
		status: "in progress",
		lastActive: "21/23/2023",
		subject: "Physics",
        img: "/src/svg/physics.svg"
	},
	{
		id: 9,
		teacher: "Mr Smith",
		status: "done",
		lastActive: "21/21/2023",
		subject: "Chemistry",
		updates: 4,
        img: "/src/svg/chemistry.svg"
	},
	{
		id: 10,
		teacher: "Mr Anderson",
		status: "in progress",
		lastActive: "21/24/2023",
		subject: "Biology",
        img: "/src/svg/biology.svg"
	},
	{
		id: 11,
		teacher: "Mr Johnson",
		status: "done",
		lastActive: "21/20/2023",
		subject: "English",
		updates: 2,
        img : "/src/svg/english.svg"
	},
	{
		id: 12,
		teacher: "Mr Williams",
		status: "done",
		lastActive: "21/22/2023",
		subject: "civic",
        img: "/src/svg/civic.svg"
	},
    {
		id: 13,
		teacher: "Mr LEE",
		status: "done",
		lastActive: "21/22/2023",
		subject: "Further Mathematics",
		updates: 4,
        img: "/src/svg/furthermaths.svg"
	},
    {
		id: 14,
		teacher: "Mr Williams",
		status: "done",
		lastActive: "21/22/2023",
		subject: "Economics",
	
        img: '/src/svg/economics.svg'
	},
];

const recordedClassesdata = [
	{
		id: 15,
		course: "Mathematics",
		topic: "Simultaneous Equation",
		duration: "2hrs 12mins",
		lastActivity: "21/09/2023"

	},
	{
		id: 16,
		course: "Biology",
		topic: "Reproduction",
		duration: "1hrs 19mins",
		lastActivity: "20/09/2023"

	},
	{
		id: 17,
		course: "Chemistry",
		topic: "Redux Reaction",
		duration: "2hrs 00mins",
		lastActivity: "26/09/2023"

	},
	{
		id: 18,
		course: "Economics",
		topic: "Scale of preference",
		duration: "2hrs 12mins",
		lastActivity: "21/09/2023"

	},
	{
		id: 19,
		course: "English",
		topic: "Figures of speech",
		duration: "2hrs 30mins",
		lastActivity: "21/09/2023"

	},
	{
		id: 20,
		course: "Further Mathematics",
		topic: "Differentiation",
		duration: "2hrs 10mins",
		lastActivity: "18/09/2023"

	}
]

const exploredata = [
	{
		id: "21",
		course: "Beginners Guide to Coding",
		description: "Learn about the basics of coding and how it is being applied",
		teacher: "Mr Johnson",
		img: '/src/svg/exploreImage.svg'
	},
	{
		id: "21",
		course: "Beginners Guide to Coding",
		description: "Learn about the basics of coding and how it is being applied",
		teacher: "Mr Johnson",
		img: '/src/svg/exploreImage.svg'
	},
	{
		id: "21",
		course: "Beginners Guide to Coding",
		description: "Learn about the basics of coding and how it is being applied",
		teacher: "Mr Johnson",
		img: '/src/svg/exploreImage.svg'
	},
	{
		id: "21",
		course: "Beginners Guide to Coding",
		description: "Learn about the basics of coding and how it is being applied",
		teacher: "Mr Johnson",
		img: '/src/svg/exploreImage.svg'
	},
	{
		id: "21",
		course: "Beginners Guide to Coding",
		description: "Learn about the basics of coding and how it is being applied",
		teacher: "Mr Johnson",
		img: '/src/svg/exploreImage.svg'
	},
	{
		id: "21",
		course: "Beginners Guide to Coding",
		description: "Learn about the basics of coding and how it is being applied",
		teacher: "Mr Johnson",
		img: '/src/svg/exploreImage.svg'
	},
]

const tabledata = [
	{ position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
	{ position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
	{ position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
	{ position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
	{ position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
  ];

export { dummyData, assignmentdata,recordedClassesdata, exploredata, tabledata };
