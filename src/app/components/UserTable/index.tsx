'use client';
import { Table, TableProps } from 'antd';
import Image from 'next/image';
import React from 'react';
import { UserResponse } from '../../types';

interface Props {
  data: UserResponse[];
  loading: boolean;
}

export default function UserTable({ data, loading }: Props) {
  const columns: TableProps<UserResponse>['columns'] = [
    {
      title: 'Nama',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Umur',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Alamat',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'No. Telepon 1',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'No. Telepon 2',
      dataIndex: 'cell',
      key: 'cell',
    },
    {
      title: 'Gambar',
      dataIndex: 'picture',
      key: 'picture',
      render: (_, record) => (
        <Image src={record.picture[1]} alt="" width={50} height={50} />
      ),
    },
  ];

  return (
    <div>
      <Table<UserResponse>
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 10 }}
        loading={loading}
        rowKey="name"
      />
    </div>
  );
}
