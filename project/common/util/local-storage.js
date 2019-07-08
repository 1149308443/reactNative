import AsyncStorage from "@react-native-community/async-storage";

export const getItem = async key => {
  try {
    const value = await AsyncStorage.getItem(key);

    return value;
  } catch (error) {}
};

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {}
};

export const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {}
};
