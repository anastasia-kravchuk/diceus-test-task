import './Avatar.scss';

interface AvatarProps {
  width?: string;
  height?: string;
  text: string;
  fontSize?: string;
  fontWeight?: string;
}

export const Avatar = ({
  width = '40px',
  height = '40px',
  fontSize = '16px',
  fontWeight,
  text,
}: AvatarProps) => {
  return (
    <div
      className="avatar"
      style={{ width, height, fontSize, fontWeight }}
    >
      {text}
    </div>
  );
};
