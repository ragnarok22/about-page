import { RiMailSendLine } from 'react-icons/ri';
import { GrBlog } from 'react-icons/gr';

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
  }
}