'use client';
import { Button, Col, Flex, Input, Row, Typography } from 'antd';
import { useEffect, useState } from 'react';
import UserTable from './components/UserTable';
import { CommonResponse } from './constants/types';
import useDebounce from './hooks/useDebounce';
import { UserResponse } from './types';
import { fetchApi } from './utils/axios';

export default function Home() {
  const [users, setUsers] = useState<UserResponse[]>([]);
  const [displayedUsers, setDisplayedusers] = useState<UserResponse[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const debouncedSearch = useDebounce(search, 300);
  async function fetchUsers() {
    const { data } = await fetchApi.get<CommonResponse<UserResponse[]>>(
      'user/random-users',
      {
        params: {
          results: 50,
          page: 1,
        },
      },
    );
    setUsers(data.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (debouncedSearch.trim() === '') {
      setDisplayedusers(users);
    } else {
      const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
      );
      setDisplayedusers(filteredUsers);
    }
  }, [users, debouncedSearch]);
  return (
    <Flex
      style={{
        flexDirection: 'column',
        padding: '4rem 8rem',
      }}
    >
      <Typography.Title level={4}>List</Typography.Title>
      <Row
        style={{
          marginBottom: '1rem',
        }}
      >
        <Col span={12}>
          <Input.Search
            placeholder="Search"
            size="large"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
        <Col
          span={12}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button size="large">
            <Typography.Text>+ New Data</Typography.Text>
          </Button>
        </Col>
      </Row>
      <UserTable data={displayedUsers} loading={loading} />
    </Flex>
  );
}
