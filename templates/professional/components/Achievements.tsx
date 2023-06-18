import { HTMLRenderer } from "@/helpers/common/components/HTMLRenderer";
import { dateParser } from "@/helpers/utils";
import { IAwards } from "@/stores/index.interface";

export default function Achievements({ data }: { data: IAwards[] }) {
  return (
    <div>
      {data.map((award: IAwards, index: number) => {
        return (
          <div key={index} className="pb-2">
            <div className="flex justify-between awards-center">
              {award.awarder}
              <div>
                <p className="text-xs">{dateParser(award.date)}</p>
              </div>
            </div>
            <HTMLRenderer htmlString={award.summary} />
          </div>
        );
      })}
    </div>
  );
}
