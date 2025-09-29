class Routes {
  /// error ->
  static readonly error = "/error";

  /// pub - General auth ->
  static readonly projectAuth = "/";
  static readonly forgotPassword = "/forgot-password";
  static readonly resetPassword = "/reset-password";
  static readonly register = "/register";

  // pub ->
  static readonly survey = "/s/:surveyCode";
  static readonly report = "/r/:reportCode";

  /// pub - admin ->
  static readonly admin = "/a";
  static readonly adminAuth = "/a/auth";

  /// admin ->
  static readonly adminProjects = "/a/projects";
  static readonly adminUsers = "/a/users";
  static readonly adminProjectSurveys = "/a/projects/:projectId/surveys";
  static readonly adminProjectSurvey =
    "/a/projects/:projectId/surveys/:surveyId";
  static readonly adminProjectInput = "/a/projects/:projectId/input";

  /// project ->
  static readonly project = "/p";
  static readonly projectSettings = "/p/settings";

  // reports
  static readonly projectReports = "/p/reports";
  static readonly projectReport = "/p/reports/:reportId";

  //analytics
  static readonly projectAnalytics = "/p/analytics";
  static readonly projectAnalyticsV2 = "/p/analyticsv2";
  static readonly createSROI = "/p/analytics/SROI/create";
  static readonly editSROI = "/p/analytics/SROI/:analyticId/edit/";
  static readonly projectAnalytic = "/p/analytics/:analyticId";
  static readonly projectSROIFlow = "/p/analyticsv2/SROI/flow";

  // patient
  static readonly projectPatients = "/p/patients";
  static readonly projectPatient = "/p/patients/:projectPatientId";

  // project users
  static readonly projectUser = "/p/users/:projectUserId";
  static readonly projectUsers = "/p/users";

  // strategy
  static readonly projectStrategies = "/p/strategies";
  static readonly projectStrategyFlow = "/p/strategies/flow";
  static readonly projectStrategy = "/p/strategies/:strategyId";

  // me
  static readonly me = "/p/me";

  // notifications
  static readonly notifications = "/p/notifications";

  // SurveyBuilder
  static readonly projectSurvey = "/p/surveyBuilder";
  static readonly projectSurveyView = "/p/surveyBuilder/:surveyId";
}

export default Routes;
