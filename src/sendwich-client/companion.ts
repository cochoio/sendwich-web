import { sdkHttp } from "./http";

export class CreateCompanion implements Command {
	async send() {
		return sdkHttp.get<{ version: string }>(`/`);
	}
}
