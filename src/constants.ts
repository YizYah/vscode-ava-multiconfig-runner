export const AVA_TEST_RUNNER_TERMINAL_NAME = 'ava-launcher';

export const EXTENSION_NAME = 'ava-launcher';

export enum Command {
	RUN_ALL_TESTS_IN_ACTIVE_FILE = 'RUN_ALL_TESTS_IN_ACTIVE_FILE',
	RUN_SINGLE_TEST = 'RUN_SINGLE_INT_TEST',
	RUN_SINGLE_TEST_AT_CURSOR = 'RUN_SINGLE_INT_TEST_AT_CURSOR',
	DEBUG_SINGLE_TEST_AT_CURSOR = 'DEBUG_SINGLE_INT_TEST_AT_CURSOR',
	DEBUG_SINGLE_TEST = 'DEBUG_SINGLE_TEST'
}

export const TEST_FIND_REGEX = new RegExp(/test(\.serial)?\(\s*'(.+)'/g);
// export const TEST_FIND_REGEX = new RegExp(/test\(\s*'(.+)'|test\.serial\(\s*'(.+)'/g);

export enum CodeLensTitle {
	RUN = 'IntRun',
	DEBUG = 'IntDebug'
}
