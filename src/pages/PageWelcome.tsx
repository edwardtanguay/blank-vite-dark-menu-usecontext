import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageWelcome = () => {
	const { appTitle, jobs, skills } = useContext(AppContext);

	return (
		<div className="pageWelcome">
			<Helmet>
				<title>{appTitle} - Welcome</title>
			</Helmet>

			<h2>Via REST</h2>
			<p>
				This site has <strong>{jobs.length}</strong> jobs and{' '}
				<strong>{skills.length}</strong> skills.
			</p>
			<h2>Via GraphQL</h2>
			
		</div>
	);
};
