function Avatar({ src, alt, name, size = 'medium' }) {
  const sizeClasses = {
    small: "w-8 h-8 text-sm",
    medium: "w-12 h-12 text-base",
    large: "w-16 h-16 text-xl"
  };

  const initials = name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : '?';

  return src ? (
    <img
      src={src}
      alt={alt || name}
      className={`${sizeClasses[size]} rounded-full object-cover`}
    />
  ) : (
    <div className={`${sizeClasses[size]} rounded-full bg-blue-500 text-white flex items-center justify-center font-bold`}>
      {initials}
    </div>
  );
}

export default Avatar;