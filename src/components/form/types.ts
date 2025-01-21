export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export interface FormUIProps {
  schema: unknown;
  formFields: {
    name?: string;
    label?: string;
    type?: string;
    value?: unknown;
  }[];
  formTitle: string | undefined;
  onSubmitAction: (data?: unknown) => void;

  buttonProps?: {
    text: string;
    isLoading?: boolean;
  };
}

export type InputTagsProps = Omit<InputProps, "value" | "onChange"> & {
  value: [
    {
      id: string;
      tag: string;
    },
  ];
  onChange: (from: ({ id: string; tag: string } | string)[]) => void;
};

export type FieldUIProps = {
  name: string;
  label: string;
  type: string;
  value?: any;
  id?: string;
  onChange?: () => void;
};
