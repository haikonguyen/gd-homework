export interface OptionProps {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  onChange?: () => void;
  options: OptionProps[];
}
