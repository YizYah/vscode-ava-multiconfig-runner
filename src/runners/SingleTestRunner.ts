import { window } from 'vscode';
import { getActiveTestFilePath, getModuleBaseDir } from '../helpers/PathsHelpers';
import { getTerminal } from '../helpers/TerminalHelpers';

export default function singleTestRunner(test: string) {
	try {
		const activeFilePath = getActiveTestFilePath();
		const moduleBaseDir = getModuleBaseDir();
		const terminal = getTerminal();

		// const extensionTest = 'test.ts'
		const extensionInt = 'int.ts'

		let scriptName = 'test'
		if (activeFilePath.endsWith(extensionInt)) {
			scriptName = 'int-test'
		}
		

		terminal.sendText(
			`cd ${moduleBaseDir} && npm run ${scriptName} -- ${activeFilePath} -m="${test}"`
		);
	} catch (e: any) {
		window.showErrorMessage(e.message);
	}
}
