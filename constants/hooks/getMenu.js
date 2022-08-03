import { menu } from "../adminmenu";
const getMenu = () => {
    return menu.admin;
};
const getPage = (page) => {
    const menu = getMenu();
    const menuTab = menu.find((item) => page.includes(item.base));
    if (!menuTab) return null;
    return menuTab;
};

const getMenuTabs = (page) => {
    const res = getPage(page);
    if (!res) return [];
    return res.children;
};

export { getMenu, getMenuTabs, getPage };
