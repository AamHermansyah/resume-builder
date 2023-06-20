import { IEducation } from '@/stores/index.interface';
import { dateParser } from '@/helpers/utils';
import { SectionList } from '@/templates/modern/atoms/SectionList';

export const Education = ({ education }: { education: IEducation[] }) => {
  return (
    <>
      {education.map((item: IEducation, index: number) => {
        return (
          <div key={index} className="mt-3">
            <div>
              <p className="text-[11px] text-right">
                {item.startDate !== '' && dateParser(item.startDate)}
                {item.startDate !== '' && (item.isStudyingHere || item.endDate !== '') ? ' - ' : ''}
                {item.isStudyingHere && 'Present'}
                {item.endDate !== '' && !item.isStudyingHere && dateParser(item.endDate)}
              </p>
              <p className="font-normal -mt-1">
                {item.studyType} - {item.area}
              </p>
              <div>
                <p className="font-normal text-sm">{item.institution}</p>
              </div>
            </div>
            <SectionList>
              <p className="text-xs">
                {item.description}
              </p>
            </SectionList>
          </div>
        );
      })}
    </>
  );
};
