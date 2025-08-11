import { Setor, Impressora, RegistroImpressao, Usuario } from '@/types';

// Dados mock para demonstração
export const mockUsuario: Usuario = {
  id: '1',
  nome: 'João Silva',
  email: 'joao@empresa.com',
  role: 'admin'
};

export const mockSetores: Setor[] = [
  {
    id: '1',
    nome: 'Recursos Humanos',
    descricao: 'Setor responsável pela gestão de pessoas',
    createdAt: new Date('2023-01-15'),
    updatedAt: new Date('2023-01-15')
  },
  {
    id: '2',
    nome: 'Financeiro',
    descricao: 'Setor de controle financeiro e contabilidade',
    createdAt: new Date('2023-01-16'),
    updatedAt: new Date('2023-01-16')
  },
  {
    id: '3',
    nome: 'TI',
    descricao: 'Setor de Tecnologia da Informação',
    createdAt: new Date('2023-01-17'),
    updatedAt: new Date('2023-01-17')
  },
  {
    id: '4',
    nome: 'Marketing',
    descricao: 'Setor de marketing e comunicação',
    createdAt: new Date('2023-01-18'),
    updatedAt: new Date('2023-01-18')
  }
];

export const mockImpressoras: Impressora[] = [
  {
    id: '1',
    nome: 'HP LaserJet Pro',
    modelo: 'M404n',
    numeroSerie: 'HP001234',
    tipo: 'pretoBranco',
    status: 'ativa',
    setorId: '1',
    createdAt: new Date('2023-02-01'),
    updatedAt: new Date('2023-02-01')
  },
  {
    id: '2',
    nome: 'Canon Pixma',
    modelo: 'G6020',
    numeroSerie: 'CN005678',
    tipo: 'colorida',
    status: 'ativa',
    setorId: '2',
    createdAt: new Date('2023-02-02'),
    updatedAt: new Date('2023-02-02')
  },
  {
    id: '3',
    nome: 'Epson EcoTank',
    modelo: 'L3150',
    numeroSerie: 'EP009876',
    tipo: 'colorida',
    status: 'ativa',
    setorId: '3',
    createdAt: new Date('2023-02-03'),
    updatedAt: new Date('2023-02-03')
  },
  {
    id: '4',
    nome: 'Brother Laser',
    modelo: 'HL-L2340DW',
    numeroSerie: 'BR001122',
    tipo: 'pretoBranco',
    status: 'inativa',
    setorId: '4',
    createdAt: new Date('2023-02-04'),
    updatedAt: new Date('2023-02-04')
  },
  {
    id: '5',
    nome: 'HP OfficeJet',
    modelo: 'Pro 8025e',
    numeroSerie: 'HP002233',
    tipo: 'colorida',
    status: 'ativa',
    setorId: '1',
    createdAt: new Date('2023-02-05'),
    updatedAt: new Date('2023-02-05')
  }
];

// Gerar registros de impressão dos últimos 30 dias
const generateRegistros = (): RegistroImpressao[] => {
  const registros: RegistroImpressao[] = [];
  const today = new Date();
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    // Gerar 2-5 registros por dia para impressoras ativas
    const impressorasAtivas = mockImpressoras.filter(imp => imp.status === 'ativa');
    const numRegistros = Math.floor(Math.random() * 4) + 2;
    
    for (let j = 0; j < numRegistros; j++) {
      const impressora = impressorasAtivas[Math.floor(Math.random() * impressorasAtivas.length)];
      const quantidade = Math.floor(Math.random() * 50) + 1;
      const tipo = impressora.tipo === 'pretoBranco' ? 'pretoBranco' : 
                   Math.random() > 0.7 ? 'colorida' : 'pretoBranco';
      
      registros.push({
        id: `${registros.length + 1}`,
        impressoraId: impressora.id,
        data: new Date(date),
        quantidade,
        tipo,
        createdAt: new Date(date)
      });
    }
  }
  
  return registros.sort((a, b) => b.data.getTime() - a.data.getTime());
};

export const mockRegistros = generateRegistros();