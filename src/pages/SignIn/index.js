import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


export default function SignIn() {

    const navigation = useNavigation()
    const [user, setUser] = useState(false)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(true)
            }
        })
    })


     function login() {
        signInWithEmailAndPassword(auth, email, senha)
        .then((user) => {console.log(user)}
    )
        .catch( ()=> {setMensagemErro("email ou senha incorreto!")} )
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.titulo}>Bem vindo de volta!</Text>

                <View style={styles.input}>
                    <AntDesign name="user" size={25} color="#000" />
                    <TextInput
                        style={styles.boxInput}
                        placeholder="Digite seu email:"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.input}>
                    <AntDesign name="lock" size={25} color="#000" />
                    <TextInput
                        style={styles.boxInput}
                        placeholder="Digite sua senha:"
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />
                </View>

                <TouchableOpacity style={styles.esqueceu}>
                    <Text>Esqueceu sua senha?</Text>
                </TouchableOpacity>
               <Text style={{ color: 'red', marginTop: 10 }}>{mensagemErro}</Text> 

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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'

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
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 15,
        paddingTop: 5

    },
    boxInput: {
        marginTop: -30,
        marginLeft: 40,
        width: 250,

    },
    btnEntrar: {
        backgroundColor: '#000',
        justifyContent: 'center',
        height: 40,
        width: 129,
        borderRadius: 100,
        marginTop: 40
    },
    txtEntrar: {
        textAlign: 'center',
        color: "#fff"
    },
    esqueceu: {
        marginRight: -150,
        marginTop: 13
    },
    criar: {
        color: '#357CFF'
    },
    criarConta: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginBottom: 15
    },
})