import Loggaby from 'loggaby';
// import {  } from "loggaby";
const Log = new Loggaby({
	debug: 'auto',
	format: '{grey}[{level.color}{level.symbol} {level.name}{grey}] ',
	levels: [
		{
			name: 'Database',
			symbol: '+',
			color: '#ABFFA6',
			call: 'dbadd'
		},
		{
			name: 'Database',
			symbol: '-',
			color: '#FFA600',
			call: 'dbremove'
		},
		{
			name: 'Database',
			symbol: '✔️',
			color: '#50BB50',
			call: 'dbsuccess'
		},
		{
			name: 'Database Error',
			symbol: '❌',
			color: '#FFA6A6',
			call: 'dberror'
		},
		{
			name: 'Database Search',
			symbol: '🔎',
			color: '#ABFFA6',
			call: 'dbsearch'
		},
		{
			name: 'Database Message',
			symbol: '💬',
			color: '#ABFFA6',
			call: 'dbmessage'
		}
	]
});

let Logger = {
	db: {
		add: Log.dbadd,
		remove: Log.dbremove,
		success: Log.dbsuccess,
		error: Log.dberror,
		search: Log.dbsearch,
		message: Log.dbmessage
	}
};
// let Logger = {
// db: {
// add: (str) => console.log(`[Database Add] ${str}`),
// remove: (str) => console.log(`[Database remove] ${str}`),
// success: (str) => console.log(`[Database success] ${str}`),
// error: (str) => console.log(`[Database error] ${str}`),
// search: (str) => console.log(`[Database search] ${str}`),
// message: (str) => console.log(`[Database message] ${str}`)
// }
// };

export default Logger;
