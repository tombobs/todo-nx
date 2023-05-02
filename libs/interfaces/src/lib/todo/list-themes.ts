export const listThemes: IListTheme[] = [
  { id: 1, color: 'red' },
  { id: 2, color: 'green' },
  { id: 3, color: 'blue' }
];

export interface IListTheme {
  id: number;
  color?: string;
  imgUrl?: string;
}
