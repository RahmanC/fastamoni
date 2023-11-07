import React, { useEffect, useState } from "react";
import {
  Animated,
  StyleSheet,
  View,
  TouchableOpacity,
  Modal,
  Keyboard,
} from "react-native";
import { AppModalProps } from "type";

const AppModal = ({ children, visible, handleModalClose }: AppModalProps) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleBackdropPress = () => {
    handleModalClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={handleModalClose}
    >
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={handleBackdropPress}
      >
        <View
          style={[
            styles.centeredView,
            isKeyboardVisible && styles.modalWithKeyboard,
          ]}
        >
          <Animated.View style={styles.modalView}>{children}</Animated.View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default AppModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    minWidth: "100%",
    minHeight: "40%",
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  modalWithKeyboard: {
    justifyContent: "space-around",
  },
});
