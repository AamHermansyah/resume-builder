import { IProfiles } from '@/stores/basic.interface';
import React from 'react';
import { socialIcons } from '@/helpers/icons';
import styled from '@emotion/styled';

const SectionHolder = styled.div`
  border-radius: 5px;
  padding: 15px 10px 10px 10px;
  position: relative;

  .header {
    position: absolute;
    top: 0;
    transform: translate(0, -50%);
    background: white;
    padding: 0 5px;
    font-weight: bold;
  }

  .social-icons {
    position: absolute;
    top: 0;
    right: 10px;
    transform: translate(0, -50%);
    color: green;
  }
`;

function SocialIcons({ profiles }: { profiles: IProfiles[] }) {
  return (
    <div className="social-icons flex">
      {profiles.map((profile) => {
        const Icon = socialIcons.get(profile.network);

        return (
          Icon &&
          profile.value && (
            <span
              className="inline-block ml-2"
              key={profile.network}
            >
              <Icon className="h-5 w-5 bg-white" />
            </span>
          )
        );
      })}
    </div>
  );
}

export function Section({
  title,
  children,
  titleClassname,
}: {
  title: string;
  children: React.ReactNode;
  titleClassname?: string;
}) {
  return (
    <SectionHolder className="border border-dashed border-gray-300">
      <div className="header flex justify-center items-center gap-1 max-w-[60%]" title={title}>
        <span
          className={`${
            titleClassname ? titleClassname : ''
          } text-sky-500 whitespace-nowrap overflow-hidden overflow-ellipsis`}
        >
          {title}
        </span>
      </div>

      {children}
    </SectionHolder>
  );
}
