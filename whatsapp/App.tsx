// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {



  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://web.whatsapp.com/' }}
      userAgent={"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.5672.127 Safari/537.36"}>

      <StatusBar
        backgroundColor="black"
        barStyle="light-content"/>

    </WebView>
    // <WebView style={styles.container} source={{ uri: "https://expo.dev" }} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
