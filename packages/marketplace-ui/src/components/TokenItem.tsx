import {
  Alert,
  Box,
  Button,
  Container,
  Center,
  Stack,
  Text,
  Collapse,
  Flex,
  Input,
  Switch,
  VStack,
  Image,
  Icon,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";
import { PublicKey } from "@solana/web3.js";
import React, { useEffect, useState, useMemo } from 'react';
import { useWallet } from "@solana/wallet-adapter-react";
import { useTokenAuthorities } from "@strata-foundation/react";
import { useRouter } from "next/router";
import { routes, route } from "../utils/routes";


export const TokenItem = ({mint}: {mint: PublicKey}) => {
  const router = useRouter();
  const { publicKey, connected } = useWallet();
  const { metadata, data, mint: mintInfo, hasAnyAuth, image } = useTokenAuthorities(mint, publicKey || undefined);
  console.log(hasAnyAuth);
  return (
    <>
      { hasAnyAuth ? (
          <Flex bgColor="white" borderRadius="8px" w="full" h="7em" alignItems="center">
            <Flex
              onClick={() => {
                router.push(
                  route(routes.tokenAdmin, {
                    mintKey: mint.toString(),
                  }),
                  undefined,
                  { shallow: true }
                )
              }}
              cursor="pointer"
              alignItems="center"
            >
              <Image
                alt="Token logo"
                marginLeft="2em"
                w="50px"
                h="50px"
                borderRadius="50%"
                src={image}
              />

                <Text 
                  fontSize="xl" 
                  textAlign="left" 
                  fontWeight="bold"
                  paddingLeft="10px"
                >
                  {data?.name}
                </Text>
            </Flex>
            <Flex 
              marginLeft="auto"
              onClick={() => {
                router.push(
                  route(routes.tokenAdmin, {
                    mintKey: mint.toString(),
                  }),
                  undefined,
                  { shallow: true }
                )
              }} 
              cursor="pointer"
            >
              <Text marginRight="10px">Manage Token</Text>
              <Icon 
                w="24px" h="24px" 
                as={MdSettings} 
                
                marginRight="2em" 
              />
            </Flex>
          </Flex>
      ) : null}
    </>
  )
};
      