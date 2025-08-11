import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/contexts/AppContext";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import PessoasPage from "./pages/PessoasPage";
import ImpressorasPage from "./pages/ImpressorasPage";
import SetoresPage from "./pages/SetoresPage";
import RegistrosPage from "./pages/RegistrosPage";
import RelatoriosPage from "./pages/RelatoriosPage";
import ConfiguracoesPage from "./pages/ConfiguracoesPage";
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
    <ThemeProvider defaultTheme="light" storageKey="printer-pulse-theme">
      <AppProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
            <Route path="/impressoras" element={<AppLayout><ImpressorasPage /></AppLayout>} />
            <Route path="/pessoas" element={<AppLayout><PessoasPage /></AppLayout>} />
            <Route path="/setores" element={<AppLayout><SetoresPage /></AppLayout>} />
            <Route path="/registros" element={<AppLayout><RegistrosPage /></AppLayout>} />
            <Route path="/relatorios" element={<AppLayout><RelatoriosPage /></AppLayout>} />
            <Route path="/configuracoes" element={<AppLayout><ConfiguracoesPage /></AppLayout>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AppProvider>
  </ThemeProvider>
</QueryClientProvider>
);

export default App;
