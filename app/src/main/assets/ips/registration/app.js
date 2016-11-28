
//"C:/program files/java/jdk1.8.0_91/bin/javac" -classpath "javax.servlet-api-3.1.0.jar;servlet-api-2.5.jar" com\journaldev\servlets\*.java
//http://www.journaldev.com/4742/jquery-ajax-jsp-servlet-java-example


//require([], function () {
	
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"": "setAuthState",
			"auth" : "setAuthState",
			"confirmprofile/:uniqueID" : "setConfirmProfileState"
		},
		initialize: function() {
		},
		setAuthState: function() {
			this.authView = new AuthView();
			this.authView.render();
			var authCtrl = getAuthController(
				"",//mobile No
				0,//initial state
				false,//isHavingTrouble
				this.authView
			);
			
		},
		setConfirmProfileState: function(uniqueID) {
			var handler = function(jsonResp){
				var companyProf = new CompanyProfile(jsonResp.profile);
				this.confirmProfileView = new ConfirmProfileView({model : companyProf});
				this.confirmProfileView.render();
			}
			DAO.fetchProfile(uniqueID, handler);
		}
	});
	
	app = new ApplicationRouter();
	
	Backbone.history.start();	
//});


