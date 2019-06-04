import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, Text,SafeAreaView,TouchableOpacity,ImageBackground} from "react-native";
import styles from "./styles";
import ToggleButton from "../../../components/ToggleButton";
import Toolbar from "../../../components/Toolbar";

const propTypes = {
    toggleBotton: PropTypes.element,
    onSubmit: PropTypes.func,
    onbackPress: PropTypes.func,
    onForgotUsername:PropTypes.func
}

const defaultProps = {
    toggleBotton: (<Text>Login Form</Text>),
    onSubmit: () => {},
    onbackPress: () => {},
    onForgotUsername: () => {},
}


class MyHarvestSortAndFilterTemplate extends Component {

    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#ba102c' }} />
                <SafeAreaView style={styles.appContainer}>
                   
                    <View style={styles.subContainer}>
                    <ToggleButton/>

                    </View>
                </SafeAreaView>
            </React.Fragment>
        );
    }
}

MyHarvestSortAndFilterTemplate.defaultProps = defaultProps;

MyHarvestSortAndFilterTemplate.propTypes = propTypes;

export default MyHarvestSortAndFilterTemplate;