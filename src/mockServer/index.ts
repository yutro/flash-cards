import { Server, Model, hasMany, belongsTo } from "miragejs";
import { createGraphQLHandler } from "@miragejs/graphql";
import { faker } from "@faker-js/faker";
import { MockServerConfig, MockServerType } from "./mockServer.types";
import { graphQLSchema } from "./graphQLSchema";

export const initMockServer = () => {
	const mockServerConfig: MockServerConfig = {
		models: {
			comment: Model.extend({
				card: belongsTo({
					inverse: "comments"
				})
			}),
			card: Model.extend({
				comments: hasMany("comment")
			})
		},
		seeds(server) {
			server.createList("comment", 2);
			server.create("card");
		},
		routes() {
			this.post("/graphql", createGraphQLHandler(graphQLSchema, this.schema));
		}
	};

	const mockServer: MockServerType = new Server(mockServerConfig);

	//@ts-expect-error ignore missing mockserver in window // make server available globally
	window.mockServer = mockServer;

	return mockServer;
};
