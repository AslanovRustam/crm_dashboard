import type { FC } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "@/app/lib/hooks";
import { addCompany, updateCompanyInfo } from "@/app/lib/companySlice";
import { Category, ICompany, Promotion, Status } from "@/types/interface";
import Button from "../Button/Button";
import arrow from "../../../public/arrow.png";
import s from "./addcompany.module.css";

interface AddCompanyProps {
  onClose: () => void;
  currentCompany?: ICompany;
}

const statusForSelect = [
  { id: 0, name: Status.active },
  { id: 1, name: Status.pending },
  { id: 2, name: Status.suspended },
  { id: 3, name: Status.notActive },
];

const categoryForSelect = [
  { id: 0, name: Category.products },
  { id: 1, name: Category.supplies },
  { id: 2, name: Category.technology },
];

const signupSchema = Yup.object().shape({
  status: Yup.string()
    .oneOf(
      [Status.active, Status.notActive, Status.pending, Status.suspended],
      "Invalid status"
    )
    .required("required"),
  country: Yup.string()
    .min(2, "too short!")
    .max(30, "too long!")
    .required("required"),
  name: Yup.string()
    .min(2, "too short!")
    .max(30, "too long!")
    .required("required"),
  category: Yup.string()
    .oneOf(
      [Category.products, Category.supplies, Category.technology],
      "Invalid category"
    )
    .required("required"),
  description: Yup.string()
    .min(2, "too short!")
    .max(300, "too long!")
    .required("required"),
  data: Yup.date().required("required"),
});

const AddCompany: FC<AddCompanyProps> = ({ onClose, currentCompany }) => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      status: currentCompany?.status ?? "",
      country: currentCompany?.country ?? "",
      name: currentCompany?.name ?? "",
      category: currentCompany?.category ?? "",
      data: currentCompany?.data ?? "",
      description: currentCompany?.text ?? "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      const newCompany = {
        ...values,
        category: values.category as Category,
        status: values.status as Status,
        id: currentCompany ? currentCompany.id : Date.now(),
        promotion: currentCompany ? currentCompany.promotion : Promotion.no,
        promo: currentCompany ? currentCompany.promo : [],
        text: values.description,
      };

      const makeCorrectRequest = () => {
        if (currentCompany) {
          console.log("if currentCompany", currentCompany);
          dispatch(updateCompanyInfo([currentCompany.id, newCompany]));
          onClose();
          return;
        }
        console.log("newCompany", newCompany);
        dispatch(addCompany(newCompany));
        onClose();
      };
      makeCorrectRequest();
      // const makeCorrectRequest = currentCompany
      //   ? (dispatch(updateCompanyInfo([currentCompany.id, newCompany])),
      //     onClose())
      //   : (dispatch(addCompany(newCompany)), onClose());

      // return makeCorrectRequest;
    },
  });

  return (
    <div className={s.container}>
      <form className={s.form}>
        <span className={s.close} onClick={onClose}>
          x
        </span>

        <div className={s.leftSide}>
          <p className={s.title}>
            Add <br />
            new <br />
            company
          </p>
          <div className={s.innerSection}>
            <label className={s.label}>
              <span className={s.name}>Status</span>
              <select
                aria-label="select"
                className={`${s.input} ${s.select} ${
                  formik.touched.status && formik.errors.status && s.errorBorder
                }`}
                name="status"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // defaultValue="default"
                defaultValue={currentCompany?.status ?? "default"}
              >
                <option disabled value="default">
                  Select status
                </option>
                {statusForSelect.map(({ id, name }) => (
                  <option key={id} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <Image src={arrow} alt="arrow ico" className={s.arrowIco} />
              {formik.touched.status && formik.errors.status ? (
                <div className={s.errorMessage}>{formik.errors.status}</div>
              ) : null}
            </label>
            <label className={s.label}>
              <span className={s.name}>Country</span>
              <input
                className={`${s.input} ${
                  formik.touched.country &&
                  formik.errors.country &&
                  s.errorBorder
                }`}
                placeholder="country"
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              {formik.touched.country && formik.errors.country ? (
                <div className={s.errorMessage}>{formik.errors.country}</div>
              ) : null}
            </label>
          </div>
        </div>

        <div className={s.rightSide}>
          <label className={s.label}>
            <span className={s.name}>Name</span>
            <input
              className={`${s.input} ${
                formik.touched.name && formik.errors.name && s.errorBorder
              }`}
              placeholder="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={s.errorMessage}>{formik.errors.name}</div>
            ) : null}
          </label>
          <label className={s.label}>
            <span className={s.name}>Category</span>
            <select
              // aria-label="select"
              className={`${s.input} ${s.select} ${
                formik.touched.category &&
                formik.errors.category &&
                s.errorBorder
              }`}
              name="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              defaultValue={currentCompany?.category ?? "default"}
              // defaultValue="default"
            >
              <option disabled value="default">
                Select category
              </option>
              {categoryForSelect.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <Image src={arrow} alt="arrow ico" className={s.arrowIco} />
            {formik.touched.category && formik.errors.category ? (
              <div className={s.errorMessage}>{formik.errors.category}</div>
            ) : null}
          </label>
          <label className={s.label}>
            <span className={s.name}>Join data</span>
            <input
              className={`${s.input} ${
                formik.touched.data && formik.errors.data && s.errorBorder
              }`}
              type="date"
              placeholder="date"
              name="data"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.data}
            />
            {formik.touched.data && formik.errors.data ? (
              <div className={s.errorMessage}>{formik.errors.data}</div>
            ) : null}
          </label>
          <label className={s.label}>
            <span className={s.name}>Description</span>
            <input
              className={`${s.input} ${
                formik.touched.description &&
                formik.errors.description &&
                s.errorBorder
              }`}
              placeholder="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            {formik.touched.description && formik.errors.description ? (
              <div className={s.errorMessage}>{formik.errors.description}</div>
            ) : null}
          </label>
        </div>
      </form>
      <Button name="Add company" onClick={formik.handleSubmit} width="100%" />
    </div>
  );
};

export default AddCompany;
