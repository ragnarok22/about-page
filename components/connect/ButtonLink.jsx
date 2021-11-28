const ButtonLink = ({ icon, link, text }) => {
  return (
    <div className="flex bg-gray-100 text-gray-900 p-2 rounded mb-2">
      <a href={link} className="" target="_blank" rel="noopener noreferrer">
        {icon} {text}
      </a>
    </div>
  );
};

export default ButtonLink;
