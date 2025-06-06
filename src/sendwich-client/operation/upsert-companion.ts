import { sdkHttp } from "../sdk-http";

export interface UpsertCompanionInput {
  id: string | null;
  title: string;
  body: string;
  placeId: string;
  mediaUrls: string[];
  maxJoin: number;
  companionDateAt: Date;
}

export interface UpsertCompanionOutput {
  id: string;
}

export class UpsertCompanion implements Command {
  constructor(private readonly input: UpsertCompanionInput) {}

  async send() {
    return sdkHttp.post<UpsertCompanionOutput>(`/companion`, this.input);
  }
}
