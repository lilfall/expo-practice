import AsyncStorage from '@react-native-async-storage/async-storage';

export const SHARED_PREFERENCES_KEYS = {
  featureLastDate: 'featureLastDate',
  tipLastId: 'tipLastId',
  ratingModalDisplayed: 'ratingModalDisplayed'
};

export const setSharedPreferences = async (key: string, payload: string) => {
  try {
    await AsyncStorage.setItem(key, payload);
  } catch (error) {
    console.error('Error setting item in AsyncStorage:', error);
  }
};

export const getSharedPreferences = async (key: string): Promise<string | null> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.error('Error getting item from AsyncStorage:', error);
    return null;
  }
};

export const removeSharedPreferences = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item from AsyncStorage:', error);
  }
};
