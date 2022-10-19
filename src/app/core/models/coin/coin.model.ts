export interface Coin {
  StatusCode: number;
  success: boolean;
  message: string;
  response: Response;
}

export interface Response {
  data: Datum[];
}

export interface Datum {
  moneda_id: number;
  moneda_descripcion: string;
  sic_id: string;
  ultima_modificacion: string;
  fecha_modificacion: string;
  moneda_estatus: string;
}
