export type RootObjectTypes = {
  _id: string;
  Itemcode: string;
  Materialcode?: string;
  UOM: string;
  Noun: string;
  Modifier: string;
  HSNID?: any;
  Legacy: string;
  Legacy2?: string;
  Shortdesc?: string;
  Longdesc?: string;
  Additionalinfo?: string;
  Soureurl?: string;
  Junk?: any;
  Plant?: any;
  Manufacturercode?: any;
  Manufacturer?: any;
  Partno?: any;
  Partnodup?: any;
  Application?: any;
  Drawingno?: any;
  Referenceno?: any;
  ItemStatus: number;
  Remarks?: string;
  RevRemarks?: any;
  RelRemarks?: string;
  Characteristics: Characteristic[];
  Equipment?: Equipment;
  Catalogue: Catalogue;
  Review?: Catalogue;
  Release?: Catalogue;
  RejectedBy?: any;
  CreatedOn?: string;
  UpdatedOn: string;
  Duplicates?: string;
  Vendorsuppliers?: Vendorsuppliers[];
  Unspsc?: string;
  Attachment?: any;
  Rework?: string;
  Reworkcat?: string;
  Maincode?: any;
  Subcode?: any;
  Subsubcode?: any;
  MissingValue?: string;
  EnrichedValue?: string;
  Unmap?: any;
  batch?: string;
  Type?: string;
  System_Balance?: any;
  Quantity_as_on_Date?: any;
  Stock_Quantity?: any;
  No_of_Item_Aginst_PV_Obs?: any;
  Physical_Observation?: any;
  Expired_Date?: any;
  Storage_Bin1?: any;
  Storage_Location1?: any;
  GR_Date?: any;
  No_of_Items_Expired?: any;
  Bin_Updation_Miss_Placed?: any;
  Shelf_Life?: any;
  PVstatus?: any;
  PVuser?: any;
  Specification?: any;
  Equipments?: Equipment2[];
  category?: string;
  AssetCondition?: any;
  AssetImages?: AssetImage;
  Observations?: any;
};
export type AssetImage = {
  AssetImgs?: any;
  MatImgs: string[];
  NamePlateImge?: any;
  NamePlateImgeTwo?: any;
  NamePlateText: string[];
  NamePlateTextTwo?: any;
  NameplateImgs: string[];
  NewTagImage?: any;
  OldTagImage?: any;
};
export type Equipment2 = {
  Itemcode: string;
  PartQty: number;
};
export type Vendorsuppliers = {
  slno: number;
  Code?: string;
  Name?: string;
  Type?: string;
  RefNo?: string;
  RefNoDup?: string;
  Refflag?: string;
  s: number;
  l: number;
  shortmfr?: string;
};

export type Catalogue = {
  UserId: string;
  Name: string;
  UpdatedOn: string;
};
export type Equipment = {
  Name?: string;
  Manufacturer?: string;
  Modelno?: string;
  Tagno?: string;
  Serialno?: string;
  Additionalinfo?: string;
  Soureurl?: any;
  ENS: number;
  EMS: number;
};

export type Characteristic = {
  Characteristic: string;
  Value: string;
  UOM?: string;
  Squence: number;
  ShortSquence: number;
  Source?: string;
  SourceUrl?: string;
};

export const nameOfItemField = [
  "Noun",
  "Modifier",
  "Itemcode",
  "Materialcode",
  "Unspsc",
  "Legacy",
];
