import { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
    const navigation = useNavigation();
    const { user, setUser } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    uid: user.uid,
                    signed: true
                });
            }
        });

        return () => unsub(); // Cancela a escuta quando o componente desmonta
    }, []);

    async function login() {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, senha);
            const user = userCredential.user;

            setUser({
                email: user.email,
                uid: user.uid,
                signed: true
            });

            console.log("Usuário logado:", user.email);
        } catch (error) {
            setMensagemErro("Email ou senha incorretos!");
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titulo}>Bem-vindo de volta!</Text>

                <View style={styles.input}>
                    <AntDesign name="user" size={25} color="#000" />
                    <TextInput
                        style={styles.boxInput}
                        placeholder="Digite seu email:"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.input}>
                    <AntDesign name="lock" size={25} color="#000" />
                    <TextInput
                        style={styles.boxInput}
                        placeholder="Digite sua senha:"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry={true} // Esconde a senha
                    />
                </View>

                <TouchableOpacity style={styles.esqueceu}>
                    <Text>Esqueceu sua senha?</Text>
                </TouchableOpacity>

                {mensagemErro ? <Text style={{ color: 'red', marginTop: 10 }}>{mensagemErro}</Text> : null}

                <TouchableOpacity style={styles.btnEntrar} onPress={login}>
                    <Text style={styles.txtEntrar}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.criarConta}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text> Não tem uma conta? <Text style={styles.criar}>Criar conta</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    titulo: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: '600',
        marginBottom: 30
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    input: {
        height: 48,
        width: 329,
        borderRadius: 23,
        borderColor: '#000',
        borderWidth: 1,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15
    },
    boxInput: {
        flex: 1,
        marginLeft: 10
    },
    btnEntrar: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: "center",
        height: 40,
        width: 129,
        borderRadius: 100,
        marginTop: 40
    },
    txtEntrar: {
        color: "#fff",
        fontSize: 16
    },
    esqueceu: {
        alignSelf: "flex-start",
        marginLeft: 50,
        marginTop: 13
    },
    criar: {
        color: '#357CFF'
    },
    criarConta: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 15
    },
});
