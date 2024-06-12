import { useQuery } from '@tanstack/react-query';
import UserTable from './UserTable';
import useAxiosSecure from '@/hooks/useAxiosSecure';

const Users = () => {
    const axiosSecure = useAxiosSecure();
    const { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user');
            return res.data;
        }
    })

    return (
        <div>
            <div className='flex justify-evenly text-3xl my-4'>
                <h2>All Users</h2>
                <h2>Total Users: {user.length}</h2>
            </div>
            <UserTable></UserTable>
        </div>
    );
};

export default Users;