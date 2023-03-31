import React from "react";

export default function UserHistoryTable1() {
    return (
        <div>
             <div className='flex flex-col p-0 ml-5 w-[747px] h-[92px] bg-white 
                rounded-[5px] text-start pt-0'>
                <div class="flex flex-row w-full">
                <h1 className=' text-black text-[18px]'>
                    Transactions</h1>
                </div>

                <div class="flex flex-row justify-between">
                <h1 className='text-black text-[14px]'>
                    check below for all your latest transaction history</h1> 
               
                <h1 className='w-full text-[#FF6842] text-end text-[14px]'>
                See All Transactions</h1>
                </div>
             </div>

        <div className="flex flex-col w-[745px] h-[250px] ml-5">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            {/* <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        Email
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>
                            </thead> */}
                            <tbody className="divide-y divide-gray-200">
                                <tr>
                                    {/* <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        1
                                    </td> */}
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                      Completed
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Visa card  **** 4831
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        2
                                    </td> */}
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                      Pending
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     Visa card  **** 4831
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    {/* <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        3
                                    </td> */}
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     Cancealed
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                     Visa card  **** 4831
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    {/* <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        3
                                    </td> */}
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                      Cancealed
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        Visa card  **** 4831
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-green-500 hover:text-green-700"
                                            href="#"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <a
                                            className="text-red-500 hover:text-red-700"
                                            href="#"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}