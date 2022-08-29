import { FounderRole, ArtDirectorRole, ManagementRole } from "./images";

export const members = [
    {
        id: 1,
        firstName: "Jeff",
        lastName: "Daylan",
        role: { text: "Head of Operational", bgImg: FounderRole.src },
        img: "https://i.postimg.cc/hGS5S32W/member-1.png",
        team: "Technical",
        bgColor: "#F5D6C3",
        type: 1,
        description:
            "We are passionate to build new digital products for a better future by collaborating with new clients. If you have an idea to create a new digital product for your business needs or any other questions, inquire us. Our team/specialists are always available to help you.",
        social: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/jeffdaylan",
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/jeffdaylan/",
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/jeffdaylan/",
            },
            {
                name: "Github",
                url: "",
            },
        ],
    },
    {
        id: 2,
        firstName: "Anne",
        lastName: "deBruijn",
        role: { text: "Head of Management", bgImg: ManagementRole.src },
        img: "https://i.postimg.cc/rpw2hmXr/Rectangle-184.png",
        team: "Technical",
        type: 0,
        description:
            "We're a team of UI/UX designers who are passionate about building products that are easy to use and easy to understand. We're always looking for new ideas to build new products and we're always looking for new ways to make our products better. If you have an idea to create a new digital product for your business needs or any other questions, inquire us. Our team/specialists are always available to help you.",
        social: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/anne.debruijn",
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/anne-debruijn/",
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/anne.debruijn/",
            },
            {
                name: "Github",
                url: "",
            },
        ],
    },
    {
        id: 3,
        firstName: "John",
        lastName: "Lennon",
        role: { text: "Art Director", bgImg: ArtDirectorRole.src },
        img: "https://i.postimg.cc/q7RWs5yc/Rectangle-187.png",
        team: "Operational",
        type: 1,
        description:
            "We're a team of UI/UX designers who are passionate about building products that are easy to use and easy to understand. We're always looking for new ideas to build new products and we're always looking for new ways to make our products better. If you have an idea to create a new digital product for your business needs or any other questions, inquire us. Our team/specialists are always available to help you.",
        social: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/john.hancock",
            },
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/john-hancock/",
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/john.hancock/",
            },
            {
                name: "Github",
                url: "",
            },
        ],
    },
    {
        id: 4,
        firstName: "Paula",
        lastName: "McCartney",
        role: { text: "Art Director", bgImg: ArtDirectorRole.src },
        img: "https://i.postimg.cc/d0wVJwMs/Rectangle-184.png",
        team: "Operational",
        type: 0,
        description:
            "We're a team of UI/UX designers who are passionate about building products that are easy to use and easy to understand. We're always looking for new ideas to build new products and we're always looking for new ways to make our products better. If you have an idea to create a new digital product for your business needs or any other questions, inquire us. Our team/specialists are always available to help you.",
        social: [
            {
                name: "Facebook",
                url: "https://www.facebook.com/paul.mccartney",
            },
            {
                name: "LinkedIn",

                url: "https://www.linkedin.com/in/paul-mccartney/",
            },
            {
                name: "Instagram",
                url: "https://www.instagram.com/paul.mccartney/",
            },
            {
                name: "Github",
                url: "",
            },
        ],
    },
];
