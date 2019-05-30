import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, Text,SafeAreaView} from "react-native";
import styles from "./styles";
import Toolbar from "../../../components/Toolbar"

const propTypes = {
    onbackPress: PropTypes.func,
    toolbarTitle: PropTypes.string,
    renderContent: PropTypes.element
};

const defaultProps = {
    onbackPress: () => {},
    toolbarTitle: "",
    renderContent: <Text>Content</Text>
};


class ForgotPasswordTemplate extends Component {

    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#ba102c' }} />
                <SafeAreaView style={styles.appContainer}>
                    <Toolbar
                        leftIconName="arrow-left"
                        onPressLeftIcon={this.props.onbackPress}
                        leftArrowIcon={""}
                        notifications={12}
                        notificationIcon={""}
                        title={this.props.toolbarTitle} />
                        <View style={styles.subContainer}>
                        <Text>ksdfsdkfhsdkjfhskdhfsdhjkfksdfhsdkjfhsdkjfsdkjfhsdjkhfksjskfsdkfhsdkfhks</Text>
                        </View>
                </SafeAreaView>
            </React.Fragment>
        );
    }
}

ForgotPasswordTemplate.defaultProps = defaultProps;

ForgotPasswordTemplate.propTypes = propTypes;

export default ForgotPasswordTemplate;