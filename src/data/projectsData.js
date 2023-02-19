import one from '../assets/svg/projects/one.png'
import two from '../assets/svg/projects/two.png'
import three from '../assets/svg/projects/three.png'
import four from '../assets/svg/projects/four.png'
import five from '../assets/svg/projects/five_2.png'
import six from '../assets/svg/projects/six.png'
import seven from '../assets/svg/projects/seven.webp'


export const projectsData = [
    {
        id: 1,
        projectName: 'PacManAI',
        projectDesc: 'Recreated the classic arcade game Pacman. Implemented the A-star search algorithm to improve the AI used by the ghosts, thereby increasing the difficulty',
        tags: ['Javascript'],
        code: 'https://github.com/gopuman/Pac-Man',
        demo: 'https://github.com/gopuman/Pac-Man',
        image: one
    },
    {
        id: 2,
        projectName: 'Filesystem using FUSE',
        projectDesc: 'Developed a feature-rich filesystem using a tree-based topology',
        tags: ['C', 'FUSE'],
        code: '',
        demo: '',
        image: two
    },
    {
        id: 3,
        projectName: 'Advanced Computer Networks Design',
        projectDesc: 'Given a real-world business scenario, built a working network model for a company, simulated network traffic, and created a firewall',
        tags: ['Python', 'Cisco Packet Tracer'],
        code: 'https://github.com/gopuman/ACN-solutions',
        demo: 'https://github.com/gopuman/ACN-solutions',
        image: three
    },
    {
        id: 4,
        projectName: 'Social Network Analytics',
        projectDesc: 'Analysed degree and betweenness centrality, clustering coefficient, and other parameters of a social graph containing comic book characters to form in-depth insights',
        tags: ['Python', 'Networkx', 'Cytoscape'],
        code: 'https://github.com/gopuman/MarvelSNA',
        demo: 'https://github.com/gopuman/MarvelSNA',
        image: four
    },
    {
        id: 5,
        projectName: 'Multi-Modal Genre Classification of Movies',
        projectDesc: 'Using multiple machine learning and deep learning algorithms, conducted a deep dive investigation on the most accurate ways for identifying the genre/genres to which a film belongs',
        tags: ['Python'],
        code: 'https://github.com/gopuman/MultiModalGenreClassification',
        demo: 'https://ieeexplore.ieee.org/abstract/document/9298385?casa_token=9EOaEOavJcYAAAAA:4uZFsMP3cnyEnsQCN1qPFn176bA9s5tuj7dv8xBf2XtD4oFqcwXKmFowwyNmNy-iDW006t76',
        image: five
    },
    {
        id: 6,
        projectName: 'Weapon Detection',
        projectDesc: 'rchitected a novel convolutional neural network that performs weapon detection and generates alerts based on high-risk situations.',
        tags: ['Python'],
        code: 'https://github.com/MangoShip/ECS271Final',
        demo: 'https://github.com/MangoShip/ECS271Final',
        image: six
    },
    {
        id: 7,
        projectName: 'SHRUG',
        projectDesc: 'A simple Python library that lets users anonymize source and destination IP addresses in packet traces with support for 6 well-established algorithms',
        tags: ['Python'],
        code: 'https://github.com/gopuman/SHRUG',
        demo: 'https://github.com/gopuman/SHRUG',
        image: seven
    },
    // {
    //     id: 8,
    //     projectName: 'Car Pooling System',
    //     projectDesc: 'The carpooling system merges multiple people in a car which leads to meet new people, reduces pollution',
    //     tags: ['Flutter', 'React'],
    //     code: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     demo: 'https://github.com/hhhrrrttt222111/developer-portfolio',
    //     image: eight
    // },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/