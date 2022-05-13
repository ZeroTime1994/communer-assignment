import { QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import client from './api/client';

import { Provider } from 'react-redux';
import { store } from './store';
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <GlobalStyles />
        <Home />
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
