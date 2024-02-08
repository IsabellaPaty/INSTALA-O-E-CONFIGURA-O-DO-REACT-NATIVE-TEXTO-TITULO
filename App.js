import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.containera}><b>Macacos Macaquinhos</b></Text>
      <div style={styles.abc}><text >Os macacos, membros da família dos primatas, são animais fascinantes que habitam diversas regiões do mundo, desde as florestas tropicais até as savanas e até mesmo áreas urbanas. Com uma grande variedade de espécies, que incluem desde os pequenos saguis até os imponentes gorilas, os macacos apresentam uma incrível diversidade em tamanho, hábitos e características físicas.

Estes animais são conhecidos por sua inteligência impressionante e por seu comportamento social complexo. Vivendo em grupos hierárquicos, os macacos estabelecem laços sociais, comunicam-se através de uma variedade de vocalizações e até mesmo utilizam ferramentas em algumas situações, demonstrando habilidades cognitivas notáveis.

Além disso, os macacos desempenham papéis importantes nos ecossistemas onde habitam, contribuindo para a dispersão de sementes, controle de populações de insetos e outros serviços ecossistêmicos. No entanto, enfrentam ameaças como perda de habitat, caça e tráfico ilegal, o que coloca muitas espécies em risco de extinção.

Estudar e compreender os macacos não apenas nos ajuda a entender melhor a evolução e o comportamento animal, mas também a desenvolver estratégias eficazes para sua conservação e para a preservação dos ecossistemas onde vivem.</text></div>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
  
  },
abc: {
  backgroundColor: '#ffcbdb',
  alignItems: 'center',
  justifyContent: 'top',
  border:'10px solid black',
  fontSize: '30px',
  maxWidth: '1000px'

},
containera: {
  fontSize: '100px',
}
});
