import React, { useEffect, useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import User from "../components/User";
import { useQuery } from "@tanstack/react-query";
import { ss_backend } from "../../../declarations/ss_backend";

export default function UsersPage() {
  const [users, setUsers] = useState();

  const { isLoading, error } = useQuery({
    queryKey: ["fetchUsers", users],
    queryFn: fetchUsers,
  });

  useEffect(() => {
    fetchUsers();
  }, [users]);

  async function fetchUsers() {
    const allUsers = await ss_backend.getAllUsers();
    if (Array.isArray(allUsers.ok) && allUsers.ok) {
      const listItems = allUsers.ok.map((user, idx) => (
        <User
          key={idx}
          name={user.name}
          description={user.description}
          profileUrl={user.profileUrl}
          username={user.username}
        />
      ));
      setUsers(listItems);
    }
    return true;
  }

  return (
    <MainTemplate>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 pt-24">
        {isLoading ? <></> : users}
      </div>
    </MainTemplate>
  );
}
