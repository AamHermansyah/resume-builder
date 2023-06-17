import { ISkillItem } from '@/stores/skill.interface';

export default function UnratedSkills({ items }: { items: ISkillItem[] }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {items.map((value) => (
        <span key={value.name} className="py-1 rounded-md px-2 bg-rose-500 text-white">
          {value.name}
        </span>
      ))}
    </div>
  );
}
