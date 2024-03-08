import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { ICompany, Promotion, Status } from "@/types/interface";
import StatusLabel from "../statusLabel/StatusLabel";
import yes from "../../../public/yes.png";
import no from "../../../public/no.png";
import s from "./company.module.css";

interface CompanyItemProps {
  item: ICompany;
}

const CompanyItem: FC<CompanyItemProps> = ({
  item: { category, logo, name, status, promotion, country, data, id },
}) => {
  return (
    <Link href={`./companies/${id}`}>
      <li className={s.item}>
        <p className={`${s.category} ${s[status]}`} data-status={s[status]}>
          {category}
        </p>
        <div className={s.name}>
          <p className={s.logoContainer}>{logo}</p> <span>{name}</span>
        </div>
        <div className={s.status}>
          <StatusLabel status={status as Status}>{status}</StatusLabel>
        </div>
        <p
          className={`${s.promotion} ${
            promotion === Promotion.yes ? s.active : s.notActive
          }`}
        >
          <Image
            src={promotion === Promotion.yes ? yes : no}
            alt={promotion}
            className={s.image}
          />

          {promotion}
        </p>
        <p className={s.country}>{country}</p>
        <p className={s.data}>{data}</p>
      </li>
    </Link>
  );
};

export default CompanyItem;
