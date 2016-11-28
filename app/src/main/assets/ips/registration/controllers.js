	function getAuthController(mobNo, initState/*0-Enter mobile no, 1-Enter OTP*/, isHavingTrouble, view)
	{
		var authController = {};
		authController.mobileNo = mobNo;
		authController.state = initState; //
		authController.isHavingTrouble = isHavingTrouble;
		authController.view = view;
		authController.submitMobileNumber = function(data){
			this.mobileNo = data.mobileNo;
			this.state = 1;//OTP
			//make service call
			DAO.requestOTP(this.mobileNo);
			//show OTP screen
			this.view.showOTP(this.mobileNo);
		};
		authController.navigateBackFromOTP= function(){
			this.state = 0;
			this.view.showMobileInput(this.mobileNo);
		};
		authController.resendOTP= function(){
			//service call
			DAO.requestOTP(this.mobileNo);
			this.isHavingTrouble = true;
			this.view.showCallUs();
		};
		
		authController.submitOTP= function(data){
			var ctrl = this;
			var handler = function (response) {
				if(response.validated)
				{
					//valid OTP
					//extract the uniqueID
					var uniqueID = response.uniqueID;
					//TBD - native call to SAVE UniqueID to localstorage
					//navigate to customer profile
					app.navigate("confirmprofile/" + uniqueID, {trigger : true});
				}
				else
				{
					//invalid OTP
					ctrl.view.showOTPInvalidMessage();
				}
			};
			//service call
			DAO.submitOTP(this.mobileNo, data.otp, handler);
		};
		
		authController.callUs= function(data){
			console.log("controller callus");
		};
		
		//bind to events
		app.on("submitMobileNo", authController.submitMobileNumber, authController);
		app.on("navigateBackFromOTP", authController.navigateBackFromOTP, authController);
		app.on("resendOTP", authController.resendOTP, authController);
		app.on("submitOTP", authController.submitOTP, authController);
		app.on("callUs", authController.callUs, authController);
		
		//
		return authController;
	}
