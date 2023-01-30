export interface Size {
  _id: string;
  name: string;
}

interface Subselection {
  _id: string;
  name: string;
}

export interface Extras {
  _id: string;
  name: string;
  subselections: Subselection[];
}

export interface Type {
  _id: string;
  name: string;
  sizes: Size[];
  extras: Extras[];
}

export interface Data {
  _id: string;
  types: Type[];
  sizes: Size[];
  extras: Extras[];
}
