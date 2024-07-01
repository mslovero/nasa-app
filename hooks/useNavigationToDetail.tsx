// useNavigateToDetail.ts
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../src/types';

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>;

export const useNavigateToDetail = () => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const navigateToDetail = (title: string, date: string, url: string, explanation: string) => {
    navigate('Detail', { title, date, url, explanation });
  };

  return navigateToDetail;
};
