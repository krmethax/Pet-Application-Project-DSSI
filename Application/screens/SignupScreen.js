import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Feather';

export default function SignUpScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAgreed, setIsAgreed] = useState(false);
    const [date, setDate] = useState(new Date());
    const [step, setStep] = useState(1);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleNext = () => {
        if (firstName && lastName && dob && phoneNumber) {
            setStep(2);
        } else {
            Alert.alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        }
    };

    const handleSignUp = () => {
        if (password === confirmPassword && isAgreed) {
            navigation.navigate('SignUpSuccess');
        } else {
            Alert.alert('กรุณาตรวจสอบรหัสผ่านและยอมรับข้อตกลง');
        }
    };

    const onChangeDate = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            const formattedDate = selectedDate.toLocaleDateString('th-TH');
            setDob(formattedDate);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.formContainer}>
                    <Text style={[styles.title, { fontFamily: 'IBMPlexSansThai-Bold' }]}>สร้างบัญชีผู้ใช้</Text>

                    {step === 1 && (
                        <>
                            <Text style={[styles.header, { fontFamily: 'IBMPlexSansThai-Medium' }]}>ชื่อ</Text>
                            <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />

                            <Text style={[styles.header, { fontFamily: 'IBMPlexSansThai-Medium' }]}>นามสกุล</Text>
                            <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />

                            <Text style={[styles.header, { fontFamily: 'IBMPlexSansThai-Medium' }]}>วัน / เดือน / ปี เกิด</Text>
                            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                                <TextInput style={styles.input} value={dob} placeholder="DD/MM/YYYY" editable={false} />
                            </TouchableOpacity>

                            {showDatePicker && (
                                <DateTimePicker value={date} mode="date" display="calendar" onChange={onChangeDate} maximumDate={new Date()} />
                            )}

                            <Text style={[styles.header, { fontFamily: 'IBMPlexSansThai-Medium' }]}>เบอร์โทรศัพท์</Text>
                            <TextInput style={styles.input} value={phoneNumber} onChangeText={setPhoneNumber} keyboardType="phone-pad" />

                            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                                <Text style={styles.buttonText}>ถัดไป</Text>
                            </TouchableOpacity>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <Text style={styles.header}>อีเมล</Text>
                            <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />

                            <Text style={styles.header}>รหัสผ่าน</Text>
                            <View style={styles.passwordContainer}>
                                <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry={!showPassword} />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.icon}>
                                    <Icon name={showPassword ? 'eye' : 'eye-off'} size={24} color="#888" />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.header}>ยืนยันรหัสผ่าน</Text>
                            <View style={styles.passwordContainer}>
                                <TextInput
                                    style={styles.input}
                                    value={confirmPassword}
                                    onChangeText={setConfirmPassword}
                                    secureTextEntry={!showConfirmPassword}
                                />
                                <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.icon}>
                                    <Icon name={showConfirmPassword ? 'eye' : 'eye-off'} size={20} color="#888" />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={() => setIsAgreed(!isAgreed)} style={styles.agreementContainer}>
                                <Icon name={isAgreed ? 'check-square' : 'square'} size={24} color="#00C283" />
                                <Text style={styles.agreementText}>ยินยอมรับข้อตกลงทั้งหมด</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                                <Text style={styles.buttonText}>สมัครสมาชิก</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    formContainer: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    header: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 15,
        paddingRight: 45,
        marginBottom: 15,
        flex: 1,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    icon: {
        position: 'absolute',
        right: 15,
    },
    nextButton: {
        backgroundColor: '#00C283',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    signUpButton: {
        backgroundColor: '#00C283',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    agreementContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    agreementText: {
        fontSize: 16,
        marginLeft: 10,
    },
});
