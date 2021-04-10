export interface OptionProps {
  value: string;
  label: string;
}

export interface CustomSelectProps {
  onChange?: (value: any) => void;
  options: OptionProps[];
  value?: readonly OptionProps[] | OptionProps | null;
  inputValue?: string;
}
