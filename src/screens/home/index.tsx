import { Center, Heading, VStack } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "styled-components/dist/types";

export const Home = () =>{
    return (
        <VStack bgColor="gray.300" flex={1} px={5} pb={100}>
            <Center>
                <Heading my={10}>
                Listagem de Usuarios
                </Heading>
            </Center>


        </VStack>
    );
}