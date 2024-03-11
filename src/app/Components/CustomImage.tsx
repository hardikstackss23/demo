import NextImage from 'next/image';

const CustomImage = ({ ...props }) => {
  return <NextImage {...props} draggable={false} />;
};

export default CustomImage;