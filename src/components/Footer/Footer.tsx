import { ERROR_PAGE_REGEX } from "@/constants/regex";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();
  const FooterContainer = styled.footer`
    text-align: center;
    border-top: 1px solid #000;
    margin-top: 3rem;

    & p {
      padding: 1.5rem 0;
    }
  `;

  if (ERROR_PAGE_REGEX.test(router.pathname)) return null;
  return (
    <FooterContainer>
      <p>Copyright 2023 by glims. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
