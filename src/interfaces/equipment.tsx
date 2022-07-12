interface IEquipment {
  id: string;
  name: string;
  serial_number: string;
  model: string;
  type: string;
  situation: string;
  collaborator_id: string | null;
  status: string;
  department: string;
  processor: string;
  memory: number;
  storage: string;
  system: string;
  office: string;
  purchase: Date;
}

export type { IEquipment };
