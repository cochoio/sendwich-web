import { sdkHttp } from "../sdk-http";

export interface DeleteCompanionInput {
  id: string;
}

export interface DeleteCompanionOutput {
  id: string;
}

export class DeleteCompanion implements Command {
  constructor(private readonly input: DeleteCompanionInput) {}

  async send() {
    return sdkHttp.delete<DeleteCompanionOutput>(`/companion`, {
      params: this.input.id,
    });
  }
}
