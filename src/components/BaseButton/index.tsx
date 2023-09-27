import { Button, ButtonProps, Image, Text } from "@chakra-ui/react";

type TBaseButtonProps = {
  text: string;
  image?: string;
} & ButtonProps;
export const BaseButton = ({ text, image, ...rest }: TBaseButtonProps) => {
  return (
    <Button
      padding={"16px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      gap="32px"
      border="1px solid rgba(0, 0, 0, 0.12)"
      backgroundColor={"#FFF"}
      borderRadius={"8px"}
      transition={"all ease 0.3s"}
      _hover={{
        opacity: 0.5,
      }}
      {...rest}
    >
      {image && <Image src={image} w="25px" h="25px" mb="-3px" />}
      <Text
        fontSize="22px"
        textAlign={"center"}
        fontWeight={"500"}
        fontFamily={"Ubuntu"}
        lineHeight={"33px"}
      >
        {text}
      </Text>
    </Button>
  );
};
