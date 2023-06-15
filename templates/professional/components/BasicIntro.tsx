import { IBasics } from '@/stores/index.interface';
import styled from '@emotion/styled';
import Image from 'next/image';

export default function BasicIntro({ basics }: { basics: IBasics }) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-700">{basics.label}</span>
        <span className="text-xs">
          Relevant experience:&nbsp;
          <strong>{basics.relExp}</strong>
        </span>
        <span className="text-xs">Total experience:&nbsp;{basics.totalExp}</span>
      </div>

      <div className="flex flex-col justify-end gap-2">
        <div className="flex gap-2">
          <Image src={'/icons/phone.svg'} alt="Phone" width={12} height={12} />
          {/* <span className="text-sm">{basics.phone}</span> */}
          <a className="text-xs" href={`tel:${basics.phone}`}>
            {basics.phone}
          </a>
        </div>
        <div className="flex gap-2">
          <Image src={'/icons/mail.svg'} alt="Email" width={12} height={12} />
          <a className="text-xs" href={`mailto:${basics.email}`}>
            {basics.email}
          </a>
        </div>
        <div className="flex gap-2">
          <Image src={'/icons/location.svg'} alt="Location" width={12} height={12} />
          <span className="text-xs">{basics.location.country}</span>
        </div>
      </div>
    </div>
  );
}
