import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { ProfileImage } from '@/helpers/common/components/ProfileImage';
import styles from './about.module.css';

export default function AboutMe({
  summary,
  profileImage,
}: {
  summary: string;
  profileImage: string;
}) {
  return (
    <div className="text-[1em]">
      {profileImage.length !== 0 && (
        <ProfileImage
          src={profileImage}
          imageWrapperClassname={`relative w-[80px] aspect-square float-left mr-3 mb-1 ${styles.imageWrapShape}`}
        />
      )}
      <HTMLRenderer htmlString={summary} />
    </div>
  );
}
