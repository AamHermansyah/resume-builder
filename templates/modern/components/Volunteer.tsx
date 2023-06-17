import { IVolunteer } from '@/stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';
import { dateParser } from '@/helpers/utils';
import { SectionList } from '../atoms/SectionList';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';

export const VolunteerSection = ({ projects }: { projects: IVolunteer[] }) => {
  return (
    <div className="mb-3">
      <SectionHeading title="Projects" />

      {projects.map((item: IVolunteer, index: number) => {
        return (
          <div key={index} className="py-2">
            <div>
              <SectionTitle label={`${item.organization}`} />
              <div className="flex justify-between items-center">
                <SectionSubtitle label={item.position} />
                <div className="flex gap-3">
                  <p className="text-xs">
                    {item.startDate !== '' && dateParser(item.startDate)}
                    {item.startDate !== '' && (item.isVolunteeringNow || item.endDate !== '') ? ' - ' : ''}
                    {item.isVolunteeringNow && 'Present'}
                    {item.endDate !== '' && !item.isVolunteeringNow && dateParser(item.endDate)}
                  </p>
                </div>
              </div>
              <SectionList>
                <HTMLRenderer htmlString={item.summary} />
              </SectionList>
            </div>
          </div>
        );
      })}
    </div>
  );
};
