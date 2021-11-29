import { getIcon } from '../../data/content'

const ButtonLink = ({ icon, link, text }) => {
  return (
    <div className="flex bg-gray-100 hover:bg-gray-400 text-gray-700 hover:text-gray-900 rounded mb-2 relative transition">
      <a href={link} className="w-full text-center p-2" target="_blank" rel="noopener noreferrer">
        <div className="absolute">{getIcon(icon)}</div>
        {text}
      </a>
    </div>
  );
};

export default ButtonLink;
