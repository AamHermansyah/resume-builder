import { IconProfiles, iconProfiles } from '@/constants/builder';
import { IBasics } from '@/stores/index.interface';
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';

export default function BasicIntro({ basics }: { basics: IBasics }) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-700 font-medium">{basics.label}</span>
        <div className="flex flex-col justify-end gap-2">
          <div className="flex gap-2 items-center">
            <MdLocalPhone fontSize={12} />
            <a className="text-xs" href={`tel:${basics.phone}`}>
              {basics.phone}
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <MdEmail fontSize={12} />
            <a className="text-xs" href={`mailto:${basics.email}`}>
              {basics.email}
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <MdLocationOn fontSize={12} />
            <span className="text-xs">{basics.location.country}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {basics.profiles.map((profile) => (
          <div className={`${profile.network === 'portfolio' ? 'col-span-2' : ''} mb-1 flex gap-2 items-center`}>
            {profile.value && (
              <div className="w-max p-1 text-white rounded bg-gray-800">
                {iconProfiles[profile.network as keyof IconProfiles]}
              </div>
            )}
            <span className="text-xs">
              {profile.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
