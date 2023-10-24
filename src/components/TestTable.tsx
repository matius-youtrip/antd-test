import { Table } from "antd";
import { useState } from "react";

interface Data {
    key: string;
    name: string;
    age: number;
    address: string
};

const dataSource: Data[] = Array(35).fill(0).map((_, i) => ({
    age: 42,
    address: `Address ${i+1}`,
    name: `User ${i+1}`,
    key: i.toString(),
}));

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

export const TestTable = () => {
    const [data, setData] = useState(dataSource.slice(0, 10));

    return <Table dataSource={data} columns={columns} pagination={{
        total: 35,
        pageSize: 10,
        onChange: (page, pageSize)=> {
            const start = page === 1 ? 0 : ((page - 1) * pageSize);
            const end = page === 1 ? pageSize : page * pageSize;

            setData(dataSource.slice(start, end));
        },
    }} />;
};

export default TestTable;