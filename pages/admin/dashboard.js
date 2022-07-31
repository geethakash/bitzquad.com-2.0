import { LayoutAdmin } from "../../components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const tabs = [
  { name: "Applied", href: null },
  { name: "Phone Screening", href: null },
  { name: "Interview", href: null },
  { name: "Offer", href: null },
  { name: "Hired", href: null },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const router = useRouter();
  const [selTab, setSelTab] = useState(-1);

  useEffect(() => {
    if (router.query.tab) {
      setSelTab(router.query.tab);
    }
  }, [router.query, router.query.tab]);

  return (
    <LayoutAdmin>
      <main className="flex-1">
        <div className="py-6">
          <div className="mx-auto border-b border-gray-200 px-4 pb-3 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="mt-3 sm:mt-4 ">
              <div className="sm:hidden">
                <label htmlFor="current-tab" className="sr-only">
                  Select a tab
                </label>
                <select
                  id="current-tab"
                  name="current-tab"
                  className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  defaultValue={
                    tabs.find((tab, index) => index === selTab)?.name
                  }
                >
                  {tabs.map((tab) => (
                    <option key={tab.name}>{tab.name}</option>
                  ))}
                </select>
              </div>
              <div className="hidden sm:block">
                <nav className="-mb-px flex space-x-8">
                  {tabs.map((tab, index) => (
                    <a
                      key={tab.name}
                      onClick={() => {router.push(tab.href ? tab.href : "?tab=" + index)}}
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
            <div className="py-4">
              <div className="h-96 rounded-lg border-4 border-dashed border-gray-200" />
            </div>
            {/* /End replace */}
          </div>
        </div>
      </main>
    </LayoutAdmin>
  );
};

export default Dashboard;
