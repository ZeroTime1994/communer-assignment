import { QueryClientProvider } from 'react-query';
import client from './api/client';
import Home from './pages/Home';

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
