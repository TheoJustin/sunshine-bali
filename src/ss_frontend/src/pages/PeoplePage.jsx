import React from "react";
import MainTemplate from "../templates/MainTemplate";
import profile_1 from "../assets/about/theo.jpg";
import profile_2 from "../assets/about/ryan.jpg";
import People from "../components/People";

const PeoplePage = () => {
  return (
    <MainTemplate>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 pt-24">
        <People
          name="Theo Justin Amantha"
          username="theo"
          profileUrl={profile_1}
          description="Lead Developer at Sunshine"
        />
        <People
          name="Ryan Ray Wantouw Oei"
          username="ryan"
          profileUrl={profile_2}
          description="Backend Engineer"
        />
        <People
          name="Theo Justin Amantha"
          username="theo"
          profileUrl={profile_1}
          description="Lead Developer at Sunshine"
        />
        <People
          name="Ryan Ray Wantouw Oei"
          username="ryan"
          profileUrl={profile_2}
          description="Backend Engineer"
        />
        <People
          name="Theo Justin Amantha"
          username="theo"
          profileUrl={profile_1}
          description="Lead Developer at Sunshine"
        />
        <People
          name="Ryan Ray Wantouw Oei"
          username="ryan"
          profileUrl={profile_2}
          description="Backend Engineer"
        />
        <People
          name="Theo Justin Amantha"
          username="theo"
          profileUrl={profile_1}
          description="Lead Developer at Sunshine"
        />
        <People
          name="Ryan Ray Wantouw Oei"
          username="ryan"
          profileUrl={profile_2}
          description="Backend Engineer"
        />
        <People
          name="Ryan Ray Wantouw Oei"
          username="ryan"
          profileUrl={profile_2}
          description="Backend Engineer"
        />
      </div>
    </MainTemplate>
  );
};

export default PeoplePage;
