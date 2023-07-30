export type Field = {
  name: string;
  label: string;
  type: 'text' | 'select' | 'radio' | 'checkbox' | 'textarea';
  value: string;
  required: boolean;
  options?: string[];
};
