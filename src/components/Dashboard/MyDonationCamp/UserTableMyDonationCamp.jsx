import { Link } from 'react-router-dom';
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, getSortedRowModel } from '@tanstack/react-table';
import { useState, useEffect, useMemo } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAuth from '@/hooks/useAuth';

export default function UserTableMyDonationCamp() {
    const { user } = useAuth();
    const [donationCampaigns, setDonationCampaigns] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [donators, setDonators] = useState([]);
    const [selectedCampaignId, setSelectedCampaignId] = useState(null);

    useEffect(() => {
        const fetchDonationCampaign = async () => {
            if (!user?.email) {
                console.error('User email is not defined');
                return;
            }
            try {
                const response = await fetch(`http://localhost:5000/myDonationCampaign/${user.email}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch campaigns: ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Donation campaigns fetched:', data);
                setDonationCampaigns(data);
            } catch (error) {
                console.error('Error fetching campaigns:', error);
                Swal.fire('Error', 'Failed to fetch donation campaigns', 'error');
            }
        };

        fetchDonationCampaign();
    }, [user?.email]);

    const fetchDonators = async (campaignId) => {
        try {
            const response = await axios.get(`http://localhost:5000/donator/${campaignId}`);
            setDonators(response.data);
        } catch (error) {
            console.error('Fetch donators error:', error);
            Swal.fire('Error', 'Failed to fetch donators', 'error');
        }
    };

    useEffect(() => {
        if (modalOpen && selectedCampaignId) {
            fetchDonators(selectedCampaignId);
        }
    }, [modalOpen, selectedCampaignId]);

    const calculateProgress = (donatedAmount, maxDonationAmount) => {
        return (donatedAmount / maxDonationAmount) * 100;
    };

    const data = useMemo(() => donationCampaigns, [donationCampaigns]);

    const columns = [
        {
            header: 'Serial Number',
            cell: info => info.row.index + 1,
        },
        {
            header: 'Pet Name',
            accessorKey: 'petName',
        },
        {
            header: 'Maximum donation amount',
            accessorKey: 'maxAmount',
        },
        {
            header: 'Donation Progress',
            cell: ({ row }) => {
                const progress = calculateProgress(row.original.donatedAmount, row.original.maxDonationAmount);
                return (
                    <div>
                        <progress value={progress} max="100"></progress>
                        <span>{`${progress.toFixed(2)}%`}</span>
                    </div>
                );
            }
        },
        {
            header: 'Actions',
            cell: ({ row }) => (
                <div className="flex space-x-2">
                    <Link className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                        to={`/dashboard/editDonationCamp/${row.original._id}`}>
                        Edit
                    </Link>
                    <button
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => {
                            setSelectedCampaignId(row.original._id);
                            setModalOpen(true);
                        }}
                    >
                        View Donators
                    </button>
                    {row.original.isPause == false ? (
                        <button
                            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => pauseDonationCampaign(row.original._id)}
                        >
                            Pause Donation
                        </button>
                    ) : null}
                </div>
            ),
        },
    ];

    const [sorting, setSorting] = useState([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        state: { sorting },
        onSortingChange: setSorting,
        initialState: { pagination: { pageSize: 10 } }
    });

    const pauseDonationCampaign = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/updateDonationCampaignStatus/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isPause: true }),
            });

            if (!response.ok) {
                throw new Error('Failed to pause donation campaign');
            }
            Swal.fire({
                title: `Status Changed`,
                text: "Paused donation campaign Successfully",
                icon: "success",
            });
            window.location.reload();

            setDonationCampaigns(donationCampaigns.map(donationCampaign => donationCampaign.id === id ? { ...donationCampaign, adopted: true } : donationCampaign));
        } catch (error) {
            console.error('Error marking as adopted:', error);
        }
    };

    return (
        <div className='w3-container'>
            <table className='w3-table-all'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                    {{ 'asc': '⬆️', 'desc': '⬇️' }[header.column.getIsSorted() ?? null]}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>

            </table>
            {table.getPageCount() > 1 && (
                <div className="flex justify-center space-x-2 mt-4">
                    <button
                        onClick={() => table.setPageIndex(0)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        First Page
                    </button>
                    <button
                        disabled={!table.getCanPreviousPage()}
                        onClick={() => table.previousPage()}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        Previous Page
                    </button>
                    <button
                        disabled={!table.getCanNextPage()}
                        onClick={() => table.nextPage()}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                    >
                        Next Page
                    </button>
                    <button
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Last Page
                    </button>
                </div>
            )}

            {modalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Donators</h3>
                            <button onClick={() => setModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                                &times;
                            </button>
                        </div>
                        <div className="overflow-y-auto max-h-64">
                            {donators.length > 0 ? (
                                <ul>
                                    {donators.map((donator, index) => (
                                        <li key={index} className="border-b border-gray-200 py-2">
                                            <div className="font-semibold">{donator.donatorName}</div>
                                            <div>Donated Amount: ${donator.donatedAmount}</div>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <div>No donators found</div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
