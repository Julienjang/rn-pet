import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Input, { InputTypes, ReturnKeyTypes } from '../components/Input';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import SafeInputView from '../components/SafeInputView';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TextButton from '../components/TextButton';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from '../navigations/routes';
import HR from '../components/HR';
import { StatusBar } from 'expo-status-bar';
import { PRIMARY, WHITE } from '../colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { MaterialIcons } from '@expo/vector-icons';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [userName, setUserName] = useState('');
  const [nickname, setNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [petKind, setPetKind] = useState(0);

  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const userNameRef = useRef();
  const nickNameRef = useRef();
  const phoneNumberRef = useRef();

  const petKindList = ['Dog', 'cat', 'Other', 'Null'];
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const { top, bottom } = useSafeAreaInsets();
  const { navigate } = useNavigation();

  useEffect(() => {
    setDisabled(
      !email ||
        !password ||
        password !== passwordConfirm ||
        !userName ||
        !nickname ||
        !phoneNumber
    );
  }, [email, password, passwordConfirm, userName, nickname, phoneNumber]);

  const petKindChangeHandler = (index) => {
    // console.log("index \t", index);
    setPetKind((preIndex) => index);
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    if (!disabled && !isLoading) {
      setIsLoading(true);
      console.log(email, password);
      setIsLoading(false);
    }
  };

  return (
    <SafeInputView>
      <StatusBar style={'light'} />
      <View style={[styles.container, { paddingTop: top }]}>
        <View style={StyleSheet.absoluteFillObject}>
          <Image
            source={require('../../assets/petCover.png')}
            style={{ width: '100%' }}
            resizeMode={'cover'}
          />
        </View>
        <ScrollView
          style={[styles.form, { paddingBottom: bottom ? bottom + 10 : 45 }]}
          contentContainerStyle={{ alignItems: 'center' }}
          bounces={false}
          keyboardShouldPersistTaps={'always'}
        >
          <Input
            inputType={InputTypes.EMAIL}
            value={email}
            onChangeText={(text) => setEmail(text.trim())}
            onSubmitEditing={() => passwordRef.current.focus()}
            styles={{ container: { marginBottom: 20 } }}
            returnKeyType={ReturnKeyTypes.NEXT}
          />

          <Input
            ref={passwordRef}
            inputType={InputTypes.PASSWORD}
            value={password}
            onChangeText={(text) => setPassword(text.trim())}
            onSubmitEditing={() => passwordConfirmRef.current.focus()}
            styles={{ container: { marginBottom: 20 } }}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input
            ref={passwordConfirmRef}
            inputType={InputTypes.PASSWORD_CONFIRM}
            value={passwordConfirm}
            onChangeText={(text) => setPasswordConfirm(text.trim())}
            onSubmitEditing={onSubmit}
            styles={{ container: { marginBottom: 20 } }}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input
            ref={userNameRef}
            inputType={InputTypes.USERNAME}
            value={userName}
            onChangeText={(text) => setUserName(text.trim())}
            onSubmitEditing={() => userNameRef.current.focus()}
            styles={{ container: { marginBottom: 20 } }}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input
            ref={nickNameRef}
            inputType={InputTypes.NICKNAME}
            value={nickname}
            onChangeText={(text) => setNickname(text.trim())}
            onSubmitEditing={() => nickNameRef.current.focus()}
            styles={{ container: { marginBottom: 20 } }}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input
            ref={phoneNumberRef}
            inputType={InputTypes.PHONENUMBER}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text.trim())}
            onSubmitEditing={() => phoneNumberRef.current.focus()}
            styles={{ container: { marginBottom: 20 } }}
            returnKeyType={ReturnKeyTypes.DONE}
          />
          <Input
            inputType={InputTypes.PETKIND}
            styles={{ flexDirection: 'row' }}
          />
          <View text={'PETKIND'} style={{ flexDirection: 'row' }}>
            {petKindList.map((data, index) => (
              <TouchableOpacity
                key={data}
                style={{
                  flexDirection: 'row',
                  margin: 10,
                  flex: 3,
                  justifyContent: 'space-evenly',
                }}
                onPress={petKindChangeHandler.bind(this, index)}
              >
                <MaterialIcons
                  name={
                    index === petKind
                      ? 'radio-button-checked'
                      : 'radio-button-unchecked'
                  }
                  size={20}
                  color={PRIMARY.DEFAULT}
                />
                <Text style={styles.termsText}>{data}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Button
            title={'SIGNUP'}
            disabled={disabled}
            isLoading={isLoading}
            onPress={onSubmit}
            styles={{ container: { marginTop: 20 } }}
          />

          <HR text={'OR'} styles={{ container: { marginVertical: 30 } }} />

          <TextButton
            title={'SIGNIN'}
            onPress={() => navigate(AuthRoutes.SIGN_IN)}
          />
        </ScrollView>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 30,
  },
  form: {
    flexGrow: 0,
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default SignUpScreen;
