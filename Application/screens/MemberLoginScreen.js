import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MemberLoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* โลโก้ */}
      <Image
        source={require('../assets/images/logo.png')} // ตรวจสอบว่าโลโก้มีอยู่ในโฟลเดอร์ assets
        style={styles.icon}
      />

      {/* ข้อความล็อกอิน */}
      <Text style={[styles.loginText, { fontFamily: 'IBMPlexSansThai-Bold' }]}>ล็อกอินเข้าสู่ระบบ</Text>

      {/* ช่องกรอกอีเมล */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        textContentType="emailAddress"
        autoCapitalize="none"
      />

      {/* ช่องกรอกรหัสผ่าน */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        textContentType="password"
        secureTextEntry
      />

      {/* ลิงก์ลืมรหัสผ่าน */}
      <TouchableOpacity>
        <Text style={[styles.forgotPasswordText, { fontFamily: 'IBMPlexSansThai-Light' }]}>ลืมรหัสผ่าน</Text>
      </TouchableOpacity>

      {/* ปุ่มเข้าสู่ระบบ */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={[styles.loginButtonText, { fontFamily: 'IBMPlexSansThai-Medium' }]}>เข้าสู่ระบบ</Text>
      </TouchableOpacity>

      {/* ข้อความสมัครสมาชิก */}
      <View style={styles.signupContainer}>
        <Text style={[styles.signupText, { fontFamily: 'IBMPlexSansThai-Light' }]}>ยังไม่มีบัญชี ? </Text>
        <TouchableOpacity>
          <Text style={[styles.signupButtonText, { fontFamily: 'IBMPlexSansThai-Medium' }]}>สมัคร</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// สไตล์
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  icon: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 30,
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#888',
    marginBottom: 20,

  },
  loginButton: {
    backgroundColor: '#00C283',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    textAlign: 'center',
  },
  signupButtonText: {
    color: '#00C283',
    marginLeft: 5,
    textDecorationLine: 'underline',
  },

  loginText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  forgotPasswordText: {
    color: '#888',
    marginBottom: 10,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
});
