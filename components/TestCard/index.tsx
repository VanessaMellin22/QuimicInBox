import { Link } from "expo-router"
import { Text } from "react-native-elements"
import styled from "styled-components/native"

type Props = {
    imagem: string,
    titulo: string,
    texto: string,
    materia: string
}

export default function TestCard({imagem, titulo, texto, materia}: Props){
    return(<Container>
            <Imagem source={require('../../assets/images/Icons/atom.png')}/>
            <Titulo>{titulo}</Titulo>
            <Conteudo>{texto}</Conteudo>
            <Link href="/(Forms)/formulario" asChild>
            <Botao>
                <Text style={{color:'#fff', fontSize: 16, fontWeight: "bold"}}>Acessar</Text>
            </Botao>
            </Link> 
    </Container>)
}

const Container= styled.View`
    height: 350px;
    width: 300px; 
    align-items: center;
    margin-top: 80px;
    margin-left: 30px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

const Titulo = styled.Text`
    text-align: center;
    font-weight: bolder;
    font-size: 25px;
 
`

const Conteudo = styled.Text`
    text-align: center;
    font-size: 16px;
 
`

const Imagem = styled.Image`
    height: 100px;
    width: 100px;
    margin-top: 20px;
`

const Botao = styled.TouchableOpacity`
    height: 40px;
    width: 110px; 
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE_300};
`