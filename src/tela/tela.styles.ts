import styled from "styled-components/native";
import { Feather } from "react-native-vector-icons";

export const Container = styled.View`
  background-color: #181f31;
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  background-color: #4a4d55;
  align-items: center;
  flex-direction: row;
  height: 45px;
  margin-top: 30px;
  margin-left: 60px;
  margin-right: 60px;
  border-radius: 8px;
`;

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 320px;
  height: 160px;
  border-radius: 8px;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: #fff;
  font-weight: bold;
  margin-top: 40px;
`;

export const Input = styled.TextInput`
  width: 90%;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  color: #e2d7d7;
  margin-right: 10px;
`;

export const TextCEP = styled.Text`
  font-size: 28px;
  color: #000;
  font-weight: bold;
  margin-top: 10px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  margin-top: 10px;
`;
