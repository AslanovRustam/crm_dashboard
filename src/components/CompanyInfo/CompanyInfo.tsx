import type { FC } from "react";
import { ICompany, Status } from "@/types/interface";
import StatusLabel from "../statusLabel/StatusLabel";
import s from "./companyInfo.module.css";
import dynamic from "next/dynamic";
const PromoList = dynamic(() => import("../Promo/PromoList"), {
  loading: () => <p>Loading list of promo</p>,
  ssr: false,
});

interface CompanyInfoProps {
  currentCompany: ICompany;
}

const CompanyInfo: FC<CompanyInfoProps> = ({
  currentCompany: { category, name, status, country, data, promo, text },
}) => {
  return (
    <div className={s.container}>
      <div className={s.about}>
        <div className={s.icoContainer}>
          <p className={s.name}>{name}</p>
          <StatusLabel status={status as Status}>{status}</StatusLabel>
        </div>
        <div className={s.wrapper}>
          <span className={s.infoTitle}>About company</span>
          <ul className={s.infoList}>
            <li className={s.info}>
              Category: <strong>{category}</strong>
            </li>
            <li className={s.info}>
              Country: <strong>{country}</strong>
            </li>
            <li className={s.info}>
              Joined data: <strong>{data}</strong>
            </li>
          </ul>

          <div className={s.devider}></div>
          <p className={s.text}>{text}</p>
        </div>
      </div>
      <PromoList promo={promo} />
    </div>
  );
};

export default CompanyInfo;
