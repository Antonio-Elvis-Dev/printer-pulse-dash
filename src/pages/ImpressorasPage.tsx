import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm } from 'react-hook-form';
import { 
  Printer, 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Users, 
  Activity,
  Settings,
  Eye,
  UserPlus
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export default function ImpressorasPage() {
  const [busca, setBusca] = useState('');
  const [filtroSetor, setFiltroSetor] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedPrinter, setSelectedPrinter] = useState<any>(null);

  const form = useForm({
    defaultValues: {
      nome: '',
      modelo: '',
      numeroSerie: '',
      tipo: '',
      setor: '',
      status: true,
      localizacao: '',
      observacoes: '',
      ultimaLeitura: '',
      leituraAtual: ''
    }
  });

  const impressorasMock = [
    {
      id: '1',
      nome: 'HP LaserJet Pro 400',
      modelo: 'M404n',
      numeroSerie: 'VNC4X12345',
      tipo: 'pb',
      setor: 'Financeiro',
      status: 'ativa',
      localizacao: 'Sala 101',
      ultimaLeitura: 15420,
      leituraAtual: 15687,
      totalImpressoes: 267,
      pessoasAssociadas: ['João Silva', 'Ana Costa'],
      ultimaManutencao: '2024-01-10'
    },
    {
      id: '2',
      nome: 'Canon PIXMA G6010',
      modelo: 'G6010',
      numeroSerie: 'CN9876543',
      tipo: 'colorida',
      setor: 'Marketing',
      status: 'ativa',
      localizacao: 'Sala 205',
      ultimaLeitura: 8945,
      leituraAtual: 9123,
      totalImpressoes: 178,
      pessoasAssociadas: ['Maria Santos', 'Carlos Lima'],
      ultimaManutencao: '2024-01-05'
    },
    {
      id: '3',
      nome: 'Brother HL-L2395DW',
      modelo: 'HL-L2395DW',
      numeroSerie: 'BR5555678',
      tipo: 'pb',
      setor: 'RH',
      status: 'inativa',
      localizacao: 'Sala 150',
      ultimaLeitura: 12300,
      leituraAtual: 12300,
      totalImpressoes: 0,
      pessoasAssociadas: ['Pedro Oliveira'],
      ultimaManutencao: '2023-12-20'
    }
  ];

  const handleSubmit = (data: any) => {
    console.log('Nova impressora:', data);
    setIsDialogOpen(false);
    form.reset();
  };

  const handleViewDetails = (impressora: any) => {
    setSelectedPrinter(impressora);
    setIsDetailOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Impressoras</h1>
          <p className="text-muted-foreground">
            Gerencie todas as impressoras da empresa
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nova Impressora
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Printer className="h-5 w-5" />
                Cadastrar Nova Impressora
              </DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da Impressora</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: HP LaserJet Pro" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="modelo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Modelo</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: M404n" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="numeroSerie"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de Série</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: VNC4X12345" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="localizacao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Localização</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Sala 101" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <FormField
                    control={form.control}
                    name="tipo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tipo</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pb">P&B</SelectItem>
                            <SelectItem value="colorida">Colorida</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="setor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Setor</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="financeiro">Financeiro</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                            <SelectItem value="rh">RH</SelectItem>
                            <SelectItem value="ti">TI</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem className="flex flex-col justify-between">
                        <FormLabel>Status</FormLabel>
                        <FormControl>
                          <div className="flex items-center space-x-2">
                            <Switch 
                              checked={field.value} 
                              onCheckedChange={field.onChange} 
                            />
                            <span className="text-sm">
                              {field.value ? 'Ativa' : 'Inativa'}
                            </span>
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="ultimaLeitura"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Última Leitura</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="leituraAtual"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Leitura Atual</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="observacoes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Observações</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Informações adicionais sobre a impressora..." 
                          className="min-h-[80px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-2 pt-4">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button type="submit">Cadastrar</Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filtros e Busca */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar impressoras..."
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Setor</Label>
                <Select value={filtroSetor} onValueChange={setFiltroSetor}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os setores" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos os setores</SelectItem>
                    <SelectItem value="financeiro">Financeiro</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="rh">RH</SelectItem>
                    <SelectItem value="ti">TI</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={filtroStatus} onValueChange={setFiltroStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos os status</SelectItem>
                    <SelectItem value="ativa">Ativa</SelectItem>
                    <SelectItem value="inativa">Inativa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Tipo</Label>
                <Select value={filtroTipo} onValueChange={setFiltroTipo}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos os tipos</SelectItem>
                    <SelectItem value="pb">P&B</SelectItem>
                    <SelectItem value="colorida">Colorida</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Impressoras */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Printer className="h-5 w-5" />
            Lista de Impressoras
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome/Modelo</TableHead>
                <TableHead>Setor</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Leituras</TableHead>
                <TableHead>Pessoas</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {impressorasMock.map((impressora) => (
                <TableRow key={impressora.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{impressora.nome}</div>
                      <div className="text-sm text-muted-foreground">
                        {impressora.modelo} • {impressora.numeroSerie}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        📍 {impressora.localizacao}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{impressora.setor}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={impressora.tipo === 'colorida' ? 'default' : 'secondary'}>
                      {impressora.tipo === 'colorida' ? 'Colorida' : 'P&B'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={impressora.status === 'ativa' ? 'default' : 'destructive'}>
                      {impressora.status === 'ativa' ? 'Ativa' : 'Inativa'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>Atual: {impressora.leituraAtual.toLocaleString()}</div>
                      <div className="text-muted-foreground">
                        Anterior: {impressora.ultimaLeitura.toLocaleString()}
                      </div>
                      <div className="font-medium text-primary">
                        Diff: {impressora.totalImpressoes}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{impressora.pessoasAssociadas.length}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleViewDetails(impressora)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Dialog de Detalhes */}
      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Printer className="h-5 w-5" />
              {selectedPrinter?.nome}
            </DialogTitle>
          </DialogHeader>
          
          {selectedPrinter && (
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="info">Informações</TabsTrigger>
                <TabsTrigger value="pessoas">Pessoas</TabsTrigger>
                <TabsTrigger value="historico">Histórico</TabsTrigger>
              </TabsList>
              
              <TabsContent value="info" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Informações Básicas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">MODELO</Label>
                        <p className="text-sm">{selectedPrinter.modelo}</p>
                      </div>
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">NÚMERO DE SÉRIE</Label>
                        <p className="text-sm">{selectedPrinter.numeroSerie}</p>
                      </div>
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">LOCALIZAÇÃO</Label>
                        <p className="text-sm">{selectedPrinter.localizacao}</p>
                      </div>
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">ÚLTIMA MANUTENÇÃO</Label>
                        <p className="text-sm">{new Date(selectedPrinter.ultimaManutencao).toLocaleDateString('pt-BR')}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Contadores</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">ÚLTIMA LEITURA</Label>
                        <p className="text-sm font-medium">{selectedPrinter.ultimaLeitura.toLocaleString()}</p>
                      </div>
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">LEITURA ATUAL</Label>
                        <p className="text-sm font-medium">{selectedPrinter.leituraAtual.toLocaleString()}</p>
                      </div>
                      <Separator />
                      <div>
                        <Label className="text-xs font-medium text-muted-foreground">TOTAL DE IMPRESSÕES</Label>
                        <p className="text-lg font-bold text-primary">{selectedPrinter.totalImpressoes}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="pessoas" className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Pessoas Associadas</h3>
                  <Button size="sm" className="gap-2">
                    <UserPlus className="h-4 w-4" />
                    Associar Pessoa
                  </Button>
                </div>
                
                <div className="grid gap-2">
                  {selectedPrinter.pessoasAssociadas.map((pessoa, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                              <Users className="h-4 w-4 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">{pessoa}</p>
                              <p className="text-sm text-muted-foreground">245 impressões este mês</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="historico" className="space-y-4">
                <h3 className="text-lg font-semibold">Histórico de Uso</h3>
                <div className="text-center py-8 text-muted-foreground">
                  <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Histórico detalhado em desenvolvimento</p>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}