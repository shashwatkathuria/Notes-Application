import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  heading: {
    backgroundColor: "orange",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  textStyle: {
    color: 'black'
  },
  tabButton: {
    backgroundColor: 'green'
  },
  normalButton: {
    backgroundColor: 'green'
  },
  header: {
    backgroundColor: 'green'
  },
  mainIconsAndText: {
    color: 'white'
  },
  cardElementsAlignment: {
    justifyContent: 'center'
  },
})

export default styles;
