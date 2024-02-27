import type { FC } from "react";
import TitleSection from "../Title/TitleSection";
import RowHead from "../RowHead/RowHead";
import Row from "../RowHead/Row";
import { ICompanySales, ITitles } from "@/types/interface";

interface SalesProps {
  data: ICompanySales[];
  width: boolean;
  titles: ITitles;
  title: string;
}

const Sales: FC<SalesProps> = ({ data, width, titles, title }) => {
  return (
    <div>
      <TitleSection text={title} />
      <div>
        <RowHead
          first={titles.first}
          second={titles.second}
          third={titles.third}
          width={width}
        />
        {data?.map((item) => (
          <Row key={item.id} item={item} width={width} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
