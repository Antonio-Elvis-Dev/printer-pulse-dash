// Tipos para o sistema de gerenciamento de impressoras

export interface Setor {
  id: string;
  nome: string;
  descricao?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Impressora {
  id: string;
  nome: string;
  modelo: string;
  numeroSerie: string;
  tipo: 'colorida' | 'pretoBranco';
  status: 'ativa' | 'inativa';
  setorId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RegistroImpressao {
  id: string;
  impressoraId: string;
  data: Date;
  quantidade: number;
  tipo: 'colorida' | 'pretoBranco';
  createdAt: Date;
}

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  role: 'admin' | 'usuario';
}

export interface DashboardMetrics {
  totalImpressoras: number;
  impressorasAtivas: number;
  impressorasInativas: number;
  impressoesColoridoMes: number;
  impressoesPretoBrancoMes: number;
  rankingImpressoras: {
    impressora: Impressora;
    totalImpressoes: number;
  }[];
  ultimosRegistros: (RegistroImpressao & { impressora: Impressora })[];
}

export type TipoRelatorio = 'impressora' | 'setor';
export type FormatoExportacao = 'csv' | 'pdf';