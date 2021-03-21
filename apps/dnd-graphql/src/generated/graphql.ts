import { GraphQLResolveInfo } from 'graphql';
import { IDType, ParentType } from '../libs/baseTypes';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  page?: Maybe<Page>;
  pages?: Maybe<Array<Maybe<Page>>>;
  block?: Maybe<Block>;
  _pages: Array<Maybe<Page>>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
};


export type QueryPagesArgs = {
  type?: Maybe<Scalars['String']>;
};


export type QueryBlockArgs = {
  id: Scalars['ID'];
};


export type Query_PagesArgs = {
  keys: Array<PageKey>;
};

export type Page = {
  __typename?: 'Page';
  id: Scalars['ID'];
  /** Blocks for this page */
  blocks?: Maybe<Array<Maybe<Block>>>;
  /** Slug to appear in the URL for this page */
  slug: Scalars['String'];
  /** The page type */
  type: Scalars['String'];
};

export type Parent = Page | ParentBlock;

export type Block = {
  id: Scalars['ID'];
  parent: Parent;
};

export enum StringBlockType {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  Paragraph = 'PARAGRAPH',
  Quote = 'QUOTE'
}

export type StringBlock = Block & {
  __typename?: 'StringBlock';
  id: Scalars['ID'];
  parent: Parent;
  content: Scalars['String'];
  type: StringBlockType;
};

export type ParentBlock = Block & {
  __typename?: 'ParentBlock';
  id: Scalars['ID'];
  parent: Parent;
  children: Array<Maybe<Block>>;
};

export type PageKey = {
  id: Scalars['ID'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Page: ResolverTypeWrapper<IDType>;
  Parent: ResolverTypeWrapper<ParentType>;
  Block: ResolverTypeWrapper<IDType>;
  StringBlockType: StringBlockType;
  StringBlock: ResolverTypeWrapper<Omit<StringBlock, 'parent'> & { parent: ResolversTypes['Parent'] }>;
  ParentBlock: ResolverTypeWrapper<Omit<ParentBlock, 'parent' | 'children'> & { parent: ResolversTypes['Parent'], children: Array<Maybe<ResolversTypes['Block']>> }>;
  PageKey: PageKey;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  ID: Scalars['ID'];
  String: Scalars['String'];
  Page: IDType;
  Parent: ParentType;
  Block: IDType;
  StringBlock: Omit<StringBlock, 'parent'> & { parent: ResolversParentTypes['Parent'] };
  ParentBlock: Omit<ParentBlock, 'parent' | 'children'> & { parent: ResolversParentTypes['Parent'], children: Array<Maybe<ResolversParentTypes['Block']>> };
  PageKey: PageKey;
  Boolean: Scalars['Boolean'];
}>;

export type QueryResolvers<ContextType = any, ParentType = ResolversParentTypes['Query']> = ResolversObject<{
  page?: Resolver<Maybe<ResolversTypes['Page']>, ParentType, ContextType, RequireFields<QueryPageArgs, 'id'>>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['Page']>>>, ParentType, ContextType, RequireFields<QueryPagesArgs, never>>;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<QueryBlockArgs, 'id'>>;
  _pages?: Resolver<Array<Maybe<ResolversTypes['Page']>>, ParentType, ContextType, RequireFields<Query_PagesArgs, 'keys'>>;
}>;

export type PageResolvers<ContextType = any, ParentType = ResolversParentTypes['Page']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  blocks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Block']>>>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParentResolvers<ContextType = any, ParentType = ResolversParentTypes['Parent']> = ResolversObject<{
  __resolveType: TypeResolveFn<'Page' | 'ParentBlock', ParentType, ContextType>;
}>;

export type BlockResolvers<ContextType = any, ParentType = ResolversParentTypes['Block']> = ResolversObject<{
  __resolveType: TypeResolveFn<'StringBlock' | 'ParentBlock', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<ResolversTypes['Parent'], ParentType, ContextType>;
}>;

export type StringBlockResolvers<ContextType = any, ParentType = ResolversParentTypes['StringBlock']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<ResolversTypes['Parent'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StringBlockType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ParentBlockResolvers<ContextType = any, ParentType = ResolversParentTypes['ParentBlock']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  parent?: Resolver<ResolversTypes['Parent'], ParentType, ContextType>;
  children?: Resolver<Array<Maybe<ResolversTypes['Block']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Page?: PageResolvers<ContextType>;
  Parent?: ParentResolvers<ContextType>;
  Block?: BlockResolvers<ContextType>;
  StringBlock?: StringBlockResolvers<ContextType>;
  ParentBlock?: ParentBlockResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
