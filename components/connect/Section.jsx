const Section = ({ title, subtitle, className, children }) => {
  return (
    <div className={`px-5 ${className || ''}`}>
      <h2 className="text-center md:text-left">{title}</h2>
      <p className="text-sm text-center md:text-left">{subtitle}</p>
      <div className="flex flex-col mt-3">
        {children}
      </div>
    </div>
  );
};

export default Section;
