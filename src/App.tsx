import { QueryClientProvider } from 'react-query';
import client from './api/client';
import Home from './pages/Home';

import { store } from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Home />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
