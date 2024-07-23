# Help with maintenance would be appreciated!

#### If interested please send me an email: utkarshsingh00997@gmail.com

# Contents

- [The package](#react-native-core-responsive-screen)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [How do I know it works for all devices ?](#example)
- [License](#license)
- [Pull Requests](#pull)

# react-native-core-responsive-screen

<i>react-native-core-responsive-screen</i> React Native Core Responsive Screen is a groundbreaking library that revolutionizes app development for iOS and Android. This library ensures a fully customizable UI in all orientation types, helping developers create seamless and responsive UI/UX across all devices and orientations.

As the universal and advanced solution for responsive design, it offers everything needed to enhance user experiences. Unlike previous practices where apps like Amazon, Zomato, and Blinkit restricted and locked orientations before release, this library allows developers to easily implement orientation functionality without compromising design integrity.

Embrace the future of app development with React Native Core Responsive Screen, the ultimate tool for creating versatile and adaptive applications.

It also provides an optional third method for screen orientation detection and automatic rerendering according to new dimensions.

Give it a try and make your life simpler!

Check out [this medium article](https://medium.com/react-native-training/build-responsive-react-native-views-for-any-device-and-support-orientation-change-1c8beba5bc23) to see the power of the library! 🚀

<img src="https://cdn-images-1.medium.com/max/800/1*BWpx3uRPlWByahoXA6M-BQ.jpeg" />

# Installation

`npm install react-native-core-responsive-screen --save`

# Usage

Usage Instructions
Setup Orientation and Dynamic Width/Height in App.js:

First, call useOrientation in App.js to get the device's orientation at the entry level. Use Redux or props to pass this orientation information to other screens and enclose your app using width: useDynamicWidth(100) and height: useDynamicHeight(100) as given below.

```javascript
import { View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import {
  useDynamicWidth,
  useOrientationChange,
} from "react-native-core-responsive-screen";
import Login from "./Login";

const App = () => {
  const orientation = useOrientationChange();
  const [landscape, setLandscape] = useState(false);
  useEffect(() => {
    if (orientation === "landscape") {
      setLandscape(true);
    } else {
      setLandscape(false);
    }
  }, [orientation]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ alignItems: "center", width: useDynamicWidth(100) }}>
        <Login landscape={landscape} />
      </View>
    </SafeAreaView>
  );
};

export default App;
```

Customizing Screens Based on Orientation:

Inside each screen component where you want to customize the responsiveness according to 'Landscape' and 'Portrait', use moderateScale to adjust component sizes, margins, paddings, font sizes, etc.
take the orientation prop or take it from redux and use as given below for the Login Page as shown in the example.

```javascript
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { moderateScale } from "react-native-core-responsive-screen";
const Login = ({ landscape }) => {
  const [email, setEmail] = useState("");
  const handleOnChange = (text) => {
    setEmail(text);
  };
  return (
    <View>
      <View style={{ alignItems: "center", flex: 1 }}>
        <View style={landscape ? styles.lheader : styles.header}>
          <Text style={landscape ? styles.lHeaderText : styles.headerText}>
            {landscape ? "Landscape" : "Portrait"}
          </Text>
        </View>

        <View style={landscape ? styles.lLoginC : styles.loginC}>
          <Text style={landscape ? styles.LloginText : styles.loginText}>
            Login
          </Text>
        </View>
        <View style={landscape ? styles.lLabelEmail : styles.labelEmail}>
          <Text
            style={landscape ? styles.lLableTextEmail : styles.lableTextEmail}
          >
            Email
          </Text>
        </View>
        <View style={landscape ? styles.lEmailC : styles.emailC}>
          <TextInput
            onChange={handleOnChange}
            value={email}
            style={landscape ? styles.lTextEmail : styles.textEmail}
          />
        </View>
        <View style={landscape ? styles.lLabelPassword : styles.labelPassword}>
          <Text
            style={
              landscape ? styles.lLableTextPassword : styles.lableTextPassword
            }
          >
            Password
          </Text>
        </View>
        <View
          style={
            landscape
              ? [styles.lEmailC, { marginTop: moderateScale(5) }]
              : [styles.emailC, { marginTop: moderateScale(5) }]
          }
        >
          <TextInput
            onChange={handleOnChange}
            value={email}
            style={landscape ? styles.lTextEmail : styles.textEmail}
          />
        </View>
        <TouchableOpacity style={landscape ? styles.lButtonC : styles.buttonC}>
          <Text style={landscape ? styles.lButtonText : styles.buttonText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
  },
  lheader: { alignItems: "center" },
  headerText: { fontSize: moderateScale(20), color: "red" },
  lHeaderText: { fontSize: moderateScale(28), color: "green" },
  LloginText: { fontSize: moderateScale(22), color: "black" },
  loginText: { fontSize: moderateScale(34), color: "black" },
  loginC: { marginTop: moderateScale(40), alignItems: "center" },
  lLoginC: { marginTop: moderateScale(30), alignItems: "center" },
  lLabelEmail: {
    width: moderateScale(500),
    paddingHorizontal: moderateScale(10),
    alignItems: "flex-start",
  },
  labelEmail: {
    width: moderateScale(350),
    paddingHorizontal: moderateScale(10),
    alignItems: "flex-start",
  },
  lLabelPassword: {
    marginTop: moderateScale(30),
    width: moderateScale(500),
    paddingHorizontal: moderateScale(10),
    alignItems: "flex-start",
  },
  labelPassword: {
    marginTop: moderateScale(30),
    width: moderateScale(350),
    paddingHorizontal: moderateScale(10),
    alignItems: "flex-start",
  },
  lLableTextEmail: {
    fontSize: moderateScale(9),
  },
  lableTextEmail: {
    fontSize: moderateScale(10),
  },
  lLableTextPassword: { fontSize: moderateScale(9) },
  lableTextPassword: { fontSize: moderateScale(10) },
  lEmailC: {
    marginTop: moderateScale(5),
    height: moderateScale(40),
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    width: moderateScale(500),
    justifyContent: "center",
    borderRadius: 8,
  },
  emailC: {
    borderRadius: 8,
    marginTop: moderateScale(5),
    alignItems: "center",
    justifyContent: "center",
    height: moderateScale(40),
    borderWidth: 1,
    borderColor: "black",
    width: moderateScale(350),
  },
  lTextEmail: {
    fontSize: moderateScale(14),

    width: moderateScale(450),
  },

  textEmail: {
    fontSize: moderateScale(14),

    width: moderateScale(335),
  },
  lButtonC: {
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(500),
    height: moderateScale(40),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    marginTop: moderateScale(60),
    backgroundColor: "black",
  },
  buttonC: {
    marginTop: moderateScale(50),
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(350),
    height: moderateScale(40),
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    backgroundColor: "black",
  },
  lButtonText: {
    fontSize: moderateScale(18),
    color: "white",
  },
  buttonText: {
    fontSize: moderateScale(16),

    color: "white",
  },
});
```

# Examples

You can find a working example of this over the [related example repository](https://github.com/Utkarshsingh001/demo-react-native-core-responsive-screen)


### Smartphones


### Tablets


# License

ISC

# Pull

Pull requests are welcome! Please make the PR to `development` branch though and not `master`. Thanks.
