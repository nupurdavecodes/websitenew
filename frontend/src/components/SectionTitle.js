const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true, 
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className="inline-block text-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;