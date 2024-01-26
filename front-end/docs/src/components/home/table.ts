export interface CellValue {
  children?: CellValue[];
  label: string;
}

export interface StatTable {
  columns: CellValue[];
  rows: CellValue[];
}
