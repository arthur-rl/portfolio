import DiscordLogo from './images/discordlogo.png';
import ApplyX from './images/applyx.jpg';
import ArcCC from './images/arc-config-compiler.jpg';
import YouClip from './images/youclip.jpg';

export interface Project {
    name: string;
    body: string;
    image: string;
    links: Link[]
}

interface Link {
    url: string;
    name: string;
}

export const PROJECT_DATA: Project[] = [
    {
        name: "ApplyX",
        body: "A work in progress open source job listing application solution. Built on Go and React.",
        image: ApplyX,
        links: [
            {
                url: "https://github.com/arthur-rl/applyx",
                name: "Source Code",
            }
        ]
    },
    {
        name: "discord-oauth2",
        body: "An NPM Package to easily interact with the Discord OAuth2 API.",
        image: DiscordLogo,
        links: [
            {
                url: "https://github.com/arthur-rl/discord-oauth2",
                name: "Source Code",
            }
        ]
    },
    {
        name: "arc-config-compiler",
        body: "A Node.js based CLI Tool to easily compile multiple .arc files into one.",
        image: ArcCC,
        links: [
            {
                url: "https://github.com/arthur-rl/arc-config-compiler",
                name: "Source Code",
            }
        ]
    },
    {
        name: "YouClip",
        body: "Video hosting service built using React, Express, Cloudflare Stream & Workers",
        image: YouClip,
        links: [
            {
                url: "https://youclip.pro",
                name: "Visit Website",
            }
        ]
    },
]