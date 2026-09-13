import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };


type PickContentRelationshipFieldData<
	TRelationship extends prismic.CustomTypeModelFetchCustomTypeLevel1 | prismic.CustomTypeModelFetchCustomTypeLevel2 | prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2,
	TData extends Record<string, prismic.AnyRegularField | prismic.GroupField | prismic.NestedGroupField | prismic.SliceZone>,
	TLang extends string
> = |
	// Content relationship fields
	{
		[TSubRelationship in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchContentRelationshipLevel1
		> as TSubRelationship["id"]]:
			ContentRelationshipFieldWithData<TSubRelationship["customtypes"], TLang>;
	} &
	// Group
	{
		[TGroup in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2
		> as TGroup["id"]]:
			TData[TGroup["id"]] extends prismic.GroupField<infer TGroupData>
				? prismic.GroupField<PickContentRelationshipFieldData<TGroup, TGroupData, TLang>>
				: never
	} &
	// Other fields
	{
		[TFieldKey in Extract<TRelationship["fields"][number], string>]:
			TFieldKey extends keyof TData ? TData[TFieldKey] : never;
	};

type ContentRelationshipFieldWithData<
	TCustomType extends readonly (prismic.CustomTypeModelFetchCustomTypeLevel1 | string)[] | readonly (prismic.CustomTypeModelFetchCustomTypeLevel2 | string)[],
	TLang extends string = string
> = {
	[ID in Exclude<TCustomType[number], string>["id"]]:
		prismic.ContentRelationshipField<
			ID,
			TLang,
			PickContentRelationshipFieldData<
				Extract<TCustomType[number], { id: ID }>,
				Extract<prismic.Content.AllDocumentTypes, { type: ID }>["data"],
				TLang
			>
		>
}[Exclude<TCustomType[number], string>["id"]];

type HomeDocumentDataSlicesSlice = FooterSlice | CallToActionSlice | QuemSomosSlice | HeroSlice

/**
 * Content for Home documents
 */
interface HomeDocumentData {
	/**
	 * `slices` field in *Home*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: home.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

/**
 * Primary content in *CallToAction → Default → Primary*
 */
export interface CallToActionSliceDefaultPrimary {
	/**
	 * background-image field in *CallToAction → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: call_to_action.default.primary.background_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	background_image: prismic.ImageField<never>;
	
	/**
	 * frase chamada field in *CallToAction → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Frase para chamar lead (Apenas texto em branco)
	 * - **API ID Path**: call_to_action.default.primary.frase_chamada
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	frase_chamada: prismic.KeyTextField;
	
	/**
	 * red-text field in *CallToAction → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Digite aqui palavra/frase em destaque em vermelho
	 * - **API ID Path**: call_to_action.default.primary.red_text
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	red_text: prismic.KeyTextField;
	
	/**
	 * paragraph field in *CallToAction → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Digite aqui texto mais descritivo de chamada
	 * - **API ID Path**: call_to_action.default.primary.paragraph
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	paragraph: prismic.KeyTextField;
}

/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type CallToActionSliceDefault = prismic.SharedSliceVariation<"default", Simplify<CallToActionSliceDefaultPrimary>, never>;

/**
 * Slice variation for *CallToAction*
 */
type CallToActionSliceVariation = CallToActionSliceDefault

/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: CallToAction
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type CallToActionSlice = prismic.SharedSlice<"call_to_action", CallToActionSliceVariation>;

/**
 * Primary content in *Footer → Default → Primary*
 */
export interface FooterSliceDefaultPrimary {
	/**
	 * frase field in *Footer → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Digite sua frase de destaque que fica no Footer
	 * - **API ID Path**: footer.default.primary.frase
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	frase: prismic.KeyTextField;
	
	/**
	 * instagram field in *Footer → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: Digite aqui link para seu Instagram incluindo https://...
	 * - **API ID Path**: footer.default.primary.instagram
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	instagram: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
	
	/**
	 * whatsapp field in *Footer → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Digite seu número de whatsApp
	 * - **API ID Path**: footer.default.primary.whatsapp
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	whatsapp: prismic.KeyTextField;
	
	/**
	 * email field in *Footer → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Digite seu endereço de e-mail
	 * - **API ID Path**: footer.default.primary.email
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	email: prismic.KeyTextField;
}

/**
 * Default variation for Footer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type FooterSliceDefault = prismic.SharedSliceVariation<"default", Simplify<FooterSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Footer*
 */
type FooterSliceVariation = FooterSliceDefault

/**
 * Footer Shared Slice
 *
 * - **API ID**: `footer`
 * - **Description**: Footer
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type FooterSlice = prismic.SharedSlice<"footer", FooterSliceVariation>;

/**
 * Item in *Hero → Default → Primary → background-image*
 */
export interface HeroSliceDefaultPrimaryBackgroundImageItem {
	/**
	 * background-image field in *Hero → Default → Primary → background-image*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.background_image[].background_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	background_image: prismic.ImageField<never>;
}

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * listagem field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Digite aqui suas habilidades (Ex: Foto - Vídeos...)
	 * - **API ID Path**: hero.default.primary.listagem
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	listagem: prismic.KeyTextField;
	
	/**
	 * white-text field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Digite aqui a parte do texto em branco
	 * - **API ID Path**: hero.default.primary.white_text
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	white_text: prismic.KeyTextField;
	
	/**
	 * red-text field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Digite aqui a parte do texto em destaque em vermelho
	 * - **API ID Path**: hero.default.primary.red_text
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	red_text: prismic.KeyTextField;
	
	/**
	 * background-image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.background_image[]
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	background_image: prismic.GroupField<Simplify<HeroSliceDefaultPrimaryBackgroundImageItem>>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Item in *Projetos → Default → Primary → fotos*
 */
export interface ProjetosSliceDefaultPrimaryFotosItem {
	/**
	 * Fotos field in *Projetos → Default → Primary → fotos*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projetos.default.primary.fotos[].fotos
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	fotos: prismic.ImageField<never>;
}

/**
 * Primary content in *Projetos → Default → Primary*
 */
export interface ProjetosSliceDefaultPrimary {
	/**
	 * fotos field in *Projetos → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: projetos.default.primary.fotos[]
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	fotos: prismic.GroupField<Simplify<ProjetosSliceDefaultPrimaryFotosItem>>;
	
	/**
	 * titulo_projeto field in *Projetos → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Digite aqui o titulo do projeto (Ex: Fotos - Ensaio casamento)
	 * - **API ID Path**: projetos.default.primary.titulo_projeto
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	titulo_projeto: prismic.KeyTextField;
	
	/**
	 * Descricao do projeto field in *Projetos → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Digite aqui a descrição do projeto
	 * - **API ID Path**: projetos.default.primary.descricao_do_projeto
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descricao_do_projeto: prismic.KeyTextField;
}

/**
 * Default variation for Projetos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ProjetosSliceDefault = prismic.SharedSliceVariation<"default", Simplify<ProjetosSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Projetos*
 */
type ProjetosSliceVariation = ProjetosSliceDefault

/**
 * Projetos Shared Slice
 *
 * - **API ID**: `projetos`
 * - **Description**: Projetos
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ProjetosSlice = prismic.SharedSlice<"projetos", ProjetosSliceVariation>;

/**
 * Item in *QuemSomos → Default → Primary → estatisticas pessoais*
 */
export interface QuemSomosSliceDefaultPrimaryEstatisticasPessoaisItem {
	/**
	 * estatisticas pessoais field in *QuemSomos → Default → Primary → estatisticas pessoais*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Ex: 4+
	 * - **API ID Path**: quem_somos.default.primary.estatisticas_pessoais[].estatisticas_pessoais
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	estatisticas_pessoais: prismic.KeyTextField;
	
	/**
	 * estatisticas pessoais descricao field in *QuemSomos → Default → Primary → estatisticas pessoais*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Ex: De Experiência
	 * - **API ID Path**: quem_somos.default.primary.estatisticas_pessoais[].estatisticas_pessoais_descricao
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	estatisticas_pessoais_descricao: prismic.KeyTextField;
}

/**
 * Primary content in *QuemSomos → Default → Primary*
 */
export interface QuemSomosSliceDefaultPrimary {
	/**
	 * Foto que identifica você (preferencia 3/4) field in *QuemSomos → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: quem_somos.default.primary.foto_sua_3_4
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	foto_sua_3_4: prismic.ImageField<never>;
	
	/**
	 * white-text field in *QuemSomos → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Texto em branco (Ex: Quem sou por trás das)
	 * - **API ID Path**: quem_somos.default.primary.white_text
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	white_text: prismic.KeyTextField;
	
	/**
	 * red-text field in *QuemSomos → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Texto em Vermelho (Ex: Câmeras)
	 * - **API ID Path**: quem_somos.default.primary.red_text
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	red_text: prismic.KeyTextField;
	
	/**
	 * descricao-1 field in *QuemSomos → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Fale aqui sobre você 1
	 * - **API ID Path**: quem_somos.default.primary.descricao_1
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descricao_1: prismic.KeyTextField;
	
	/**
	 * descricao-2 field in *QuemSomos → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Fale aqui sobre você 2
	 * - **API ID Path**: quem_somos.default.primary.descricao_2
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	descricao_2: prismic.KeyTextField;
	
	/**
	 * estatisticas pessoais field in *QuemSomos → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: quem_somos.default.primary.estatisticas_pessoais[]
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	estatisticas_pessoais: prismic.GroupField<Simplify<QuemSomosSliceDefaultPrimaryEstatisticasPessoaisItem>>;
}

/**
 * Default variation for QuemSomos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type QuemSomosSliceDefault = prismic.SharedSliceVariation<"default", Simplify<QuemSomosSliceDefaultPrimary>, never>;

/**
 * Slice variation for *QuemSomos*
 */
type QuemSomosSliceVariation = QuemSomosSliceDefault

/**
 * QuemSomos Shared Slice
 *
 * - **API ID**: `quem_somos`
 * - **Description**: QuemSomos
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type QuemSomosSlice = prismic.SharedSlice<"quem_somos", QuemSomosSliceVariation>;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
	}
	
	interface CreateWriteClient {
		(repositoryNameOrEndpoint: string, options: prismic.WriteClientConfig): prismic.WriteClient<AllDocumentTypes>;
	}
	
	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}
	
	namespace Content {
		export type {
			HomeDocument,
			HomeDocumentData,
			HomeDocumentDataSlicesSlice,
			AllDocumentTypes,
			CallToActionSlice,
			CallToActionSliceDefaultPrimary,
			CallToActionSliceVariation,
			CallToActionSliceDefault,
			FooterSlice,
			FooterSliceDefaultPrimary,
			FooterSliceVariation,
			FooterSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimaryBackgroundImageItem,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			ProjetosSlice,
			ProjetosSliceDefaultPrimaryFotosItem,
			ProjetosSliceDefaultPrimary,
			ProjetosSliceVariation,
			ProjetosSliceDefault,
			QuemSomosSlice,
			QuemSomosSliceDefaultPrimaryEstatisticasPessoaisItem,
			QuemSomosSliceDefaultPrimary,
			QuemSomosSliceVariation,
			QuemSomosSliceDefault
		}
	}
}