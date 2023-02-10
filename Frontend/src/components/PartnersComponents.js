import technopreneur from '../assets/bgphotos/TECHNOPRENEUR.jpg';
import academiauni from '../assets/bgphotos/academiauniversity.jpg';
import bluecube from '../assets/bgphotos/blueglasscube.jpg';
import bluelightkeyboard from '../assets/bgphotos/bluelightkeyboard.jpg';
import worldgradient from '../assets/bgphotos/worldgradient.jpg';
import futurecity from '../assets/bgphotos/futurecity.jpg';

export const responsive = {
    // to make the carousel responsive 
    // superLargeDesktop: {
    //     breakpoint: { max: 4000, min: 1024 },
    //     items: 5,
    //     slidesToSlide: 2,
    // },
    desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

export const partnersComponents = [
    {
        id: 1,
        imageurl:{technopreneur},
        name: "TECHNOPRENEURS",
        description: "For the innovators  - we offer resources, networking, training, and market access to scale",
    },
    {
        id: 2,
        imageurl: academiauni,
        name: "ACADEMIA AND UNIVERSITIES",
        description: "For the curious - we offer joint research opportunities, use cases, and industry connections to leverage the latest advances in research. ",
    },
    {
        id: 3,
        imageurl: bluecube,
        name: "RESEARCH INSTITUTES",
        description: "For the specialists - we offer opportunities to commercialise your technology to achieve research outcomes applied for good.",
    },
    {
        id: 4,
        imageurl: bluelightkeyboard,
        name: "INDUSTRY EXPERTS",
        description: "For the experienced - we help you drive global thought leadership and influence even further to resolve critical SDG challenges.",
    },
    {
        id: 5,
        imageurl: futurecity,
        name: "CONSCIOUS CAPITAL",
        description: "For the enablers - we facilitate global deals for scalable tech-for-good companies through our network.",
    },
    {
        id: 6,
        imageurl: worldgradient,
        name: "MULTINATIONAL CORPORATIONS",
        description: "For the well-resourced - we offer meaningful CSR engagements, ESG Corporate innovation opportunities, and potential tech acquisitions.",
    },
];
