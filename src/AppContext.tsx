import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IJob, ISkill } from './interfaces';


const jobsUrl = 'http://localhost:3610/jobs';
const skillsUrl = 'http://localhost:3610/skills';

interface IAppContext {
	appTitle: string;
	dataSource: string;
	jobs: IJob[];
	skills: ISkill[];
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const appTitle = 'Info Site';
	const [jobs, setJobs] = useState<IJob[]>([]);
	const [skills, setSkills] = useState<ISkill[]>([]);
	const [dataSource, setDataSource] = useState<string>(import.meta.env.VITE_DATA_SOURCE);

	useEffect(() => {
		(async () => {
			if (dataSource === 'rest') {
				setJobs((await axios.get(jobsUrl)).data);
			} else {
				// graphql
			}
		})();
	}, []);

	useEffect(() => {
		(async () => {
			if (dataSource === 'rest') {
				setSkills((await axios.get(skillsUrl)).data);
			} else {
				// graphql
			}
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				jobs,
				skills,
				dataSource
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
