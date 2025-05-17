import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick,
  ...props 
}) => {
  const baseClasses = `btn btn-${variant} ${className}`;
  
  // If it's an internal link
  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  // If it's an external link
  if (href) {
    return (
      <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }
  
  // If it's a button
  return (
    <button className={baseClasses} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;