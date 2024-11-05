<template>
    <div
        class="max-w-full md:max-w-none rounded-[30px] md:rounded-none px-4 md:px-[22px] min-w-0 min-h-screen bg-slate-100 flex-1 md:pt-20 pb-10 mt-5 md:mt-1 relative dark:bg-darkmode-700 before:content-[''] before:w-full before:h-px before:block">
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-12 2xl:col-span-9">
                <div class="grid grid-cols-12 gap-6">
                    <!-- BEGIN: General Report -->
                    <div class="col-span-12 mt-8">
                        <div class="intro-y flex h-10 items-center">
                            <h2 class="mr-5 truncate text-lg font-medium">General Report</h2>
                            <a class="ml-auto flex items-center text-primary" href="">
                                <Icon name="lucide:refresh-ccw" class="text-primary" /> &nbsp;&nbsp;&nbsp; Reload Data
                            </a>
                        </div>
                        <div class="mt-5 grid grid-cols-12 gap-6">
                            <div class="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                                <div
                                    class="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                                    <div class="box p-5">
                                        <div class="flex">
                                            <Icon size="34" name="mdi:shopping-favorite" class="text-pending" />
                                        </div>
                                        <div class="mt-6 text-3xl font-medium leading-8">4.710</div>
                                        <div class="mt-1 text-base text-slate-500">Item Sales</div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                                <div
                                    class="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                                    <div class="box p-5">
                                        <div class="flex">
                                            <Icon size="34" name="mdi:shopping-favorite" class="text-pending" />
                                        </div>
                                        <div class="mt-6 text-3xl font-medium leading-8">3.721</div>
                                        <div class="mt-1 text-base text-slate-500">New Orders</div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                                <div
                                    class="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                                    <div class="box p-5">
                                        <div class="flex">
                                            <Icon size="34" name="mdi:shopping-favorite" class="text-pending" />
                                        </div>
                                        <div class="mt-6 text-3xl font-medium leading-8">2.149</div>
                                        <div class="mt-1 text-base text-slate-500">
                                            Total Products
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y col-span-12 sm:col-span-6 xl:col-span-3">
                                <div
                                    class="relative zoom-in before:box before:absolute before:inset-x-3 before:mt-3 before:h-full before:bg-slate-50 before:content-['']">
                                    <div class="box p-5">
                                        <div class="flex">
                                            <Icon size="34" name="mdi:shopping-favorite" class="text-pending" />
                                        </div>
                                        <div class="mt-6 text-3xl font-medium leading-8">152.040</div>
                                        <div class="mt-1 text-base text-slate-500">
                                            Unique Visitor
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END: General Report -->
                    <!-- BEGIN: Weekly Top Seller -->
                    <div class="col-span-12 mt-8 sm:col-span-6 lg:col-span-3">
                        <div class="intro-y flex h-10 items-center">
                            <h2 class="mr-5 truncate text-lg font-medium">Weekly Top Seller</h2>
                            <a class="ml-auto truncate text-primary" href=""> Show More </a>
                        </div>
                        <div class="intro-y box mt-5 p-5">
                            <div class="mt-3">
                                <div class="w-auto h-[213px]">
                                    <canvas id="report-pie-chart" class="chart"></canvas>
                                </div>
                            </div>
                            <div class="mx-auto mt-8 w-52 sm:w-auto">
                                <div class="flex items-center">
                                    <div class="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                                    <span class="truncate">17 - 30 Years old</span>
                                    <span class="ml-auto font-medium">62%</span>
                                </div>
                                <div class="mt-4 flex items-center">
                                    <div class="mr-3 h-2 w-2 rounded-full bg-pending"></div>
                                    <span class="truncate">31 - 50 Years old</span>
                                    <span class="ml-auto font-medium">33%</span>
                                </div>
                                <div class="mt-4 flex items-center">
                                    <div class="mr-3 h-2 w-2 rounded-full bg-warning"></div>
                                    <span class="truncate">&gt;= 50 Years old</span>
                                    <span class="ml-auto font-medium">10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END: Weekly Top Seller -->
                    <!-- BEGIN: Sales Report -->
                    <div class="col-span-12 mt-8 sm:col-span-6 lg:col-span-3">
                        <div class="intro-y flex h-10 items-center">
                            <h2 class="mr-5 truncate text-lg font-medium">Sales Report</h2>
                            <a class="ml-auto truncate text-primary" href=""> Show More </a>
                        </div>
                        <div class="intro-y box mt-5 p-5">
                            <div class="mt-3">
                                <div class="w-auto h-[213px]">
                                    <canvas id="report-donut-chart" class="chart"></canvas>
                                </div>
                            </div>
                            <div class="mx-auto mt-8 w-52 sm:w-auto">
                                <div class="flex items-center">
                                    <div class="mr-3 h-2 w-2 rounded-full bg-primary"></div>
                                    <span class="truncate">17 - 30 Years old</span>
                                    <span class="ml-auto font-medium">62%</span>
                                </div>
                                <div class="mt-4 flex items-center">
                                    <div class="mr-3 h-2 w-2 rounded-full bg-pending"></div>
                                    <span class="truncate">31 - 50 Years old</span>
                                    <span class="ml-auto font-medium">33%</span>
                                </div>
                                <div class="mt-4 flex items-center">
                                    <div class="mr-3 h-2 w-2 rounded-full bg-warning"></div>
                                    <span class="truncate">&gt;= 50 Years old</span>
                                    <span class="ml-auto font-medium">10%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- END: Sales Report -->
                    <!-- BEGIN: Weekly Top Products -->
                    <div class="col-span-12 mt-6">
                        <div class="intro-y block h-10 items-center sm:flex">
                            <h2 class="mr-5 truncate text-lg font-medium">
                                Weekly Top Products
                            </h2>
                            <div class="mt-3 flex items-center sm:ml-auto sm:mt-0">
                                <button data-tw-merge=""
                                    class="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box flex text-slate-600 dark:text-slate-300"><i
                                        data-tw-merge="" data-lucide="file-text"
                                        class="stroke-1.5 mr-2 hidden h-4 w-4 sm:block"></i>
                                    Export to Excel</button>
                                <button data-tw-merge=""
                                    class="transition duration-200 border shadow-sm items-center justify-center py-2 px-3 rounded-md font-medium cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed !box ml-3 flex text-slate-600 dark:text-slate-300"><i
                                        data-tw-merge="" data-lucide="file-text"
                                        class="stroke-1.5 mr-2 hidden h-4 w-4 sm:block"></i>
                                    Export to PDF</button>
                            </div>
                        </div>
                        <div class="intro-y mt-8 overflow-auto sm:mt-0 lg:overflow-visible">
                            <table data-tw-merge=""
                                class="w-full text-left border-separate border-spacing-y-[10px] sm:mt-2">
                                <thead data-tw-merge="" class="">
                                    <tr data-tw-merge="" class="">
                                        <th data-tw-merge=""
                                            class="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0">
                                            IMAGES
                                        </th>
                                        <th data-tw-merge=""
                                            class="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0">
                                            PRODUCT NAME
                                        </th>
                                        <th data-tw-merge=""
                                            class="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center">
                                            STOCK
                                        </th>
                                        <th data-tw-merge=""
                                            class="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center">
                                            STATUS
                                        </th>
                                        <th data-tw-merge=""
                                            class="font-medium px-5 py-3 dark:border-darkmode-300 whitespace-nowrap border-b-0 text-center">
                                            ACTIONS
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr data-tw-merge="" class="intro-x">
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <div class="flex">
                                                <div class="image-fit zoom-in h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 12 December 2022"
                                                        src="@/assets/images/fakers/preview-14.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                                <div class="image-fit zoom-in -ml-5 h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 26 January 2022"
                                                        src="@/assets/images/fakers/profile-3.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                                <div class="image-fit zoom-in -ml-5 h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 14 February 2021"
                                                        src="@/assets/images/fakers/profile-5.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <a class="whitespace-nowrap font-medium" href="">
                                                Sony Master Series A9G
                                            </a>
                                            <div class="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                                Electronic
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            123
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <div class="flex items-center justify-center text-danger">
                                                <i data-tw-merge="" data-lucide="check-square"
                                                    class="stroke-1.5 mr-2 h-4 w-4"></i>
                                                Inactive
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
                                            <div class="flex items-center justify-center">
                                                <a class="mr-3 flex items-center" href="">
                                                    <i data-tw-merge="" data-lucide="check-square"
                                                        class="stroke-1.5 mr-1 h-4 w-4"></i>
                                                    Edit
                                                </a>
                                                <a class="flex items-center text-danger" href="">
                                                    <i data-tw-merge="" data-lucide="trash"
                                                        class="stroke-1.5 mr-1 h-4 w-4"></i>
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-tw-merge="" class="intro-x">
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <div class="flex">
                                                <div class="image-fit zoom-in h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 11 August 2021"
                                                        src="@/assets/images/fakers/preview-4.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                                <div class="image-fit zoom-in -ml-5 h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 11 September 2021"
                                                        src="@/assets/images/fakers/profile-9.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                                <div class="image-fit zoom-in -ml-5 h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 13 May 2022"
                                                        src="@/assets/images/fakers/profile-4.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <a class="whitespace-nowrap font-medium" href="">
                                                Oppo Find X2 Pro
                                            </a>
                                            <div class="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                                Smartphone & Tablet
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            50
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <div class="flex items-center justify-center text-success">
                                                <i data-tw-merge="" data-lucide="check-square"
                                                    class="stroke-1.5 mr-2 h-4 w-4"></i>
                                                Active
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
                                            <div class="flex items-center justify-center">
                                                <a class="mr-3 flex items-center" href="">
                                                    <i data-tw-merge="" data-lucide="check-square"
                                                        class="stroke-1.5 mr-1 h-4 w-4"></i>
                                                    Edit
                                                </a>
                                                <a class="flex items-center text-danger" href="">
                                                    <i data-tw-merge="" data-lucide="trash"
                                                        class="stroke-1.5 mr-1 h-4 w-4"></i>
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-tw-merge="" class="intro-x">
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <div class="flex">
                                                <div class="image-fit zoom-in h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 3 December 2020"
                                                        src="@/assets/images/fakers/preview-1.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                                <div class="image-fit zoom-in -ml-5 h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 4 March 2022"
                                                        src="@/assets/images/fakers/profile-2.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                                <div class="image-fit zoom-in -ml-5 h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 24 July 2020"
                                                        src="@/assets/images/fakers/profile-4.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <a class="whitespace-nowrap font-medium" href="">
                                                Sony A7 III
                                            </a>
                                            <div class="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                                Photography
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            50
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <div class="flex items-center justify-center text-danger">
                                                <i data-tw-merge="" data-lucide="check-square"
                                                    class="stroke-1.5 mr-2 h-4 w-4"></i>
                                                Inactive
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
                                            <div class="flex items-center justify-center">
                                                <a class="mr-3 flex items-center" href="">
                                                    <i data-tw-merge="" data-lucide="check-square"
                                                        class="stroke-1.5 mr-1 h-4 w-4"></i>
                                                    Edit
                                                </a>
                                                <a class="flex items-center text-danger" href="">
                                                    <i data-tw-merge="" data-lucide="trash"
                                                        class="stroke-1.5 mr-1 h-4 w-4"></i>
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr data-tw-merge="" class="intro-x">
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <div class="flex">
                                                <div class="image-fit zoom-in h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 22 July 2021"
                                                        src="@/assets/images/fakers/preview-11.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                                <div class="image-fit zoom-in -ml-5 h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 14 January 2022"
                                                        src="@/assets/images/fakers/profile-3.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                                <div class="image-fit zoom-in -ml-5 h-10 w-10">
                                                    <img data-placement="top" title="Uploaded at 13 September 2022"
                                                        src="@/assets/images/fakers/profile-11.jpg"
                                                        alt="Midone - Tailwind Admin Dashboard Template"
                                                        class="tooltip cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]">
                                                </div>
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <a class="whitespace-nowrap font-medium" href="">
                                                Oppo Find X2 Pro
                                            </a>
                                            <div class="mt-0.5 whitespace-nowrap text-xs text-slate-500">
                                                Smartphone & Tablet
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            50
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
                                            <div class="flex items-center justify-center text-success">
                                                <i data-tw-merge="" data-lucide="check-square"
                                                    class="stroke-1.5 mr-2 h-4 w-4"></i>
                                                Active
                                            </div>
                                        </td>
                                        <td data-tw-merge=""
                                            class="px-5 py-3 border-b dark:border-darkmode-300 box w-56 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
                                            <div class="flex items-center justify-center">
                                                <a class="mr-3 flex items-center" href="">
                                                    <i data-tw-merge="" data-lucide="check-square"
                                                        class="stroke-1.5 mr-1 h-4 w-4"></i>
                                                    Edit
                                                </a>
                                                <a class="flex items-center text-danger" href="">
                                                    <i data-tw-merge="" data-lucide="trash"
                                                        class="stroke-1.5 mr-1 h-4 w-4"></i>
                                                    Delete
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="intro-y mt-3 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
                            <nav class="w-full sm:mr-auto sm:w-auto">
                                <ul class="flex w-full mr-0 sm:mr-auto sm:w-auto">
                                    <li class="flex-1 sm:flex-initial">
                                        <a data-tw-merge=""
                                            class="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"><i
                                                data-tw-merge="" data-lucide="chevrons-left"
                                                class="stroke-1.5 h-4 w-4"></i></a>
                                    </li>
                                    <li class="flex-1 sm:flex-initial">
                                        <a data-tw-merge=""
                                            class="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"><i
                                                data-tw-merge="" data-lucide="chevron-left"
                                                class="stroke-1.5 h-4 w-4"></i></a>
                                    </li>
                                    <li class="flex-1 sm:flex-initial">
                                        <a data-tw-merge=""
                                            class="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">...</a>
                                    </li>
                                    <li class="flex-1 sm:flex-initial">
                                        <a data-tw-merge=""
                                            class="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">1</a>
                                    </li>
                                    <li class="flex-1 sm:flex-initial">
                                        <a data-tw-merge=""
                                            class="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3 !box dark:bg-darkmode-400">2</a>
                                    </li>
                                    <li class="flex-1 sm:flex-initial">
                                        <a data-tw-merge=""
                                            class="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">3</a>
                                    </li>
                                    <li class="flex-1 sm:flex-initial">
                                        <a data-tw-merge=""
                                            class="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3">...</a>
                                    </li>
                                    <li class="flex-1 sm:flex-initial">
                                        <a data-tw-merge=""
                                            class="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"><i
                                                data-tw-merge="" data-lucide="chevron-right"
                                                class="stroke-1.5 h-4 w-4"></i></a>
                                    </li>
                                    <li class="flex-1 sm:flex-initial">
                                        <a data-tw-merge=""
                                            class="transition duration-200 border items-center justify-center py-2 rounded-md cursor-pointer focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus-visible:outline-none dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&:hover:not(:disabled)]:bg-opacity-90 [&:hover:not(:disabled)]:border-opacity-90 [&:not(button)]:text-center disabled:opacity-70 disabled:cursor-not-allowed min-w-0 sm:min-w-[40px] shadow-none font-normal flex border-transparent text-slate-800 sm:mr-2 dark:text-slate-300 px-1 sm:px-3"><i
                                                data-tw-merge="" data-lucide="chevrons-right"
                                                class="stroke-1.5 h-4 w-4"></i></a>
                                    </li>
                                </ul>
                            </nav>
                            <select data-tw-merge=""
                                class="disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50 [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 transition duration-200 ease-in-out text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 group-[.form-inline]:flex-1 !box mt-3 w-20 sm:mt-0">
                                <option>10</option>
                                <option>25</option>
                                <option>35</option>
                                <option>50</option>
                            </select>
                        </div>
                    </div>
                    <!-- END: Weekly Top Products -->
                </div>
            </div>
            <div class="col-span-12 2xl:col-span-3">
                <div class="-mb-10 pb-10 2xl:border-l">
                    <div class="grid grid-cols-12 gap-x-6 gap-y-6 2xl:gap-x-0 2xl:pl-6">
                        <!-- BEGIN: Transactions -->
                        <div class="col-span-12 mt-3 md:col-span-6 xl:col-span-4 2xl:col-span-12 2xl:mt-8">
                            <div class="intro-x flex h-10 items-center">
                                <h2 class="mr-5 truncate text-lg font-medium">Transactions</h2>
                            </div>
                            <div class="mt-5">
                                <div class="intro-x">
                                    <div class="box zoom-in mb-3 flex items-center px-5 py-3">
                                        <div class="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                            <img src="@/assets/images/fakers/profile-11.jpg"
                                                alt="Midone - Tailwind Admin Dashboard Template">
                                        </div>
                                        <div class="ml-4 mr-auto">
                                            <div class="font-medium">Johnny Depp</div>
                                            <div class="mt-0.5 text-xs text-slate-500">
                                                12 December 2022
                                            </div>
                                        </div>
                                        <div class="text-danger">
                                            -$57
                                        </div>
                                    </div>
                                </div>
                                <div class="intro-x">
                                    <div class="box zoom-in mb-3 flex items-center px-5 py-3">
                                        <div class="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                            <img src="@/assets/images/fakers/profile-12.jpg"
                                                alt="Midone - Tailwind Admin Dashboard Template">
                                        </div>
                                        <div class="ml-4 mr-auto">
                                            <div class="font-medium">Angelina Jolie</div>
                                            <div class="mt-0.5 text-xs text-slate-500">
                                                11 August 2022
                                            </div>
                                        </div>
                                        <div class="text-success">
                                            +$80
                                        </div>
                                    </div>
                                </div>
                                <div class="intro-x">
                                    <div class="box zoom-in mb-3 flex items-center px-5 py-3">
                                        <div class="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                            <img src="@/assets/images/fakers/profile-5.jpg"
                                                alt="Midone - Tailwind Admin Dashboard Template">
                                        </div>
                                        <div class="ml-4 mr-auto">
                                            <div class="font-medium">Leonardo DiCaprio</div>
                                            <div class="mt-0.5 text-xs text-slate-500">
                                                3 December 2020
                                            </div>
                                        </div>
                                        <div class="text-danger">
                                            -$110
                                        </div>
                                    </div>
                                </div>
                                <div class="intro-x">
                                    <div class="box zoom-in mb-3 flex items-center px-5 py-3">
                                        <div class="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                            <img src="@/assets/images/fakers/profile-11.jpg"
                                                alt="Midone - Tailwind Admin Dashboard Template">
                                        </div>
                                        <div class="ml-4 mr-auto">
                                            <div class="font-medium">Denzel Washington</div>
                                            <div class="mt-0.5 text-xs text-slate-500">
                                                22 July 2021
                                            </div>
                                        </div>
                                        <div class="text-success">
                                            +$177
                                        </div>
                                    </div>
                                </div>
                                <div class="intro-x">
                                    <div class="box zoom-in mb-3 flex items-center px-5 py-3">
                                        <div class="image-fit h-10 w-10 flex-none overflow-hidden rounded-full">
                                            <img src="@/assets/images/fakers/profile-11.jpg"
                                                alt="Midone - Tailwind Admin Dashboard Template">
                                        </div>
                                        <div class="ml-4 mr-auto">
                                            <div class="font-medium">Kevin Spacey</div>
                                            <div class="mt-0.5 text-xs text-slate-500">
                                                16 January 2022
                                            </div>
                                        </div>
                                        <div class="text-success">
                                            +$146
                                        </div>
                                    </div>
                                </div>
                                <a class="intro-x block w-full rounded-md border border-dotted border-slate-400 py-3 text-center text-slate-500 dark:border-darkmode-300"
                                    href="">
                                    View More
                                </a>
                            </div>
                        </div>
                        <!-- END: Transactions -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

useHead({
    script: [
        { src: "assets/js/vendors/chartjs.js", defer: false },
        { src: "assets/js/components/simple-line-chart-1.js", defer: true },
        { src: "assets/js/components/report-line-chart.js", defer: true },
        { src: "assets/js/components/report-pie-chart.js", defer: true },
        { src: "assets/js/components/report-donut-chart.js", defer: true },
        { src: "assets/js/components/report-donut-chart-1.js", defer: true },
    ],
});
</script>


<style></style>