import { ISkillItem } from '@/stores/skill.interface';

export default function UnratedSkills({ items }: { items: ISkillItem[] }) {
  return (
    <div className="flex gap-3 flex-wrap">
      {items.map((value) => (
        <span key={value.name} className="p-1 rounded-md border border-solid bg-yellow-500">
          {value.name}
        </span>
      ))}
    </div>
  );
}
