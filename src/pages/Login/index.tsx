import { Box, Grid, GridItem, Image, Heading, Text } from "@chakra-ui/react";
import { memo, useEffect } from "react";
import LogoBox from "../../assets/logo-box.png";
import PinImage from "../../assets/logo-pin.png";
import GoogleIcon from "../../assets/google-icon.png";
import AppleIcon from "../../assets/apple-icon.png";
import { BaseButton } from "../../components/BaseButton";
import { supabase } from "../../services/supabase";

const LoginComponent = () => {
  const handleGoogleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    console.log(data);
    console.error(error);
  };

  useEffect(() => {
    supabase.auth.getSession().then((res) => console.log(res));
  }, []);

  return (
    <Grid templateColumns="repeat(2, 1fr)" h="100vh">
      <GridItem colSpan={1} bg="primary" display={"flex"} alignItems={"center"}>
        <Image src={LogoBox} w="300px" h="300px" margin={"auto"} />
      </GridItem>
      <GridItem colSpan={1}>
        <Box
          display={"flex"}
          flexDir={"column"}
          gap={"40px"}
          justifyContent={"center"}
          alignItems={"center"}
          h="100%"
          w="100%"
        >
          <Image src={PinImage} w="100px" />
          <Heading
            fontSize="32px"
            maxW="40%"
            textAlign={"center"}
            fontWeight={"600"}
            lineHeight={"33px"}
          >
            Explore eventos perto de você
          </Heading>
          <Text
            fontSize="18px"
            maxW="80%"
            textAlign={"center"}
            fontWeight={"400"}
            fontFamily={"Ubuntu"}
            lineHeight={"33px"}
          >
            Partyu é seu guia para encontrar eventos e festas. Descubra shows,
            festivais, bares, eventos e muito mais. Tudo em apenas um
            aplicativo.
          </Text>
          <Box
            display={"flex"}
            flexDir={"column"}
            w="100%"
            maxW="80%"
            gap={"10px"}
            mt="50px"
          >
            <BaseButton
              text="Entrar com Google"
              image={GoogleIcon}
              onClick={handleGoogleLogin}
            />
            <BaseButton text="Entrar com Apple" image={AppleIcon} />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
};

export const Login = memo(LoginComponent);
