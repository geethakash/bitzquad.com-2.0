import { HomeIcon, UserIcon, BriefcaseIcon, MailIcon, NewspaperIcon, CalendarIcon, LinkIcon, OfficeBuildingIcon, ViewGridIcon } from "@heroicons/react/outline";

const menu = {
    ["admin"]: [
        {
            name: "Dashboard",
            href: "",
            base: "/admin/dashboard",
            icon: HomeIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "Analytics",
                    href: null,
                },
            ],
        },
        {
            name: "News",
            href: "",
            base: "/admin/news",
            icon: MailIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All News",
                    href: null,
                },
                {
                    name: "Add News",
                    href: null,
                },
            ],
        },
        {
            name: "Blog",
            href: "",
            base: "/admin/blog",
            icon: CalendarIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Blog Posts",
                    href: null,
                },
                {
                    name: "Create Blog Post",
                    href: null,
                },
            ],
        },
        {
            name: "Users",
            href: "",
            base: "/admin/user",
            icon: UserIcon,
            current: false,
            children: [
                {
                    name: "Overview",
                    href: null,
                },
                {
                    name: "All Users",
                    href: null,
                },
                {
                    name: "Create User",
                    href: null,
                },
            ],
        },
        {
            name: "Other",
            href: "",
            base: "/admin/other",
            icon: LinkIcon,
            current: false,
            children: [
                {
                    name: "Contact",
                    href: null,
                },
            ],
        },
        {
            name: "Settings",
            href: "",
            base: "/admin/settings",
            icon: ViewGridIcon,
            current: false,
            children: [
                {
                    name: "Genaral",
                    href: null,
                },
                {
                    name: "Collections",
                    href: null,
                },
            ],
        },
    ],
};

export { menu };
