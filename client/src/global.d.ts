declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

interface IForm {
  name: string;
  handleChange: (value: {}) => void;
}

export interface IInputForm extends IForm {
  value: string;
}

export interface IDateForm extends IForm {
  value: Date;
}

export interface IBaseButton {
  color: string;
  text: string;
}
