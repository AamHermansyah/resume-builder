import { ISkillItem } from '@/stores/skill.interface';
import { SectionHeading } from '../atoms/SectionHeading';

export const SkillsSection = ({ title, list }: { title: string; list: ISkillItem[] }) => {
  return (
    <div className="my-3">
      <SectionHeading title={title} />
      <div className="flex items-center flex-wrap gap-2.5 py-2">
        {list.map((item: ISkillItem, index) => (
          <div
            key={index}
            className="py-1 px-2 text-sm font-medium text-white bg-sky-500 rounded print-exact"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};
