import { Box, Heading, Text, Link } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      h="100vh"
      w="100%"
      p="10px 30px"
    >
      <Heading>Página não encontrada.</Heading>
      <Text fontWeight="semibold" fontSize={"18px"} mt="16px">
        Esta página não existe ou está incorreta, por favor tente acessar uma
        página válida ou{" "}
        <Link
          onClick={() => navigate(-1)}
          color="blue"
          textDecoration={"underline"}
        >
          clique aqui{" "}
        </Link>
        para voltar
      </Text>
    </Box>
  );
};
