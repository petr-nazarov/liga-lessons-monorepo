export type Field = {
  name: string;
  label: string;
  type: 'text' | 'select' | 'radio' | 'checkbox' | 'textarea';
  value: string;
  required: boolean;
  options?: string[];
};

export type Action = {
  label: string;
  icon?: string;
  type: 'success' | 'danger' | 'warning' | 'info';
  action: <T>(data: T) => Promise<void>;
};
