
import { GraphbackCoreMetadata, GraphbackPlugin } from '@graphback/core'
import { GraphQLSchema } from 'graphql';

export interface MyBlankPluginOptions {
}

export const PLUGIN_NAME = "MyBlankPlugin";

export class MyBlankPlugin extends GraphbackPlugin {

    public constructor(pluginConfig?: MyBlankPluginOptions) {
        super()
    }

    public transformSchema(metadata: GraphbackCoreMetadata): GraphQLSchema {
    }

    public createResources(metadata: GraphbackCoreMetadata): void {
    }

    public getPluginName() {
        return PLUGIN_NAME;
    }
}
