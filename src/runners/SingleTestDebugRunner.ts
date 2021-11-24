import { debug, window, workspace } from 'vscode';
import { getActiveTestFilePath, getModuleBaseDir } from '../helpers/PathsHelpers';

export default function singleTestDebugRunner(test: string) {
	try {
		const activeFilePath = getActiveTestFilePath();
		const moduleBaseDir = getModuleBaseDir();

		const launchConfiguration = workspace.getConfiguration('launch');
		const NPM_TOKEN = launchConfiguration.get('NPM_TOKEN');

		// const extensionTest = 'test.ts'
		const extensionInt = 'int.ts'

		let scriptName = 'test'
		if (activeFilePath.endsWith(extensionInt)) {
			scriptName = 'int-test'
		}

		const config = {
			type: 'node',
			request: 'launch',
			name: 'Debug AVA test',
			"envFile": `${workspace.rootPath}/.env`,
			// env: {
			// 	NPM_TOKEN
			// },
			cwd: moduleBaseDir,
			runtimeExecutable: 'npm',
			runtimeArgs: [
				"run",
				scriptName,
				"--",
				activeFilePath,
				`-m='${test}'`
			],
			outputCapture: 'std',
			skipFiles: ['<node_internals>/**/*.js']
		}

		debug.startDebugging(undefined, config);
	} catch (e: any) {
		window.showErrorMessage(e.message);
	}
}
