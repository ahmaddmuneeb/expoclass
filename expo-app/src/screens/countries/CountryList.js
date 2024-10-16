import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { COLORS } from "../../utils/colors";

const CountryList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBlogPosts = async () => {
    console.log("Get All Countries List");
    setLoading(true);
    try {
      let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      //   let response = await axios.get("https://jsonplaceholder.typicode.com/posts" ,{
      //     headers: {

      //     },
      //     body: {

      //     }
      //   });
      //   console.log("Response:: ", response?.data);
      console.log("Response Type:: ", response?.data);
      setPosts(response?.data);
      setLoading(false);
    } catch (error) {
      console.log("Interval server error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogPosts();
  }, []);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  };

  return (
    <View style={{ flex: 1, height: "100%", width: "100%" }}>
      <ScrollView
        style={{ flex: 1, height: "100%", width: "100%" }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            marginVertical: 8,
            marginHorizontal: 4,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
            }}
          >
            Blog Posts
          </Text>
        </View>
        {loading ? (
          <View
            style={{
              flex: 1,
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size={"small"} color={"red"} />
          </View>
        ) : posts && posts.length > 0 ? (
          posts.map((post) => (
            <View
              style={{
                backgroundColor: getRandomColor().hex,
                marginVertical: 4,
                marginHorizontal: 8,
                paddingVertical: 8,
                paddingHorizontal: 8,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                User Id: {post?.userId}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Post Id: {post?.id}
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Title:{" "}
                <Text
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {post?.title}
                </Text>
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                }}
              >
                Description:
                <Text
                  style={{
                    fontWeight: "normal",
                  }}
                >
                  {post?.body}
                </Text>
              </Text>
              <Text></Text>
            </View>
          ))
        ) : (
          <View>
            <Text>No posts found</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default CountryList;

const styles = StyleSheet.create({});
