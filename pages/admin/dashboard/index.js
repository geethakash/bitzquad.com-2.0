import Layout from "../../../components/layouts/LayoutAdmin";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getPage } from "../../../constants/hooks/getMenu";

import Overview from "./overview";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
    const router = useRouter();
    const [selTab, setSelTab] = useState(-1);

    useEffect(() => {
        if (router.query.tab) {
            setSelTab(Number.parseInt(router.query.tab.toString()));
        } else router.push("?tab=0");
    }, [router.query, router.query.tab]);

    const page = getPage(router.asPath);

    return (
        <Layout>
            <main className="flex-1">
                <div className="py-6">
                    <div className="mx-auto border-b border-gray-200 px-4 pb-3 sm:px-6 md:px-8">
                        <h1 className="text-2xl font-semibold text-gray-900">{page?.name}</h1>
                        <div className="mt-3 sm:mt-4 ">
                            <div className="sm:hidden">
                                <label htmlFor="current-tab" className="sr-only">
                                    Select a tab
                                </label>
                                <select
                                    id="current-tab"
                                    name="current-tab"
                                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    defaultValue={page?.children.find((tab, index) => index === selTab)?.name}
                                >
                                    {page?.children.map((tab) => (
                                        <option key={tab.name}>{tab.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="hidden sm:block">
                                <nav className="-mb-px flex space-x-8">
                                    {page?.children.map((tab, index) => (
                                        <a
                                            key={tab.name}
                                            onClick={() => {
                                                router.push(tab.href ? tab.href : "?tab=" + index);
                                            }}
                                            className={classNames(
                                                index == selTab
                                                    ? "border-indigo-500 text-indigo-600"
                                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                                                "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
                                            )}
                                            aria-current={index == selTab ? "page" : undefined}
                                        >
                                            {tab.name}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto px-4 sm:px-6 md:px-8">
                        {/* Replace with your content */}
                        <div className="py-4">{selTab == 0 && <Overview></Overview>}</div>
                        {/* /End replace */}
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default Dashboard;
