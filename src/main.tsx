import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './AppContext';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'http://localhost:3610/graphql',
	cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<ApolloProvider client={client}>
		<AppProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</AppProvider>
	</ApolloProvider>
);
