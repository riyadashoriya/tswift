import { styled } from "@linaria/react";
import Link from "next/link";
import React from "react";

const FooterContainer = styled.div`
  padding: 20px;
  background-color: #c2e7f1;
  text-align: center;
  > a {
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Link href="/Copyright">Powered by a Swiftie ❤️</Link>
    </FooterContainer>
  );
}
