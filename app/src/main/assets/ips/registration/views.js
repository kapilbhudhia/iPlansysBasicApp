	ConfirmProfileView = DynamicBaseContentView.extend({
		templateID: "#confirmprofile",
		getTemplateID : function() {
			return this.templateID;
		},
		getModel : function() {
			//
			//create dummy company profile
			
			//add few contact persons
			//companyProf.contactPersons.push(
			//	new CompanyContactPerson({
					//TBD
			//	})
			//};
			return this.model;
		},
		events: {
			"click #profileCorrect" : "profileCorrectClicked",
			"click #profileIncorrect" : "profileIncorrectClicked"
		},
		profileCorrectClicked :function() {
			//navigate to the dashboard
			window.location.href = '../dashboard/index.html';
		},
		profileIncorrectClicked :function() {
			this.$el.find("#profileCorrect").hide();
			this.$el.find("#profileIncorrect").hide();
			this.$el.find("#call-dialog").show();
		}
	});

	AuthView = StaticBaseContentView.extend({
		templateID: "#auth",
		getTemplateID : function() {
			return this.templateID;
		},
		events: {
			"click #submitMobileNumber" : "submitMobileNumber",
			"input #mobileNumber" : "mobileNumberChanged",
			"click #backFromOTP" : "navigateBackFromOTP",
			"input #otpInput" : "otpChanged",
			"click #submitOTP" : "submitOTP",
			"click #resendOTP" : "resendOTP",
			"click #callUsButton" : "callUsClicked",
			
		},
		//event handlers
		mobileNumberChanged :function() {
			var mobileNumberEntered = this.$el.find("#mobileNumber").val();
			var otpEntered = this.$el.find("#otp").val();
			if(mobileNumberEntered.length < 10)
			{
				this.$el.find("#submitMobileNumber").prop( "disabled", true );
			}
			else if(mobileNumberEntered.length == 10)
			{
				this.$el.find("#submitMobileNumber").prop( "disabled", false );
			}
			else if(mobileNumberEntered.length > 10)
			{
				this.$el.find("#mobileNumber").val(mobileNumberEntered.substr(0,10));
			}
			
		},
		otpChanged :function(event) {
			var otpEntered = this.$el.find("#otpInput").val();
			if(otpEntered.length < 4)
			{
				this.$el.find("#submitOTP").prop( "disabled", true );
			}
			else if(otpEntered.length == 4)
			{
				this.$el.find("#submitOTP").prop( "disabled", false );
			}
			else if(otpEntered.length > 4)
			{
				this.$el.find("#otpInput").val(otpEntered.substr(0,4));
			}
			
		},
		submitMobileNumber : function() {
			app.trigger("submitMobileNo", {"mobileNo" : this.$el.find("#mobileNumber").val()});
		},
		navigateBackFromOTP : function() {
			app.trigger("navigateBackFromOTP");
		},
		resendOTP: function() {
			app.trigger("resendOTP");
		},
		submitOTP: function() {
			this.$el.find("#otperror").hide();
			app.trigger("submitOTP", {"otp" : this.$el.find("#otpInput").val()});
		},
		showOTPInvalidMessage: function() {
			this.$el.find("#otperror").show();
		},
		callUsClicked : function() {
			app.trigger("callUs");
		},
		//methods
		showOTP : function(mobileNumber) {
			this.$el.find("#mob").hide();
			this.$el.find("#otp").show();
			this.$el.find("#displayedMobileNo").text(mobileNumber)
			
		},
		showMobileInput : function(mobileNumber) {
			this.$el.find("#otp").hide();
			this.$el.find("#mob").show();
			this.$el.find("#mobileNumber").val(mobileNumber)
		},
		showCallUs : function() {
			this.$el.find("#call-dialog").show();
		},
		hideCallUs : function() {
			this.$el.find("#call-dialog").hide();
		},
		disableResendOTP : function() {
			this.$el.find("#resendOTP").prop( "disabled", true );
		},
		enbleResendOTP : function() {
			this.$el.find("#resendOTP").prop( "disabled", false );
		},
		
	});
