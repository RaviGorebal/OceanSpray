import PropTypes from "prop-types";
import React, {Component} from "react";
import {BackHandler} from "react-native";
import {Router, Scene} from "react-native-router-flux";
import Config from "react-native-config";


const propTypes = {
    isLoggedin: PropTypes.bool
};

const defaultProps = {
    isLoggedin: false
};

export default class Routes extends Component {

    handleBackButton() {
        BackHandler.exitApp();
        return true;
    }

    render() {
        const {isLoggedin} = this.props;
        return (
            <Router {...this.props}  backAndroidHandler={this.handleBackButton.bind(this)}>
                <Scene>
                    <Scene key="auth" hideNavBar={true} initial={!isLoggedin}>
                        <Scene key="signup" component={RegisterContainer} />
                        <Scene key="login" component={LoginContainer} initial />
                        <Scene key="forgotPassword" component={ForgotPasswordContainer} />
                        <Scene key="verifyOtp" component={VerifyOtpContainer} />
                        <Scene key="createNewPassword" component={CreateNewPasswordContainer} />
                        <Scene key="password" component={PasswordContainer} />
                        <Scene key="loaderer" component={Loaderer} />
                    </Scene>
                    <Scene key="app" hideNavBar={true} initial={isLoggedin}>
                        <Scene key="dashboard" component={DashboardContainer} />
                        <Scene key="farmAdministration" component={FarmAdministrationContainer} />
                        <Scene key="changePassword" component={ChangePasswordContainer} />
                        <Scene key="languagePreference" component={LanguagePreferenceContainer} />
                        <Scene key="myAccount" component={MyAccountContainer} />
                        <Scene key="profileInformation" component={ProfileInformationContainer} />
                        <Scene key="breedInformation" component={BreedInformationContainer} />
                        <Scene key="recordMorphologyAnimalRegistration" component={MorphologyAnimalRegistrationContainer} />
                        <Scene key="profileDetails" component={UserProfileDetailsContainer} />
                        <Scene key="userRegistration" component={UserProfileFormContainer} />
                        <Scene key="farmProfile" component={FarmProfileDetailsContainer} />
                        <Scene key="farmProfileRegistration" component={FarmProfileFormContainer} />
                        <Scene key="animalDetails" component={AnimalDetailsContainer} />
                        <Scene key="animalListing" component={AnimalListingContainer} />
                        <Scene key="cattleDetails" component={CattleDetailsContainer} />
                        <Scene key="calfHeiferListing" component={CalfHeiferListingContainer} />
                        <Scene key="calfHeiferDetails" component={CalfHeiferDetailsContainer} />
                        <Scene key="observationListing" component={ObservationListingContainer} />
                        <Scene key="recordObservation" component={RecordObservationContainer} />
                        <Scene key="prescription" component={PrescriptionContainer} />
                        <Scene key="observationDetails" component={ObservationDetailsContainer} />
                        <Scene key="vaccinationListing" component={VaccinationListingContainer} />
                        <Scene key="vaccinationDetails" component={VaccinationDetailsContainer} />
                        <Scene key="recordVaccination" component={RecordVaccinationContainer} />
                        <Scene key="dewormingListing" component={DewormingListingContainer} />
                        <Scene key="dewormingDetails" component={DewormingDetailsContainer} />
                        <Scene key="recordDeworming" component={RecordDewormingContainer} />
                        <Scene key="recordDehorning" component={RecordDehorningContainer} />
                        <Scene key="dehorningListing" component={DehorningListingContainer} />
                        <Scene key="dehorningDetails" component={DehorningDetailsContainer} />
                        <Scene key="artificialInseminationListing" component={ArtificialInseminationListingContainer} />
                        <Scene key="aIDetails" component={AIDetailsContainer} />
                        <Scene key="recordAI" component={RecordAIContainer} />
                        <Scene key="pregnancyDetectionListing" component={PregnancyDetectionListingContainer} />
                        <Scene key="pdDetails" component={PDDetailsContainer} />
                        <Scene key="recordPD" component={RecordPDContainer} />
                        <Scene key="calfBirthListing" component={CalfBirthListingContainer} />
                        <Scene key="calfBirthDetails" component={CalfBirthDetailsContainer} />
                        <Scene key="calfBirth" component={CalfBirthContainer} />
                        <Scene key="sale" component={SaleContainer} />
                        <Scene key="transfer" component={TransferContainer} />
                        <Scene key="bodyConditionScore" component={BodyConditionScoreContainer} />
                        <Scene key="bcsDetails" component={BCSDetailsContainer} />
                        <Scene key="bcsListing" component={BodyConditionScoreListingContainer} />
                        <Scene key="bcsSwipper" component={BCSSwipper} />
                        <Scene key="bodyWeightMeasurement" component={BodyWeightMeasurementContainer} />
                        <Scene key="bodyWeightMgmtListing" component={BodyWeightMgmtListingContainer} />
                        <Scene key="bwmDetails" component={BWMDetailsContainer} />
                        <Scene key="milkLogListing" component={MilkLogListingContainer} />
                        <Scene key="recordMilkLog" component={RecordMilkLogContainer} />
                        <Scene key="milkLogDetails" component={MilkLogDetailsContainer} />
                        <Scene key="camera" component={Camera} />
                        <Scene key="pregnancyHistoryList" component={PregnancyHistoryListContainer} />
                        <Scene key="pregnancyHistoryDetails" component={PregnancyHistoryDetailsContainer} />
                        <Scene key="lactationGraph" component={LactationGraphContainer} />
                        <Scene key="morphologicalListing" component={MorphologicalListingContainer} />
                        <Scene key="morphologicalDetails" component={MorphologicalDetailsContainer} />
                        <Scene key="recordMorphology" component={RecordMorphologyContainer} />
                        <Scene key="recordDryOff" component={RecordDryOffContainer} />
                        <Scene key="loading" component={Loader} />
                        <Scene key="farmListing" component={FarmListingContainer} />
                        <Scene key="farmDetails" component={FarmDetailsContainer} />
                        <Scene key="recordFarm" component={RecordFarmContainer} />
                        <Scene key="recordNutrition" component={RecordNutrition} />
                        <Scene key="nutritionListing" component={NutritionListing} />
                        <Scene key="nutritionDetails" component={NutritionDetails} />
                        <Scene key="loaderer" component={Loaderer} />
                        <Scene key="imageViewer" component={ImageViewer} />
                        <Scene key="aboutUs" component={AboutUs} />
                        <Scene key="contactUs" component={ContactUs} />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}

Routes.defaultProps = defaultProps;

Routes.propTypes = propTypes;
