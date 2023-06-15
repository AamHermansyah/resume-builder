import { SectionValidator } from './ValidSectionRenderer';
import Image from 'next/image';

export const ProfileImage = ({
  src,
  imageWrapperClassname = '',
}: {
  src: string;
  imageWrapperClassname?: string;
}) => {
  return (
    <div className={imageWrapperClassname}>
      <SectionValidator value={src}>
        <Image alt="profile image" fill={true} src={src} className="object-cover" />
      </SectionValidator>
    </div>
  );
};
