import { type FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IPromotionData } from "@/types/interface";
import Button from "../Button/Button";
import s from "./addpromotion.module.css";

interface AddPromotionProps {
  onClose: () => void;
  addNewPromo: (data: IPromotionData) => void;
}

const signupSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "too short!")
    .max(100, "too long!")
    .required("required"),
  text: Yup.string()
    .min(10, "too short!")
    .max(500, "too long!")
    .required("required"),
  percent: Yup.number()
    .required("required")
    .typeError("must be a number")
    .positive("must be positive")
    .integer(),
});

const AddPromotion: FC<AddPromotionProps> = ({ onClose, addNewPromo }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      text: "",
      percent: "",
    },
    validationSchema: signupSchema,
    onSubmit: (values) => {
      addNewPromo({ ...values, id: Date.now() });
      onClose();
    },
  });

  return (
    <form className={s.form}>
      <span className={s.close} onClick={onClose}>
        x
      </span>
      <p className={s.title}>Add promotion</p>
      <label className={s.label}>
        <span className={s.name}>Title</span>
        <input
          className={`${s.input} ${
            formik.touched.name && formik.errors.name && s.errorBorder
          }`}
          placeholder="Title"
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
        <span className={s.name}>Title</span>
        <input
          className={`${s.input} ${
            formik.touched.text && formik.errors.text && s.errorBorder
          }`}
          placeholder="Description"
          name="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.text}
        />
        {formik.touched.text && formik.errors.text ? (
          <div className={s.errorMessage}>{formik.errors.text}</div>
        ) : null}
      </label>
      <label className={s.label}>
        <span className={s.name}>Discount amount</span>
        <input
          className={`${s.input} ${
            formik.touched.percent && formik.errors.percent && s.errorBorder
          }`}
          placeholder="-40%"
          name="percent"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.percent}
        />
        {formik.touched.percent && formik.errors.percent ? (
          <div className={s.errorMessage}>{formik.errors.percent}</div>
        ) : null}
      </label>
      <Button name="Add promotion" onClick={formik.handleSubmit} />
    </form>
  );
};

export default AddPromotion;
