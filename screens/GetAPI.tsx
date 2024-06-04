import {
  Box,
  Heading,
  Image,
  ScrollView,
  Text,
  View,
} from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

interface IGetAPI {
  id: string;
  url: string;
}

const GetAPI = () => {
  const [get, setGet] = useState<IGetAPI[]>([]);

  const getAPI = async () => {
    try {
      let response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=10"
      );
      let data = await response.json();
      setGet(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <ScrollView>
      <Box
        w={"$full"}
        h={"$full"}
        bgColor="gray"
        alignItems="center"
      >
        <FlatList
          data={get}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Image
              source={{ uri: item.url }}
              alt="image"
              width={150}
              height={330}
              style={{ margin: 10, borderRadius: 5 }}
            />
          )}
          numColumns={2}
          contentContainerStyle={{ padding: 14 }}
        />
      </Box>
    </ScrollView>
  );
};

export default GetAPI;
