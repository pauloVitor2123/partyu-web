import { Grid, GridItem, Image } from "@chakra-ui/react";
import { memo } from "react";
import LogoBox from "../../assets/logo-box.png";

const LoginComponent = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" h="100vh">
      <GridItem colSpan={1} bg="primary" display={"flex"} alignItems={"center"}>
        <Image src={LogoBox} w="300px" h="300px" margin={"auto"} />
      </GridItem>
      <GridItem colSpan={1}>img logo</GridItem>
    </Grid>
  );
};

export const Login = memo(LoginComponent);
