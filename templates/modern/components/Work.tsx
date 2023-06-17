import { dateParser } from '@/helpers/utils';
import { HTMLRenderer } from '@/helpers/common/components/HTMLRenderer';
import { IWorkIntrf } from '@/stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionList } from '../atoms/SectionList';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';

export const WorkSection = ({ experiences }: { experiences: IWorkIntrf[] }) => {
  return (
    <div className="mb-3">
      <SectionHeading title="Experiences" />

      {experiences.map((item: IWorkIntrf, index: number) => {
        return (
          <div key={index} className="py-2">
            <div className="flex justify-between items-center flex-wrap">
              <SectionTitle label={item.name} />
              <p className="text-xs w-max">{item.country}</p>
            </div>
            <div className="flex justify-between items-center">
              <SectionSubtitle label={item.position} />
              <div>
                <p className="text-xs">
                  {item.startDate !== '' && dateParser(item.startDate)}
                  {item.startDate !== '' && (item.isWorkingHere || item.endDate !== '') ? ' - ' : ''}
                  {item.isWorkingHere && 'Present'}
                  {item.endDate !== '' && !item.isWorkingHere && dateParser(item.endDate)} 
                </p>
              </div>
            </div>

            <SectionList>
              <HTMLRenderer htmlString={item.summary} />
            </SectionList>
          </div>
        );
      })}
    </div>
  );
};
