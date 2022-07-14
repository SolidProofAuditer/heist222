import {
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { IMetadataExtension } from "@strata-foundation/spl-utils";

interface TokenPreviewProps {
  data: IMetadataExtension | undefined;
  image: string | undefined
}

export const TokenPreview = ({ data, image }: TokenPreviewProps) => {
  return (
    <Flex>
      <Image
        alt="Token logo"
        w="70px"
        h="70px"
        borderRadius="50%"
        src={image}
      />
      <Stack paddingLeft="10px">
        <Text 
          fontSize="2xl" 
          color="white" 
          textAlign="left" 
          fontWeight="bold"
        >
          {data?.name}
        </Text>
        <Text 
          fontSize="md" 
          color="white" 
          marginTop="0 !important"
        >
            ${data?.symbol}
          </Text>
      </Stack>
    </Flex>
  );
};
  