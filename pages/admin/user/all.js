import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

import axios from "axios";
import queryparser from "../../../middleware/queryparser";

const rows = [
    { id: 1, name: "10 Rows", value: 10 },
    { id: 2, name: "20 Rows", value: 20 },
    { id: 3, name: "25 Rows", value: 25 },
    { id: 4, name: "50 Rows", value: 50 },
    { id: 5, name: "100 Rows", value: 100 },
];
const sortby = [
    { id: 1, name: "Default", query: "-createdAt" },
    { id: 2, name: "Title (A - Z)", query: "+title" },
    { id: 3, name: "Title (Z - A)", query: "-title" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const All = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedWriter, setSelectedWriter] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedRows, setSelectedRows] = useState(rows[0]);
    const [selectedPage, setSelectedPage] = useState(0);
    const [selectedSortby, setSelectedSortby] = useState(sortby[0]);

    const [user, setUsers] = useState({});
    const [writers, setWriters] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        init();
    }, [selectedRows, selectedPage, selectedSortby]);

    const init = async () => {
        setLoading(true);
        // const writersres = await axios.get(`/api/user?${queryparser.Build({}, { writer: 1 })}`);
        // console.log(writersres.data);
        // if (writersres.data.status == 200 && writersres.data?.data?.data) {
        //     let arr = [];
        //     for (let i = 0; i < writersres.data.data.data.length; i++) {
        //         arr.push({ id: i, name: writersres.data.data.data[i].writer.name });
        //     }
        //     setWriters(arr);
        //     setSelectedWriter(arr[0]);
        // }
        await fetch();
        setLoading(false);
    };

    const fetch = async () => {
        const response = await axios.get(`/api/user?${queryparser.Build({}, {}, selectedRows.value, selectedPage, selectedSortby.query)}`);
        if (response.data.status == 200) setUsers(response.data.data);
    };

    return (
        <div className="">
            <div className="flex flex-col">
                <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 px-3 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" colSpan={4} className="w-full border-b border-gray-300 py-3.5 pl-4 pr-3 text-left text-sm">
                                            <div className="flex w-auto flex-row gap-5">
                                                <div className="w-11/12">
                                                    <div>
                                                        <label htmlFor="sch" className="block text-sm font-medium text-gray-700">
                                                            Search
                                                        </label>
                                                        <div className="mt-1">
                                                            <input
                                                                type="text"
                                                                name="sch"
                                                                id="sch"
                                                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                placeholder="Enter text to search"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="w-2/12">
                                                    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                                                        {({ open }) => (
                                                            <>
                                                                <Listbox.Label className="block text-sm font-medium text-gray-700">Category</Listbox.Label>
                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                                        <span className="block truncate">{selectedCategory?.name}</span>
                                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                        </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100 "
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {cat.map((opt) => (
                                                                                <Listbox.Option
                                                                                    key={opt.id}
                                                                                    className={({ active }) =>
                                                                                        classNames(
                                                                                            active ? "bg-indigo-600 text-white" : "text-gray-900",
                                                                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                                                                        )
                                                                                    }
                                                                                    value={opt}
                                                                                >
                                                                                    {({ selectedCategory, active }) => (
                                                                                        <>
                                                                                            <span
                                                                                                className={classNames(
                                                                                                    selectedCategory ? "font-semibold" : "font-normal",
                                                                                                    "block truncate"
                                                                                                )}
                                                                                            >
                                                                                                {opt.name}
                                                                                            </span>

                                                                                            {selectedCategory ? (
                                                                                                <span
                                                                                                    className={classNames(
                                                                                                        active ? "text-white" : "text-indigo-600",
                                                                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                                                    )}
                                                                                                >
                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                </span>
                                                                                            ) : null}
                                                                                        </>
                                                                                    )}
                                                                                </Listbox.Option>
                                                                            ))}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                </div>
                                                <div className="w-2/12">
                                                    <Listbox value={selectedWriter} onChange={setSelectedWriter}>
                                                        {({ open }) => (
                                                            <>
                                                                <Listbox.Label className="block text-sm font-medium text-gray-700">Writer</Listbox.Label>
                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                                        <span className="block truncate">{selectedWriter?.name}</span>
                                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                        </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {writers?.map((opt) => (
                                                                                <Listbox.Option
                                                                                    key={opt.id}
                                                                                    className={({ active }) =>
                                                                                        classNames(
                                                                                            active ? "bg-indigo-600 text-white" : "text-gray-900",
                                                                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                                                                        )
                                                                                    }
                                                                                    value={opt}
                                                                                >
                                                                                    {({ selectedWriter, active }) => (
                                                                                        <>
                                                                                            <span
                                                                                                className={classNames(
                                                                                                    selectedWriter ? "font-semibold" : "font-normal",
                                                                                                    "block truncate"
                                                                                                )}
                                                                                            >
                                                                                                {opt.name}
                                                                                            </span>

                                                                                            {selectedWriter ? (
                                                                                                <span
                                                                                                    className={classNames(
                                                                                                        active ? "text-white" : "text-indigo-600",
                                                                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                                                    )}
                                                                                                >
                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                </span>
                                                                                            ) : null}
                                                                                        </>
                                                                                    )}
                                                                                </Listbox.Option>
                                                                            ))}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                </div>
                                                <div className="w-2/12">
                                                    <Listbox value={selectedState} onChange={setSelectedState}>
                                                        {({ open }) => (
                                                            <>
                                                                <Listbox.Label className="block text-sm font-medium text-gray-700">Status</Listbox.Label>
                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                                        <span className="block truncate">{selectedState?.name}</span>
                                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                        </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {cat.map((opt) => (
                                                                                <Listbox.Option
                                                                                    key={opt.id}
                                                                                    className={({ active }) =>
                                                                                        classNames(
                                                                                            active ? "bg-indigo-600 text-white" : "text-gray-900",
                                                                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                                                                        )
                                                                                    }
                                                                                    value={opt}
                                                                                >
                                                                                    {({ selectedState, active }) => (
                                                                                        <>
                                                                                            <span
                                                                                                className={classNames(
                                                                                                    selectedState ? "font-semibold" : "font-normal",
                                                                                                    "block truncate"
                                                                                                )}
                                                                                            >
                                                                                                {opt.name}
                                                                                            </span>

                                                                                            {selectedState ? (
                                                                                                <span
                                                                                                    className={classNames(
                                                                                                        active ? "text-white" : "text-indigo-600",
                                                                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                                                    )}
                                                                                                >
                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                </span>
                                                                                            ) : null}
                                                                                        </>
                                                                                    )}
                                                                                </Listbox.Option>
                                                                            ))}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                </div> */}
                                                <div className="w-auto pt-5">
                                                    <button className="w-full rounded-md bg-indigo-600 py-2 px-4 font-bold text-white">
                                                        <span className="text-sm">Search</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Title / Date
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Category / Writer
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Status
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {user.data &&
                                        user?.data.map((opt) => (
                                            <tr key={opt._id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                    <div className="flex items-center">
                                                        <div className="h-10 w-10 flex-shrink-0">
                                                            <img className="h-10 w-10 rounded-full" src={opt.thumbnail} alt="" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <div className="font-medium text-gray-900">{opt.name}</div>
                                                            <div className="text-gray-500">{opt.email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <div className="text-gray-900">{opt.createdAt}</div>
                                                    <div className="text-gray-500">{opt.mobile}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">{opt.role}</span>
                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit<span className="sr-only">, {opt.name}</span>
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                                <tfoot className="bg-gray-50">
                                    <tr>
                                        <th scope="col" colSpan={5} className="w-full border-b border-gray-300 py-3.5 pl-4 pr-3 text-left text-sm">
                                            <div className="flex w-auto flex-row gap-5">
                                                <div className="w-2/12">
                                                    <Listbox value={selectedSortby} onChange={setSelectedSortby}>
                                                        {({ open }) => (
                                                            <>
                                                                <Listbox.Label className="block text-sm font-medium text-gray-700">Sort By</Listbox.Label>
                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                                        <span className="block truncate">{selectedSortby.name}</span>
                                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                        </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {sortby.map((opt) => (
                                                                                <Listbox.Option
                                                                                    key={opt.id}
                                                                                    className={({ active }) =>
                                                                                        classNames(
                                                                                            active ? "bg-indigo-600 text-white" : "text-gray-900",
                                                                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                                                                        )
                                                                                    }
                                                                                    value={opt}
                                                                                >
                                                                                    {({ selectedSortby, active }) => (
                                                                                        <>
                                                                                            <span
                                                                                                className={classNames(
                                                                                                    selectedSortby ? "font-semibold" : "font-normal",
                                                                                                    "block truncate"
                                                                                                )}
                                                                                            >
                                                                                                {opt.name}
                                                                                            </span>

                                                                                            {selectedSortby ? (
                                                                                                <span
                                                                                                    className={classNames(
                                                                                                        active ? "text-white" : "text-indigo-600",
                                                                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                                                    )}
                                                                                                >
                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                </span>
                                                                                            ) : null}
                                                                                        </>
                                                                                    )}
                                                                                </Listbox.Option>
                                                                            ))}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                </div>
                                                <div className="w-2/12">
                                                    <Listbox value={selectedRows} onChange={setSelectedRows}>
                                                        {({ open }) => (
                                                            <>
                                                                <Listbox.Label className="block text-sm font-medium text-gray-700">Rows</Listbox.Label>
                                                                <div className="relative mt-1">
                                                                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                                        <span className="block truncate">{selectedRows.name}</span>
                                                                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                                        </span>
                                                                    </Listbox.Button>

                                                                    <Transition
                                                                        show={open}
                                                                        as={Fragment}
                                                                        leave="transition ease-in duration-100"
                                                                        leaveFrom="opacity-100"
                                                                        leaveTo="opacity-0"
                                                                    >
                                                                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                            {rows.map((opt) => (
                                                                                <Listbox.Option
                                                                                    key={opt.id}
                                                                                    className={({ active }) =>
                                                                                        classNames(
                                                                                            active ? "bg-indigo-600 text-white" : "text-gray-900",
                                                                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                                                                        )
                                                                                    }
                                                                                    value={opt}
                                                                                >
                                                                                    {({ selectedRows, active }) => (
                                                                                        <>
                                                                                            <span
                                                                                                className={classNames(
                                                                                                    selectedRows ? "font-semibold" : "font-normal",
                                                                                                    "block truncate"
                                                                                                )}
                                                                                            >
                                                                                                {opt.name}
                                                                                            </span>

                                                                                            {selectedRows ? (
                                                                                                <span
                                                                                                    className={classNames(
                                                                                                        active ? "text-white" : "text-indigo-600",
                                                                                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                                                                                    )}
                                                                                                >
                                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                                </span>
                                                                                            ) : null}
                                                                                        </>
                                                                                    )}
                                                                                </Listbox.Option>
                                                                            ))}
                                                                        </Listbox.Options>
                                                                    </Transition>
                                                                </div>
                                                            </>
                                                        )}
                                                    </Listbox>
                                                </div>
                                                <div className="w-8/12">
                                                    <div className="flex items-center justify-between px-4 pt-5 sm:px-6">
                                                        <div className="flex flex-1 justify-between sm:hidden">
                                                            <a
                                                                onClick={() => {
                                                                    if (selectedPage > 0) setSelectedPage(selectedPage - 1);
                                                                }}
                                                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                                            >
                                                                Previous
                                                            </a>
                                                            <a
                                                                onClick={() => {
                                                                    if (selectedPage < user.pages) setSelectedPage(selectedPage + 1);
                                                                }}
                                                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                                                            >
                                                                Next
                                                            </a>
                                                        </div>
                                                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                                                            <div>
                                                                <p className="text-sm text-gray-700">
                                                                    Showing <span className="font-medium">{selectedPage * user.limit + 1}</span> to{" "}
                                                                    <span className="font-medium">{selectedPage * user.limit + user.limit}</span> of{" "}
                                                                    <span className="font-medium">{user.total}</span> results
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <nav className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                                                    <a
                                                                        onClick={() => {
                                                                            if (selectedPage > 0) setSelectedPage(selectedPage - 1);
                                                                        }}
                                                                        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                                    >
                                                                        <span className="sr-only">Previous</span>
                                                                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </a>
                                                                    {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
                                                                    {user &&
                                                                        Array(user.pages)
                                                                            .fill(1)
                                                                            .map((_, i) => (
                                                                                <a
                                                                                    onClick={() => {
                                                                                        setSelectedPage(i);
                                                                                    }}
                                                                                    aria-current="page"
                                                                                    className={`relative z-10 inline-flex items-center border ${
                                                                                        i == selectedPage
                                                                                            ? "border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600"
                                                                                            : "border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                                                    }`}
                                                                                >
                                                                                    {i + 1}
                                                                                </a>
                                                                            ))}

                                                                    <a
                                                                        onClick={() => {
                                                                            if (selectedPage < user.pages) setSelectedPage(selectedPage + 1);
                                                                        }}
                                                                        className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                                    >
                                                                        <span className="sr-only">Next</span>
                                                                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                                                                    </a>
                                                                </nav>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default All;
