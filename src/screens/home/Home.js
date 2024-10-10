import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { MOVIES } from "../../utils/movies_data";
import { COLORS } from "../../utils/colors";
import moment from "moment";

const Home = () => {
  const renderItem = ({ index, item }) => {
    return (
      <View
        style={{
          backgroundColor: getRandomColor()?.hex,
          borderWidth: 4,
          borderColor: getRandomColor()?.borderColor,
          marginVertical: 4,
          marginHorizontal: 4,
          paddingHorizontal: 4,
          paddingVertical: 8,
          borderRadius: 4,
          width: "47%",
        }}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: "bold",
            paddingVertical: 2,
            paddingHorizontal: 2,
          }}
        >
          {item?.movie_name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: "normal",
            paddingVertical: 2,
            paddingHorizontal: 2,
          }}
        >
          {item?.movie_genre}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 12,
            fontWeight: "normal",
            paddingVertical: 2,
            paddingHorizontal: 2,
            alignSelf: "flex-end",
          }}
        >
          {/* {item?.created_at} */}
          {moment(item?.created_at).format("dddd, MMM D YYYY h:mm A")}
        </Text>
      </View>
    );
  };

  const renderItemHorizontal = ({ index, item }) => {
    return (
      <View
        style={{
          backgroundColor: getRandomColor()?.hex,
          borderWidth: 4,
          borderColor: getRandomColor()?.borderColor,
          marginVertical: 4,
          marginHorizontal: 4,
          paddingHorizontal: 4,
          paddingVertical: 8,
          borderRadius: 4,
          width: 300,
        }}
      >
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: "bold",
            paddingVertical: 2,
            paddingHorizontal: 2,
          }}
        >
          {item?.movie_name}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            fontWeight: "normal",
            paddingVertical: 2,
            paddingHorizontal: 2,
          }}
        >
          {item?.movie_genre}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 12,
            fontWeight: "normal",
            paddingVertical: 2,
            paddingHorizontal: 2,
            alignSelf: "flex-end",
          }}
        >
          {/* {item?.created_at} */}
          {moment(item?.created_at).format("dddd, MMM D YYYY h:mm A")}
        </Text>
      </View>
    );
  };

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          height: "100%",
        }}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1,
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
              Movies
            </Text>
          </View>
          <FlatList
            data={MOVIES}
            renderItem={renderItem}
            keyExtractor={(item) => item?.id}
            numColumns={2}
          />
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
              Movies
            </Text>
          </View>
          <View style={{ flex: 1, paddingVertical: 8 }}>
            <FlatList
              horizontal
              data={MOVIES}
              renderItem={renderItemHorizontal}
              keyExtractor={(item) => item?.id}
            />
          </View>
          {/* <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {MOVIES.map((item) => (
              <View
                style={{
                  backgroundColor: getRandomColor()?.hex,
                  borderWidth: 4,
                  borderColor: getRandomColor()?.borderColor,
                  marginVertical: 4,
                  marginHorizontal: 4,
                  paddingHorizontal: 4,
                  paddingVertical: 8,
                  borderRadius: 4,
                  width: "47%",
                }}
              >
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    paddingVertical: 2,
                    paddingHorizontal: 2,
                  }}
                >
                  {item?.movie_name}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 16,
                    fontWeight: "normal",
                    paddingVertical: 2,
                    paddingHorizontal: 2,
                  }}
                >
                  {item?.movie_genre}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: 12,
                    fontWeight: "normal",
                    paddingVertical: 2,
                    paddingHorizontal: 2,
                    alignSelf: "flex-end",
                  }}
                >
                  {moment(item?.created_at).format("dddd, MMM D YYYY h:mm A")}
                </Text>
              </View>
            ))}
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
