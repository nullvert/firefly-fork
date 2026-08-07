import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

export const booknavPageConfig: BooknavPageConfig = {
	title: "Закладки",
	description: "Полезные сервисы и инструменты",

	favicon: {
		enabled: true,
		api: "https://a.favicon.im/{domain}",
	},
};

export const booknavConfig: BooknavGroup[] = [
	{
		id: "dev",
		name: "Разработка",
		icon: "material-symbols:code-rounded",
		desc: "Сервисы для работы с кодом",
		weight: 100,
		items: [
			{
				title: "GitHub",
				url: "https://github.com",
				desc: "Хостинг кода и репозитории",
				icon: "fa7-brands:github",
				weight: 10,
			},
			{
				title: "Astro",
				url: "https://astro.build",
				desc: "Фреймворк сайта",
				weight: 9,
			},
		],
	},
	{
		id: "design",
		name: "Дизайн",
		icon: "material-symbols:palette-outline-rounded",
		desc: "Иконки, палитры и наброски",
		weight: 90,
		items: [
			{
				title: "Iconify",
				url: "https://icon-sets.iconify.design",
				desc: "Поиск по базе иконок",
				weight: 10,
			},
			{
				title: "Coolors",
				url: "https://coolors.co",
				desc: "Генератор палитр",
				weight: 9,
			},
			{
				title: "Excalidraw",
				url: "https://excalidraw.com",
				desc: "Доска для схем и набросков",
				weight: 8,
			},
		],
	},
	{
		id: "ai",
		name: "ИИ",
		icon: "material-symbols:psychology-outline-rounded",
		desc: "Нейросети и ассистенты",
		weight: 80,
		items: [
			{
				title: "ChatGPT",
				url: "https://chatgpt.com",
				desc: "ИИ-ассистент",
				weight: 10,
			},
			{
				title: "Claude",
				url: "https://claude.ai",
				desc: "Нейросеть для текста и кода",
				weight: 9,
			},
			{
				title: "Gemini",
				url: "https://gemini.google.com",
				desc: "ИИ-ассистент от Google",
				weight: 8,
			},
		],
	},
];
