import { AsyncStorage } from "react-native";

_storeData = async () => {
  try {
    const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', 'jsonValue');
  } catch (error) {
      console.log(error)
  }
}

_retrieveData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
      if (value !== null) {
    const jsonValue = JSON.stringify(value);
          console.log(value);
      }
  } catch (error) {
      console.log(error)
  }
}