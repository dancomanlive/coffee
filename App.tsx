import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import AppRouter from './src/navigation/AppRouter';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}
