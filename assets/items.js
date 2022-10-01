const fruit_0 = require("../assets/fruit-0.png");
const fruit_1 = require("../assets/fruit-1.png");
const fruit_2 = require("../assets/fruit-2.png");

export const fruitItems = [fruit_0, fruit_2, fruit_1];

export const ImageItems = [
  require("../assets/carousel-0.jpg"),
  require("../assets/carousel-1.jpg"),
  require("../assets/carousel-1.jpg"),
  require("../assets/carousel-2.jpg"),
  require("../assets/carousel-2.jpg"),
];

<View style={{ flex: 1 }}>
<ScrollView
  style={{ flex: 1 }}
  horizontal
  // pagingEnabled
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={
    {
      //   height: height / 2.25,
      //   backgroundColor: "blue",
    }
  }
  // onScroll={scrollHandler}
  //   scrollEventThrottle={16}
>
  {ImageItems.map((src, index) => {
    return (
      <View
        key={`indicator-${index}`}
        style={{
          //   flex: 1,
          // marginHorizontal: width * 0.05,
          marginLeft: width * 0.05,
          // marginRight: width * 0.05,
          height: height / 2.8,
          borderRadius: width * 0.027,
          backgroundColor: "#2a243b",
        }}
      >
        {/* <Text>asd</Text> */}
        <Image
          source={src}
          // resizeMode="cover"
          style={{
            width: width / 2,
            borderRadius: width * 0.027,
            height: width / 2,
          }}
        />

        <View
          style={{
            flex: 1,
            justifyContent: "space-between",

            //   backgroundColor: "red",
            //   maxWidth: width / 2.22,
            //   alignItems: "center",
            //   marginLeft: 8,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-evenly",

              marginLeft: 8,
            }}
          >
            <View
              style={{
                //   backgroundColor: "blue",
                //   flexDirectionx: "col",
                //   flex: 1,
                marginLeft: 7,
              }}
            >
              <View style={{ marginVertical: 13, marginBottom: 16 }}>
                <Text
                  style={{
                    color: COLORS.TEXT_COLOR,
                    //   marginLeft: 8,
                    fontSize: 20,
                  }}
                >
                  Spacio
                </Text>
                <Text
                  style={{
                    color: COLORS.TEXT_COLOR,
                    //   marginLeft: 8,
                    fontSize: 12,
                  }}
                >
                  @samantha
                </Text>
              </View>
              <View
                style={{
                  width: width / 4.8,
                  alignItems: "center",
                  borderRadius: 6.6,
                  borderWidth: 2,
                  padding: 4,
                  borderColor: COLORS.PRIMARY_COLOR,
                  backgroundColor: COLORS.BLAXK,
                }}
              >
                <Text style={{ color: COLORS.PRIMARY_COLOR }}>
                  4h 15m left
                </Text>
              </View>
            </View>
            {/* <View>
            <Text>4h 15m left</Text>
          </View> */}
            <View
              style={{
                color: COLORS.TEXT_COLOR,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/ethereum.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text style={{ color: "#fff", fontSize: 18 }}>
                13.11 ETH
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  })}
</ScrollView>
</View>