import { IEducation } from '@/stores/index.interface';
import { SectionHeading } from '../atoms/SectionHeading';
import { SectionSubtitle } from '../atoms/SectionSubtitle';
import { SectionTitle } from '../atoms/SectionTitle';
import { dateParser } from '@/helpers/utils';
import { SectionList } from '../atoms/SectionList';

export const EducationSection = ({ educations }: { educations: IEducation[] }) => {
  return (
    <div className="mb-3">
      <SectionHeading title="Education" />

      {educations.map((item: IEducation, index: number) => {
        return (
          <div key={index} className="py-2">
            <div>
              <SectionTitle label={`${item.studyType} - ${item.area}`} />
              <div className="flex justify-between items-center">
                <SectionSubtitle label={item.institution} />
                <div className="flex gap-3">
                  <p className="text-xs">
                    {item.startDate !== '' && dateParser(item.startDate)}
                    {item.startDate !== '' && (item.isStudyingHere || item.endDate !== '') ? ' - ' : ''}
                    {item.isStudyingHere && 'Present'}
                    {item.endDate !== '' && !item.isStudyingHere && dateParser(item.endDate)}
                  </p>
                </div>
              </div>
              <SectionList>
                <p className="text-xs">
                  {item.description}
                </p>
              </SectionList>
            </div>
          </div>
        );
      })}
    </div>
  );
};
