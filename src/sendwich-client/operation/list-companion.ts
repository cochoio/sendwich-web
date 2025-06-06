import { sdkHttp } from "../sdk-http";

export interface ListCompanionInput {
  cursor: Maybe<string>;
  categoryId: Maybe<string>;
  userId: Maybe<string>;
  placeId: Maybe<string>;
  limit: Maybe<string>;
}

export interface ListCompanionItem {
  id: string;
  title: string;
  body: string;
  mediaUrls: Url[];
  createdAt: DateTimeString;
  updatedAt: DateTimeString;
  author_id: string;
  author_display_name: string;
  place_id: string;
  place_title: string;
  category_id: string;
  category_name: string;
  max_join: number;
  companion_date_at: DateTimeString;
  current_join_count: number;
  status: "ACTIVE" | "COMPLETED" | "FORCE_COMPLETED" | "EXPIRED";
}

export interface ListCompanionOutput {
  metadata: {
    nextCursor: Maybe<string>;
  };
  items: ListCompanionItem[];
}

export class ListCompanion implements Command {
  constructor(private readonly input: ListCompanionInput) {}

  async send() {
    return sdkHttp.get(`/companion`, {
      params: { ...this.input },
    });
  }
}
