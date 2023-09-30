import { styled } from "@linaria/react";
import Link from "next/link";
import React from "react";

const HeaderContainer = styled.div`
  display: flex;
  background-color: #3dabff;
  min-width: 100%;
`;

const HeaderItem = styled.button`
  border-radius: 8px;
  background-color: white;
  padding: 10px;
  margin: 10px;
  > a {
    text-decoration: none;
  }
`;

export default function Header() {
  const itemList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Fun Facts",
      link: "/fun-facts",
    },
    {
      name: "Photos & Videos",
      link: "/photos-videos",
    },
    {
      name: "About me",
      link: "/about",
    },
  ];

  const renderList = () => {
    return itemList.map((item) => {
      return (
        <HeaderItem>
          <Link href={item.link} key={item.name}>
            {item.name}
          </Link>
        </HeaderItem>
      );
    });
  };

  return <HeaderContainer>{renderList()}</HeaderContainer>;
}
