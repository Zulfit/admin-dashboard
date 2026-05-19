export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'select' | 'date' | 'textarea';
  required?: boolean;
  options?: { label: string; value: string | number | boolean }[]; // For select dropdowns
}
