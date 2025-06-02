export const sendwichClient = {
	send: async <T extends Command>(command: T): Promise<HttpSdkResponse<T>> => {
		try {
			const data = (await command.send()) as Awaited<ReturnType<T["send"]>>;

			return { isSuccessful: true, data };
		} catch (e) {
			return { isSuccessful: false, error: e };
		}
	},
};
