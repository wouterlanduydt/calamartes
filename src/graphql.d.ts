export type Maybe<T> = T | null

export interface SitePageConnectionSort {
  fields: (Maybe<SitePageConnectionSortByFieldsEnum>)[]

  order?: SitePageConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterSitePage {
  jsonName?: Maybe<SitePageConnectionJsonNameQueryString>

  internalComponentName?: Maybe<SitePageConnectionInternalComponentNameQueryString>

  path?: Maybe<SitePageConnectionPathQueryString_2>

  component?: Maybe<SitePageConnectionComponentQueryString>

  componentChunkName?: Maybe<SitePageConnectionComponentChunkNameQueryString>

  pluginCreator?: Maybe<SitePageConnectionPluginCreatorInputObject>

  pluginCreatorId?: Maybe<SitePageConnectionPluginCreatorIdQueryString_2>

  componentPath?: Maybe<SitePageConnectionComponentPathQueryString>

  id?: Maybe<SitePageConnectionIdQueryString_2>

  internal?: Maybe<SitePageConnectionInternalInputObject_2>
}

export interface SitePageConnectionJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalComponentNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentChunkNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInputObject {
  resolve?: Maybe<SitePageConnectionPluginCreatorResolveQueryString>

  id?: Maybe<SitePageConnectionPluginCreatorIdQueryString>

  name?: Maybe<SitePageConnectionPluginCreatorNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorVersionQueryString>

  pluginOptions?: Maybe<SitePageConnectionPluginCreatorPluginOptionsInputObject>

  nodeAPIs?: Maybe<SitePageConnectionPluginCreatorNodeApIsQueryList>

  ssrAPIs?: Maybe<SitePageConnectionPluginCreatorSsrApIsQueryList>

  pluginFilepath?: Maybe<SitePageConnectionPluginCreatorPluginFilepathQueryString>

  packageJson?: Maybe<SitePageConnectionPluginCreatorPackageJsonInputObject>

  parent?: Maybe<SitePageConnectionPluginCreatorParentQueryString>

  internal?: Maybe<SitePageConnectionPluginCreatorInternalInputObject>
}

export interface SitePageConnectionPluginCreatorResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsInputObject {
  repositoryName?: Maybe<SitePageConnectionPluginCreatorPluginOptionsRepositoryNameQueryString>

  accessToken?: Maybe<SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString>

  lang?: Maybe<SitePageConnectionPluginCreatorPluginOptionsLangQueryString>

  username?: Maybe<SitePageConnectionPluginCreatorPluginOptionsUsernameQueryString>

  access_token?: Maybe<SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString_2>

  instagram_id?: Maybe<SitePageConnectionPluginCreatorPluginOptionsInstagramIdQueryString>

  fonts?: Maybe<SitePageConnectionPluginCreatorPluginOptionsFontsQueryList>

  name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsNameQueryString>

  path?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathQueryString>

  short_name?: Maybe<SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString>

  start_url?: Maybe<SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString>

  background_color?: Maybe<SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString>

  theme_color?: Maybe<SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString>

  display?: Maybe<SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString>

  icon?: Maybe<SitePageConnectionPluginCreatorPluginOptionsIconQueryString>

  env?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvInputObject>

  pathCheck?: Maybe<SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean>
}

export interface SitePageConnectionPluginCreatorPluginOptionsRepositoryNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsLangQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsUsernameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsAccessTokenQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsInstagramIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsFontsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsShortNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsStartUrlQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsThemeColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsDisplayQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsIconQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvInputObject {
  production?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvProductionInputObject>

  branch_deploy?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployInputObject>

  deploy_preview?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewInputObject>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvProductionInputObject {
  policy?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyQueryList>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyQueryList {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyInputObject>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyInputObject {
  userAgent?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyUserAgentQueryString>

  disallow?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyDisallowQueryList>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvProductionPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployInputObject {
  policy?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyQueryList>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyQueryList {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyInputObject>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyInputObject {
  userAgent?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyUserAgentQueryString>

  disallow?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyDisallowQueryList>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvBranchDeployPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewInputObject {
  policy?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyQueryList>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyQueryList {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyInputObject>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyInputObject {
  userAgent?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString>

  disallow?: Maybe<SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyDisallowQueryList>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsEnvDeployPreviewPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePageConnectionPluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonNameQueryString>

  description?: Maybe<SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonVersionQueryString>

  main?: Maybe<SitePageConnectionPluginCreatorPackageJsonMainQueryString>

  author?: Maybe<SitePageConnectionPluginCreatorPackageJsonAuthorQueryString>

  license?: Maybe<SitePageConnectionPluginCreatorPackageJsonLicenseQueryString>

  dependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList>

  devDependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList>

  peerDependencies?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList>

  keywords?: Maybe<SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList>
}

export interface SitePageConnectionPluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString>

  version?: Maybe<SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorParentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalInputObject {
  contentDigest?: Maybe<SitePageConnectionPluginCreatorInternalContentDigestQueryString>

  type?: Maybe<SitePageConnectionPluginCreatorInternalTypeQueryString>

  owner?: Maybe<SitePageConnectionPluginCreatorInternalOwnerQueryString>
}

export interface SitePageConnectionPluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionPluginCreatorIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionComponentPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalInputObject_2 {
  type?: Maybe<SitePageConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<SitePageConnectionInternalContentDigestQueryString_2>

  description?: Maybe<SitePageConnectionInternalDescriptionQueryString>

  owner?: Maybe<SitePageConnectionInternalOwnerQueryString_2>
}

export interface SitePageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionSort {
  fields: (Maybe<SitePluginConnectionSortByFieldsEnum>)[]

  order?: SitePluginConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterSitePlugin {
  resolve?: Maybe<SitePluginConnectionResolveQueryString_2>

  id?: Maybe<SitePluginConnectionIdQueryString_2>

  name?: Maybe<SitePluginConnectionNameQueryString_2>

  version?: Maybe<SitePluginConnectionVersionQueryString_2>

  pluginOptions?: Maybe<SitePluginConnectionPluginOptionsInputObject_2>

  nodeAPIs?: Maybe<SitePluginConnectionNodeApIsQueryList_2>

  ssrAPIs?: Maybe<SitePluginConnectionSsrApIsQueryList_2>

  pluginFilepath?: Maybe<SitePluginConnectionPluginFilepathQueryString_2>

  packageJson?: Maybe<SitePluginConnectionPackageJsonInputObject_2>

  internal?: Maybe<SitePluginConnectionInternalInputObject_2>
}

export interface SitePluginConnectionResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsInputObject_2 {
  repositoryName?: Maybe<SitePluginConnectionPluginOptionsRepositoryNameQueryString_2>

  accessToken?: Maybe<SitePluginConnectionPluginOptionsAccessTokenQueryString_3>

  lang?: Maybe<SitePluginConnectionPluginOptionsLangQueryString_2>

  username?: Maybe<SitePluginConnectionPluginOptionsUsernameQueryString_2>

  access_token?: Maybe<SitePluginConnectionPluginOptionsAccessTokenQueryString_4>

  instagram_id?: Maybe<SitePluginConnectionPluginOptionsInstagramIdQueryString_2>

  fonts?: Maybe<SitePluginConnectionPluginOptionsFontsQueryList_2>

  name?: Maybe<SitePluginConnectionPluginOptionsNameQueryString_2>

  path?: Maybe<SitePluginConnectionPluginOptionsPathQueryString_2>

  short_name?: Maybe<SitePluginConnectionPluginOptionsShortNameQueryString_2>

  start_url?: Maybe<SitePluginConnectionPluginOptionsStartUrlQueryString_2>

  background_color?: Maybe<SitePluginConnectionPluginOptionsBackgroundColorQueryString_2>

  theme_color?: Maybe<SitePluginConnectionPluginOptionsThemeColorQueryString_2>

  display?: Maybe<SitePluginConnectionPluginOptionsDisplayQueryString_2>

  icon?: Maybe<SitePluginConnectionPluginOptionsIconQueryString_2>

  env?: Maybe<SitePluginConnectionPluginOptionsEnvInputObject_2>

  pathCheck?: Maybe<SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2>
}

export interface SitePluginConnectionPluginOptionsRepositoryNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsAccessTokenQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsUsernameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsAccessTokenQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsInstagramIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsFontsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsShortNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsStartUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsThemeColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsDisplayQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsIconQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvInputObject_2 {
  production?: Maybe<SitePluginConnectionPluginOptionsEnvProductionInputObject_2>

  branch_deploy?: Maybe<SitePluginConnectionPluginOptionsEnvBranchDeployInputObject_2>

  deploy_preview?: Maybe<SitePluginConnectionPluginOptionsEnvDeployPreviewInputObject_2>
}

export interface SitePluginConnectionPluginOptionsEnvProductionInputObject_2 {
  policy?: Maybe<SitePluginConnectionPluginOptionsEnvProductionPolicyQueryList_2>
}

export interface SitePluginConnectionPluginOptionsEnvProductionPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsEnvProductionPolicyInputObject_2>
}

export interface SitePluginConnectionPluginOptionsEnvProductionPolicyInputObject_2 {
  userAgent?: Maybe<SitePluginConnectionPluginOptionsEnvProductionPolicyUserAgentQueryString_2>

  disallow?: Maybe<SitePluginConnectionPluginOptionsEnvProductionPolicyDisallowQueryList_2>
}

export interface SitePluginConnectionPluginOptionsEnvProductionPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvProductionPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvBranchDeployInputObject_2 {
  policy?: Maybe<SitePluginConnectionPluginOptionsEnvBranchDeployPolicyQueryList_2>
}

export interface SitePluginConnectionPluginOptionsEnvBranchDeployPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsEnvBranchDeployPolicyInputObject_2>
}

export interface SitePluginConnectionPluginOptionsEnvBranchDeployPolicyInputObject_2 {
  userAgent?: Maybe<SitePluginConnectionPluginOptionsEnvBranchDeployPolicyUserAgentQueryString_2>

  disallow?: Maybe<SitePluginConnectionPluginOptionsEnvBranchDeployPolicyDisallowQueryList_2>
}

export interface SitePluginConnectionPluginOptionsEnvBranchDeployPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvBranchDeployPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvDeployPreviewInputObject_2 {
  policy?: Maybe<SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyQueryList_2>
}

export interface SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyInputObject_2>
}

export interface SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyInputObject_2 {
  userAgent?: Maybe<SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString_2>

  disallow?: Maybe<SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyDisallowQueryList_2>
}

export interface SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsEnvDeployPreviewPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginConnectionNodeApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionSsrApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonNameQueryString_2>

  description?: Maybe<SitePluginConnectionPackageJsonDescriptionQueryString_2>

  version?: Maybe<SitePluginConnectionPackageJsonVersionQueryString_2>

  main?: Maybe<SitePluginConnectionPackageJsonMainQueryString_2>

  author?: Maybe<SitePluginConnectionPackageJsonAuthorQueryString_2>

  license?: Maybe<SitePluginConnectionPackageJsonLicenseQueryString_2>

  dependencies?: Maybe<SitePluginConnectionPackageJsonDependenciesQueryList_2>

  devDependencies?: Maybe<SitePluginConnectionPackageJsonDevDependenciesQueryList_2>

  peerDependencies?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesQueryList_2>

  keywords?: Maybe<SitePluginConnectionPackageJsonKeywordsQueryList_2>
}

export interface SitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDependenciesInputObject_2>
}

export interface SitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDependenciesNameQueryString_2>

  version?: Maybe<SitePluginConnectionPackageJsonDependenciesVersionQueryString_2>
}

export interface SitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonDevDependenciesInputObject_2>
}

export interface SitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2>

  version?: Maybe<SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2>
}

export interface SitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesInputObject_2>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2>

  version?: Maybe<SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginConnectionInternalContentDigestQueryString_2>

  type?: Maybe<SitePluginConnectionInternalTypeQueryString_2>

  owner?: Maybe<SitePluginConnectionInternalOwnerQueryString_2>
}

export interface SitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionSort {
  fields: (Maybe<PrismicPartnersPageConnectionSortByFieldsEnum>)[]

  order?: PrismicPartnersPageConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterPrismicPartnersPage {
  type?: Maybe<PrismicPartnersPageConnectionTypeQueryString_2>

  href?: Maybe<PrismicPartnersPageConnectionHrefQueryString_2>

  first_publication_date?: Maybe<PrismicPartnersPageConnectionFirstPublicationDateQueryString_2>

  last_publication_date?: Maybe<PrismicPartnersPageConnectionLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicPartnersPageConnectionSlugsQueryList_2>

  lang?: Maybe<PrismicPartnersPageConnectionLangQueryString_2>

  data?: Maybe<PrismicPartnersPageConnectionDataInputObject_2>

  prismicId?: Maybe<PrismicPartnersPageConnectionPrismicIdQueryString_2>

  id?: Maybe<PrismicPartnersPageConnectionIdQueryString_2>

  internal?: Maybe<PrismicPartnersPageConnectionInternalInputObject_2>

  dataString?: Maybe<PrismicPartnersPageConnectionDataStringQueryString_2>
}

export interface PrismicPartnersPageConnectionTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataInputObject_2 {
  partners_header_image?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageInputObject_2>

  partners_title?: Maybe<PrismicPartnersPageConnectionDataPartnersTitleQueryString_2>

  partners_subtitle?: Maybe<PrismicPartnersPageConnectionDataPartnersSubtitleQueryString_2>

  partners_cta_title?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaTitleQueryString_2>

  partners_cta_link?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkInputObject_2>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageInputObject_2 {
  dimensions?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageDimensionsInputObject_2>

  alt?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageAltQueryString_2>

  copyright?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageCopyrightQueryString_2>

  url?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageUrlQueryString_2>

  localFile?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInputObject_2>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageDimensionsInputObject_2 {
  width?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageDimensionsHeightQueryInteger_2>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInputObject_2 {
  id?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<
    PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileSourceInstanceNameQueryString_2
  >

  absolutePath?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersHeaderImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersSubtitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkInputObject_2 {
  html?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkHtmlQueryString_2>

  text?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkTextQueryString_2>

  raw?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawQueryList_2>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawQueryList_2 {
  elemMatch?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawInputObject_2>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawInputObject_2 {
  type?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawTypeQueryString_2>

  text?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawTextQueryString_2>

  spans?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansQueryList_2>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansQueryList_2 {
  elemMatch?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansInputObject_2>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansInputObject_2 {
  start?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansStartQueryInteger_2>

  end?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansEndQueryInteger_2>

  type?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansTypeQueryString_2>

  data?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansDataInputObject_2>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansStartQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansEndQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansDataInputObject_2 {
  link_type?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansDataLinkTypeQueryString_2>

  url?: Maybe<PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansDataUrlQueryString_2>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansDataLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataPartnersCtaLinkRawSpansDataUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionPrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionInternalInputObject_2 {
  type?: Maybe<PrismicPartnersPageConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicPartnersPageConnectionInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicPartnersPageConnectionInternalOwnerQueryString_2>
}

export interface PrismicPartnersPageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageConnectionDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DuotoneGradient {
  highlight?: Maybe<string>

  shadow?: Maybe<string>

  opacity?: Maybe<number>
}

export interface Potrace {
  turnPolicy?: Maybe<PotraceTurnPolicy>

  turdSize?: Maybe<number>

  alphaMax?: Maybe<number>

  optCurve?: Maybe<boolean>

  optTolerance?: Maybe<number>

  threshold?: Maybe<number>

  blackOnWhite?: Maybe<boolean>

  color?: Maybe<string>

  background?: Maybe<string>
}

export interface PrismicGeneralConnectionSort {
  fields: (Maybe<PrismicGeneralConnectionSortByFieldsEnum>)[]

  order?: PrismicGeneralConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterPrismicGeneral {
  type?: Maybe<PrismicGeneralConnectionTypeQueryString_2>

  href?: Maybe<PrismicGeneralConnectionHrefQueryString_2>

  first_publication_date?: Maybe<PrismicGeneralConnectionFirstPublicationDateQueryString_2>

  last_publication_date?: Maybe<PrismicGeneralConnectionLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicGeneralConnectionSlugsQueryList_2>

  lang?: Maybe<PrismicGeneralConnectionLangQueryString_2>

  data?: Maybe<PrismicGeneralConnectionDataInputObject_2>

  prismicId?: Maybe<PrismicGeneralConnectionPrismicIdQueryString_2>

  id?: Maybe<PrismicGeneralConnectionIdQueryString_2>

  internal?: Maybe<PrismicGeneralConnectionInternalInputObject_2>

  dataString?: Maybe<PrismicGeneralConnectionDataStringQueryString_2>
}

export interface PrismicGeneralConnectionTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataInputObject_2 {
  main_color?: Maybe<PrismicGeneralConnectionDataMainColorQueryString_2>

  start_date?: Maybe<PrismicGeneralConnectionDataStartDateQueryString_2>

  end_date?: Maybe<PrismicGeneralConnectionDataEndDateQueryString_2>

  location?: Maybe<PrismicGeneralConnectionDataLocationQueryString_2>

  facebook_link?: Maybe<PrismicGeneralConnectionDataFacebookLinkInputObject_2>

  instagram_link?: Maybe<PrismicGeneralConnectionDataInstagramLinkInputObject_2>

  email?: Maybe<PrismicGeneralConnectionDataEmailQueryString_2>

  unifac_website?: Maybe<PrismicGeneralConnectionDataUnifacWebsiteInputObject_2>
}

export interface PrismicGeneralConnectionDataMainColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataStartDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataEndDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataLocationQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataFacebookLinkInputObject_2 {
  link_type?: Maybe<PrismicGeneralConnectionDataFacebookLinkLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralConnectionDataFacebookLinkUrlQueryString_2>

  target?: Maybe<PrismicGeneralConnectionDataFacebookLinkTargetQueryString_2>

  raw?: Maybe<PrismicGeneralConnectionDataFacebookLinkRawInputObject_2>
}

export interface PrismicGeneralConnectionDataFacebookLinkLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataFacebookLinkUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataFacebookLinkTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataFacebookLinkRawInputObject_2 {
  link_type?: Maybe<PrismicGeneralConnectionDataFacebookLinkRawLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralConnectionDataFacebookLinkRawUrlQueryString_2>
}

export interface PrismicGeneralConnectionDataFacebookLinkRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataFacebookLinkRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataInstagramLinkInputObject_2 {
  link_type?: Maybe<PrismicGeneralConnectionDataInstagramLinkLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralConnectionDataInstagramLinkUrlQueryString_2>

  target?: Maybe<PrismicGeneralConnectionDataInstagramLinkTargetQueryString_2>

  raw?: Maybe<PrismicGeneralConnectionDataInstagramLinkRawInputObject_2>
}

export interface PrismicGeneralConnectionDataInstagramLinkLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataInstagramLinkUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataInstagramLinkTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataInstagramLinkRawInputObject_2 {
  link_type?: Maybe<PrismicGeneralConnectionDataInstagramLinkRawLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralConnectionDataInstagramLinkRawUrlQueryString_2>
}

export interface PrismicGeneralConnectionDataInstagramLinkRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataInstagramLinkRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataEmailQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataUnifacWebsiteInputObject_2 {
  link_type?: Maybe<PrismicGeneralConnectionDataUnifacWebsiteLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralConnectionDataUnifacWebsiteUrlQueryString_2>

  target?: Maybe<PrismicGeneralConnectionDataUnifacWebsiteTargetQueryString_2>

  raw?: Maybe<PrismicGeneralConnectionDataUnifacWebsiteRawInputObject_2>
}

export interface PrismicGeneralConnectionDataUnifacWebsiteLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataUnifacWebsiteUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataUnifacWebsiteTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataUnifacWebsiteRawInputObject_2 {
  link_type?: Maybe<PrismicGeneralConnectionDataUnifacWebsiteRawLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralConnectionDataUnifacWebsiteRawUrlQueryString_2>
}

export interface PrismicGeneralConnectionDataUnifacWebsiteRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataUnifacWebsiteRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionPrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionInternalInputObject_2 {
  type?: Maybe<PrismicGeneralConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicGeneralConnectionInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicGeneralConnectionInternalOwnerQueryString_2>
}

export interface PrismicGeneralConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralConnectionDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSort {
  fields: (Maybe<FileConnectionSortByFieldsEnum>)[]

  order?: FileConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterFile {
  id?: Maybe<FileConnectionIdQueryString_2>

  internal?: Maybe<FileConnectionInternalInputObject_2>

  sourceInstanceName?: Maybe<FileConnectionSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<FileConnectionAbsolutePathQueryString_2>

  relativePath?: Maybe<FileConnectionRelativePathQueryString_2>

  extension?: Maybe<FileConnectionExtensionQueryString_2>

  size?: Maybe<FileConnectionSizeQueryInteger_2>

  prettySize?: Maybe<FileConnectionPrettySizeQueryString_2>

  modifiedTime?: Maybe<FileConnectionModifiedTimeQueryString_2>

  accessTime?: Maybe<FileConnectionAccessTimeQueryString_2>

  changeTime?: Maybe<FileConnectionChangeTimeQueryString_2>

  birthTime?: Maybe<FileConnectionBirthTimeQueryString_2>

  root?: Maybe<FileConnectionRootQueryString_2>

  dir?: Maybe<FileConnectionDirQueryString_2>

  base?: Maybe<FileConnectionBaseQueryString_2>

  ext?: Maybe<FileConnectionExtQueryString_2>

  name?: Maybe<FileConnectionNameQueryString_2>

  relativeDirectory?: Maybe<FileConnectionRelativeDirectoryQueryString_2>

  dev?: Maybe<FileConnectionDevQueryInteger_2>

  mode?: Maybe<FileConnectionModeQueryInteger_2>

  nlink?: Maybe<FileConnectionNlinkQueryInteger_2>

  uid?: Maybe<FileConnectionUidQueryInteger_2>

  gid?: Maybe<FileConnectionGidQueryInteger_2>

  rdev?: Maybe<FileConnectionRdevQueryInteger_2>

  blksize?: Maybe<FileConnectionBlksizeQueryInteger_2>

  ino?: Maybe<FileConnectionInoQueryInteger_2>

  blocks?: Maybe<FileConnectionBlocksQueryInteger_2>

  atimeMs?: Maybe<FileConnectionAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<FileConnectionMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<FileConnectionCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<FileConnectionBirthtimeMsQueryFloat_2>

  atime?: Maybe<FileConnectionAtimeQueryString_2>

  mtime?: Maybe<FileConnectionMtimeQueryString_2>

  ctime?: Maybe<FileConnectionCtimeQueryString_2>

  birthtime?: Maybe<FileConnectionBirthtimeQueryString_2>

  publicURL?: Maybe<PublicUrlQueryString_4>
}

export interface FileConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalInputObject_2 {
  contentDigest?: Maybe<FileConnectionInternalContentDigestQueryString_2>

  type?: Maybe<FileConnectionInternalTypeQueryString_2>

  mediaType?: Maybe<FileConnectionInternalMediaTypeQueryString_2>

  description?: Maybe<FileConnectionInternalDescriptionQueryString_2>

  owner?: Maybe<FileConnectionInternalOwnerQueryString_2>
}

export interface FileConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileConnectionAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PublicUrlQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpConnectionSort {
  fields: (Maybe<ImageSharpConnectionSortByFieldsEnum>)[]

  order?: ImageSharpConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterImageSharp {
  id?: Maybe<ImageSharpConnectionIdQueryString_2>

  internal?: Maybe<ImageSharpConnectionInternalInputObject_2>

  fixed?: Maybe<FixedTypeName_4>

  resolutions?: Maybe<ResolutionsTypeName_4>

  fluid?: Maybe<FluidTypeName_4>

  sizes?: Maybe<SizesTypeName_4>

  original?: Maybe<OriginalTypeName_4>

  resize?: Maybe<ResizeTypeName_4>
}

export interface ImageSharpConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpConnectionInternalInputObject_2 {
  contentDigest?: Maybe<ImageSharpConnectionInternalContentDigestQueryString_2>

  type?: Maybe<ImageSharpConnectionInternalTypeQueryString_2>

  owner?: Maybe<ImageSharpConnectionInternalOwnerQueryString_2>
}

export interface ImageSharpConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTypeName_4 {
  base64?: Maybe<FixedBase64QueryString_4>

  tracedSVG?: Maybe<FixedTracedSvgQueryString_4>

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_4>

  width?: Maybe<FixedWidthQueryFloat_4>

  height?: Maybe<FixedHeightQueryFloat_4>

  src?: Maybe<FixedSrcQueryString_4>

  srcSet?: Maybe<FixedSrcSetQueryString_4>

  srcWebp?: Maybe<FixedSrcWebpQueryString_4>

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_4>

  originalName?: Maybe<FixedOriginalNameQueryString_4>
}

export interface FixedBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedWidthQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedHeightQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTypeName_4 {
  base64?: Maybe<ResolutionsBase64QueryString_4>

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_4>

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_4>

  width?: Maybe<ResolutionsWidthQueryFloat_4>

  height?: Maybe<ResolutionsHeightQueryFloat_4>

  src?: Maybe<ResolutionsSrcQueryString_4>

  srcSet?: Maybe<ResolutionsSrcSetQueryString_4>

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_4>

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_4>

  originalName?: Maybe<ResolutionsOriginalNameQueryString_4>
}

export interface ResolutionsBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsWidthQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsHeightQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTypeName_4 {
  base64?: Maybe<FluidBase64QueryString_4>

  tracedSVG?: Maybe<FluidTracedSvgQueryString_4>

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_4>

  src?: Maybe<FluidSrcQueryString_4>

  srcSet?: Maybe<FluidSrcSetQueryString_4>

  srcWebp?: Maybe<FluidSrcWebpQueryString_4>

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_4>

  sizes?: Maybe<FluidSizesQueryString_4>

  originalImg?: Maybe<FluidOriginalImgQueryString_4>

  originalName?: Maybe<FluidOriginalNameQueryString_4>

  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_4>

  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_4>
}

export interface FluidBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSizesQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalImgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidPresentationWidthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidPresentationHeightQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesTypeName_4 {
  base64?: Maybe<SizesBase64QueryString_4>

  tracedSVG?: Maybe<SizesTracedSvgQueryString_4>

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_4>

  src?: Maybe<SizesSrcQueryString_4>

  srcSet?: Maybe<SizesSrcSetQueryString_4>

  srcWebp?: Maybe<SizesSrcWebpQueryString_4>

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_4>

  sizes?: Maybe<SizesSizesQueryString_4>

  originalImg?: Maybe<SizesOriginalImgQueryString_4>

  originalName?: Maybe<SizesOriginalNameQueryString_4>

  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_4>

  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_4>
}

export interface SizesBase64QueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetWebpQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSizesQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalImgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesPresentationWidthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesPresentationHeightQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalTypeName_4 {
  width?: Maybe<OriginalWidthQueryFloat_4>

  height?: Maybe<OriginalHeightQueryFloat_4>

  src?: Maybe<OriginalSrcQueryString_4>
}

export interface OriginalWidthQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalHeightQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTypeName_4 {
  src?: Maybe<ResizeSrcQueryString_4>

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_4>

  width?: Maybe<ResizeWidthQueryInt_4>

  height?: Maybe<ResizeHeightQueryInt_4>

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_4>

  originalName?: Maybe<ResizeOriginalNameQueryString_4>
}

export interface ResizeSrcQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTracedSvgQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeWidthQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeHeightQueryInt_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeAspectRatioQueryFloat_4 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeOriginalNameQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionSort {
  fields: (Maybe<PrismicPartnerConnectionSortByFieldsEnum>)[]

  order?: PrismicPartnerConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterPrismicPartner {
  type?: Maybe<PrismicPartnerConnectionTypeQueryString_2>

  href?: Maybe<PrismicPartnerConnectionHrefQueryString_2>

  first_publication_date?: Maybe<PrismicPartnerConnectionFirstPublicationDateQueryString_2>

  last_publication_date?: Maybe<PrismicPartnerConnectionLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicPartnerConnectionSlugsQueryList_2>

  lang?: Maybe<PrismicPartnerConnectionLangQueryString_2>

  data?: Maybe<PrismicPartnerConnectionDataInputObject_2>

  prismicId?: Maybe<PrismicPartnerConnectionPrismicIdQueryString_2>

  id?: Maybe<PrismicPartnerConnectionIdQueryString_2>

  internal?: Maybe<PrismicPartnerConnectionInternalInputObject_2>

  dataString?: Maybe<PrismicPartnerConnectionDataStringQueryString_2>
}

export interface PrismicPartnerConnectionTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataInputObject_2 {
  name?: Maybe<PrismicPartnerConnectionDataNameQueryString_2>

  image?: Maybe<PrismicPartnerConnectionDataImageInputObject_2>

  type?: Maybe<PrismicPartnerConnectionDataTypeQueryString_2>

  link?: Maybe<PrismicPartnerConnectionDataLinkInputObject_2>

  importance?: Maybe<PrismicPartnerConnectionDataImportanceQueryInteger_2>

  description?: Maybe<PrismicPartnerConnectionDataDescriptionQueryString_2>
}

export interface PrismicPartnerConnectionDataNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageInputObject_2 {
  dimensions?: Maybe<PrismicPartnerConnectionDataImageDimensionsInputObject_2>

  alt?: Maybe<PrismicPartnerConnectionDataImageAltQueryString_2>

  copyright?: Maybe<PrismicPartnerConnectionDataImageCopyrightQueryString_2>

  url?: Maybe<PrismicPartnerConnectionDataImageUrlQueryString_2>

  localFile?: Maybe<PrismicPartnerConnectionDataImageLocalFileInputObject_2>
}

export interface PrismicPartnerConnectionDataImageDimensionsInputObject_2 {
  width?: Maybe<PrismicPartnerConnectionDataImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicPartnerConnectionDataImageDimensionsHeightQueryInteger_2>
}

export interface PrismicPartnerConnectionDataImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInputObject_2 {
  id?: Maybe<PrismicPartnerConnectionDataImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicPartnerConnectionDataImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicPartnerConnectionDataImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicPartnerConnectionDataImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicPartnerConnectionDataImageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicPartnerConnectionDataImageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicPartnerConnectionDataImageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicPartnerConnectionDataImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicPartnerConnectionDataImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicPartnerConnectionDataImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicPartnerConnectionDataImageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicPartnerConnectionDataImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicPartnerConnectionDataImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicPartnerConnectionDataImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicPartnerConnectionDataImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicPartnerConnectionDataImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicPartnerConnectionDataImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicPartnerConnectionDataImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicPartnerConnectionDataImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicPartnerConnectionDataImageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicPartnerConnectionDataImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicPartnerConnectionDataImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicPartnerConnectionDataImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicPartnerConnectionDataImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicPartnerConnectionDataImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicPartnerConnectionDataImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicPartnerConnectionDataImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicPartnerConnectionDataImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicPartnerConnectionDataImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicPartnerConnectionDataImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicPartnerConnectionDataImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicPartnerConnectionDataImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicPartnerConnectionDataImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicPartnerConnectionDataImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicPartnerConnectionDataImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicPartnerConnectionDataImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicPartnerConnectionDataImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicPartnerConnectionDataImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicPartnerConnectionDataImageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicPartnerConnectionDataImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicPartnerConnectionDataImageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicPartnerConnectionDataImageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicPartnerConnectionDataImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkInputObject_2 {
  link_type?: Maybe<PrismicPartnerConnectionDataLinkLinkTypeQueryString_2>

  url?: Maybe<PrismicPartnerConnectionDataLinkUrlQueryString_2>

  target?: Maybe<PrismicPartnerConnectionDataLinkTargetQueryString_2>

  raw?: Maybe<PrismicPartnerConnectionDataLinkRawInputObject_2>
}

export interface PrismicPartnerConnectionDataLinkLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkRawInputObject_2 {
  link_type?: Maybe<PrismicPartnerConnectionDataLinkRawLinkTypeQueryString_2>

  url?: Maybe<PrismicPartnerConnectionDataLinkRawUrlQueryString_2>

  target?: Maybe<PrismicPartnerConnectionDataLinkRawTargetQueryString_2>
}

export interface PrismicPartnerConnectionDataLinkRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataLinkRawTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataImportanceQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerConnectionDataDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionPrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionInternalInputObject_2 {
  type?: Maybe<PrismicPartnerConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicPartnerConnectionInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicPartnerConnectionInternalOwnerQueryString_2>
}

export interface PrismicPartnerConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerConnectionDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionSort {
  fields: (Maybe<PrismicHomepageConnectionSortByFieldsEnum>)[]

  order?: PrismicHomepageConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterPrismicHomepage {
  type?: Maybe<PrismicHomepageConnectionTypeQueryString_2>

  href?: Maybe<PrismicHomepageConnectionHrefQueryString_2>

  first_publication_date?: Maybe<PrismicHomepageConnectionFirstPublicationDateQueryString_2>

  last_publication_date?: Maybe<PrismicHomepageConnectionLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicHomepageConnectionSlugsQueryList_2>

  lang?: Maybe<PrismicHomepageConnectionLangQueryString_2>

  data?: Maybe<PrismicHomepageConnectionDataInputObject_2>

  prismicId?: Maybe<PrismicHomepageConnectionPrismicIdQueryString_2>

  id?: Maybe<PrismicHomepageConnectionIdQueryString_2>

  internal?: Maybe<PrismicHomepageConnectionInternalInputObject_2>

  dataString?: Maybe<PrismicHomepageConnectionDataStringQueryString_2>
}

export interface PrismicHomepageConnectionTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataInputObject_2 {
  header_movie?: Maybe<PrismicHomepageConnectionDataHeaderMovieInputObject_2>

  intro_text?: Maybe<PrismicHomepageConnectionDataIntroTextInputObject_2>

  intro_button_text?: Maybe<PrismicHomepageConnectionDataIntroButtonTextQueryString_2>

  intro_image?: Maybe<PrismicHomepageConnectionDataIntroImageInputObject_2>

  carousel_images?: Maybe<PrismicHomepageConnectionDataCarouselImagesQueryList_2>

  pictures_main_picture?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureInputObject_2>

  pictures_secondary_picture?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureInputObject_2>

  social_title?: Maybe<PrismicHomepageConnectionDataSocialTitleQueryString_2>

  social_description?: Maybe<PrismicHomepageConnectionDataSocialDescriptionInputObject_2>

  partnercta_title?: Maybe<PrismicHomepageConnectionDataPartnerctaTitleQueryString_2>

  partnercta_description?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionInputObject_2>

  partnercta_button_text?: Maybe<PrismicHomepageConnectionDataPartnerctaButtonTextQueryString_2>

  partnercta_bgimage?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageInputObject_2>
}

export interface PrismicHomepageConnectionDataHeaderMovieInputObject_2 {
  link_type?: Maybe<PrismicHomepageConnectionDataHeaderMovieLinkTypeQueryString_2>

  name?: Maybe<PrismicHomepageConnectionDataHeaderMovieNameQueryString_2>

  kind?: Maybe<PrismicHomepageConnectionDataHeaderMovieKindQueryString_2>

  url?: Maybe<PrismicHomepageConnectionDataHeaderMovieUrlQueryString_2>

  size?: Maybe<PrismicHomepageConnectionDataHeaderMovieSizeQueryString_2>

  target?: Maybe<PrismicHomepageConnectionDataHeaderMovieTargetQueryString_2>

  raw?: Maybe<PrismicHomepageConnectionDataHeaderMovieRawInputObject_2>
}

export interface PrismicHomepageConnectionDataHeaderMovieLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataHeaderMovieNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataHeaderMovieKindQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataHeaderMovieUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataHeaderMovieSizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataHeaderMovieTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataHeaderMovieRawInputObject_2 {
  link_type?: Maybe<PrismicHomepageConnectionDataHeaderMovieRawLinkTypeQueryString_2>

  name?: Maybe<PrismicHomepageConnectionDataHeaderMovieRawNameQueryString_2>

  kind?: Maybe<PrismicHomepageConnectionDataHeaderMovieRawKindQueryString_2>

  url?: Maybe<PrismicHomepageConnectionDataHeaderMovieRawUrlQueryString_2>

  size?: Maybe<PrismicHomepageConnectionDataHeaderMovieRawSizeQueryString_2>
}

export interface PrismicHomepageConnectionDataHeaderMovieRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataHeaderMovieRawNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataHeaderMovieRawKindQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataHeaderMovieRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataHeaderMovieRawSizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroTextInputObject_2 {
  html?: Maybe<PrismicHomepageConnectionDataIntroTextHtmlQueryString_2>

  text?: Maybe<PrismicHomepageConnectionDataIntroTextTextQueryString_2>

  raw?: Maybe<PrismicHomepageConnectionDataIntroTextRawQueryList_2>
}

export interface PrismicHomepageConnectionDataIntroTextHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroTextTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroTextRawQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageConnectionDataIntroTextRawInputObject_2>
}

export interface PrismicHomepageConnectionDataIntroTextRawInputObject_2 {
  type?: Maybe<PrismicHomepageConnectionDataIntroTextRawTypeQueryString_2>

  text?: Maybe<PrismicHomepageConnectionDataIntroTextRawTextQueryString_2>

  spans?: Maybe<PrismicHomepageConnectionDataIntroTextRawSpansQueryList_2>
}

export interface PrismicHomepageConnectionDataIntroTextRawTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroTextRawTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroTextRawSpansQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageConnectionDataIntroTextRawSpansInputObject_2>
}

export interface PrismicHomepageConnectionDataIntroTextRawSpansInputObject_2 {
  start?: Maybe<PrismicHomepageConnectionDataIntroTextRawSpansStartQueryInteger_2>

  end?: Maybe<PrismicHomepageConnectionDataIntroTextRawSpansEndQueryInteger_2>

  type?: Maybe<PrismicHomepageConnectionDataIntroTextRawSpansTypeQueryString_2>
}

export interface PrismicHomepageConnectionDataIntroTextRawSpansStartQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroTextRawSpansEndQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroTextRawSpansTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroButtonTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageInputObject_2 {
  dimensions?: Maybe<PrismicHomepageConnectionDataIntroImageDimensionsInputObject_2>

  alt?: Maybe<PrismicHomepageConnectionDataIntroImageAltQueryString_2>

  copyright?: Maybe<PrismicHomepageConnectionDataIntroImageCopyrightQueryString_2>

  url?: Maybe<PrismicHomepageConnectionDataIntroImageUrlQueryString_2>

  localFile?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileInputObject_2>
}

export interface PrismicHomepageConnectionDataIntroImageDimensionsInputObject_2 {
  width?: Maybe<PrismicHomepageConnectionDataIntroImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicHomepageConnectionDataIntroImageDimensionsHeightQueryInteger_2>
}

export interface PrismicHomepageConnectionDataIntroImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileInputObject_2 {
  id?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicHomepageConnectionDataIntroImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataIntroImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageConnectionDataCarouselImagesInputObject_2>
}

export interface PrismicHomepageConnectionDataCarouselImagesInputObject_2 {
  image?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageInputObject_2>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageInputObject_2 {
  dimensions?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageDimensionsInputObject_2>

  alt?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageAltQueryString_2>

  copyright?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageCopyrightQueryString_2>

  url?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageUrlQueryString_2>

  localFile?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileInputObject_2>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageDimensionsInputObject_2 {
  width?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageDimensionsHeightQueryInteger_2>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileInputObject_2 {
  id?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataCarouselImagesImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureInputObject_2 {
  dimensions?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureDimensionsInputObject_2>

  alt?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureAltQueryString_2>

  copyright?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureCopyrightQueryString_2>

  url?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureUrlQueryString_2>

  localFile?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileInputObject_2>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureDimensionsInputObject_2 {
  width?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureDimensionsHeightQueryInteger_2>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileInputObject_2 {
  id?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileIdQueryString_2>

  children?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileParentQueryString_2>

  internal?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileRootQueryString_2>

  dir?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileDirQueryString_2>

  base?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileExtQueryString_2>

  name?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileBirthtimeQueryString_2>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalOwnerQueryString_2>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesMainPictureLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureInputObject_2 {
  dimensions?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureDimensionsInputObject_2>

  alt?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureAltQueryString_2>

  copyright?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureCopyrightQueryString_2>

  url?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureUrlQueryString_2>

  localFile?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInputObject_2>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureDimensionsInputObject_2 {
  width?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureDimensionsHeightQueryInteger_2>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInputObject_2 {
  id?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileIdQueryString_2>

  children?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileParentQueryString_2>

  internal?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<
    PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileSourceInstanceNameQueryString_2
  >

  absolutePath?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileRootQueryString_2>

  dir?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileDirQueryString_2>

  base?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileExtQueryString_2>

  name?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<
    PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileRelativeDirectoryQueryString_2
  >

  dev?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBirthtimeQueryString_2>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<
    PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalContentDigestQueryString_2
  >

  type?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalOwnerQueryString_2>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPicturesSecondaryPictureLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataSocialTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataSocialDescriptionInputObject_2 {
  html?: Maybe<PrismicHomepageConnectionDataSocialDescriptionHtmlQueryString_2>

  text?: Maybe<PrismicHomepageConnectionDataSocialDescriptionTextQueryString_2>

  raw?: Maybe<PrismicHomepageConnectionDataSocialDescriptionRawQueryList_2>
}

export interface PrismicHomepageConnectionDataSocialDescriptionHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataSocialDescriptionTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataSocialDescriptionRawQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageConnectionDataSocialDescriptionRawInputObject_2>
}

export interface PrismicHomepageConnectionDataSocialDescriptionRawInputObject_2 {
  type?: Maybe<PrismicHomepageConnectionDataSocialDescriptionRawTypeQueryString_2>

  text?: Maybe<PrismicHomepageConnectionDataSocialDescriptionRawTextQueryString_2>
}

export interface PrismicHomepageConnectionDataSocialDescriptionRawTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataSocialDescriptionRawTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionInputObject_2 {
  html?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionHtmlQueryString_2>

  text?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionTextQueryString_2>

  raw?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawQueryList_2>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawInputObject_2>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawInputObject_2 {
  type?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawTypeQueryString_2>

  text?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawTextQueryString_2>

  spans?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansQueryList_2>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansInputObject_2>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansInputObject_2 {
  start?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansStartQueryInteger_2>

  end?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansEndQueryInteger_2>

  type?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansTypeQueryString_2>

  data?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansDataInputObject_2>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansStartQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansEndQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansDataInputObject_2 {
  link_type?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansDataLinkTypeQueryString_2>

  url?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansDataUrlQueryString_2>

  target?: Maybe<PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansDataTargetQueryString_2>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansDataLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansDataUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaDescriptionRawSpansDataTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaButtonTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageInputObject_2 {
  dimensions?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageDimensionsInputObject_2>

  alt?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageAltQueryString_2>

  copyright?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageCopyrightQueryString_2>

  url?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageUrlQueryString_2>

  localFile?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInputObject_2>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageDimensionsInputObject_2 {
  width?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageDimensionsHeightQueryInteger_2>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInputObject_2 {
  id?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileIdQueryString_2>

  children?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileDirQueryString_2>

  base?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileExtQueryString_2>

  name?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBirthtimeQueryString_2>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataPartnerctaBgimageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionPrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionInternalInputObject_2 {
  type?: Maybe<PrismicHomepageConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicHomepageConnectionInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicHomepageConnectionInternalOwnerQueryString_2>
}

export interface PrismicHomepageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageConnectionDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionSort {
  fields: (Maybe<InstaNodeConnectionSortByFieldsEnum>)[]

  order?: InstaNodeConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterInstaNode {
  id?: Maybe<InstaNodeConnectionIdQueryString_2>

  internal?: Maybe<InstaNodeConnectionInternalInputObject_2>

  likes?: Maybe<InstaNodeConnectionLikesQueryInteger_2>

  thumbnails?: Maybe<InstaNodeConnectionThumbnailsQueryList_2>

  original?: Maybe<InstaNodeConnectionOriginalQueryString_2>

  timestamp?: Maybe<InstaNodeConnectionTimestampQueryInteger_2>

  dimensions?: Maybe<InstaNodeConnectionDimensionsInputObject_2>

  comments?: Maybe<InstaNodeConnectionCommentsQueryInteger_2>

  localFile?: Maybe<InstaNodeConnectionLocalFileInputObject_2>
}

export interface InstaNodeConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionInternalInputObject_2 {
  type?: Maybe<InstaNodeConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<InstaNodeConnectionInternalContentDigestQueryString_2>

  owner?: Maybe<InstaNodeConnectionInternalOwnerQueryString_2>
}

export interface InstaNodeConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLikesQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionThumbnailsQueryList_2 {
  elemMatch?: Maybe<InstaNodeConnectionThumbnailsInputObject_2>
}

export interface InstaNodeConnectionThumbnailsInputObject_2 {
  src?: Maybe<InstaNodeConnectionThumbnailsSrcQueryString_2>

  config_width?: Maybe<InstaNodeConnectionThumbnailsConfigWidthQueryInteger_2>

  config_height?: Maybe<InstaNodeConnectionThumbnailsConfigHeightQueryInteger_2>
}

export interface InstaNodeConnectionThumbnailsSrcQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionThumbnailsConfigWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionThumbnailsConfigHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionOriginalQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionTimestampQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionDimensionsInputObject_2 {
  height?: Maybe<InstaNodeConnectionDimensionsHeightQueryInteger_2>

  width?: Maybe<InstaNodeConnectionDimensionsWidthQueryInteger_2>
}

export interface InstaNodeConnectionDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionCommentsQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileInputObject_2 {
  id?: Maybe<InstaNodeConnectionLocalFileIdQueryString_2>

  children?: Maybe<InstaNodeConnectionLocalFileChildrenQueryList_2>

  parent?: Maybe<InstaNodeConnectionLocalFileParentQueryString_2>

  internal?: Maybe<InstaNodeConnectionLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<InstaNodeConnectionLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<InstaNodeConnectionLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<InstaNodeConnectionLocalFileRelativePathQueryString_2>

  extension?: Maybe<InstaNodeConnectionLocalFileExtensionQueryString_2>

  size?: Maybe<InstaNodeConnectionLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<InstaNodeConnectionLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<InstaNodeConnectionLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<InstaNodeConnectionLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<InstaNodeConnectionLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<InstaNodeConnectionLocalFileBirthTimeQueryString_2>

  root?: Maybe<InstaNodeConnectionLocalFileRootQueryString_2>

  dir?: Maybe<InstaNodeConnectionLocalFileDirQueryString_2>

  base?: Maybe<InstaNodeConnectionLocalFileBaseQueryString_2>

  ext?: Maybe<InstaNodeConnectionLocalFileExtQueryString_2>

  name?: Maybe<InstaNodeConnectionLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<InstaNodeConnectionLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<InstaNodeConnectionLocalFileDevQueryInteger_2>

  mode?: Maybe<InstaNodeConnectionLocalFileModeQueryInteger_2>

  nlink?: Maybe<InstaNodeConnectionLocalFileNlinkQueryInteger_2>

  uid?: Maybe<InstaNodeConnectionLocalFileUidQueryInteger_2>

  gid?: Maybe<InstaNodeConnectionLocalFileGidQueryInteger_2>

  rdev?: Maybe<InstaNodeConnectionLocalFileRdevQueryInteger_2>

  blksize?: Maybe<InstaNodeConnectionLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<InstaNodeConnectionLocalFileInoQueryInteger_2>

  blocks?: Maybe<InstaNodeConnectionLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<InstaNodeConnectionLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<InstaNodeConnectionLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<InstaNodeConnectionLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<InstaNodeConnectionLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<InstaNodeConnectionLocalFileAtimeQueryString_2>

  mtime?: Maybe<InstaNodeConnectionLocalFileMtimeQueryString_2>

  ctime?: Maybe<InstaNodeConnectionLocalFileCtimeQueryString_2>

  birthtime?: Maybe<InstaNodeConnectionLocalFileBirthtimeQueryString_2>
}

export interface InstaNodeConnectionLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<InstaNodeConnectionLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<InstaNodeConnectionLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<InstaNodeConnectionLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<InstaNodeConnectionLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<InstaNodeConnectionLocalFileInternalOwnerQueryString_2>
}

export interface InstaNodeConnectionLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeConnectionLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeConnectionLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSort {
  fields: (Maybe<DirectoryConnectionSortByFieldsEnum>)[]

  order?: DirectoryConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterDirectory {
  id?: Maybe<DirectoryConnectionIdQueryString_2>

  internal?: Maybe<DirectoryConnectionInternalInputObject_2>

  sourceInstanceName?: Maybe<DirectoryConnectionSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<DirectoryConnectionAbsolutePathQueryString_2>

  relativePath?: Maybe<DirectoryConnectionRelativePathQueryString_2>

  extension?: Maybe<DirectoryConnectionExtensionQueryString_2>

  size?: Maybe<DirectoryConnectionSizeQueryInteger_2>

  prettySize?: Maybe<DirectoryConnectionPrettySizeQueryString_2>

  modifiedTime?: Maybe<DirectoryConnectionModifiedTimeQueryString_2>

  accessTime?: Maybe<DirectoryConnectionAccessTimeQueryString_2>

  changeTime?: Maybe<DirectoryConnectionChangeTimeQueryString_2>

  birthTime?: Maybe<DirectoryConnectionBirthTimeQueryString_2>

  root?: Maybe<DirectoryConnectionRootQueryString_2>

  dir?: Maybe<DirectoryConnectionDirQueryString_2>

  base?: Maybe<DirectoryConnectionBaseQueryString_2>

  ext?: Maybe<DirectoryConnectionExtQueryString_2>

  name?: Maybe<DirectoryConnectionNameQueryString_2>

  relativeDirectory?: Maybe<DirectoryConnectionRelativeDirectoryQueryString_2>

  dev?: Maybe<DirectoryConnectionDevQueryInteger_2>

  mode?: Maybe<DirectoryConnectionModeQueryInteger_2>

  nlink?: Maybe<DirectoryConnectionNlinkQueryInteger_2>

  uid?: Maybe<DirectoryConnectionUidQueryInteger_2>

  gid?: Maybe<DirectoryConnectionGidQueryInteger_2>

  rdev?: Maybe<DirectoryConnectionRdevQueryInteger_2>

  blksize?: Maybe<DirectoryConnectionBlksizeQueryInteger_2>

  ino?: Maybe<DirectoryConnectionInoQueryInteger_2>

  blocks?: Maybe<DirectoryConnectionBlocksQueryInteger_2>

  atimeMs?: Maybe<DirectoryConnectionAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<DirectoryConnectionMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<DirectoryConnectionCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<DirectoryConnectionBirthtimeMsQueryFloat_2>

  atime?: Maybe<DirectoryConnectionAtimeQueryString_2>

  mtime?: Maybe<DirectoryConnectionMtimeQueryString_2>

  ctime?: Maybe<DirectoryConnectionCtimeQueryString_2>

  birthtime?: Maybe<DirectoryConnectionBirthtimeQueryString_2>
}

export interface DirectoryConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryConnectionInternalContentDigestQueryString_2>

  type?: Maybe<DirectoryConnectionInternalTypeQueryString_2>

  description?: Maybe<DirectoryConnectionInternalDescriptionQueryString_2>

  owner?: Maybe<DirectoryConnectionInternalOwnerQueryString_2>
}

export interface DirectoryConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryConnectionAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryConnectionBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionSort {
  fields: (Maybe<PrismicInfoPageConnectionSortByFieldsEnum>)[]

  order?: PrismicInfoPageConnectionSortOrderValues
}
/** Filter connection on its fields */
export interface FilterPrismicInfoPage {
  type?: Maybe<PrismicInfoPageConnectionTypeQueryString_2>

  href?: Maybe<PrismicInfoPageConnectionHrefQueryString_2>

  first_publication_date?: Maybe<PrismicInfoPageConnectionFirstPublicationDateQueryString_2>

  last_publication_date?: Maybe<PrismicInfoPageConnectionLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicInfoPageConnectionSlugsQueryList_2>

  lang?: Maybe<PrismicInfoPageConnectionLangQueryString_2>

  data?: Maybe<PrismicInfoPageConnectionDataInputObject_2>

  prismicId?: Maybe<PrismicInfoPageConnectionPrismicIdQueryString_2>

  id?: Maybe<PrismicInfoPageConnectionIdQueryString_2>

  internal?: Maybe<PrismicInfoPageConnectionInternalInputObject_2>

  dataString?: Maybe<PrismicInfoPageConnectionDataStringQueryString_2>
}

export interface PrismicInfoPageConnectionTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInputObject_2 {
  title?: Maybe<PrismicInfoPageConnectionDataTitleQueryString_2>

  subtitle?: Maybe<PrismicInfoPageConnectionDataSubtitleQueryString_2>

  header_image?: Maybe<PrismicInfoPageConnectionDataHeaderImageInputObject_2>

  info?: Maybe<PrismicInfoPageConnectionDataInfoInputObject_2>
}

export interface PrismicInfoPageConnectionDataTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataSubtitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageInputObject_2 {
  dimensions?: Maybe<PrismicInfoPageConnectionDataHeaderImageDimensionsInputObject_2>

  alt?: Maybe<PrismicInfoPageConnectionDataHeaderImageAltQueryString_2>

  copyright?: Maybe<PrismicInfoPageConnectionDataHeaderImageCopyrightQueryString_2>

  url?: Maybe<PrismicInfoPageConnectionDataHeaderImageUrlQueryString_2>

  localFile?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileInputObject_2>
}

export interface PrismicInfoPageConnectionDataHeaderImageDimensionsInputObject_2 {
  width?: Maybe<PrismicInfoPageConnectionDataHeaderImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicInfoPageConnectionDataHeaderImageDimensionsHeightQueryInteger_2>
}

export interface PrismicInfoPageConnectionDataHeaderImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileInputObject_2 {
  id?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicInfoPageConnectionDataHeaderImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataHeaderImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoInputObject_2 {
  html?: Maybe<PrismicInfoPageConnectionDataInfoHtmlQueryString_2>

  text?: Maybe<PrismicInfoPageConnectionDataInfoTextQueryString_2>

  raw?: Maybe<PrismicInfoPageConnectionDataInfoRawQueryList_2>
}

export interface PrismicInfoPageConnectionDataInfoHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawQueryList_2 {
  elemMatch?: Maybe<PrismicInfoPageConnectionDataInfoRawInputObject_2>
}

export interface PrismicInfoPageConnectionDataInfoRawInputObject_2 {
  type?: Maybe<PrismicInfoPageConnectionDataInfoRawTypeQueryString_2>

  text?: Maybe<PrismicInfoPageConnectionDataInfoRawTextQueryString_2>

  spans?: Maybe<PrismicInfoPageConnectionDataInfoRawSpansQueryList_2>

  oembed?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedInputObject_2>

  url?: Maybe<PrismicInfoPageConnectionDataInfoRawUrlQueryString_2>

  dimensions?: Maybe<PrismicInfoPageConnectionDataInfoRawDimensionsInputObject_2>
}

export interface PrismicInfoPageConnectionDataInfoRawTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawSpansQueryList_2 {
  elemMatch?: Maybe<PrismicInfoPageConnectionDataInfoRawSpansInputObject_2>
}

export interface PrismicInfoPageConnectionDataInfoRawSpansInputObject_2 {
  start?: Maybe<PrismicInfoPageConnectionDataInfoRawSpansStartQueryInteger_2>

  end?: Maybe<PrismicInfoPageConnectionDataInfoRawSpansEndQueryInteger_2>

  type?: Maybe<PrismicInfoPageConnectionDataInfoRawSpansTypeQueryString_2>

  data?: Maybe<PrismicInfoPageConnectionDataInfoRawSpansDataInputObject_2>
}

export interface PrismicInfoPageConnectionDataInfoRawSpansStartQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawSpansEndQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawSpansTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawSpansDataInputObject_2 {
  link_type?: Maybe<PrismicInfoPageConnectionDataInfoRawSpansDataLinkTypeQueryString_2>

  url?: Maybe<PrismicInfoPageConnectionDataInfoRawSpansDataUrlQueryString_2>

  target?: Maybe<PrismicInfoPageConnectionDataInfoRawSpansDataTargetQueryString_2>
}

export interface PrismicInfoPageConnectionDataInfoRawSpansDataLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawSpansDataUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawSpansDataTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedInputObject_2 {
  is_plus?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedIsPlusQueryString_2>

  account_type?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedAccountTypeQueryString_2>

  width?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedWidthQueryInteger_2>

  height?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedHeightQueryInteger_2>

  duration?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedDurationQueryInteger_2>

  description?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedDescriptionQueryString_2>

  thumbnail_url_with_play_button?: Maybe<
    PrismicInfoPageConnectionDataInfoRawOembedThumbnailUrlWithPlayButtonQueryString_2
  >

  upload_date?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedUploadDateQueryString_2>

  video_id?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedVideoIdQueryInteger_2>

  uri?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedUriQueryString_2>

  embed_url?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedEmbedUrlQueryString_2>

  type?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedTypeQueryString_2>

  version?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedVersionQueryString_2>

  title?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedTitleQueryString_2>

  author_name?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedAuthorNameQueryString_2>

  author_url?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedAuthorUrlQueryString_2>

  provider_name?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedProviderNameQueryString_2>

  provider_url?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedProviderUrlQueryString_2>

  thumbnail_url?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedThumbnailUrlQueryString_2>

  thumbnail_width?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedThumbnailWidthQueryInteger_2>

  thumbnail_height?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedThumbnailHeightQueryInteger_2>

  html?: Maybe<PrismicInfoPageConnectionDataInfoRawOembedHtmlQueryString_2>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedIsPlusQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedAccountTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedDurationQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedThumbnailUrlWithPlayButtonQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedUploadDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedVideoIdQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedUriQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedEmbedUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedAuthorNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedAuthorUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedProviderNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedProviderUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedThumbnailUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedThumbnailWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedThumbnailHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawOembedHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawDimensionsInputObject_2 {
  width?: Maybe<PrismicInfoPageConnectionDataInfoRawDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicInfoPageConnectionDataInfoRawDimensionsHeightQueryInteger_2>
}

export interface PrismicInfoPageConnectionDataInfoRawDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionDataInfoRawDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageConnectionPrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionInternalInputObject_2 {
  type?: Maybe<PrismicInfoPageConnectionInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicInfoPageConnectionInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicInfoPageConnectionInternalOwnerQueryString_2>
}

export interface PrismicInfoPageConnectionInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageConnectionDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalComponentNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentChunkNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInputObject {
  resolve?: Maybe<SitePagePluginCreatorResolveQueryString>

  id?: Maybe<SitePagePluginCreatorIdQueryString>

  name?: Maybe<SitePagePluginCreatorNameQueryString>

  version?: Maybe<SitePagePluginCreatorVersionQueryString>

  pluginOptions?: Maybe<SitePagePluginCreatorPluginOptionsInputObject>

  nodeAPIs?: Maybe<SitePagePluginCreatorNodeApIsQueryList>

  ssrAPIs?: Maybe<SitePagePluginCreatorSsrApIsQueryList>

  pluginFilepath?: Maybe<SitePagePluginCreatorPluginFilepathQueryString>

  packageJson?: Maybe<SitePagePluginCreatorPackageJsonInputObject>

  parent?: Maybe<SitePagePluginCreatorParentQueryString>

  internal?: Maybe<SitePagePluginCreatorInternalInputObject>
}

export interface SitePagePluginCreatorResolveQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsInputObject {
  repositoryName?: Maybe<SitePagePluginCreatorPluginOptionsRepositoryNameQueryString>

  accessToken?: Maybe<SitePagePluginCreatorPluginOptionsAccessTokenQueryString>

  lang?: Maybe<SitePagePluginCreatorPluginOptionsLangQueryString>

  username?: Maybe<SitePagePluginCreatorPluginOptionsUsernameQueryString>

  access_token?: Maybe<SitePagePluginCreatorPluginOptionsAccessTokenQueryString_2>

  instagram_id?: Maybe<SitePagePluginCreatorPluginOptionsInstagramIdQueryString>

  fonts?: Maybe<SitePagePluginCreatorPluginOptionsFontsQueryList>

  name?: Maybe<SitePagePluginCreatorPluginOptionsNameQueryString>

  path?: Maybe<SitePagePluginCreatorPluginOptionsPathQueryString>

  short_name?: Maybe<SitePagePluginCreatorPluginOptionsShortNameQueryString>

  start_url?: Maybe<SitePagePluginCreatorPluginOptionsStartUrlQueryString>

  background_color?: Maybe<SitePagePluginCreatorPluginOptionsBackgroundColorQueryString>

  theme_color?: Maybe<SitePagePluginCreatorPluginOptionsThemeColorQueryString>

  display?: Maybe<SitePagePluginCreatorPluginOptionsDisplayQueryString>

  icon?: Maybe<SitePagePluginCreatorPluginOptionsIconQueryString>

  env?: Maybe<SitePagePluginCreatorPluginOptionsEnvInputObject>

  pathCheck?: Maybe<SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean>
}

export interface SitePagePluginCreatorPluginOptionsRepositoryNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsAccessTokenQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsLangQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsUsernameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsAccessTokenQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsInstagramIdQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsFontsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsShortNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsStartUrlQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsBackgroundColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsThemeColorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsDisplayQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsIconQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvInputObject {
  production?: Maybe<SitePagePluginCreatorPluginOptionsEnvProductionInputObject>

  branch_deploy?: Maybe<SitePagePluginCreatorPluginOptionsEnvBranchDeployInputObject>

  deploy_preview?: Maybe<SitePagePluginCreatorPluginOptionsEnvDeployPreviewInputObject>
}

export interface SitePagePluginCreatorPluginOptionsEnvProductionInputObject {
  policy?: Maybe<SitePagePluginCreatorPluginOptionsEnvProductionPolicyQueryList>
}

export interface SitePagePluginCreatorPluginOptionsEnvProductionPolicyQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsEnvProductionPolicyInputObject>
}

export interface SitePagePluginCreatorPluginOptionsEnvProductionPolicyInputObject {
  userAgent?: Maybe<SitePagePluginCreatorPluginOptionsEnvProductionPolicyUserAgentQueryString>

  disallow?: Maybe<SitePagePluginCreatorPluginOptionsEnvProductionPolicyDisallowQueryList>
}

export interface SitePagePluginCreatorPluginOptionsEnvProductionPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvProductionPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvBranchDeployInputObject {
  policy?: Maybe<SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyQueryList>
}

export interface SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyInputObject>
}

export interface SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyInputObject {
  userAgent?: Maybe<SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyUserAgentQueryString>

  disallow?: Maybe<SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyDisallowQueryList>
}

export interface SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvBranchDeployPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvDeployPreviewInputObject {
  policy?: Maybe<SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyQueryList>
}

export interface SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyInputObject>
}

export interface SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyInputObject {
  userAgent?: Maybe<SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString>

  disallow?: Maybe<SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyDisallowQueryList>
}

export interface SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsEnvDeployPreviewPolicyDisallowQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginOptionsPathCheckQueryBoolean {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePagePluginCreatorNodeApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorSsrApIsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPluginFilepathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonNameQueryString>

  description?: Maybe<SitePagePluginCreatorPackageJsonDescriptionQueryString>

  version?: Maybe<SitePagePluginCreatorPackageJsonVersionQueryString>

  main?: Maybe<SitePagePluginCreatorPackageJsonMainQueryString>

  author?: Maybe<SitePagePluginCreatorPackageJsonAuthorQueryString>

  license?: Maybe<SitePagePluginCreatorPackageJsonLicenseQueryString>

  dependencies?: Maybe<SitePagePluginCreatorPackageJsonDependenciesQueryList>

  devDependencies?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesQueryList>

  peerDependencies?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesQueryList>

  keywords?: Maybe<SitePagePluginCreatorPackageJsonKeywordsQueryList>
}

export interface SitePagePluginCreatorPackageJsonNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonMainQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonAuthorQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonLicenseQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDependenciesNameQueryString>

  version?: Maybe<SitePagePluginCreatorPackageJsonDependenciesVersionQueryString>
}

export interface SitePagePluginCreatorPackageJsonDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString>

  version?: Maybe<SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonDevDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesQueryList {
  elemMatch?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesInputObject>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesInputObject {
  name?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString>

  version?: Maybe<SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesNameQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonPeerDependenciesVersionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorPackageJsonKeywordsQueryList {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorParentQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalInputObject {
  contentDigest?: Maybe<SitePagePluginCreatorInternalContentDigestQueryString>

  type?: Maybe<SitePagePluginCreatorInternalTypeQueryString>

  owner?: Maybe<SitePagePluginCreatorInternalOwnerQueryString>
}

export interface SitePagePluginCreatorInternalContentDigestQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalTypeQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorInternalOwnerQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePagePluginCreatorIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageComponentPathQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalInputObject_2 {
  type?: Maybe<SitePageInternalTypeQueryString_2>

  contentDigest?: Maybe<SitePageInternalContentDigestQueryString_2>

  description?: Maybe<SitePageInternalDescriptionQueryString>

  owner?: Maybe<SitePageInternalOwnerQueryString_2>
}

export interface SitePageInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalDescriptionQueryString {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePageInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginResolveQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsInputObject_2 {
  repositoryName?: Maybe<SitePluginPluginOptionsRepositoryNameQueryString_2>

  accessToken?: Maybe<SitePluginPluginOptionsAccessTokenQueryString_3>

  lang?: Maybe<SitePluginPluginOptionsLangQueryString_2>

  username?: Maybe<SitePluginPluginOptionsUsernameQueryString_2>

  access_token?: Maybe<SitePluginPluginOptionsAccessTokenQueryString_4>

  instagram_id?: Maybe<SitePluginPluginOptionsInstagramIdQueryString_2>

  fonts?: Maybe<SitePluginPluginOptionsFontsQueryList_2>

  name?: Maybe<SitePluginPluginOptionsNameQueryString_2>

  path?: Maybe<SitePluginPluginOptionsPathQueryString_2>

  short_name?: Maybe<SitePluginPluginOptionsShortNameQueryString_2>

  start_url?: Maybe<SitePluginPluginOptionsStartUrlQueryString_2>

  background_color?: Maybe<SitePluginPluginOptionsBackgroundColorQueryString_2>

  theme_color?: Maybe<SitePluginPluginOptionsThemeColorQueryString_2>

  display?: Maybe<SitePluginPluginOptionsDisplayQueryString_2>

  icon?: Maybe<SitePluginPluginOptionsIconQueryString_2>

  env?: Maybe<SitePluginPluginOptionsEnvInputObject_2>

  pathCheck?: Maybe<SitePluginPluginOptionsPathCheckQueryBoolean_2>
}

export interface SitePluginPluginOptionsRepositoryNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsAccessTokenQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsUsernameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsAccessTokenQueryString_4 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsInstagramIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsFontsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsShortNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsStartUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsBackgroundColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsThemeColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsDisplayQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsIconQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvInputObject_2 {
  production?: Maybe<SitePluginPluginOptionsEnvProductionInputObject_2>

  branch_deploy?: Maybe<SitePluginPluginOptionsEnvBranchDeployInputObject_2>

  deploy_preview?: Maybe<SitePluginPluginOptionsEnvDeployPreviewInputObject_2>
}

export interface SitePluginPluginOptionsEnvProductionInputObject_2 {
  policy?: Maybe<SitePluginPluginOptionsEnvProductionPolicyQueryList_2>
}

export interface SitePluginPluginOptionsEnvProductionPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvProductionPolicyInputObject_2>
}

export interface SitePluginPluginOptionsEnvProductionPolicyInputObject_2 {
  userAgent?: Maybe<SitePluginPluginOptionsEnvProductionPolicyUserAgentQueryString_2>

  disallow?: Maybe<SitePluginPluginOptionsEnvProductionPolicyDisallowQueryList_2>
}

export interface SitePluginPluginOptionsEnvProductionPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvProductionPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvBranchDeployInputObject_2 {
  policy?: Maybe<SitePluginPluginOptionsEnvBranchDeployPolicyQueryList_2>
}

export interface SitePluginPluginOptionsEnvBranchDeployPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvBranchDeployPolicyInputObject_2>
}

export interface SitePluginPluginOptionsEnvBranchDeployPolicyInputObject_2 {
  userAgent?: Maybe<SitePluginPluginOptionsEnvBranchDeployPolicyUserAgentQueryString_2>

  disallow?: Maybe<SitePluginPluginOptionsEnvBranchDeployPolicyDisallowQueryList_2>
}

export interface SitePluginPluginOptionsEnvBranchDeployPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvBranchDeployPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvDeployPreviewInputObject_2 {
  policy?: Maybe<SitePluginPluginOptionsEnvDeployPreviewPolicyQueryList_2>
}

export interface SitePluginPluginOptionsEnvDeployPreviewPolicyQueryList_2 {
  elemMatch?: Maybe<SitePluginPluginOptionsEnvDeployPreviewPolicyInputObject_2>
}

export interface SitePluginPluginOptionsEnvDeployPreviewPolicyInputObject_2 {
  userAgent?: Maybe<SitePluginPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString_2>

  disallow?: Maybe<SitePluginPluginOptionsEnvDeployPreviewPolicyDisallowQueryList_2>
}

export interface SitePluginPluginOptionsEnvDeployPreviewPolicyUserAgentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsEnvDeployPreviewPolicyDisallowQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginOptionsPathCheckQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SitePluginNodeApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginSsrApIsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPluginFilepathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonInputObject_2 {
  name?: Maybe<SitePluginPackageJsonNameQueryString_2>

  description?: Maybe<SitePluginPackageJsonDescriptionQueryString_2>

  version?: Maybe<SitePluginPackageJsonVersionQueryString_2>

  main?: Maybe<SitePluginPackageJsonMainQueryString_2>

  author?: Maybe<SitePluginPackageJsonAuthorQueryString_2>

  license?: Maybe<SitePluginPackageJsonLicenseQueryString_2>

  dependencies?: Maybe<SitePluginPackageJsonDependenciesQueryList_2>

  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesQueryList_2>

  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesQueryList_2>

  keywords?: Maybe<SitePluginPackageJsonKeywordsQueryList_2>
}

export interface SitePluginPackageJsonNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonMainQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonAuthorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonLicenseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesInputObject_2>
}

export interface SitePluginPackageJsonDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDevDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesInputObject_2>
}

export interface SitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonDevDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonDevDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonPeerDependenciesQueryList_2 {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesInputObject_2>
}

export interface SitePluginPackageJsonPeerDependenciesInputObject_2 {
  name?: Maybe<SitePluginPackageJsonPeerDependenciesNameQueryString_2>

  version?: Maybe<SitePluginPackageJsonPeerDependenciesVersionQueryString_2>
}

export interface SitePluginPackageJsonPeerDependenciesNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonPeerDependenciesVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginPackageJsonKeywordsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalInputObject_2 {
  contentDigest?: Maybe<SitePluginInternalContentDigestQueryString_2>

  type?: Maybe<SitePluginInternalTypeQueryString_2>

  owner?: Maybe<SitePluginInternalOwnerQueryString_2>
}

export interface SitePluginInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePluginInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteSiteMetadataInputObject_2 {
  title?: Maybe<SiteSiteMetadataTitleQueryString_2>

  description?: Maybe<SiteSiteMetadataDescriptionQueryString_2>

  author?: Maybe<SiteSiteMetadataAuthorQueryString_2>
}

export interface SiteSiteMetadataTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteSiteMetadataDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteSiteMetadataAuthorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePortQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteHostQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePathPrefixQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SitePolyfillQueryBoolean_2 {
  eq?: Maybe<boolean>

  ne?: Maybe<boolean>

  in?: Maybe<(Maybe<boolean>)[]>

  nin?: Maybe<(Maybe<boolean>)[]>
}

export interface SiteBuildTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalInputObject_2 {
  contentDigest?: Maybe<SiteInternalContentDigestQueryString_2>

  type?: Maybe<SiteInternalTypeQueryString_2>

  owner?: Maybe<SiteInternalOwnerQueryString_2>
}

export interface SiteInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SiteInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataInputObject_2 {
  partners_header_image?: Maybe<PrismicPartnersPageDataPartnersHeaderImageInputObject_2>

  partners_title?: Maybe<PrismicPartnersPageDataPartnersTitleQueryString_2>

  partners_subtitle?: Maybe<PrismicPartnersPageDataPartnersSubtitleQueryString_2>

  partners_cta_title?: Maybe<PrismicPartnersPageDataPartnersCtaTitleQueryString_2>

  partners_cta_link?: Maybe<PrismicPartnersPageDataPartnersCtaLinkInputObject_2>
}

export interface PrismicPartnersPageDataPartnersHeaderImageInputObject_2 {
  dimensions?: Maybe<PrismicPartnersPageDataPartnersHeaderImageDimensionsInputObject_2>

  alt?: Maybe<PrismicPartnersPageDataPartnersHeaderImageAltQueryString_2>

  copyright?: Maybe<PrismicPartnersPageDataPartnersHeaderImageCopyrightQueryString_2>

  url?: Maybe<PrismicPartnersPageDataPartnersHeaderImageUrlQueryString_2>

  localFile?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileInputObject_2>
}

export interface PrismicPartnersPageDataPartnersHeaderImageDimensionsInputObject_2 {
  width?: Maybe<PrismicPartnersPageDataPartnersHeaderImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicPartnersPageDataPartnersHeaderImageDimensionsHeightQueryInteger_2>
}

export interface PrismicPartnersPageDataPartnersHeaderImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileInputObject_2 {
  id?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersHeaderImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersSubtitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersCtaTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersCtaLinkInputObject_2 {
  html?: Maybe<PrismicPartnersPageDataPartnersCtaLinkHtmlQueryString_2>

  text?: Maybe<PrismicPartnersPageDataPartnersCtaLinkTextQueryString_2>

  raw?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawQueryList_2>
}

export interface PrismicPartnersPageDataPartnersCtaLinkHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersCtaLinkTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawQueryList_2 {
  elemMatch?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawInputObject_2>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawInputObject_2 {
  type?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawTypeQueryString_2>

  text?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawTextQueryString_2>

  spans?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawSpansQueryList_2>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawSpansQueryList_2 {
  elemMatch?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawSpansInputObject_2>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawSpansInputObject_2 {
  start?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawSpansStartQueryInteger_2>

  end?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawSpansEndQueryInteger_2>

  type?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawSpansTypeQueryString_2>

  data?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawSpansDataInputObject_2>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawSpansStartQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawSpansEndQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawSpansTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawSpansDataInputObject_2 {
  link_type?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawSpansDataLinkTypeQueryString_2>

  url?: Maybe<PrismicPartnersPageDataPartnersCtaLinkRawSpansDataUrlQueryString_2>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawSpansDataLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataPartnersCtaLinkRawSpansDataUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPagePrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageInternalInputObject_2 {
  type?: Maybe<PrismicPartnersPageInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicPartnersPageInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicPartnersPageInternalOwnerQueryString_2>
}

export interface PrismicPartnersPageInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnersPageDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataInputObject_2 {
  main_color?: Maybe<PrismicGeneralDataMainColorQueryString_2>

  start_date?: Maybe<PrismicGeneralDataStartDateQueryString_2>

  end_date?: Maybe<PrismicGeneralDataEndDateQueryString_2>

  location?: Maybe<PrismicGeneralDataLocationQueryString_2>

  facebook_link?: Maybe<PrismicGeneralDataFacebookLinkInputObject_2>

  instagram_link?: Maybe<PrismicGeneralDataInstagramLinkInputObject_2>

  email?: Maybe<PrismicGeneralDataEmailQueryString_2>

  unifac_website?: Maybe<PrismicGeneralDataUnifacWebsiteInputObject_2>
}

export interface PrismicGeneralDataMainColorQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataStartDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataEndDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataLocationQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataFacebookLinkInputObject_2 {
  link_type?: Maybe<PrismicGeneralDataFacebookLinkLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralDataFacebookLinkUrlQueryString_2>

  target?: Maybe<PrismicGeneralDataFacebookLinkTargetQueryString_2>

  raw?: Maybe<PrismicGeneralDataFacebookLinkRawInputObject_2>
}

export interface PrismicGeneralDataFacebookLinkLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataFacebookLinkUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataFacebookLinkTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataFacebookLinkRawInputObject_2 {
  link_type?: Maybe<PrismicGeneralDataFacebookLinkRawLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralDataFacebookLinkRawUrlQueryString_2>
}

export interface PrismicGeneralDataFacebookLinkRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataFacebookLinkRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataInstagramLinkInputObject_2 {
  link_type?: Maybe<PrismicGeneralDataInstagramLinkLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralDataInstagramLinkUrlQueryString_2>

  target?: Maybe<PrismicGeneralDataInstagramLinkTargetQueryString_2>

  raw?: Maybe<PrismicGeneralDataInstagramLinkRawInputObject_2>
}

export interface PrismicGeneralDataInstagramLinkLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataInstagramLinkUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataInstagramLinkTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataInstagramLinkRawInputObject_2 {
  link_type?: Maybe<PrismicGeneralDataInstagramLinkRawLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralDataInstagramLinkRawUrlQueryString_2>
}

export interface PrismicGeneralDataInstagramLinkRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataInstagramLinkRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataEmailQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataUnifacWebsiteInputObject_2 {
  link_type?: Maybe<PrismicGeneralDataUnifacWebsiteLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralDataUnifacWebsiteUrlQueryString_2>

  target?: Maybe<PrismicGeneralDataUnifacWebsiteTargetQueryString_2>

  raw?: Maybe<PrismicGeneralDataUnifacWebsiteRawInputObject_2>
}

export interface PrismicGeneralDataUnifacWebsiteLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataUnifacWebsiteUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataUnifacWebsiteTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataUnifacWebsiteRawInputObject_2 {
  link_type?: Maybe<PrismicGeneralDataUnifacWebsiteRawLinkTypeQueryString_2>

  url?: Maybe<PrismicGeneralDataUnifacWebsiteRawUrlQueryString_2>
}

export interface PrismicGeneralDataUnifacWebsiteRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataUnifacWebsiteRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralPrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralInternalInputObject_2 {
  type?: Maybe<PrismicGeneralInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicGeneralInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicGeneralInternalOwnerQueryString_2>
}

export interface PrismicGeneralInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicGeneralDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalInputObject_2 {
  contentDigest?: Maybe<FileInternalContentDigestQueryString_2>

  type?: Maybe<FileInternalTypeQueryString_2>

  mediaType?: Maybe<FileInternalMediaTypeQueryString_2>

  description?: Maybe<FileInternalDescriptionQueryString_2>

  owner?: Maybe<FileInternalOwnerQueryString_2>
}

export interface FileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PublicUrlQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpInternalInputObject_2 {
  contentDigest?: Maybe<ImageSharpInternalContentDigestQueryString_2>

  type?: Maybe<ImageSharpInternalTypeQueryString_2>

  owner?: Maybe<ImageSharpInternalOwnerQueryString_2>
}

export interface ImageSharpInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ImageSharpInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTypeName_3 {
  base64?: Maybe<FixedBase64QueryString_3>

  tracedSVG?: Maybe<FixedTracedSvgQueryString_3>

  aspectRatio?: Maybe<FixedAspectRatioQueryFloat_3>

  width?: Maybe<FixedWidthQueryFloat_3>

  height?: Maybe<FixedHeightQueryFloat_3>

  src?: Maybe<FixedSrcQueryString_3>

  srcSet?: Maybe<FixedSrcSetQueryString_3>

  srcWebp?: Maybe<FixedSrcWebpQueryString_3>

  srcSetWebp?: Maybe<FixedSrcSetWebpQueryString_3>

  originalName?: Maybe<FixedOriginalNameQueryString_3>
}

export interface FixedBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedWidthQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedHeightQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FixedSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FixedOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTypeName_3 {
  base64?: Maybe<ResolutionsBase64QueryString_3>

  tracedSVG?: Maybe<ResolutionsTracedSvgQueryString_3>

  aspectRatio?: Maybe<ResolutionsAspectRatioQueryFloat_3>

  width?: Maybe<ResolutionsWidthQueryFloat_3>

  height?: Maybe<ResolutionsHeightQueryFloat_3>

  src?: Maybe<ResolutionsSrcQueryString_3>

  srcSet?: Maybe<ResolutionsSrcSetQueryString_3>

  srcWebp?: Maybe<ResolutionsSrcWebpQueryString_3>

  srcSetWebp?: Maybe<ResolutionsSrcSetWebpQueryString_3>

  originalName?: Maybe<ResolutionsOriginalNameQueryString_3>
}

export interface ResolutionsBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsWidthQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsHeightQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResolutionsSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResolutionsOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTypeName_3 {
  base64?: Maybe<FluidBase64QueryString_3>

  tracedSVG?: Maybe<FluidTracedSvgQueryString_3>

  aspectRatio?: Maybe<FluidAspectRatioQueryFloat_3>

  src?: Maybe<FluidSrcQueryString_3>

  srcSet?: Maybe<FluidSrcSetQueryString_3>

  srcWebp?: Maybe<FluidSrcWebpQueryString_3>

  srcSetWebp?: Maybe<FluidSrcSetWebpQueryString_3>

  sizes?: Maybe<FluidSizesQueryString_3>

  originalImg?: Maybe<FluidOriginalImgQueryString_3>

  originalName?: Maybe<FluidOriginalNameQueryString_3>

  presentationWidth?: Maybe<FluidPresentationWidthQueryInt_3>

  presentationHeight?: Maybe<FluidPresentationHeightQueryInt_3>
}

export interface FluidBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidSizesQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalImgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface FluidPresentationWidthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface FluidPresentationHeightQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesTypeName_3 {
  base64?: Maybe<SizesBase64QueryString_3>

  tracedSVG?: Maybe<SizesTracedSvgQueryString_3>

  aspectRatio?: Maybe<SizesAspectRatioQueryFloat_3>

  src?: Maybe<SizesSrcQueryString_3>

  srcSet?: Maybe<SizesSrcSetQueryString_3>

  srcWebp?: Maybe<SizesSrcWebpQueryString_3>

  srcSetWebp?: Maybe<SizesSrcSetWebpQueryString_3>

  sizes?: Maybe<SizesSizesQueryString_3>

  originalImg?: Maybe<SizesOriginalImgQueryString_3>

  originalName?: Maybe<SizesOriginalNameQueryString_3>

  presentationWidth?: Maybe<SizesPresentationWidthQueryInt_3>

  presentationHeight?: Maybe<SizesPresentationHeightQueryInt_3>
}

export interface SizesBase64QueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSrcSetWebpQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesSizesQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalImgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface SizesPresentationWidthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface SizesPresentationHeightQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalTypeName_3 {
  width?: Maybe<OriginalWidthQueryFloat_3>

  height?: Maybe<OriginalHeightQueryFloat_3>

  src?: Maybe<OriginalSrcQueryString_3>
}

export interface OriginalWidthQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalHeightQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface OriginalSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTypeName_3 {
  src?: Maybe<ResizeSrcQueryString_3>

  tracedSVG?: Maybe<ResizeTracedSvgQueryString_3>

  width?: Maybe<ResizeWidthQueryInt_3>

  height?: Maybe<ResizeHeightQueryInt_3>

  aspectRatio?: Maybe<ResizeAspectRatioQueryFloat_3>

  originalName?: Maybe<ResizeOriginalNameQueryString_3>
}

export interface ResizeSrcQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeTracedSvgQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface ResizeWidthQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeHeightQueryInt_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeAspectRatioQueryFloat_3 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface ResizeOriginalNameQueryString_3 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataInputObject_2 {
  name?: Maybe<PrismicPartnerDataNameQueryString_2>

  image?: Maybe<PrismicPartnerDataImageInputObject_2>

  type?: Maybe<PrismicPartnerDataTypeQueryString_2>

  link?: Maybe<PrismicPartnerDataLinkInputObject_2>

  importance?: Maybe<PrismicPartnerDataImportanceQueryInteger_2>

  description?: Maybe<PrismicPartnerDataDescriptionQueryString_2>
}

export interface PrismicPartnerDataNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageInputObject_2 {
  dimensions?: Maybe<PrismicPartnerDataImageDimensionsInputObject_2>

  alt?: Maybe<PrismicPartnerDataImageAltQueryString_2>

  copyright?: Maybe<PrismicPartnerDataImageCopyrightQueryString_2>

  url?: Maybe<PrismicPartnerDataImageUrlQueryString_2>

  localFile?: Maybe<PrismicPartnerDataImageLocalFileInputObject_2>
}

export interface PrismicPartnerDataImageDimensionsInputObject_2 {
  width?: Maybe<PrismicPartnerDataImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicPartnerDataImageDimensionsHeightQueryInteger_2>
}

export interface PrismicPartnerDataImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInputObject_2 {
  id?: Maybe<PrismicPartnerDataImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicPartnerDataImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicPartnerDataImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicPartnerDataImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicPartnerDataImageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicPartnerDataImageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicPartnerDataImageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicPartnerDataImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicPartnerDataImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicPartnerDataImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicPartnerDataImageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicPartnerDataImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicPartnerDataImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicPartnerDataImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicPartnerDataImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicPartnerDataImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicPartnerDataImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicPartnerDataImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicPartnerDataImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicPartnerDataImageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicPartnerDataImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicPartnerDataImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicPartnerDataImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicPartnerDataImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicPartnerDataImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicPartnerDataImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicPartnerDataImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicPartnerDataImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicPartnerDataImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicPartnerDataImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicPartnerDataImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicPartnerDataImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicPartnerDataImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicPartnerDataImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicPartnerDataImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicPartnerDataImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicPartnerDataImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicPartnerDataImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicPartnerDataImageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicPartnerDataImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicPartnerDataImageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicPartnerDataImageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicPartnerDataImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicPartnerDataImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkInputObject_2 {
  link_type?: Maybe<PrismicPartnerDataLinkLinkTypeQueryString_2>

  url?: Maybe<PrismicPartnerDataLinkUrlQueryString_2>

  target?: Maybe<PrismicPartnerDataLinkTargetQueryString_2>

  raw?: Maybe<PrismicPartnerDataLinkRawInputObject_2>
}

export interface PrismicPartnerDataLinkLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkRawInputObject_2 {
  link_type?: Maybe<PrismicPartnerDataLinkRawLinkTypeQueryString_2>

  url?: Maybe<PrismicPartnerDataLinkRawUrlQueryString_2>

  target?: Maybe<PrismicPartnerDataLinkRawTargetQueryString_2>
}

export interface PrismicPartnerDataLinkRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataLinkRawTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataImportanceQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicPartnerDataDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerPrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerInternalInputObject_2 {
  type?: Maybe<PrismicPartnerInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicPartnerInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicPartnerInternalOwnerQueryString_2>
}

export interface PrismicPartnerInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicPartnerDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataInputObject_2 {
  header_movie?: Maybe<PrismicHomepageDataHeaderMovieInputObject_2>

  intro_text?: Maybe<PrismicHomepageDataIntroTextInputObject_2>

  intro_button_text?: Maybe<PrismicHomepageDataIntroButtonTextQueryString_2>

  intro_image?: Maybe<PrismicHomepageDataIntroImageInputObject_2>

  carousel_images?: Maybe<PrismicHomepageDataCarouselImagesQueryList_2>

  pictures_main_picture?: Maybe<PrismicHomepageDataPicturesMainPictureInputObject_2>

  pictures_secondary_picture?: Maybe<PrismicHomepageDataPicturesSecondaryPictureInputObject_2>

  social_title?: Maybe<PrismicHomepageDataSocialTitleQueryString_2>

  social_description?: Maybe<PrismicHomepageDataSocialDescriptionInputObject_2>

  partnercta_title?: Maybe<PrismicHomepageDataPartnerctaTitleQueryString_2>

  partnercta_description?: Maybe<PrismicHomepageDataPartnerctaDescriptionInputObject_2>

  partnercta_button_text?: Maybe<PrismicHomepageDataPartnerctaButtonTextQueryString_2>

  partnercta_bgimage?: Maybe<PrismicHomepageDataPartnerctaBgimageInputObject_2>
}

export interface PrismicHomepageDataHeaderMovieInputObject_2 {
  link_type?: Maybe<PrismicHomepageDataHeaderMovieLinkTypeQueryString_2>

  name?: Maybe<PrismicHomepageDataHeaderMovieNameQueryString_2>

  kind?: Maybe<PrismicHomepageDataHeaderMovieKindQueryString_2>

  url?: Maybe<PrismicHomepageDataHeaderMovieUrlQueryString_2>

  size?: Maybe<PrismicHomepageDataHeaderMovieSizeQueryString_2>

  target?: Maybe<PrismicHomepageDataHeaderMovieTargetQueryString_2>

  raw?: Maybe<PrismicHomepageDataHeaderMovieRawInputObject_2>
}

export interface PrismicHomepageDataHeaderMovieLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataHeaderMovieNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataHeaderMovieKindQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataHeaderMovieUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataHeaderMovieSizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataHeaderMovieTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataHeaderMovieRawInputObject_2 {
  link_type?: Maybe<PrismicHomepageDataHeaderMovieRawLinkTypeQueryString_2>

  name?: Maybe<PrismicHomepageDataHeaderMovieRawNameQueryString_2>

  kind?: Maybe<PrismicHomepageDataHeaderMovieRawKindQueryString_2>

  url?: Maybe<PrismicHomepageDataHeaderMovieRawUrlQueryString_2>

  size?: Maybe<PrismicHomepageDataHeaderMovieRawSizeQueryString_2>
}

export interface PrismicHomepageDataHeaderMovieRawLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataHeaderMovieRawNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataHeaderMovieRawKindQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataHeaderMovieRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataHeaderMovieRawSizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroTextInputObject_2 {
  html?: Maybe<PrismicHomepageDataIntroTextHtmlQueryString_2>

  text?: Maybe<PrismicHomepageDataIntroTextTextQueryString_2>

  raw?: Maybe<PrismicHomepageDataIntroTextRawQueryList_2>
}

export interface PrismicHomepageDataIntroTextHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroTextTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroTextRawQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageDataIntroTextRawInputObject_2>
}

export interface PrismicHomepageDataIntroTextRawInputObject_2 {
  type?: Maybe<PrismicHomepageDataIntroTextRawTypeQueryString_2>

  text?: Maybe<PrismicHomepageDataIntroTextRawTextQueryString_2>

  spans?: Maybe<PrismicHomepageDataIntroTextRawSpansQueryList_2>
}

export interface PrismicHomepageDataIntroTextRawTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroTextRawTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroTextRawSpansQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageDataIntroTextRawSpansInputObject_2>
}

export interface PrismicHomepageDataIntroTextRawSpansInputObject_2 {
  start?: Maybe<PrismicHomepageDataIntroTextRawSpansStartQueryInteger_2>

  end?: Maybe<PrismicHomepageDataIntroTextRawSpansEndQueryInteger_2>

  type?: Maybe<PrismicHomepageDataIntroTextRawSpansTypeQueryString_2>
}

export interface PrismicHomepageDataIntroTextRawSpansStartQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroTextRawSpansEndQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroTextRawSpansTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroButtonTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageInputObject_2 {
  dimensions?: Maybe<PrismicHomepageDataIntroImageDimensionsInputObject_2>

  alt?: Maybe<PrismicHomepageDataIntroImageAltQueryString_2>

  copyright?: Maybe<PrismicHomepageDataIntroImageCopyrightQueryString_2>

  url?: Maybe<PrismicHomepageDataIntroImageUrlQueryString_2>

  localFile?: Maybe<PrismicHomepageDataIntroImageLocalFileInputObject_2>
}

export interface PrismicHomepageDataIntroImageDimensionsInputObject_2 {
  width?: Maybe<PrismicHomepageDataIntroImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicHomepageDataIntroImageDimensionsHeightQueryInteger_2>
}

export interface PrismicHomepageDataIntroImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileInputObject_2 {
  id?: Maybe<PrismicHomepageDataIntroImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicHomepageDataIntroImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicHomepageDataIntroImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicHomepageDataIntroImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicHomepageDataIntroImageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicHomepageDataIntroImageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicHomepageDataIntroImageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicHomepageDataIntroImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicHomepageDataIntroImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicHomepageDataIntroImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicHomepageDataIntroImageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicHomepageDataIntroImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicHomepageDataIntroImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicHomepageDataIntroImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicHomepageDataIntroImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicHomepageDataIntroImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicHomepageDataIntroImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicHomepageDataIntroImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicHomepageDataIntroImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicHomepageDataIntroImageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicHomepageDataIntroImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicHomepageDataIntroImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicHomepageDataIntroImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicHomepageDataIntroImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicHomepageDataIntroImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicHomepageDataIntroImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicHomepageDataIntroImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicHomepageDataIntroImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicHomepageDataIntroImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicHomepageDataIntroImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicHomepageDataIntroImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicHomepageDataIntroImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicHomepageDataIntroImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicHomepageDataIntroImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicHomepageDataIntroImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicHomepageDataIntroImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicHomepageDataIntroImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicHomepageDataIntroImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicHomepageDataIntroImageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicHomepageDataIntroImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicHomepageDataIntroImageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicHomepageDataIntroImageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicHomepageDataIntroImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicHomepageDataIntroImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataIntroImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageDataCarouselImagesInputObject_2>
}

export interface PrismicHomepageDataCarouselImagesInputObject_2 {
  image?: Maybe<PrismicHomepageDataCarouselImagesImageInputObject_2>
}

export interface PrismicHomepageDataCarouselImagesImageInputObject_2 {
  dimensions?: Maybe<PrismicHomepageDataCarouselImagesImageDimensionsInputObject_2>

  alt?: Maybe<PrismicHomepageDataCarouselImagesImageAltQueryString_2>

  copyright?: Maybe<PrismicHomepageDataCarouselImagesImageCopyrightQueryString_2>

  url?: Maybe<PrismicHomepageDataCarouselImagesImageUrlQueryString_2>

  localFile?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileInputObject_2>
}

export interface PrismicHomepageDataCarouselImagesImageDimensionsInputObject_2 {
  width?: Maybe<PrismicHomepageDataCarouselImagesImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicHomepageDataCarouselImagesImageDimensionsHeightQueryInteger_2>
}

export interface PrismicHomepageDataCarouselImagesImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileInputObject_2 {
  id?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicHomepageDataCarouselImagesImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataCarouselImagesImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureInputObject_2 {
  dimensions?: Maybe<PrismicHomepageDataPicturesMainPictureDimensionsInputObject_2>

  alt?: Maybe<PrismicHomepageDataPicturesMainPictureAltQueryString_2>

  copyright?: Maybe<PrismicHomepageDataPicturesMainPictureCopyrightQueryString_2>

  url?: Maybe<PrismicHomepageDataPicturesMainPictureUrlQueryString_2>

  localFile?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileInputObject_2>
}

export interface PrismicHomepageDataPicturesMainPictureDimensionsInputObject_2 {
  width?: Maybe<PrismicHomepageDataPicturesMainPictureDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicHomepageDataPicturesMainPictureDimensionsHeightQueryInteger_2>
}

export interface PrismicHomepageDataPicturesMainPictureDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileInputObject_2 {
  id?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileIdQueryString_2>

  children?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileParentQueryString_2>

  internal?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileRootQueryString_2>

  dir?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileDirQueryString_2>

  base?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileExtQueryString_2>

  name?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileBirthtimeQueryString_2>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicHomepageDataPicturesMainPictureLocalFileInternalOwnerQueryString_2>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesMainPictureLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureInputObject_2 {
  dimensions?: Maybe<PrismicHomepageDataPicturesSecondaryPictureDimensionsInputObject_2>

  alt?: Maybe<PrismicHomepageDataPicturesSecondaryPictureAltQueryString_2>

  copyright?: Maybe<PrismicHomepageDataPicturesSecondaryPictureCopyrightQueryString_2>

  url?: Maybe<PrismicHomepageDataPicturesSecondaryPictureUrlQueryString_2>

  localFile?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileInputObject_2>
}

export interface PrismicHomepageDataPicturesSecondaryPictureDimensionsInputObject_2 {
  width?: Maybe<PrismicHomepageDataPicturesSecondaryPictureDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicHomepageDataPicturesSecondaryPictureDimensionsHeightQueryInteger_2>
}

export interface PrismicHomepageDataPicturesSecondaryPictureDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileInputObject_2 {
  id?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileIdQueryString_2>

  children?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileParentQueryString_2>

  internal?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileRootQueryString_2>

  dir?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileDirQueryString_2>

  base?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileExtQueryString_2>

  name?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileBirthtimeQueryString_2>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalOwnerQueryString_2>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPicturesSecondaryPictureLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataSocialTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataSocialDescriptionInputObject_2 {
  html?: Maybe<PrismicHomepageDataSocialDescriptionHtmlQueryString_2>

  text?: Maybe<PrismicHomepageDataSocialDescriptionTextQueryString_2>

  raw?: Maybe<PrismicHomepageDataSocialDescriptionRawQueryList_2>
}

export interface PrismicHomepageDataSocialDescriptionHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataSocialDescriptionTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataSocialDescriptionRawQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageDataSocialDescriptionRawInputObject_2>
}

export interface PrismicHomepageDataSocialDescriptionRawInputObject_2 {
  type?: Maybe<PrismicHomepageDataSocialDescriptionRawTypeQueryString_2>

  text?: Maybe<PrismicHomepageDataSocialDescriptionRawTextQueryString_2>
}

export interface PrismicHomepageDataSocialDescriptionRawTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataSocialDescriptionRawTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaDescriptionInputObject_2 {
  html?: Maybe<PrismicHomepageDataPartnerctaDescriptionHtmlQueryString_2>

  text?: Maybe<PrismicHomepageDataPartnerctaDescriptionTextQueryString_2>

  raw?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawQueryList_2>
}

export interface PrismicHomepageDataPartnerctaDescriptionHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaDescriptionTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawInputObject_2>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawInputObject_2 {
  type?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawTypeQueryString_2>

  text?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawTextQueryString_2>

  spans?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawSpansQueryList_2>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawSpansQueryList_2 {
  elemMatch?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawSpansInputObject_2>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawSpansInputObject_2 {
  start?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawSpansStartQueryInteger_2>

  end?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawSpansEndQueryInteger_2>

  type?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawSpansTypeQueryString_2>

  data?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawSpansDataInputObject_2>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawSpansStartQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawSpansEndQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawSpansTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawSpansDataInputObject_2 {
  link_type?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawSpansDataLinkTypeQueryString_2>

  url?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawSpansDataUrlQueryString_2>

  target?: Maybe<PrismicHomepageDataPartnerctaDescriptionRawSpansDataTargetQueryString_2>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawSpansDataLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawSpansDataUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaDescriptionRawSpansDataTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaButtonTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageInputObject_2 {
  dimensions?: Maybe<PrismicHomepageDataPartnerctaBgimageDimensionsInputObject_2>

  alt?: Maybe<PrismicHomepageDataPartnerctaBgimageAltQueryString_2>

  copyright?: Maybe<PrismicHomepageDataPartnerctaBgimageCopyrightQueryString_2>

  url?: Maybe<PrismicHomepageDataPartnerctaBgimageUrlQueryString_2>

  localFile?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileInputObject_2>
}

export interface PrismicHomepageDataPartnerctaBgimageDimensionsInputObject_2 {
  width?: Maybe<PrismicHomepageDataPartnerctaBgimageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicHomepageDataPartnerctaBgimageDimensionsHeightQueryInteger_2>
}

export interface PrismicHomepageDataPartnerctaBgimageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileInputObject_2 {
  id?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileIdQueryString_2>

  children?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileDirQueryString_2>

  base?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileExtQueryString_2>

  name?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileBirthtimeQueryString_2>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicHomepageDataPartnerctaBgimageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataPartnerctaBgimageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepagePrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageInternalInputObject_2 {
  type?: Maybe<PrismicHomepageInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicHomepageInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicHomepageInternalOwnerQueryString_2>
}

export interface PrismicHomepageInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicHomepageDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeInternalInputObject_2 {
  type?: Maybe<InstaNodeInternalTypeQueryString_2>

  contentDigest?: Maybe<InstaNodeInternalContentDigestQueryString_2>

  owner?: Maybe<InstaNodeInternalOwnerQueryString_2>
}

export interface InstaNodeInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLikesQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeThumbnailsQueryList_2 {
  elemMatch?: Maybe<InstaNodeThumbnailsInputObject_2>
}

export interface InstaNodeThumbnailsInputObject_2 {
  src?: Maybe<InstaNodeThumbnailsSrcQueryString_2>

  config_width?: Maybe<InstaNodeThumbnailsConfigWidthQueryInteger_2>

  config_height?: Maybe<InstaNodeThumbnailsConfigHeightQueryInteger_2>
}

export interface InstaNodeThumbnailsSrcQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeThumbnailsConfigWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeThumbnailsConfigHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeOriginalQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeTimestampQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeDimensionsInputObject_2 {
  height?: Maybe<InstaNodeDimensionsHeightQueryInteger_2>

  width?: Maybe<InstaNodeDimensionsWidthQueryInteger_2>
}

export interface InstaNodeDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeCommentsQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileInputObject_2 {
  id?: Maybe<InstaNodeLocalFileIdQueryString_2>

  children?: Maybe<InstaNodeLocalFileChildrenQueryList_2>

  parent?: Maybe<InstaNodeLocalFileParentQueryString_2>

  internal?: Maybe<InstaNodeLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<InstaNodeLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<InstaNodeLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<InstaNodeLocalFileRelativePathQueryString_2>

  extension?: Maybe<InstaNodeLocalFileExtensionQueryString_2>

  size?: Maybe<InstaNodeLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<InstaNodeLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<InstaNodeLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<InstaNodeLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<InstaNodeLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<InstaNodeLocalFileBirthTimeQueryString_2>

  root?: Maybe<InstaNodeLocalFileRootQueryString_2>

  dir?: Maybe<InstaNodeLocalFileDirQueryString_2>

  base?: Maybe<InstaNodeLocalFileBaseQueryString_2>

  ext?: Maybe<InstaNodeLocalFileExtQueryString_2>

  name?: Maybe<InstaNodeLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<InstaNodeLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<InstaNodeLocalFileDevQueryInteger_2>

  mode?: Maybe<InstaNodeLocalFileModeQueryInteger_2>

  nlink?: Maybe<InstaNodeLocalFileNlinkQueryInteger_2>

  uid?: Maybe<InstaNodeLocalFileUidQueryInteger_2>

  gid?: Maybe<InstaNodeLocalFileGidQueryInteger_2>

  rdev?: Maybe<InstaNodeLocalFileRdevQueryInteger_2>

  blksize?: Maybe<InstaNodeLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<InstaNodeLocalFileInoQueryInteger_2>

  blocks?: Maybe<InstaNodeLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<InstaNodeLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<InstaNodeLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<InstaNodeLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<InstaNodeLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<InstaNodeLocalFileAtimeQueryString_2>

  mtime?: Maybe<InstaNodeLocalFileMtimeQueryString_2>

  ctime?: Maybe<InstaNodeLocalFileCtimeQueryString_2>

  birthtime?: Maybe<InstaNodeLocalFileBirthtimeQueryString_2>
}

export interface InstaNodeLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<InstaNodeLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<InstaNodeLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<InstaNodeLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<InstaNodeLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<InstaNodeLocalFileInternalOwnerQueryString_2>
}

export interface InstaNodeLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface InstaNodeLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface InstaNodeLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalInputObject_2 {
  contentDigest?: Maybe<DirectoryInternalContentDigestQueryString_2>

  type?: Maybe<DirectoryInternalTypeQueryString_2>

  description?: Maybe<DirectoryInternalDescriptionQueryString_2>

  owner?: Maybe<DirectoryInternalOwnerQueryString_2>
}

export interface DirectoryInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectorySourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectorySizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryPrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface DirectoryAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface DirectoryBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageHrefQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageFirstPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageLastPublicationDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageSlugsQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageLangQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInputObject_2 {
  title?: Maybe<PrismicInfoPageDataTitleQueryString_2>

  subtitle?: Maybe<PrismicInfoPageDataSubtitleQueryString_2>

  header_image?: Maybe<PrismicInfoPageDataHeaderImageInputObject_2>

  info?: Maybe<PrismicInfoPageDataInfoInputObject_2>
}

export interface PrismicInfoPageDataTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataSubtitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageInputObject_2 {
  dimensions?: Maybe<PrismicInfoPageDataHeaderImageDimensionsInputObject_2>

  alt?: Maybe<PrismicInfoPageDataHeaderImageAltQueryString_2>

  copyright?: Maybe<PrismicInfoPageDataHeaderImageCopyrightQueryString_2>

  url?: Maybe<PrismicInfoPageDataHeaderImageUrlQueryString_2>

  localFile?: Maybe<PrismicInfoPageDataHeaderImageLocalFileInputObject_2>
}

export interface PrismicInfoPageDataHeaderImageDimensionsInputObject_2 {
  width?: Maybe<PrismicInfoPageDataHeaderImageDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicInfoPageDataHeaderImageDimensionsHeightQueryInteger_2>
}

export interface PrismicInfoPageDataHeaderImageDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageAltQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageCopyrightQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileInputObject_2 {
  id?: Maybe<PrismicInfoPageDataHeaderImageLocalFileIdQueryString_2>

  children?: Maybe<PrismicInfoPageDataHeaderImageLocalFileChildrenQueryList_2>

  parent?: Maybe<PrismicInfoPageDataHeaderImageLocalFileParentQueryString_2>

  internal?: Maybe<PrismicInfoPageDataHeaderImageLocalFileInternalInputObject_2>

  sourceInstanceName?: Maybe<PrismicInfoPageDataHeaderImageLocalFileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<PrismicInfoPageDataHeaderImageLocalFileAbsolutePathQueryString_2>

  relativePath?: Maybe<PrismicInfoPageDataHeaderImageLocalFileRelativePathQueryString_2>

  extension?: Maybe<PrismicInfoPageDataHeaderImageLocalFileExtensionQueryString_2>

  size?: Maybe<PrismicInfoPageDataHeaderImageLocalFileSizeQueryInteger_2>

  prettySize?: Maybe<PrismicInfoPageDataHeaderImageLocalFilePrettySizeQueryString_2>

  modifiedTime?: Maybe<PrismicInfoPageDataHeaderImageLocalFileModifiedTimeQueryString_2>

  accessTime?: Maybe<PrismicInfoPageDataHeaderImageLocalFileAccessTimeQueryString_2>

  changeTime?: Maybe<PrismicInfoPageDataHeaderImageLocalFileChangeTimeQueryString_2>

  birthTime?: Maybe<PrismicInfoPageDataHeaderImageLocalFileBirthTimeQueryString_2>

  root?: Maybe<PrismicInfoPageDataHeaderImageLocalFileRootQueryString_2>

  dir?: Maybe<PrismicInfoPageDataHeaderImageLocalFileDirQueryString_2>

  base?: Maybe<PrismicInfoPageDataHeaderImageLocalFileBaseQueryString_2>

  ext?: Maybe<PrismicInfoPageDataHeaderImageLocalFileExtQueryString_2>

  name?: Maybe<PrismicInfoPageDataHeaderImageLocalFileNameQueryString_2>

  relativeDirectory?: Maybe<PrismicInfoPageDataHeaderImageLocalFileRelativeDirectoryQueryString_2>

  dev?: Maybe<PrismicInfoPageDataHeaderImageLocalFileDevQueryInteger_2>

  mode?: Maybe<PrismicInfoPageDataHeaderImageLocalFileModeQueryInteger_2>

  nlink?: Maybe<PrismicInfoPageDataHeaderImageLocalFileNlinkQueryInteger_2>

  uid?: Maybe<PrismicInfoPageDataHeaderImageLocalFileUidQueryInteger_2>

  gid?: Maybe<PrismicInfoPageDataHeaderImageLocalFileGidQueryInteger_2>

  rdev?: Maybe<PrismicInfoPageDataHeaderImageLocalFileRdevQueryInteger_2>

  blksize?: Maybe<PrismicInfoPageDataHeaderImageLocalFileBlksizeQueryInteger_2>

  ino?: Maybe<PrismicInfoPageDataHeaderImageLocalFileInoQueryInteger_2>

  blocks?: Maybe<PrismicInfoPageDataHeaderImageLocalFileBlocksQueryInteger_2>

  atimeMs?: Maybe<PrismicInfoPageDataHeaderImageLocalFileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<PrismicInfoPageDataHeaderImageLocalFileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<PrismicInfoPageDataHeaderImageLocalFileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<PrismicInfoPageDataHeaderImageLocalFileBirthtimeMsQueryFloat_2>

  atime?: Maybe<PrismicInfoPageDataHeaderImageLocalFileAtimeQueryString_2>

  mtime?: Maybe<PrismicInfoPageDataHeaderImageLocalFileMtimeQueryString_2>

  ctime?: Maybe<PrismicInfoPageDataHeaderImageLocalFileCtimeQueryString_2>

  birthtime?: Maybe<PrismicInfoPageDataHeaderImageLocalFileBirthtimeQueryString_2>
}

export interface PrismicInfoPageDataHeaderImageLocalFileIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileChildrenQueryList_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileParentQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileInternalInputObject_2 {
  contentDigest?: Maybe<PrismicInfoPageDataHeaderImageLocalFileInternalContentDigestQueryString_2>

  type?: Maybe<PrismicInfoPageDataHeaderImageLocalFileInternalTypeQueryString_2>

  mediaType?: Maybe<PrismicInfoPageDataHeaderImageLocalFileInternalMediaTypeQueryString_2>

  description?: Maybe<PrismicInfoPageDataHeaderImageLocalFileInternalDescriptionQueryString_2>

  owner?: Maybe<PrismicInfoPageDataHeaderImageLocalFileInternalOwnerQueryString_2>
}

export interface PrismicInfoPageDataHeaderImageLocalFileInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileInternalMediaTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileInternalDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileSourceInstanceNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileAbsolutePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileRelativePathQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileExtensionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileSizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFilePrettySizeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileModifiedTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileAccessTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileChangeTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileBirthTimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileRootQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileDirQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileBaseQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileExtQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileRelativeDirectoryQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileDevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileModeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileNlinkQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileUidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileGidQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileRdevQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileBlksizeQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileInoQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileBlocksQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileAtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileMtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileCtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileBirthtimeMsQueryFloat_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileAtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileMtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileCtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataHeaderImageLocalFileBirthtimeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoInputObject_2 {
  html?: Maybe<PrismicInfoPageDataInfoHtmlQueryString_2>

  text?: Maybe<PrismicInfoPageDataInfoTextQueryString_2>

  raw?: Maybe<PrismicInfoPageDataInfoRawQueryList_2>
}

export interface PrismicInfoPageDataInfoHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawQueryList_2 {
  elemMatch?: Maybe<PrismicInfoPageDataInfoRawInputObject_2>
}

export interface PrismicInfoPageDataInfoRawInputObject_2 {
  type?: Maybe<PrismicInfoPageDataInfoRawTypeQueryString_2>

  text?: Maybe<PrismicInfoPageDataInfoRawTextQueryString_2>

  spans?: Maybe<PrismicInfoPageDataInfoRawSpansQueryList_2>

  oembed?: Maybe<PrismicInfoPageDataInfoRawOembedInputObject_2>

  url?: Maybe<PrismicInfoPageDataInfoRawUrlQueryString_2>

  dimensions?: Maybe<PrismicInfoPageDataInfoRawDimensionsInputObject_2>
}

export interface PrismicInfoPageDataInfoRawTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawTextQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawSpansQueryList_2 {
  elemMatch?: Maybe<PrismicInfoPageDataInfoRawSpansInputObject_2>
}

export interface PrismicInfoPageDataInfoRawSpansInputObject_2 {
  start?: Maybe<PrismicInfoPageDataInfoRawSpansStartQueryInteger_2>

  end?: Maybe<PrismicInfoPageDataInfoRawSpansEndQueryInteger_2>

  type?: Maybe<PrismicInfoPageDataInfoRawSpansTypeQueryString_2>

  data?: Maybe<PrismicInfoPageDataInfoRawSpansDataInputObject_2>
}

export interface PrismicInfoPageDataInfoRawSpansStartQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataInfoRawSpansEndQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataInfoRawSpansTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawSpansDataInputObject_2 {
  link_type?: Maybe<PrismicInfoPageDataInfoRawSpansDataLinkTypeQueryString_2>

  url?: Maybe<PrismicInfoPageDataInfoRawSpansDataUrlQueryString_2>

  target?: Maybe<PrismicInfoPageDataInfoRawSpansDataTargetQueryString_2>
}

export interface PrismicInfoPageDataInfoRawSpansDataLinkTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawSpansDataUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawSpansDataTargetQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedInputObject_2 {
  is_plus?: Maybe<PrismicInfoPageDataInfoRawOembedIsPlusQueryString_2>

  account_type?: Maybe<PrismicInfoPageDataInfoRawOembedAccountTypeQueryString_2>

  width?: Maybe<PrismicInfoPageDataInfoRawOembedWidthQueryInteger_2>

  height?: Maybe<PrismicInfoPageDataInfoRawOembedHeightQueryInteger_2>

  duration?: Maybe<PrismicInfoPageDataInfoRawOembedDurationQueryInteger_2>

  description?: Maybe<PrismicInfoPageDataInfoRawOembedDescriptionQueryString_2>

  thumbnail_url_with_play_button?: Maybe<PrismicInfoPageDataInfoRawOembedThumbnailUrlWithPlayButtonQueryString_2>

  upload_date?: Maybe<PrismicInfoPageDataInfoRawOembedUploadDateQueryString_2>

  video_id?: Maybe<PrismicInfoPageDataInfoRawOembedVideoIdQueryInteger_2>

  uri?: Maybe<PrismicInfoPageDataInfoRawOembedUriQueryString_2>

  embed_url?: Maybe<PrismicInfoPageDataInfoRawOembedEmbedUrlQueryString_2>

  type?: Maybe<PrismicInfoPageDataInfoRawOembedTypeQueryString_2>

  version?: Maybe<PrismicInfoPageDataInfoRawOembedVersionQueryString_2>

  title?: Maybe<PrismicInfoPageDataInfoRawOembedTitleQueryString_2>

  author_name?: Maybe<PrismicInfoPageDataInfoRawOembedAuthorNameQueryString_2>

  author_url?: Maybe<PrismicInfoPageDataInfoRawOembedAuthorUrlQueryString_2>

  provider_name?: Maybe<PrismicInfoPageDataInfoRawOembedProviderNameQueryString_2>

  provider_url?: Maybe<PrismicInfoPageDataInfoRawOembedProviderUrlQueryString_2>

  thumbnail_url?: Maybe<PrismicInfoPageDataInfoRawOembedThumbnailUrlQueryString_2>

  thumbnail_width?: Maybe<PrismicInfoPageDataInfoRawOembedThumbnailWidthQueryInteger_2>

  thumbnail_height?: Maybe<PrismicInfoPageDataInfoRawOembedThumbnailHeightQueryInteger_2>

  html?: Maybe<PrismicInfoPageDataInfoRawOembedHtmlQueryString_2>
}

export interface PrismicInfoPageDataInfoRawOembedIsPlusQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedAccountTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedDurationQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedDescriptionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedThumbnailUrlWithPlayButtonQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedUploadDateQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedVideoIdQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedUriQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedEmbedUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedVersionQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedTitleQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedAuthorNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedAuthorUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedProviderNameQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedProviderUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedThumbnailUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedThumbnailWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedThumbnailHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataInfoRawOembedHtmlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawUrlQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataInfoRawDimensionsInputObject_2 {
  width?: Maybe<PrismicInfoPageDataInfoRawDimensionsWidthQueryInteger_2>

  height?: Maybe<PrismicInfoPageDataInfoRawDimensionsHeightQueryInteger_2>
}

export interface PrismicInfoPageDataInfoRawDimensionsWidthQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPageDataInfoRawDimensionsHeightQueryInteger_2 {
  eq?: Maybe<number>

  ne?: Maybe<number>

  gt?: Maybe<number>

  gte?: Maybe<number>

  lt?: Maybe<number>

  lte?: Maybe<number>

  in?: Maybe<(Maybe<number>)[]>

  nin?: Maybe<(Maybe<number>)[]>
}

export interface PrismicInfoPagePrismicIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageIdQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageInternalInputObject_2 {
  type?: Maybe<PrismicInfoPageInternalTypeQueryString_2>

  contentDigest?: Maybe<PrismicInfoPageInternalContentDigestQueryString_2>

  owner?: Maybe<PrismicInfoPageInternalOwnerQueryString_2>
}

export interface PrismicInfoPageInternalTypeQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageInternalContentDigestQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageInternalOwnerQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export interface PrismicInfoPageDataStringQueryString_2 {
  eq?: Maybe<string>

  ne?: Maybe<string>

  regex?: Maybe<string>

  glob?: Maybe<string>

  in?: Maybe<(Maybe<string>)[]>

  nin?: Maybe<(Maybe<string>)[]>
}

export enum SitePageConnectionSortByFieldsEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePageDistinctEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePageGroupEnum {
  JsonName = 'jsonName',
  InternalComponentName = 'internalComponentName',
  Path = 'path',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  PluginCreatorNode = 'pluginCreator___NODE',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
}

export enum SitePluginConnectionSortByFieldsEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsUsername = 'pluginOptions___username',
  PluginOptionsAccessToken = 'pluginOptions___access_token',
  PluginOptionsInstagramId = 'pluginOptions___instagram_id',
  PluginOptionsFonts = 'pluginOptions___fonts',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsEnvProduction = 'pluginOptions___env___production',
  PluginOptionsEnvBranchDeploy = 'pluginOptions___env___branch_deploy',
  PluginOptionsEnvDeployPreview = 'pluginOptions___env___deploy_preview',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum SitePluginConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum SitePluginDistinctEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsUsername = 'pluginOptions___username',
  PluginOptionsAccessToken = 'pluginOptions___access_token',
  PluginOptionsInstagramId = 'pluginOptions___instagram_id',
  PluginOptionsFonts = 'pluginOptions___fonts',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsEnvProduction = 'pluginOptions___env___production',
  PluginOptionsEnvBranchDeploy = 'pluginOptions___env___branch_deploy',
  PluginOptionsEnvDeployPreview = 'pluginOptions___env___deploy_preview',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum SitePluginGroupEnum {
  Resolve = 'resolve',
  Id = 'id',
  Name = 'name',
  Version = 'version',
  PluginOptionsRepositoryName = 'pluginOptions___repositoryName',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsLang = 'pluginOptions___lang',
  PluginOptionsUsername = 'pluginOptions___username',
  PluginOptionsAccessToken = 'pluginOptions___access_token',
  PluginOptionsInstagramId = 'pluginOptions___instagram_id',
  PluginOptionsFonts = 'pluginOptions___fonts',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsEnvProduction = 'pluginOptions___env___production',
  PluginOptionsEnvBranchDeploy = 'pluginOptions___env___branch_deploy',
  PluginOptionsEnvDeployPreview = 'pluginOptions___env___deploy_preview',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonKeywords = 'packageJson___keywords',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum PrismicPartnersPageConnectionSortByFieldsEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataPartnersHeaderImageDimensions = 'data___partners_header_image___dimensions',
  DataPartnersHeaderImageAlt = 'data___partners_header_image___alt',
  DataPartnersHeaderImageCopyright = 'data___partners_header_image___copyright',
  DataPartnersHeaderImageUrl = 'data___partners_header_image___url',
  DataPartnersHeaderImageLocalFileNode = 'data___partners_header_image___localFile___NODE',
  DataPartnersTitle = 'data___partners_title',
  DataPartnersSubtitle = 'data___partners_subtitle',
  DataPartnersCtaTitle = 'data___partners_cta_title',
  DataPartnersCtaLinkHtml = 'data___partners_cta_link___html',
  DataPartnersCtaLinkText = 'data___partners_cta_link___text',
  DataPartnersCtaLinkRaw = 'data___partners_cta_link___raw',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicPartnersPageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION',
}

export enum PrismicPartnersPageDistinctEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataPartnersHeaderImageDimensions = 'data___partners_header_image___dimensions',
  DataPartnersHeaderImageAlt = 'data___partners_header_image___alt',
  DataPartnersHeaderImageCopyright = 'data___partners_header_image___copyright',
  DataPartnersHeaderImageUrl = 'data___partners_header_image___url',
  DataPartnersHeaderImageLocalFileNode = 'data___partners_header_image___localFile___NODE',
  DataPartnersTitle = 'data___partners_title',
  DataPartnersSubtitle = 'data___partners_subtitle',
  DataPartnersCtaTitle = 'data___partners_cta_title',
  DataPartnersCtaLinkHtml = 'data___partners_cta_link___html',
  DataPartnersCtaLinkText = 'data___partners_cta_link___text',
  DataPartnersCtaLinkRaw = 'data___partners_cta_link___raw',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicPartnersPageGroupEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataPartnersHeaderImageDimensions = 'data___partners_header_image___dimensions',
  DataPartnersHeaderImageAlt = 'data___partners_header_image___alt',
  DataPartnersHeaderImageCopyright = 'data___partners_header_image___copyright',
  DataPartnersHeaderImageUrl = 'data___partners_header_image___url',
  DataPartnersHeaderImageLocalFileNode = 'data___partners_header_image___localFile___NODE',
  DataPartnersTitle = 'data___partners_title',
  DataPartnersSubtitle = 'data___partners_subtitle',
  DataPartnersCtaTitle = 'data___partners_cta_title',
  DataPartnersCtaLinkHtml = 'data___partners_cta_link___html',
  DataPartnersCtaLinkText = 'data___partners_cta_link___text',
  DataPartnersCtaLinkRaw = 'data___partners_cta_link___raw',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicGeneralConnectionSortByFieldsEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataMainColor = 'data___main_color',
  DataStartDate = 'data___start_date',
  DataEndDate = 'data___end_date',
  DataLocation = 'data___location',
  DataFacebookLinkLinkType = 'data___facebook_link___link_type',
  DataFacebookLinkUrl = 'data___facebook_link___url',
  DataFacebookLinkTarget = 'data___facebook_link___target',
  DataFacebookLinkRaw = 'data___facebook_link___raw',
  DataInstagramLinkLinkType = 'data___instagram_link___link_type',
  DataInstagramLinkUrl = 'data___instagram_link___url',
  DataInstagramLinkTarget = 'data___instagram_link___target',
  DataInstagramLinkRaw = 'data___instagram_link___raw',
  DataEmail = 'data___email',
  DataUnifacWebsiteLinkType = 'data___unifac_website___link_type',
  DataUnifacWebsiteUrl = 'data___unifac_website___url',
  DataUnifacWebsiteTarget = 'data___unifac_website___target',
  DataUnifacWebsiteRaw = 'data___unifac_website___raw',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicGeneralConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum PrismicGeneralDistinctEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataMainColor = 'data___main_color',
  DataStartDate = 'data___start_date',
  DataEndDate = 'data___end_date',
  DataLocation = 'data___location',
  DataFacebookLinkLinkType = 'data___facebook_link___link_type',
  DataFacebookLinkUrl = 'data___facebook_link___url',
  DataFacebookLinkTarget = 'data___facebook_link___target',
  DataFacebookLinkRaw = 'data___facebook_link___raw',
  DataInstagramLinkLinkType = 'data___instagram_link___link_type',
  DataInstagramLinkUrl = 'data___instagram_link___url',
  DataInstagramLinkTarget = 'data___instagram_link___target',
  DataInstagramLinkRaw = 'data___instagram_link___raw',
  DataEmail = 'data___email',
  DataUnifacWebsiteLinkType = 'data___unifac_website___link_type',
  DataUnifacWebsiteUrl = 'data___unifac_website___url',
  DataUnifacWebsiteTarget = 'data___unifac_website___target',
  DataUnifacWebsiteRaw = 'data___unifac_website___raw',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicGeneralGroupEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataMainColor = 'data___main_color',
  DataStartDate = 'data___start_date',
  DataEndDate = 'data___end_date',
  DataLocation = 'data___location',
  DataFacebookLinkLinkType = 'data___facebook_link___link_type',
  DataFacebookLinkUrl = 'data___facebook_link___url',
  DataFacebookLinkTarget = 'data___facebook_link___target',
  DataFacebookLinkRaw = 'data___facebook_link___raw',
  DataInstagramLinkLinkType = 'data___instagram_link___link_type',
  DataInstagramLinkUrl = 'data___instagram_link___url',
  DataInstagramLinkTarget = 'data___instagram_link___target',
  DataInstagramLinkRaw = 'data___instagram_link___raw',
  DataEmail = 'data___email',
  DataUnifacWebsiteLinkType = 'data___unifac_website___link_type',
  DataUnifacWebsiteUrl = 'data___unifac_website___url',
  DataUnifacWebsiteTarget = 'data___unifac_website___target',
  DataUnifacWebsiteRaw = 'data___unifac_website___raw',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum FileConnectionSortByFieldsEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  PublicUrl = 'publicURL',
}

export enum FileConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum FileDistinctEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum FileGroupEnum {
  Id = 'id',
  Children = 'children',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalMediaType = 'internal___mediaType',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum ImageSharpConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
}

export enum ImageSharpConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum ImageSharpDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum ImageSharpGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalOwner = 'internal___owner',
}

export enum PrismicPartnerConnectionSortByFieldsEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataName = 'data___name',
  DataImageDimensions = 'data___image___dimensions',
  DataImageAlt = 'data___image___alt',
  DataImageCopyright = 'data___image___copyright',
  DataImageUrl = 'data___image___url',
  DataImageLocalFileNode = 'data___image___localFile___NODE',
  DataType = 'data___type',
  DataLinkLinkType = 'data___link___link_type',
  DataLinkUrl = 'data___link___url',
  DataLinkTarget = 'data___link___target',
  DataLinkRaw = 'data___link___raw',
  DataImportance = 'data___importance',
  DataDescription = 'data___description',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicPartnerConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum PrismicPartnerDistinctEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataName = 'data___name',
  DataImageDimensions = 'data___image___dimensions',
  DataImageAlt = 'data___image___alt',
  DataImageCopyright = 'data___image___copyright',
  DataImageUrl = 'data___image___url',
  DataImageLocalFileNode = 'data___image___localFile___NODE',
  DataType = 'data___type',
  DataLinkLinkType = 'data___link___link_type',
  DataLinkUrl = 'data___link___url',
  DataLinkTarget = 'data___link___target',
  DataLinkRaw = 'data___link___raw',
  DataImportance = 'data___importance',
  DataDescription = 'data___description',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicPartnerGroupEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataName = 'data___name',
  DataImageDimensions = 'data___image___dimensions',
  DataImageAlt = 'data___image___alt',
  DataImageCopyright = 'data___image___copyright',
  DataImageUrl = 'data___image___url',
  DataImageLocalFileNode = 'data___image___localFile___NODE',
  DataType = 'data___type',
  DataLinkLinkType = 'data___link___link_type',
  DataLinkUrl = 'data___link___url',
  DataLinkTarget = 'data___link___target',
  DataLinkRaw = 'data___link___raw',
  DataImportance = 'data___importance',
  DataDescription = 'data___description',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicHomepageConnectionSortByFieldsEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataHeaderMovieLinkType = 'data___header_movie___link_type',
  DataHeaderMovieName = 'data___header_movie___name',
  DataHeaderMovieKind = 'data___header_movie___kind',
  DataHeaderMovieUrl = 'data___header_movie___url',
  DataHeaderMovieSize = 'data___header_movie___size',
  DataHeaderMovieTarget = 'data___header_movie___target',
  DataHeaderMovieRaw = 'data___header_movie___raw',
  DataIntroTextHtml = 'data___intro_text___html',
  DataIntroTextText = 'data___intro_text___text',
  DataIntroTextRaw = 'data___intro_text___raw',
  DataIntroButtonText = 'data___intro_button_text',
  DataIntroImageDimensions = 'data___intro_image___dimensions',
  DataIntroImageAlt = 'data___intro_image___alt',
  DataIntroImageCopyright = 'data___intro_image___copyright',
  DataIntroImageUrl = 'data___intro_image___url',
  DataIntroImageLocalFileNode = 'data___intro_image___localFile___NODE',
  DataCarouselImages = 'data___carousel_images',
  DataPicturesMainPictureDimensions = 'data___pictures_main_picture___dimensions',
  DataPicturesMainPictureAlt = 'data___pictures_main_picture___alt',
  DataPicturesMainPictureCopyright = 'data___pictures_main_picture___copyright',
  DataPicturesMainPictureUrl = 'data___pictures_main_picture___url',
  DataPicturesMainPictureLocalFileNode = 'data___pictures_main_picture___localFile___NODE',
  DataPicturesSecondaryPictureDimensions = 'data___pictures_secondary_picture___dimensions',
  DataPicturesSecondaryPictureAlt = 'data___pictures_secondary_picture___alt',
  DataPicturesSecondaryPictureCopyright = 'data___pictures_secondary_picture___copyright',
  DataPicturesSecondaryPictureUrl = 'data___pictures_secondary_picture___url',
  DataPicturesSecondaryPictureLocalFileNode = 'data___pictures_secondary_picture___localFile___NODE',
  DataSocialTitle = 'data___social_title',
  DataSocialDescriptionHtml = 'data___social_description___html',
  DataSocialDescriptionText = 'data___social_description___text',
  DataSocialDescriptionRaw = 'data___social_description___raw',
  DataPartnerctaTitle = 'data___partnercta_title',
  DataPartnerctaDescriptionHtml = 'data___partnercta_description___html',
  DataPartnerctaDescriptionText = 'data___partnercta_description___text',
  DataPartnerctaDescriptionRaw = 'data___partnercta_description___raw',
  DataPartnerctaButtonText = 'data___partnercta_button_text',
  DataPartnerctaBgimageDimensions = 'data___partnercta_bgimage___dimensions',
  DataPartnerctaBgimageAlt = 'data___partnercta_bgimage___alt',
  DataPartnerctaBgimageCopyright = 'data___partnercta_bgimage___copyright',
  DataPartnerctaBgimageUrl = 'data___partnercta_bgimage___url',
  DataPartnerctaBgimageLocalFileNode = 'data___partnercta_bgimage___localFile___NODE',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicHomepageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum PrismicHomepageDistinctEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataHeaderMovieLinkType = 'data___header_movie___link_type',
  DataHeaderMovieName = 'data___header_movie___name',
  DataHeaderMovieKind = 'data___header_movie___kind',
  DataHeaderMovieUrl = 'data___header_movie___url',
  DataHeaderMovieSize = 'data___header_movie___size',
  DataHeaderMovieTarget = 'data___header_movie___target',
  DataHeaderMovieRaw = 'data___header_movie___raw',
  DataIntroTextHtml = 'data___intro_text___html',
  DataIntroTextText = 'data___intro_text___text',
  DataIntroTextRaw = 'data___intro_text___raw',
  DataIntroButtonText = 'data___intro_button_text',
  DataIntroImageDimensions = 'data___intro_image___dimensions',
  DataIntroImageAlt = 'data___intro_image___alt',
  DataIntroImageCopyright = 'data___intro_image___copyright',
  DataIntroImageUrl = 'data___intro_image___url',
  DataIntroImageLocalFileNode = 'data___intro_image___localFile___NODE',
  DataCarouselImages = 'data___carousel_images',
  DataPicturesMainPictureDimensions = 'data___pictures_main_picture___dimensions',
  DataPicturesMainPictureAlt = 'data___pictures_main_picture___alt',
  DataPicturesMainPictureCopyright = 'data___pictures_main_picture___copyright',
  DataPicturesMainPictureUrl = 'data___pictures_main_picture___url',
  DataPicturesMainPictureLocalFileNode = 'data___pictures_main_picture___localFile___NODE',
  DataPicturesSecondaryPictureDimensions = 'data___pictures_secondary_picture___dimensions',
  DataPicturesSecondaryPictureAlt = 'data___pictures_secondary_picture___alt',
  DataPicturesSecondaryPictureCopyright = 'data___pictures_secondary_picture___copyright',
  DataPicturesSecondaryPictureUrl = 'data___pictures_secondary_picture___url',
  DataPicturesSecondaryPictureLocalFileNode = 'data___pictures_secondary_picture___localFile___NODE',
  DataSocialTitle = 'data___social_title',
  DataSocialDescriptionHtml = 'data___social_description___html',
  DataSocialDescriptionText = 'data___social_description___text',
  DataSocialDescriptionRaw = 'data___social_description___raw',
  DataPartnerctaTitle = 'data___partnercta_title',
  DataPartnerctaDescriptionHtml = 'data___partnercta_description___html',
  DataPartnerctaDescriptionText = 'data___partnercta_description___text',
  DataPartnerctaDescriptionRaw = 'data___partnercta_description___raw',
  DataPartnerctaButtonText = 'data___partnercta_button_text',
  DataPartnerctaBgimageDimensions = 'data___partnercta_bgimage___dimensions',
  DataPartnerctaBgimageAlt = 'data___partnercta_bgimage___alt',
  DataPartnerctaBgimageCopyright = 'data___partnercta_bgimage___copyright',
  DataPartnerctaBgimageUrl = 'data___partnercta_bgimage___url',
  DataPartnerctaBgimageLocalFileNode = 'data___partnercta_bgimage___localFile___NODE',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicHomepageGroupEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataHeaderMovieLinkType = 'data___header_movie___link_type',
  DataHeaderMovieName = 'data___header_movie___name',
  DataHeaderMovieKind = 'data___header_movie___kind',
  DataHeaderMovieUrl = 'data___header_movie___url',
  DataHeaderMovieSize = 'data___header_movie___size',
  DataHeaderMovieTarget = 'data___header_movie___target',
  DataHeaderMovieRaw = 'data___header_movie___raw',
  DataIntroTextHtml = 'data___intro_text___html',
  DataIntroTextText = 'data___intro_text___text',
  DataIntroTextRaw = 'data___intro_text___raw',
  DataIntroButtonText = 'data___intro_button_text',
  DataIntroImageDimensions = 'data___intro_image___dimensions',
  DataIntroImageAlt = 'data___intro_image___alt',
  DataIntroImageCopyright = 'data___intro_image___copyright',
  DataIntroImageUrl = 'data___intro_image___url',
  DataIntroImageLocalFileNode = 'data___intro_image___localFile___NODE',
  DataCarouselImages = 'data___carousel_images',
  DataPicturesMainPictureDimensions = 'data___pictures_main_picture___dimensions',
  DataPicturesMainPictureAlt = 'data___pictures_main_picture___alt',
  DataPicturesMainPictureCopyright = 'data___pictures_main_picture___copyright',
  DataPicturesMainPictureUrl = 'data___pictures_main_picture___url',
  DataPicturesMainPictureLocalFileNode = 'data___pictures_main_picture___localFile___NODE',
  DataPicturesSecondaryPictureDimensions = 'data___pictures_secondary_picture___dimensions',
  DataPicturesSecondaryPictureAlt = 'data___pictures_secondary_picture___alt',
  DataPicturesSecondaryPictureCopyright = 'data___pictures_secondary_picture___copyright',
  DataPicturesSecondaryPictureUrl = 'data___pictures_secondary_picture___url',
  DataPicturesSecondaryPictureLocalFileNode = 'data___pictures_secondary_picture___localFile___NODE',
  DataSocialTitle = 'data___social_title',
  DataSocialDescriptionHtml = 'data___social_description___html',
  DataSocialDescriptionText = 'data___social_description___text',
  DataSocialDescriptionRaw = 'data___social_description___raw',
  DataPartnerctaTitle = 'data___partnercta_title',
  DataPartnerctaDescriptionHtml = 'data___partnercta_description___html',
  DataPartnerctaDescriptionText = 'data___partnercta_description___text',
  DataPartnerctaDescriptionRaw = 'data___partnercta_description___raw',
  DataPartnerctaButtonText = 'data___partnercta_button_text',
  DataPartnerctaBgimageDimensions = 'data___partnercta_bgimage___dimensions',
  DataPartnerctaBgimageAlt = 'data___partnercta_bgimage___alt',
  DataPartnerctaBgimageCopyright = 'data___partnercta_bgimage___copyright',
  DataPartnerctaBgimageUrl = 'data___partnercta_bgimage___url',
  DataPartnerctaBgimageLocalFileNode = 'data___partnercta_bgimage___localFile___NODE',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum InstaNodeConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  Likes = 'likes',
  Thumbnails = 'thumbnails',
  Original = 'original',
  Timestamp = 'timestamp',
  DimensionsHeight = 'dimensions___height',
  DimensionsWidth = 'dimensions___width',
  Comments = 'comments',
  LocalFileNode = 'localFile___NODE',
}

export enum InstaNodeConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum InstaNodeDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  Likes = 'likes',
  Thumbnails = 'thumbnails',
  Original = 'original',
  Timestamp = 'timestamp',
  DimensionsHeight = 'dimensions___height',
  DimensionsWidth = 'dimensions___width',
  Comments = 'comments',
  LocalFileNode = 'localFile___NODE',
}

export enum InstaNodeGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  Likes = 'likes',
  Thumbnails = 'thumbnails',
  Original = 'original',
  Timestamp = 'timestamp',
  DimensionsHeight = 'dimensions___height',
  DimensionsWidth = 'dimensions___width',
  Comments = 'comments',
  LocalFileNode = 'localFile___NODE',
}

export enum DirectoryConnectionSortByFieldsEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum DirectoryDistinctEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum DirectoryGroupEnum {
  Id = 'id',
  Parent = 'parent',
  InternalContentDigest = 'internal___contentDigest',
  InternalType = 'internal___type',
  InternalDescription = 'internal___description',
  InternalOwner = 'internal___owner',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export enum PrismicInfoPageConnectionSortByFieldsEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataTitle = 'data___title',
  DataSubtitle = 'data___subtitle',
  DataHeaderImageDimensions = 'data___header_image___dimensions',
  DataHeaderImageAlt = 'data___header_image___alt',
  DataHeaderImageCopyright = 'data___header_image___copyright',
  DataHeaderImageUrl = 'data___header_image___url',
  DataHeaderImageLocalFileNode = 'data___header_image___localFile___NODE',
  DataInfoHtml = 'data___info___html',
  DataInfoText = 'data___info___text',
  DataInfoRaw = 'data___info___raw',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicInfoPageConnectionSortOrderValues {
  Asc = 'ASC',
  Desc = 'DESC',
}

export enum PrismicInfoPageDistinctEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataTitle = 'data___title',
  DataSubtitle = 'data___subtitle',
  DataHeaderImageDimensions = 'data___header_image___dimensions',
  DataHeaderImageAlt = 'data___header_image___alt',
  DataHeaderImageCopyright = 'data___header_image___copyright',
  DataHeaderImageUrl = 'data___header_image___url',
  DataHeaderImageLocalFileNode = 'data___header_image___localFile___NODE',
  DataInfoHtml = 'data___info___html',
  DataInfoText = 'data___info___text',
  DataInfoRaw = 'data___info___raw',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

export enum PrismicInfoPageGroupEnum {
  Type = 'type',
  Href = 'href',
  FirstPublicationDate = 'first_publication_date',
  LastPublicationDate = 'last_publication_date',
  Slugs = 'slugs',
  Lang = 'lang',
  DataTitle = 'data___title',
  DataSubtitle = 'data___subtitle',
  DataHeaderImageDimensions = 'data___header_image___dimensions',
  DataHeaderImageAlt = 'data___header_image___alt',
  DataHeaderImageCopyright = 'data___header_image___copyright',
  DataHeaderImageUrl = 'data___header_image___url',
  DataHeaderImageLocalFileNode = 'data___header_image___localFile___NODE',
  DataInfoHtml = 'data___info___html',
  DataInfoText = 'data___info___text',
  DataInfoRaw = 'data___info___raw',
  PrismicId = 'prismicId',
  Id = 'id',
  Parent = 'parent',
  InternalType = 'internal___type',
  InternalContentDigest = 'internal___contentDigest',
  InternalOwner = 'internal___owner',
  DataString = 'dataString',
}

/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard  for representation of dates and times using the Gregorian calendar. */
export type Date = any

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Interfaces
// ====================================================

/** An object with an id, parent, and children */
export interface Node {
  /** The id of the node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>
}

// ====================================================
// Types
// ====================================================

export interface Query {
  /** Connection to all SitePage nodes */
  allSitePage?: Maybe<SitePageConnection>
  /** Connection to all SitePlugin nodes */
  allSitePlugin?: Maybe<SitePluginConnection>
  /** Connection to all PrismicPartnersPage nodes */
  allPrismicPartnersPage?: Maybe<PrismicPartnersPageConnection>
  /** Connection to all PrismicGeneral nodes */
  allPrismicGeneral?: Maybe<PrismicGeneralConnection>
  /** Connection to all File nodes */
  allFile?: Maybe<FileConnection>
  /** Connection to all ImageSharp nodes */
  allImageSharp?: Maybe<ImageSharpConnection>
  /** Connection to all PrismicPartner nodes */
  allPrismicPartner?: Maybe<PrismicPartnerConnection>
  /** Connection to all PrismicHomepage nodes */
  allPrismicHomepage?: Maybe<PrismicHomepageConnection>
  /** Connection to all InstaNode nodes */
  allInstaNode?: Maybe<InstaNodeConnection>
  /** Connection to all Directory nodes */
  allDirectory?: Maybe<DirectoryConnection>
  /** Connection to all PrismicInfoPage nodes */
  allPrismicInfoPage?: Maybe<PrismicInfoPageConnection>

  sitePage?: Maybe<SitePage>

  sitePlugin?: Maybe<SitePlugin>

  site?: Maybe<Site>

  prismicPartnersPage?: Maybe<PrismicPartnersPage>

  prismicGeneral?: Maybe<PrismicGeneral>

  file?: Maybe<File>

  imageSharp?: Maybe<ImageSharp>

  prismicPartner?: Maybe<PrismicPartner>

  prismicHomepage?: Maybe<PrismicHomepage>

  instaNode?: Maybe<InstaNode>

  directory?: Maybe<Directory>

  prismicInfoPage?: Maybe<PrismicInfoPage>
}

/** A connection to a list of items. */
export interface SitePageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<SitePageGroupConnectionConnection>)[]>
}

/** Information about pagination in a connection. */
export interface PageInfo {
  /** When paginating, are there more items? */
  hasNextPage: boolean
}

/** An edge in a connection. */
export interface SitePageEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>
  /** The next edge in the connection */
  next?: Maybe<SitePage>
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>
}

/** Node of type SitePage */
export interface SitePage extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  jsonName?: Maybe<string>

  internalComponentName?: Maybe<string>

  path?: Maybe<string>

  component?: Maybe<string>

  componentChunkName?: Maybe<string>

  pluginCreator?: Maybe<SitePlugin>

  pluginCreatorId?: Maybe<string>

  componentPath?: Maybe<string>

  internal?: Maybe<Internal_13>
}

/** Node of type SitePlugin */
export interface SitePlugin extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  resolve?: Maybe<string>

  name?: Maybe<string>

  version?: Maybe<string>

  pluginOptions?: Maybe<PluginOptions_2>

  nodeAPIs?: Maybe<(Maybe<string>)[]>

  ssrAPIs?: Maybe<(Maybe<string>)[]>

  pluginFilepath?: Maybe<string>

  packageJson?: Maybe<PackageJson_2>

  internal?: Maybe<Internal_14>
}

export interface PluginOptions_2 {
  repositoryName?: Maybe<string>

  accessToken?: Maybe<string>

  lang?: Maybe<string>

  username?: Maybe<string>

  access_token?: Maybe<string>

  instagram_id?: Maybe<string>

  fonts?: Maybe<(Maybe<string>)[]>

  name?: Maybe<string>

  path?: Maybe<string>

  short_name?: Maybe<string>

  start_url?: Maybe<string>

  background_color?: Maybe<string>

  theme_color?: Maybe<string>

  display?: Maybe<string>

  icon?: Maybe<string>

  env?: Maybe<Env_2>

  pathCheck?: Maybe<boolean>
}

export interface Env_2 {
  production?: Maybe<Production_2>

  branch_deploy?: Maybe<BranchDeploy_2>

  deploy_preview?: Maybe<DeployPreview_2>
}

export interface Production_2 {
  policy?: Maybe<(Maybe<Policy_4>)[]>
}

export interface Policy_4 {
  userAgent?: Maybe<string>

  disallow?: Maybe<(Maybe<string>)[]>
}

export interface BranchDeploy_2 {
  policy?: Maybe<(Maybe<Policy_5>)[]>
}

export interface Policy_5 {
  userAgent?: Maybe<string>

  disallow?: Maybe<(Maybe<string>)[]>
}

export interface DeployPreview_2 {
  policy?: Maybe<(Maybe<Policy_6>)[]>
}

export interface Policy_6 {
  userAgent?: Maybe<string>

  disallow?: Maybe<(Maybe<string>)[]>
}

export interface PackageJson_2 {
  name?: Maybe<string>

  description?: Maybe<string>

  version?: Maybe<string>

  main?: Maybe<string>

  author?: Maybe<string>

  license?: Maybe<string>

  dependencies?: Maybe<(Maybe<Dependencies_2>)[]>

  devDependencies?: Maybe<(Maybe<DevDependencies_2>)[]>

  peerDependencies?: Maybe<(Maybe<PeerDependencies_2>)[]>

  keywords?: Maybe<(Maybe<string>)[]>
}

export interface Dependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface DevDependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface PeerDependencies_2 {
  name?: Maybe<string>

  version?: Maybe<string>
}

export interface Internal_14 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

export interface Internal_13 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface SitePageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePageGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface SitePageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePage>
  /** The next edge in the connection */
  next?: Maybe<SitePage>
  /** The previous edge in the connection */
  previous?: Maybe<SitePage>
}

/** A connection to a list of items. */
export interface SitePluginConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<SitePluginGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface SitePluginEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>
}

/** A connection to a list of items. */
export interface SitePluginGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<SitePluginGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface SitePluginGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<SitePlugin>
  /** The next edge in the connection */
  next?: Maybe<SitePlugin>
  /** The previous edge in the connection */
  previous?: Maybe<SitePlugin>
}

/** A connection to a list of items. */
export interface PrismicPartnersPageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicPartnersPageEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<PrismicPartnersPageGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface PrismicPartnersPageEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicPartnersPage>
  /** The next edge in the connection */
  next?: Maybe<PrismicPartnersPage>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicPartnersPage>
}

/** Node of type PrismicPartnersPage */
export interface PrismicPartnersPage extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  type?: Maybe<string>

  href?: Maybe<string>

  first_publication_date?: Maybe<Date>

  last_publication_date?: Maybe<Date>

  slugs?: Maybe<(Maybe<string>)[]>

  lang?: Maybe<string>

  data?: Maybe<Data_9>

  prismicId?: Maybe<string>

  internal?: Maybe<Internal_15>

  dataString?: Maybe<string>
}

export interface Data_9 {
  partners_header_image?: Maybe<PartnersHeaderImage_2>

  partners_title?: Maybe<string>

  partners_subtitle?: Maybe<string>

  partners_cta_title?: Maybe<string>

  partners_cta_link?: Maybe<PartnersCtaLink_2>
}

export interface PartnersHeaderImage_2 {
  dimensions?: Maybe<Dimensions_11>

  alt?: Maybe<string>

  copyright?: Maybe<string>

  url?: Maybe<string>

  localFile?: Maybe<File>
}

export interface Dimensions_11 {
  width?: Maybe<number>

  height?: Maybe<number>
}

/** Node of type File */
export interface File extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>
  /** The child of this node of type imageSharp */
  childImageSharp?: Maybe<ImageSharp>

  internal?: Maybe<Internal_16>

  sourceInstanceName?: Maybe<string>

  absolutePath?: Maybe<string>

  relativePath?: Maybe<string>

  extension?: Maybe<string>

  size?: Maybe<number>

  prettySize?: Maybe<string>

  modifiedTime?: Maybe<Date>

  accessTime?: Maybe<Date>

  changeTime?: Maybe<Date>

  birthTime?: Maybe<Date>

  root?: Maybe<string>

  dir?: Maybe<string>

  base?: Maybe<string>

  ext?: Maybe<string>

  name?: Maybe<string>

  relativeDirectory?: Maybe<string>

  dev?: Maybe<number>

  mode?: Maybe<number>

  nlink?: Maybe<number>

  uid?: Maybe<number>

  gid?: Maybe<number>

  rdev?: Maybe<number>

  blksize?: Maybe<number>

  ino?: Maybe<number>

  blocks?: Maybe<number>

  atimeMs?: Maybe<number>

  mtimeMs?: Maybe<number>

  ctimeMs?: Maybe<number>

  birthtimeMs?: Maybe<number>

  atime?: Maybe<Date>

  mtime?: Maybe<Date>

  ctime?: Maybe<Date>

  birthtime?: Maybe<Date>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<string>
}

/** Node of type ImageSharp */
export interface ImageSharp extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_17>

  fixed?: Maybe<ImageSharpFixed>

  resolutions?: Maybe<ImageSharpResolutions>

  fluid?: Maybe<ImageSharpFluid>

  sizes?: Maybe<ImageSharpSizes>

  original?: Maybe<ImageSharpOriginal>

  resize?: Maybe<ImageSharpResize>
}

export interface Internal_17 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

export interface ImageSharpFixed {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  originalName?: Maybe<string>
}

export interface ImageSharpResolutions {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  originalName?: Maybe<string>
}

export interface ImageSharpFluid {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  sizes?: Maybe<string>

  originalImg?: Maybe<string>

  originalName?: Maybe<string>

  presentationWidth?: Maybe<number>

  presentationHeight?: Maybe<number>
}

export interface ImageSharpSizes {
  base64?: Maybe<string>

  tracedSVG?: Maybe<string>

  aspectRatio?: Maybe<number>

  src?: Maybe<string>

  srcSet?: Maybe<string>

  srcWebp?: Maybe<string>

  srcSetWebp?: Maybe<string>

  sizes?: Maybe<string>

  originalImg?: Maybe<string>

  originalName?: Maybe<string>

  presentationWidth?: Maybe<number>

  presentationHeight?: Maybe<number>
}

export interface ImageSharpOriginal {
  width?: Maybe<number>

  height?: Maybe<number>

  src?: Maybe<string>
}

export interface ImageSharpResize {
  src?: Maybe<string>

  tracedSVG?: Maybe<string>

  width?: Maybe<number>

  height?: Maybe<number>

  aspectRatio?: Maybe<number>

  originalName?: Maybe<string>
}

export interface Internal_16 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  mediaType?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

export interface PartnersCtaLink_2 {
  html?: Maybe<string>

  text?: Maybe<string>

  raw?: Maybe<(Maybe<Raw_11>)[]>
}

export interface Raw_11 {
  type?: Maybe<string>

  text?: Maybe<string>

  spans?: Maybe<(Maybe<Spans_5>)[]>
}

export interface Spans_5 {
  start?: Maybe<number>

  end?: Maybe<number>

  type?: Maybe<string>

  data?: Maybe<Data_10>
}

export interface Data_10 {
  link_type?: Maybe<string>

  url?: Maybe<string>
}

export interface Internal_15 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface PrismicPartnersPageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicPartnersPageGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface PrismicPartnersPageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicPartnersPage>
  /** The next edge in the connection */
  next?: Maybe<PrismicPartnersPage>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicPartnersPage>
}

/** A connection to a list of items. */
export interface PrismicGeneralConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicGeneralEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<PrismicGeneralGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface PrismicGeneralEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicGeneral>
  /** The next edge in the connection */
  next?: Maybe<PrismicGeneral>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicGeneral>
}

/** Node of type PrismicGeneral */
export interface PrismicGeneral extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  type?: Maybe<string>

  href?: Maybe<string>

  first_publication_date?: Maybe<Date>

  last_publication_date?: Maybe<Date>

  slugs?: Maybe<(Maybe<string>)[]>

  lang?: Maybe<string>

  data?: Maybe<Data_11>

  prismicId?: Maybe<string>

  internal?: Maybe<Internal_18>

  dataString?: Maybe<string>
}

export interface Data_11 {
  main_color?: Maybe<string>

  start_date?: Maybe<Date>

  end_date?: Maybe<Date>

  location?: Maybe<string>

  facebook_link?: Maybe<FacebookLink_2>

  instagram_link?: Maybe<InstagramLink_2>

  email?: Maybe<string>

  unifac_website?: Maybe<UnifacWebsite_2>
}

export interface FacebookLink_2 {
  link_type?: Maybe<string>

  url?: Maybe<string>

  target?: Maybe<string>

  raw?: Maybe<Raw_12>
}

export interface Raw_12 {
  link_type?: Maybe<string>

  url?: Maybe<string>
}

export interface InstagramLink_2 {
  link_type?: Maybe<string>

  url?: Maybe<string>

  target?: Maybe<string>

  raw?: Maybe<Raw_13>
}

export interface Raw_13 {
  link_type?: Maybe<string>

  url?: Maybe<string>
}

export interface UnifacWebsite_2 {
  link_type?: Maybe<string>

  url?: Maybe<string>

  target?: Maybe<string>

  raw?: Maybe<Raw_14>
}

export interface Raw_14 {
  link_type?: Maybe<string>

  url?: Maybe<string>
}

export interface Internal_18 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface PrismicGeneralGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicGeneralGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface PrismicGeneralGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicGeneral>
  /** The next edge in the connection */
  next?: Maybe<PrismicGeneral>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicGeneral>
}

/** A connection to a list of items. */
export interface FileConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<FileGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface FileEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>
  /** The next edge in the connection */
  next?: Maybe<File>
  /** The previous edge in the connection */
  previous?: Maybe<File>
}

/** A connection to a list of items. */
export interface FileGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<FileGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface FileGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<File>
  /** The next edge in the connection */
  next?: Maybe<File>
  /** The previous edge in the connection */
  previous?: Maybe<File>
}

/** A connection to a list of items. */
export interface ImageSharpConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<ImageSharpEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<ImageSharpGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface ImageSharpEdge {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>
}

/** A connection to a list of items. */
export interface ImageSharpGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<ImageSharpGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface ImageSharpGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<ImageSharp>
  /** The next edge in the connection */
  next?: Maybe<ImageSharp>
  /** The previous edge in the connection */
  previous?: Maybe<ImageSharp>
}

/** A connection to a list of items. */
export interface PrismicPartnerConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicPartnerEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<PrismicPartnerGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface PrismicPartnerEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicPartner>
  /** The next edge in the connection */
  next?: Maybe<PrismicPartner>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicPartner>
}

/** Node of type PrismicPartner */
export interface PrismicPartner extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  type?: Maybe<string>

  href?: Maybe<string>

  first_publication_date?: Maybe<Date>

  last_publication_date?: Maybe<Date>

  slugs?: Maybe<(Maybe<string>)[]>

  lang?: Maybe<string>

  data?: Maybe<Data_12>

  prismicId?: Maybe<string>

  internal?: Maybe<Internal_19>

  dataString?: Maybe<string>
}

export interface Data_12 {
  name?: Maybe<string>

  image?: Maybe<Image_3>

  type?: Maybe<string>

  link?: Maybe<Link_2>

  importance?: Maybe<number>

  description?: Maybe<string>
}

export interface Image_3 {
  dimensions?: Maybe<Dimensions_12>

  alt?: Maybe<string>

  copyright?: Maybe<string>

  url?: Maybe<string>

  localFile?: Maybe<File>
}

export interface Dimensions_12 {
  width?: Maybe<number>

  height?: Maybe<number>
}

export interface Link_2 {
  link_type?: Maybe<string>

  url?: Maybe<string>

  target?: Maybe<string>

  raw?: Maybe<Raw_15>
}

export interface Raw_15 {
  link_type?: Maybe<string>

  url?: Maybe<string>

  target?: Maybe<string>
}

export interface Internal_19 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface PrismicPartnerGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicPartnerGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface PrismicPartnerGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicPartner>
  /** The next edge in the connection */
  next?: Maybe<PrismicPartner>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicPartner>
}

/** A connection to a list of items. */
export interface PrismicHomepageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicHomepageEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<PrismicHomepageGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface PrismicHomepageEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicHomepage>
  /** The next edge in the connection */
  next?: Maybe<PrismicHomepage>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicHomepage>
}

/** Node of type PrismicHomepage */
export interface PrismicHomepage extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  type?: Maybe<string>

  href?: Maybe<string>

  first_publication_date?: Maybe<Date>

  last_publication_date?: Maybe<Date>

  slugs?: Maybe<(Maybe<string>)[]>

  lang?: Maybe<string>

  data?: Maybe<Data_13>

  prismicId?: Maybe<string>

  internal?: Maybe<Internal_20>

  dataString?: Maybe<string>
}

export interface Data_13 {
  header_movie?: Maybe<HeaderMovie_2>

  intro_text?: Maybe<IntroText_2>

  intro_button_text?: Maybe<string>

  intro_image?: Maybe<IntroImage_2>

  carousel_images?: Maybe<(Maybe<CarouselImages_2>)[]>

  pictures_main_picture?: Maybe<PicturesMainPicture_2>

  pictures_secondary_picture?: Maybe<PicturesSecondaryPicture_2>

  social_title?: Maybe<string>

  social_description?: Maybe<SocialDescription_2>

  partnercta_title?: Maybe<string>

  partnercta_description?: Maybe<PartnerctaDescription_2>

  partnercta_button_text?: Maybe<string>

  partnercta_bgimage?: Maybe<PartnerctaBgimage_2>
}

export interface HeaderMovie_2 {
  link_type?: Maybe<string>

  name?: Maybe<string>

  kind?: Maybe<string>

  url?: Maybe<string>

  size?: Maybe<string>

  target?: Maybe<string>

  raw?: Maybe<Raw_16>
}

export interface Raw_16 {
  link_type?: Maybe<string>

  name?: Maybe<string>

  kind?: Maybe<string>

  url?: Maybe<string>

  size?: Maybe<string>
}

export interface IntroText_2 {
  html?: Maybe<string>

  text?: Maybe<string>

  raw?: Maybe<(Maybe<Raw_17>)[]>
}

export interface Raw_17 {
  type?: Maybe<string>

  text?: Maybe<string>

  spans?: Maybe<(Maybe<Spans_6>)[]>
}

export interface Spans_6 {
  start?: Maybe<number>

  end?: Maybe<number>

  type?: Maybe<string>
}

export interface IntroImage_2 {
  dimensions?: Maybe<Dimensions_13>

  alt?: Maybe<string>

  copyright?: Maybe<string>

  url?: Maybe<string>

  localFile?: Maybe<File>
}

export interface Dimensions_13 {
  width?: Maybe<number>

  height?: Maybe<number>
}

export interface CarouselImages_2 {
  image?: Maybe<Image_4>
}

export interface Image_4 {
  dimensions?: Maybe<Dimensions_14>

  alt?: Maybe<string>

  copyright?: Maybe<string>

  url?: Maybe<string>

  localFile?: Maybe<File>
}

export interface Dimensions_14 {
  width?: Maybe<number>

  height?: Maybe<number>
}

export interface PicturesMainPicture_2 {
  dimensions?: Maybe<Dimensions_15>

  alt?: Maybe<string>

  copyright?: Maybe<string>

  url?: Maybe<string>

  localFile?: Maybe<File>
}

export interface Dimensions_15 {
  width?: Maybe<number>

  height?: Maybe<number>
}

export interface PicturesSecondaryPicture_2 {
  dimensions?: Maybe<Dimensions_16>

  alt?: Maybe<string>

  copyright?: Maybe<string>

  url?: Maybe<string>

  localFile?: Maybe<File>
}

export interface Dimensions_16 {
  width?: Maybe<number>

  height?: Maybe<number>
}

export interface SocialDescription_2 {
  html?: Maybe<string>

  text?: Maybe<string>

  raw?: Maybe<(Maybe<Raw_18>)[]>
}

export interface Raw_18 {
  type?: Maybe<string>

  text?: Maybe<string>
}

export interface PartnerctaDescription_2 {
  html?: Maybe<string>

  text?: Maybe<string>

  raw?: Maybe<(Maybe<Raw_19>)[]>
}

export interface Raw_19 {
  type?: Maybe<string>

  text?: Maybe<string>

  spans?: Maybe<(Maybe<Spans_7>)[]>
}

export interface Spans_7 {
  start?: Maybe<number>

  end?: Maybe<number>

  type?: Maybe<string>

  data?: Maybe<Data_14>
}

export interface Data_14 {
  link_type?: Maybe<string>

  url?: Maybe<string>

  target?: Maybe<string>
}

export interface PartnerctaBgimage_2 {
  dimensions?: Maybe<Dimensions_17>

  alt?: Maybe<string>

  copyright?: Maybe<string>

  url?: Maybe<string>

  localFile?: Maybe<File>
}

export interface Dimensions_17 {
  width?: Maybe<number>

  height?: Maybe<number>
}

export interface Internal_20 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface PrismicHomepageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicHomepageGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface PrismicHomepageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicHomepage>
  /** The next edge in the connection */
  next?: Maybe<PrismicHomepage>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicHomepage>
}

/** A connection to a list of items. */
export interface InstaNodeConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<InstaNodeEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<InstaNodeGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface InstaNodeEdge {
  /** The item at the end of the edge */
  node?: Maybe<InstaNode>
  /** The next edge in the connection */
  next?: Maybe<InstaNode>
  /** The previous edge in the connection */
  previous?: Maybe<InstaNode>
}

/** Node of type InstaNode */
export interface InstaNode extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_21>

  likes?: Maybe<number>

  thumbnails?: Maybe<(Maybe<Thumbnails_2>)[]>

  original?: Maybe<string>

  timestamp?: Maybe<number>

  dimensions?: Maybe<Dimensions_18>

  comments?: Maybe<number>

  localFile?: Maybe<File>
}

export interface Internal_21 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>
}

export interface Thumbnails_2 {
  src?: Maybe<string>

  config_width?: Maybe<number>

  config_height?: Maybe<number>
}

export interface Dimensions_18 {
  height?: Maybe<number>

  width?: Maybe<number>
}

/** A connection to a list of items. */
export interface InstaNodeGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<InstaNodeGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface InstaNodeGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<InstaNode>
  /** The next edge in the connection */
  next?: Maybe<InstaNode>
  /** The previous edge in the connection */
  previous?: Maybe<InstaNode>
}

/** A connection to a list of items. */
export interface DirectoryConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<DirectoryGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface DirectoryEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>
  /** The next edge in the connection */
  next?: Maybe<Directory>
  /** The previous edge in the connection */
  previous?: Maybe<Directory>
}

/** Node of type Directory */
export interface Directory extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  internal?: Maybe<Internal_22>

  sourceInstanceName?: Maybe<string>

  absolutePath?: Maybe<string>

  relativePath?: Maybe<string>

  extension?: Maybe<string>

  size?: Maybe<number>

  prettySize?: Maybe<string>

  modifiedTime?: Maybe<Date>

  accessTime?: Maybe<Date>

  changeTime?: Maybe<Date>

  birthTime?: Maybe<Date>

  root?: Maybe<string>

  dir?: Maybe<string>

  base?: Maybe<string>

  ext?: Maybe<string>

  name?: Maybe<string>

  relativeDirectory?: Maybe<string>

  dev?: Maybe<number>

  mode?: Maybe<number>

  nlink?: Maybe<number>

  uid?: Maybe<number>

  gid?: Maybe<number>

  rdev?: Maybe<number>

  blksize?: Maybe<number>

  ino?: Maybe<number>

  blocks?: Maybe<number>

  atimeMs?: Maybe<number>

  mtimeMs?: Maybe<number>

  ctimeMs?: Maybe<number>

  birthtimeMs?: Maybe<number>

  atime?: Maybe<Date>

  mtime?: Maybe<Date>

  ctime?: Maybe<Date>

  birthtime?: Maybe<Date>
}

export interface Internal_22 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  description?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface DirectoryGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<DirectoryGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface DirectoryGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<Directory>
  /** The next edge in the connection */
  next?: Maybe<Directory>
  /** The previous edge in the connection */
  previous?: Maybe<Directory>
}

/** A connection to a list of items. */
export interface PrismicInfoPageConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicInfoPageEdge>)[]>

  totalCount?: Maybe<number>

  distinct?: Maybe<(Maybe<string>)[]>

  group?: Maybe<(Maybe<PrismicInfoPageGroupConnectionConnection>)[]>
}

/** An edge in a connection. */
export interface PrismicInfoPageEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicInfoPage>
  /** The next edge in the connection */
  next?: Maybe<PrismicInfoPage>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicInfoPage>
}

/** Node of type PrismicInfoPage */
export interface PrismicInfoPage extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  type?: Maybe<string>

  href?: Maybe<string>

  first_publication_date?: Maybe<Date>

  last_publication_date?: Maybe<Date>

  slugs?: Maybe<(Maybe<string>)[]>

  lang?: Maybe<string>

  data?: Maybe<Data_15>

  prismicId?: Maybe<string>

  internal?: Maybe<Internal_23>

  dataString?: Maybe<string>
}

export interface Data_15 {
  title?: Maybe<string>

  subtitle?: Maybe<string>

  header_image?: Maybe<HeaderImage_2>

  info?: Maybe<Info_2>
}

export interface HeaderImage_2 {
  dimensions?: Maybe<Dimensions_19>

  alt?: Maybe<string>

  copyright?: Maybe<string>

  url?: Maybe<string>

  localFile?: Maybe<File>
}

export interface Dimensions_19 {
  width?: Maybe<number>

  height?: Maybe<number>
}

export interface Info_2 {
  html?: Maybe<string>

  text?: Maybe<string>

  raw?: Maybe<(Maybe<Raw_20>)[]>
}

export interface Raw_20 {
  type?: Maybe<string>

  text?: Maybe<string>

  spans?: Maybe<(Maybe<Spans_8>)[]>

  oembed?: Maybe<Oembed_2>

  url?: Maybe<string>

  dimensions?: Maybe<Dimensions_20>
}

export interface Spans_8 {
  start?: Maybe<number>

  end?: Maybe<number>

  type?: Maybe<string>

  data?: Maybe<Data_16>
}

export interface Data_16 {
  link_type?: Maybe<string>

  url?: Maybe<string>

  target?: Maybe<string>
}

export interface Oembed_2 {
  is_plus?: Maybe<string>

  account_type?: Maybe<string>

  width?: Maybe<number>

  height?: Maybe<number>

  duration?: Maybe<number>

  description?: Maybe<string>

  thumbnail_url_with_play_button?: Maybe<string>

  upload_date?: Maybe<string>

  video_id?: Maybe<number>

  uri?: Maybe<string>

  embed_url?: Maybe<string>

  type?: Maybe<string>

  version?: Maybe<string>

  title?: Maybe<string>

  author_name?: Maybe<string>

  author_url?: Maybe<string>

  provider_name?: Maybe<string>

  provider_url?: Maybe<string>

  thumbnail_url?: Maybe<string>

  thumbnail_width?: Maybe<number>

  thumbnail_height?: Maybe<number>

  html?: Maybe<string>
}

export interface Dimensions_20 {
  width?: Maybe<number>

  height?: Maybe<number>
}

export interface Internal_23 {
  type?: Maybe<string>

  contentDigest?: Maybe<string>

  owner?: Maybe<string>
}

/** A connection to a list of items. */
export interface PrismicInfoPageGroupConnectionConnection {
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** A list of edges. */
  edges?: Maybe<(Maybe<PrismicInfoPageGroupConnectionEdge>)[]>

  field?: Maybe<string>

  fieldValue?: Maybe<string>

  totalCount?: Maybe<number>
}

/** An edge in a connection. */
export interface PrismicInfoPageGroupConnectionEdge {
  /** The item at the end of the edge */
  node?: Maybe<PrismicInfoPage>
  /** The next edge in the connection */
  next?: Maybe<PrismicInfoPage>
  /** The previous edge in the connection */
  previous?: Maybe<PrismicInfoPage>
}

/** Node of type Site */
export interface Site extends Node {
  /** The id of this node. */
  id: string
  /** The parent of this node. */
  parent?: Maybe<Node>
  /** The children of this node. */
  children?: Maybe<(Maybe<Node>)[]>

  siteMetadata?: Maybe<SiteMetadata_2>

  port?: Maybe<Date>

  host?: Maybe<string>

  pathPrefix?: Maybe<string>

  polyfill?: Maybe<boolean>

  buildTime?: Maybe<Date>

  internal?: Maybe<Internal_24>
}

export interface SiteMetadata_2 {
  title?: Maybe<string>

  description?: Maybe<string>

  author?: Maybe<string>
}

export interface Internal_24 {
  contentDigest?: Maybe<string>

  type?: Maybe<string>

  owner?: Maybe<string>
}

// ====================================================
// Arguments
// ====================================================

export interface AllSitePageQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<SitePageConnectionSort>

  filter?: Maybe<FilterSitePage>
}
export interface AllSitePluginQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<SitePluginConnectionSort>

  filter?: Maybe<FilterSitePlugin>
}
export interface AllPrismicPartnersPageQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<PrismicPartnersPageConnectionSort>

  filter?: Maybe<FilterPrismicPartnersPage>
}
export interface AllPrismicGeneralQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<PrismicGeneralConnectionSort>

  filter?: Maybe<FilterPrismicGeneral>
}
export interface AllFileQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<FileConnectionSort>

  filter?: Maybe<FilterFile>
}
export interface AllImageSharpQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<ImageSharpConnectionSort>

  filter?: Maybe<FilterImageSharp>
}
export interface AllPrismicPartnerQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<PrismicPartnerConnectionSort>

  filter?: Maybe<FilterPrismicPartner>
}
export interface AllPrismicHomepageQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<PrismicHomepageConnectionSort>

  filter?: Maybe<FilterPrismicHomepage>
}
export interface AllInstaNodeQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<InstaNodeConnectionSort>

  filter?: Maybe<FilterInstaNode>
}
export interface AllDirectoryQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<DirectoryConnectionSort>

  filter?: Maybe<FilterDirectory>
}
export interface AllPrismicInfoPageQueryArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  sort?: Maybe<PrismicInfoPageConnectionSort>

  filter?: Maybe<FilterPrismicInfoPage>
}
export interface SitePageQueryArgs {
  jsonName?: Maybe<SitePageJsonNameQueryString>

  internalComponentName?: Maybe<SitePageInternalComponentNameQueryString>

  path?: Maybe<SitePagePathQueryString_2>

  component?: Maybe<SitePageComponentQueryString>

  componentChunkName?: Maybe<SitePageComponentChunkNameQueryString>

  pluginCreator?: Maybe<SitePagePluginCreatorInputObject>

  pluginCreatorId?: Maybe<SitePagePluginCreatorIdQueryString_2>

  componentPath?: Maybe<SitePageComponentPathQueryString>

  id?: Maybe<SitePageIdQueryString_2>

  internal?: Maybe<SitePageInternalInputObject_2>
}
export interface SitePluginQueryArgs {
  resolve?: Maybe<SitePluginResolveQueryString_2>

  id?: Maybe<SitePluginIdQueryString_2>

  name?: Maybe<SitePluginNameQueryString_2>

  version?: Maybe<SitePluginVersionQueryString_2>

  pluginOptions?: Maybe<SitePluginPluginOptionsInputObject_2>

  nodeAPIs?: Maybe<SitePluginNodeApIsQueryList_2>

  ssrAPIs?: Maybe<SitePluginSsrApIsQueryList_2>

  pluginFilepath?: Maybe<SitePluginPluginFilepathQueryString_2>

  packageJson?: Maybe<SitePluginPackageJsonInputObject_2>

  internal?: Maybe<SitePluginInternalInputObject_2>
}
export interface SiteQueryArgs {
  siteMetadata?: Maybe<SiteSiteMetadataInputObject_2>

  port?: Maybe<SitePortQueryString_2>

  host?: Maybe<SiteHostQueryString_2>

  pathPrefix?: Maybe<SitePathPrefixQueryString_2>

  polyfill?: Maybe<SitePolyfillQueryBoolean_2>

  buildTime?: Maybe<SiteBuildTimeQueryString_2>

  id?: Maybe<SiteIdQueryString_2>

  internal?: Maybe<SiteInternalInputObject_2>
}
export interface PrismicPartnersPageQueryArgs {
  type?: Maybe<PrismicPartnersPageTypeQueryString_2>

  href?: Maybe<PrismicPartnersPageHrefQueryString_2>

  first_publication_date?: Maybe<PrismicPartnersPageFirstPublicationDateQueryString_2>

  last_publication_date?: Maybe<PrismicPartnersPageLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicPartnersPageSlugsQueryList_2>

  lang?: Maybe<PrismicPartnersPageLangQueryString_2>

  data?: Maybe<PrismicPartnersPageDataInputObject_2>

  prismicId?: Maybe<PrismicPartnersPagePrismicIdQueryString_2>

  id?: Maybe<PrismicPartnersPageIdQueryString_2>

  internal?: Maybe<PrismicPartnersPageInternalInputObject_2>

  dataString?: Maybe<PrismicPartnersPageDataStringQueryString_2>
}
export interface PrismicGeneralQueryArgs {
  type?: Maybe<PrismicGeneralTypeQueryString_2>

  href?: Maybe<PrismicGeneralHrefQueryString_2>

  first_publication_date?: Maybe<PrismicGeneralFirstPublicationDateQueryString_2>

  last_publication_date?: Maybe<PrismicGeneralLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicGeneralSlugsQueryList_2>

  lang?: Maybe<PrismicGeneralLangQueryString_2>

  data?: Maybe<PrismicGeneralDataInputObject_2>

  prismicId?: Maybe<PrismicGeneralPrismicIdQueryString_2>

  id?: Maybe<PrismicGeneralIdQueryString_2>

  internal?: Maybe<PrismicGeneralInternalInputObject_2>

  dataString?: Maybe<PrismicGeneralDataStringQueryString_2>
}
export interface FileQueryArgs {
  id?: Maybe<FileIdQueryString_2>

  internal?: Maybe<FileInternalInputObject_2>

  sourceInstanceName?: Maybe<FileSourceInstanceNameQueryString_2>

  absolutePath?: Maybe<FileAbsolutePathQueryString_2>

  relativePath?: Maybe<FileRelativePathQueryString_2>

  extension?: Maybe<FileExtensionQueryString_2>

  size?: Maybe<FileSizeQueryInteger_2>

  prettySize?: Maybe<FilePrettySizeQueryString_2>

  modifiedTime?: Maybe<FileModifiedTimeQueryString_2>

  accessTime?: Maybe<FileAccessTimeQueryString_2>

  changeTime?: Maybe<FileChangeTimeQueryString_2>

  birthTime?: Maybe<FileBirthTimeQueryString_2>

  root?: Maybe<FileRootQueryString_2>

  dir?: Maybe<FileDirQueryString_2>

  base?: Maybe<FileBaseQueryString_2>

  ext?: Maybe<FileExtQueryString_2>

  name?: Maybe<FileNameQueryString_2>

  relativeDirectory?: Maybe<FileRelativeDirectoryQueryString_2>

  dev?: Maybe<FileDevQueryInteger_2>

  mode?: Maybe<FileModeQueryInteger_2>

  nlink?: Maybe<FileNlinkQueryInteger_2>

  uid?: Maybe<FileUidQueryInteger_2>

  gid?: Maybe<FileGidQueryInteger_2>

  rdev?: Maybe<FileRdevQueryInteger_2>

  blksize?: Maybe<FileBlksizeQueryInteger_2>

  ino?: Maybe<FileInoQueryInteger_2>

  blocks?: Maybe<FileBlocksQueryInteger_2>

  atimeMs?: Maybe<FileAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<FileMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<FileCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<FileBirthtimeMsQueryFloat_2>

  atime?: Maybe<FileAtimeQueryString_2>

  mtime?: Maybe<FileMtimeQueryString_2>

  ctime?: Maybe<FileCtimeQueryString_2>

  birthtime?: Maybe<FileBirthtimeQueryString_2>

  publicURL?: Maybe<PublicUrlQueryString_3>
}
export interface ImageSharpQueryArgs {
  id?: Maybe<ImageSharpIdQueryString_2>

  internal?: Maybe<ImageSharpInternalInputObject_2>

  fixed?: Maybe<FixedTypeName_3>

  resolutions?: Maybe<ResolutionsTypeName_3>

  fluid?: Maybe<FluidTypeName_3>

  sizes?: Maybe<SizesTypeName_3>

  original?: Maybe<OriginalTypeName_3>

  resize?: Maybe<ResizeTypeName_3>
}
export interface PrismicPartnerQueryArgs {
  type?: Maybe<PrismicPartnerTypeQueryString_2>

  href?: Maybe<PrismicPartnerHrefQueryString_2>

  first_publication_date?: Maybe<PrismicPartnerFirstPublicationDateQueryString_2>

  last_publication_date?: Maybe<PrismicPartnerLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicPartnerSlugsQueryList_2>

  lang?: Maybe<PrismicPartnerLangQueryString_2>

  data?: Maybe<PrismicPartnerDataInputObject_2>

  prismicId?: Maybe<PrismicPartnerPrismicIdQueryString_2>

  id?: Maybe<PrismicPartnerIdQueryString_2>

  internal?: Maybe<PrismicPartnerInternalInputObject_2>

  dataString?: Maybe<PrismicPartnerDataStringQueryString_2>
}
export interface PrismicHomepageQueryArgs {
  type?: Maybe<PrismicHomepageTypeQueryString_2>

  href?: Maybe<PrismicHomepageHrefQueryString_2>

  first_publication_date?: Maybe<PrismicHomepageFirstPublicationDateQueryString_2>

  last_publication_date?: Maybe<PrismicHomepageLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicHomepageSlugsQueryList_2>

  lang?: Maybe<PrismicHomepageLangQueryString_2>

  data?: Maybe<PrismicHomepageDataInputObject_2>

  prismicId?: Maybe<PrismicHomepagePrismicIdQueryString_2>

  id?: Maybe<PrismicHomepageIdQueryString_2>

  internal?: Maybe<PrismicHomepageInternalInputObject_2>

  dataString?: Maybe<PrismicHomepageDataStringQueryString_2>
}
export interface InstaNodeQueryArgs {
  id?: Maybe<InstaNodeIdQueryString_2>

  internal?: Maybe<InstaNodeInternalInputObject_2>

  likes?: Maybe<InstaNodeLikesQueryInteger_2>

  thumbnails?: Maybe<InstaNodeThumbnailsQueryList_2>

  original?: Maybe<InstaNodeOriginalQueryString_2>

  timestamp?: Maybe<InstaNodeTimestampQueryInteger_2>

  dimensions?: Maybe<InstaNodeDimensionsInputObject_2>

  comments?: Maybe<InstaNodeCommentsQueryInteger_2>

  localFile?: Maybe<InstaNodeLocalFileInputObject_2>
}
export interface DirectoryQueryArgs {
  id?: Maybe<DirectoryIdQueryString_2>

  internal?: Maybe<DirectoryInternalInputObject_2>

  sourceInstanceName?: Maybe<DirectorySourceInstanceNameQueryString_2>

  absolutePath?: Maybe<DirectoryAbsolutePathQueryString_2>

  relativePath?: Maybe<DirectoryRelativePathQueryString_2>

  extension?: Maybe<DirectoryExtensionQueryString_2>

  size?: Maybe<DirectorySizeQueryInteger_2>

  prettySize?: Maybe<DirectoryPrettySizeQueryString_2>

  modifiedTime?: Maybe<DirectoryModifiedTimeQueryString_2>

  accessTime?: Maybe<DirectoryAccessTimeQueryString_2>

  changeTime?: Maybe<DirectoryChangeTimeQueryString_2>

  birthTime?: Maybe<DirectoryBirthTimeQueryString_2>

  root?: Maybe<DirectoryRootQueryString_2>

  dir?: Maybe<DirectoryDirQueryString_2>

  base?: Maybe<DirectoryBaseQueryString_2>

  ext?: Maybe<DirectoryExtQueryString_2>

  name?: Maybe<DirectoryNameQueryString_2>

  relativeDirectory?: Maybe<DirectoryRelativeDirectoryQueryString_2>

  dev?: Maybe<DirectoryDevQueryInteger_2>

  mode?: Maybe<DirectoryModeQueryInteger_2>

  nlink?: Maybe<DirectoryNlinkQueryInteger_2>

  uid?: Maybe<DirectoryUidQueryInteger_2>

  gid?: Maybe<DirectoryGidQueryInteger_2>

  rdev?: Maybe<DirectoryRdevQueryInteger_2>

  blksize?: Maybe<DirectoryBlksizeQueryInteger_2>

  ino?: Maybe<DirectoryInoQueryInteger_2>

  blocks?: Maybe<DirectoryBlocksQueryInteger_2>

  atimeMs?: Maybe<DirectoryAtimeMsQueryFloat_2>

  mtimeMs?: Maybe<DirectoryMtimeMsQueryFloat_2>

  ctimeMs?: Maybe<DirectoryCtimeMsQueryFloat_2>

  birthtimeMs?: Maybe<DirectoryBirthtimeMsQueryFloat_2>

  atime?: Maybe<DirectoryAtimeQueryString_2>

  mtime?: Maybe<DirectoryMtimeQueryString_2>

  ctime?: Maybe<DirectoryCtimeQueryString_2>

  birthtime?: Maybe<DirectoryBirthtimeQueryString_2>
}
export interface PrismicInfoPageQueryArgs {
  type?: Maybe<PrismicInfoPageTypeQueryString_2>

  href?: Maybe<PrismicInfoPageHrefQueryString_2>

  first_publication_date?: Maybe<PrismicInfoPageFirstPublicationDateQueryString_2>

  last_publication_date?: Maybe<PrismicInfoPageLastPublicationDateQueryString_2>

  slugs?: Maybe<PrismicInfoPageSlugsQueryList_2>

  lang?: Maybe<PrismicInfoPageLangQueryString_2>

  data?: Maybe<PrismicInfoPageDataInputObject_2>

  prismicId?: Maybe<PrismicInfoPagePrismicIdQueryString_2>

  id?: Maybe<PrismicInfoPageIdQueryString_2>

  internal?: Maybe<PrismicInfoPageInternalInputObject_2>

  dataString?: Maybe<PrismicInfoPageDataStringQueryString_2>
}
export interface DistinctSitePageConnectionArgs {
  field?: Maybe<SitePageDistinctEnum>
}
export interface GroupSitePageConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<SitePageGroupEnum>
}
export interface DistinctSitePluginConnectionArgs {
  field?: Maybe<SitePluginDistinctEnum>
}
export interface GroupSitePluginConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<SitePluginGroupEnum>
}
export interface DistinctPrismicPartnersPageConnectionArgs {
  field?: Maybe<PrismicPartnersPageDistinctEnum>
}
export interface GroupPrismicPartnersPageConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<PrismicPartnersPageGroupEnum>
}
export interface FirstPublicationDatePrismicPartnersPageArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface LastPublicationDatePrismicPartnersPageArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ModifiedTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AccessTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ChangeTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthTimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface MtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface CtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthtimeFileArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface FixedImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  jpegProgressive?: boolean

  grayscale?: Maybe<boolean>

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>
}
export interface ResolutionsImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  jpegProgressive?: boolean

  grayscale?: Maybe<boolean>

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>
}
export interface FluidImageSharpArgs {
  maxWidth?: Maybe<number>

  maxHeight?: Maybe<number>

  grayscale?: Maybe<boolean>

  jpegProgressive?: boolean

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>

  sizes?: Maybe<string>
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[]
}
export interface SizesImageSharpArgs {
  maxWidth?: Maybe<number>

  maxHeight?: Maybe<number>

  grayscale?: Maybe<boolean>

  jpegProgressive?: boolean

  duotone?: Maybe<DuotoneGradient>

  traceSVG?: Maybe<Potrace>

  quality?: number

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>

  sizes?: Maybe<string>
  /** A list of image widths to be generated. Example: [ 200, 340, 520, 890 ] */
  srcSetBreakpoints?: (Maybe<number>)[]
}
export interface ResizeImageSharpArgs {
  width?: Maybe<number>

  height?: Maybe<number>

  quality?: number

  jpegProgressive?: boolean

  pngCompressionLevel?: number

  grayscale?: Maybe<boolean>

  duotone?: Maybe<DuotoneGradient>

  base64?: Maybe<boolean>

  traceSVG?: Maybe<Potrace>

  toFormat?: Maybe<ImageFormat>

  cropFocus?: Maybe<ImageCropFocus>

  rotate?: Maybe<number>
}
export interface DistinctPrismicGeneralConnectionArgs {
  field?: Maybe<PrismicGeneralDistinctEnum>
}
export interface GroupPrismicGeneralConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<PrismicGeneralGroupEnum>
}
export interface FirstPublicationDatePrismicGeneralArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface LastPublicationDatePrismicGeneralArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface StartDateData_11Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface EndDateData_11Args {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctFileConnectionArgs {
  field?: Maybe<FileDistinctEnum>
}
export interface GroupFileConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<FileGroupEnum>
}
export interface DistinctImageSharpConnectionArgs {
  field?: Maybe<ImageSharpDistinctEnum>
}
export interface GroupImageSharpConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<ImageSharpGroupEnum>
}
export interface DistinctPrismicPartnerConnectionArgs {
  field?: Maybe<PrismicPartnerDistinctEnum>
}
export interface GroupPrismicPartnerConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<PrismicPartnerGroupEnum>
}
export interface FirstPublicationDatePrismicPartnerArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface LastPublicationDatePrismicPartnerArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctPrismicHomepageConnectionArgs {
  field?: Maybe<PrismicHomepageDistinctEnum>
}
export interface GroupPrismicHomepageConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<PrismicHomepageGroupEnum>
}
export interface FirstPublicationDatePrismicHomepageArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface LastPublicationDatePrismicHomepageArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctInstaNodeConnectionArgs {
  field?: Maybe<InstaNodeDistinctEnum>
}
export interface GroupInstaNodeConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<InstaNodeGroupEnum>
}
export interface DistinctDirectoryConnectionArgs {
  field?: Maybe<DirectoryDistinctEnum>
}
export interface GroupDirectoryConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<DirectoryGroupEnum>
}
export interface ModifiedTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AccessTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface ChangeTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthTimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface AtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface MtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface CtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BirthtimeDirectoryArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface DistinctPrismicInfoPageConnectionArgs {
  field?: Maybe<PrismicInfoPageDistinctEnum>
}
export interface GroupPrismicInfoPageConnectionArgs {
  skip?: Maybe<number>

  limit?: Maybe<number>

  field?: Maybe<PrismicInfoPageGroupEnum>
}
export interface FirstPublicationDatePrismicInfoPageArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface LastPublicationDatePrismicInfoPageArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface PortSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
export interface BuildTimeSiteArgs {
  /** Format the date using Moment.js' date tokens e.g. "date(formatString: "YYYY MMMM DD)" See https://momentjs.com/docs/#/displaying/format/ for documentation for different tokens */
  formatString?: Maybe<string>
  /** Returns a string generated with Moment.js' fromNow function */
  fromNow?: Maybe<boolean>
  /** Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
  difference?: Maybe<string>
  /** Configures the locale Moment.js will use to format the date. */
  locale?: Maybe<string>
}
