import { RiMailSendLine } from 'react-icons/ri';
import { GrBlog } from 'react-icons/gr';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from 'react-icons/fi';

export const content = [
  {
    text: "Mi blog personal",
    icon: "blog",
    link: "https://blog.ragnarok22.dev",
  },
  {
    text: "Mi boletín",
    icon: "newsletter",
    link: "https://newsletter.ragnarok22.dev",
  },
];


export const getIcon = (icon) => {
  switch(icon) {
    case 'blog': return <GrBlog className="h-6 w-6" aria-hidden={true} />;
    case 'newsletter': return <RiMailSendLine className="h-6 w-6" aria-hidden={true} />;
    case 'twitter': return <FiTwitter className="h-6 w-6" aria-hidden={true} />;
    case 'instagram': return <FiInstagram className="h-6 w-6" aria-hidden={true} />;
    case 'github': return <FiGithub className="h-6 w-6" aria-hidden={true} />;
    case 'linkedin': return <FiLinkedin className="h-6 w-6" aria-hidden={true} />;
    case 'youtube': return <FiYoutube className="h-6 w-6" aria-hidden={true} />;
  }
}