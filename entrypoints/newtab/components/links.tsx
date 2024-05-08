import { ReactNode } from "react";
import {
  MailIcon,
  GithubIcon,
  TreezIcon,
  YoutubeIcon,
  RedditIcon,
  TwitchIcon,
} from "./icons";

type Link = {
  name: string;
  icon: ReactNode;
  url: string;
};

const LINKS: Link[] = [
  {
    name: "Mail",
    icon: <MailIcon />,
    url: "https://mail.google.com/mail/u/1",
  },
  {
    name: "Github",
    icon: <GithubIcon />,
    url: "https://github.com",
  },
  {
    name: "Treez",
    icon: <TreezIcon />,
    url: "https://triplec.treez.io",
  },
  {
    name: "Youtube",
    icon: <YoutubeIcon />,
    url: "https://youtube.com",
  },
  {
    name: "Reddit",
    icon: <RedditIcon />,
    url: "https://reddit.com",
  },
  {
    name: "Twitch",
    icon: <TwitchIcon />,
    url: "https://twitch.tv",
  },
];

export const Links = () => {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {LINKS.map((link) => (
        <li>
          <a
            className="flex gap-2 p-2 text-2xl items-center hover:bg-white/5 rounded-lg hover:underline transition-all ease-out"
            href={link.url}
          >
            {link.icon}
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
