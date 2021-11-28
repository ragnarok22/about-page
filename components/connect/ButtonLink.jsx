const ButtonLink = ({ icon, link, text }) => {
  return (
    <div className="flex bg-gray-100 text-gray-900 p-2 rounded mb-2 relative">
      <a href={link} className="w-full text-center" target="_blank" rel="noopener noreferrer">
        <div className="absolute">{icon}</div>
        {text}
      </a>
    </div>
  );
};

export default ButtonLink;
