interface Command {
	send: () => Promise<unknown>;
}

interface SendwichSdkError {
	isSuccessful: false;
	error: unknown;
}

interface SendwichSdkSuccess<T extends Command> {
	isSuccessful: true;
	data: Awaited<ReturnType<T["send"]>>;
}

type HttpSdkResponse<T extends Command> =
	| {
			isSuccessful: false;
			error: unknown;
	  }
	| {
			isSuccessful: true;
			data: Awaited<ReturnType<T["send"]>>;
	  };
