import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      retry: 3,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
            <Route path="/impressoras" element={<AppLayout><div className="text-center py-12"><p className="text-muted-foreground">Página de Impressoras (em construção)</p></div></AppLayout>} />
            <Route path="/setores" element={<AppLayout><div className="text-center py-12"><p className="text-muted-foreground">Página de Setores (em construção)</p></div></AppLayout>} />
            <Route path="/registros" element={<AppLayout><div className="text-center py-12"><p className="text-muted-foreground">Página de Registros (em construção)</p></div></AppLayout>} />
            <Route path="/relatorios" element={<AppLayout><div className="text-center py-12"><p className="text-muted-foreground">Página de Relatórios (em construção)</p></div></AppLayout>} />
            <Route path="/configuracoes" element={<AppLayout><div className="text-center py-12"><p className="text-muted-foreground">Página de Configurações (em construção)</p></div></AppLayout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </QueryClientProvider>
);

export default App;
