import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [];

	// 主页
	links.push(LinkPresets.Home);
	links.push(LinkPresets.Categories);
	links.push(LinkPresets.Tags);
	links.push(LinkPresets.Booknav);
	links.push(LinkPresets.Archive);

	//社交及其子菜单
	links.push({
		name: "社交",
		url: "#",
		icon: "material-symbols:group",
		children: [
			// 友链
			LinkPresets.Friends,

			// 留言
			LinkPresets.Guestbook,
		],
	});

	// 我的及其子菜单
	links.push({
		name: "我的",
		url: "#",
		icon: "material-symbols:person",
		children: [
			// 动态
			LinkPresets.Dynamic,

			// 相册
			LinkPresets.Gallery,

			// 追番
			LinkPresets.Anime,

			// 番组计划
			LinkPresets.Bangumi,
		],
	});

	// 关于及其子菜单
	// links.push({
	// 	name: "关于",
	// 	url: "#",
	// 	icon: "material-symbols:info",
	// 	children: [
	// 		// 打赏
	// 		LinkPresets.Sponsor,
	//
	// 		// 关于页面
	// 		LinkPresets.About,
	// 	],
	// });

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "Главная",
		url: "/",
		icon: "material-symbols:home",
	},
	Dynamic: {
		name: "动态",
		url: "/dynamic/",
		icon: "material-symbols:forum-rounded",
		pageKey: "dynamic",
	},
	Archive: {
		name: "Архив",
		url: "/archive/",
		icon: "material-symbols:format-list-bulleted-rounded",
	},
	Categories: {
		name: "Категории",
		url: "/categories/",
		icon: "material-symbols:category-rounded",
	},
	Tags: {
		name: "Теги",
		url: "/tags/",
		icon: "mdi:tag",
	},
	Friends: {
		name: "友链",
		url: "/friends/",
		icon: "material-symbols:link-2-rounded",
		pageKey: "friends",
	},
	Sponsor: {
		name: "Поддержка",
		url: "/sponsor/",
		icon: "material-symbols:favorite",
		pageKey: "sponsor",
	},
	Guestbook: {
		name: "留言",
		url: "/guestbook/",
		icon: "material-symbols:chat",
		pageKey: "guestbook",
	},
	About: {
		name: "Обо мне",
		url: "/about/",
		icon: "material-symbols:person",
	},
	Bangumi: {
		name: "番组计划",
		url: "/bangumi/",
		icon: "material-symbols:movie",
		pageKey: "bangumi",
	},
	Gallery: {
		name: "Галерея",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
		pageKey: "gallery",
	},
	Anime: {
		name: "Аниме",
		url: "/anime/",
		icon: "material-symbols:live-tv",
		pageKey: "anime",
	},
	Booknav: {
		name: "Закладки",
		url: "/booknav/",
		icon: "mdi:bookmark-multiple",
		pageKey: "booknav",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
