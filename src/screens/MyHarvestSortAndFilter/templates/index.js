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
                   <View style={styles.actionContainer}>
                        <TouchableOpacity style={styles.resetView}>
                                <Text style={styles.resetText}>Reset</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.applyView}>
                                <Text style={styles.applyText}>Apply</Text>
                        </TouchableOpacity>
                   </View>
                    <View style={styles.subContainer}>
                       <View style={styles.sortTextView}>
                            <Text style={styles.sortTextStyle}>Sort</Text>
                       </View>
                        <ToggleButton
                        firstButtonName="Date"
                        secondButtonName="Status"
                        onPressFirstButtonView={this.props.onPressFirstButtonView}
                        onPressSecondButtonView={this.props.onPressSecondButtonView}
                        firstViewContainer={styles.firstViewContainer}
                        toggleButtonContainer={styles.toggleButtonContainer}
                        />
                        <View style={styles.sortTextView}>
                            <Text style={styles.sortTextStyle}>Filter</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </React.Fragment>
        );
    }
}

MyHarvestSortAndFilterTemplate.defaultProps = defaultProps;

MyHarvestSortAndFilterTemplate.propTypes = propTypes;

export default MyHarvestSortAndFilterTemplate;