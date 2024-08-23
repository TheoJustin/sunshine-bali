import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import MainTemplate from "../templates/MainTemplate";
import profile_1 from "../assets/about/theo.jpg";
import profile_2 from "../assets/about/ryan.jpg";
import People from "../components/People";
import { ss_backend } from "../../../declarations/ss_backend";

const PeoplePage = () => {
  const [people, setPeople] = useState();
  const { isLoading, error, isFetching } = useQuery({
    queryKey: ["fetchUsers"],
    queryFn: fetchUsers,
  });

  useEffect(() => {
    fetchUsers();
  }, [people]);

  async function fetchUsers() {
    const users = await ss_backend.getAllUsers();
    console.log(users);
    if (users.ok) {
      const listItems = users.ok.map(
        ([name, profileUrl, description, username]) => (
          <People
            name={name}
            description={description}
            profileUrl={profileUrl}
            username={username}
          />
        )
      );
      setPeople(listItems);
    }
    return true;
  }

  return (
    <MainTemplate>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 pt-24">
        {/* {isLoading || isFetching ? <></> : people} */}
      </div>
    </MainTemplate>
  );
};

export default PeoplePage;
