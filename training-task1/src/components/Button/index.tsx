import "./Button.module.scss";

export interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return <button className="button">{title}</button>;
}
