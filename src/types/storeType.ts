type Recommend = {
  name: string;
  id: number;
};

export type SearchInital = {
  keyword: string;
  recommend: Array<Recommend>;
};

export type SelectedInital = {
  selectedIndex: number;
};
