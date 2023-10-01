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
      name: "Play time!",
      link: "/fun-facts",
    },
    {
      name: "Albums & Songs",
      link: "/media",
    },
    {
      name: "About me",
      link: "/about",
    },
  ];

  const renderList = () => {
    return itemList.map((item, index) => {
      return (
        <HeaderItem key={index}>
          <Link href={item.link}>{item.name}</Link>
        </HeaderItem>
      );
    });
  };

  return <HeaderContainer>{renderList()}</HeaderContainer>;
}
