import { Flex, Image } from "@chakra-ui/react";
import AstroHead from "@/assets/astro_profile.png";

//components
import Logo from "@/components/Logo";

const AuthHeader = () => {
  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px"
      borderColor="#2D3748"
      pb={3}
      alignItems="center"
    >
      <Logo />
      <Image
        src={AstroHead.src}
        objectFit="contain"
        width="25px"
        height="25px"
        alt="DevGPT Astro"
      />
    </Flex>
  );
};

export default AuthHeader;