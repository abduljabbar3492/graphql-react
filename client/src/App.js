
import Headers from './components/Headers';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Category from './components/Category';
import AddCategoryModal from './components/AddCategoryModal';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Headers />
        <div className="container">
          <AddCategoryModal />
          <Category />
          Hello world
        </div>
      </ApolloProvider>
    </>

  );
}

export default App;
