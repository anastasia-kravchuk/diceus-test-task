interface WinnabilityDotsProps {
  score: number;
}

export const WinnabilityDots = ({ score }: WinnabilityDotsProps) => {
  return (
    <div className="winnability-dots">
      {Array.from({ length: score }).map((_, index) => (
        <span
          key={index}
          className="winnability-dots__dot"
        />
      ))}
    </div>
  );
};
