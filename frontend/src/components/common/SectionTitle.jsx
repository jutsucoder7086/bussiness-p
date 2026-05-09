export const SectionTitle = ({ label, title, description, centered = false }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
      {label && (
        <span 
          className="text-xs tracking-[0.2em] uppercase font-bold text-[#52525B] mb-4 block"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          {label}
        </span>
      )}
      <h2 
        className="text-4xl sm:text-5xl tracking-tight font-bold text-[#0A0A0A] mb-6"
        style={{ fontFamily: 'Outfit, sans-serif' }}
      >
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-[#52525B]">
          {description}
        </p>
      )}
    </div>
  );
};