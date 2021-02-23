import styled from 'styled-components/native';
import {colors, fonts} from '../../../assets/styles';

export const Container = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  background-color: #000;
`;
export const Content = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;
export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 140px;
  margin-bottom: 20px;
`;
export const Description = styled.Text`
  font-family: ${fonts.fontRegular};
  font-size: 35px;
  letter-spacing: -1px;
  color: #fff;
  line-height: 42px;
`;
export const ButtonsFooter = styled.View`
  padding: 20px 30px;
`;
export const ButtonFirst = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: 25px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
export const ButtonFirstText = styled.Text`
  font-family: ${fonts.fontMedium};
  font-size: 12px;
  color: #fff;
`;
export const ButtonsLogin = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;
export const ButtonLogin = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #fff;
  border-radius: 25px;
  height: 50px;
  margin: 5px 2px;
`;
export const ButtonLoginText = styled.Text`
  font-family: ${fonts.fontMedium};
  color: #fff;
  font-size: 12px;
`;
