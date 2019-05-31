import PropTypes from "prop-types";
import React, {Component} from "react";
import {View, Text,SafeAreaView,ImageBackground} from "react-native";
import styles from "./styles";
import Toolbar from "../../../components/Toolbar"
import OceanSprayImages from "../../../constants/imageSource"


const propTypes = {
    onbackPress: PropTypes.func,
};

const defaultProps = {
    onbackPress: () => {},
};


class ForgotPasswordTemplate extends Component {

    render() {
        return (
            <React.Fragment>
                <SafeAreaView style={{ flex: 0, backgroundColor: '#ba102c' }} />
                <SafeAreaView style={styles.appContainer}>
                    <Toolbar
                        onPressNavigateBack={this.props.onPressNavigateBack}
                        notificationIcon={""}
                        title={this.props.toolbarTitle} />
                        <View style={styles.subContainer}>
                        <ImageBackground source={OceanSprayImages.authenticationBackgoundImage} resizeMode="cover" style={styles.backgroundImage}>
                            <View>
                                <Text style={styles.passwordResetText}>PASSWORD RESET</Text>
                            </View>
                        </ImageBackground>
                        <View>
                           <Text style={styles.emailText}>Enter the email that you used when register.</Text>
                        </View>
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