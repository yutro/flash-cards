import type { Server as ServerType } from "miragejs";
import { ModelDefinition, FactoryDefinition, Registry } from "miragejs/-types";
import { ServerConfig } from "miragejs/server";

type Comment = Readonly<{ id: string; content: string }>;
type Card = Readonly<{
	id: string;
	content: ReadonlyArray<string>;
	comments: ReadonlyArray<Comment>;
}>;

type MockServerModels = {
	card: ModelDefinition<Card>;
	comment: ModelDefinition<Comment>;
};

type MockServerFactories = {
	card: FactoryDefinition<Card>;
	comment: FactoryDefinition<Comment>;
};

type ServerRegistry = Registry<MockServerModels, MockServerFactories>;
export type MockServerType = ServerType<ServerRegistry>;
export type MockServerConfig = ServerConfig<
	MockServerModels,
	MockServerFactories
>;
