import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageWelcome = () => {
	const { appTitle, jobs, skills, message } = useContext(AppContext);

	return (
		<div className="pageWelcome">
			<Helmet>
				<title>{appTitle} - Welcome</title>
			</Helmet>

			<p>
				This site has <strong>{jobs.length}</strong> jobs and{' '}
				<strong>{skills.length}</strong> skills.
			</p>
			<p>
				message: {message}
			</p>
			
		</div>
	);
};
