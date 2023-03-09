import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IJob, ISkill } from './interfaces';
import { useQuery, gql } from '@apollo/client';

const jobsUrl = 'http://localhost:3610/jobs';
const skillsUrl = 'http://localhost:3610/skills';

interface IAppContext {
	appTitle: string;
	dataSource: string;
	jobs: IJob[];
	skills: ISkill[];
	message: string;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const appTitle = 'Info Site';
	const [jobs, setJobs] = useState<IJob[]>([]);
	const [skills, setSkills] = useState<ISkill[]>([]);
	const [dataSource, setDataSource] = useState<string>(
		import.meta.env.VITE_DATA_SOURCE
	);
	const [message, setMessage] = useState<string>('');

	const { loading, data } = useQuery(gql`
		{
			message,
			jobs {
				id,
				title
			},
			skills {
				idCode,
				name,
				description
			}
		}
	`);
	useEffect(() => {
		if (!loading) {
			setMessage(data.message);
			setJobs(data.jobs);
			setSkills(data.skills);
		}
	}, [loading]);

	// useEffect(() => {
	// 	(async () => {
	// 		setJobs((await axios.get(jobsUrl)).data);
	// 	})();
	// }, []);

	// useEffect(() => {
	// 	(async () => {
	// 		setSkills((await axios.get(skillsUrl)).data);
	// 	})();
	// }, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				jobs,
				skills,
				dataSource,
				message,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
