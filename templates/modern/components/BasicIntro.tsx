import { BsGlobe } from 'react-icons/bs';
import { ProfileContact } from '../atoms/ProfileContact';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import { ProfileName } from '../atoms/ProfileName';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { DateOfBirth } from '../atoms/DateOfBirth';

export const BasicIntro = ({
  name,
  label,
  url,
  email,
  phone,
  country,
  image,
  dob
}: {
  name: string;
  label: string;
  url: string;
  email: string;
  phone: string;
  country: string;
  image: string;
  dob: string;
}) => {
  return (
    <div className="flex justify-between items-center p-2">
      <div>
        <ProfileName name={name} />
        <DateOfBirth dob={dob} />
        <SectionSubtitle label={label} />
        <div className="flex flex-wrap gap-x-3">
          <ProfileContact text={phone} />
          <ProfileContact text={email} />
          <ProfileContact text={country} />
          {url && (
            <div className="flex gap-2 ml-2 items-center">
              <BsGlobe />
              <ProfileContact text={url} />
            </div>
          )}
        </div>
      </div>
      <ProfileImage 
        src={image} 
        imageWrapperClassname="relative w-[100px] aspect-square rounded-full overflow-hidden border border-gray-800" 
      />
    </div>
  );
};
