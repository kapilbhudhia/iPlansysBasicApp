DAO = {};
DAO.serviceURL = "services/";
DAO.requestOTP = function(mobileNo){
	console.log("requestOTP for " + mobileNo);
	$.getJSON(DAO.serviceURL + "requestOTP", {"mobileNo" : mobileNo}, null);
};

DAO.submitOTP = function(mobileNo, otp, handler){
	$.getJSON(DAO.serviceURL + "submitOTP", 
			{"mobileNo" : mobileNo, "otp" : otp}, 
			null //pass handler here
	);
	//
	if(otp == "1234")
	{
		handler({
			validated:true,
			uniqueID : "int0-v001-group001-user001"
		});
	}
	else
	{
		handler({validated:false});
	}
	
};

DAO.fetchProfile = function(uniqueID, handler){
	$.getJSON(DAO.serviceURL + "fetchProfile", 
			{"id" : uniqueID}, 
			null
	);
	//test response
	handler({
		"profile" : {
			name: "Shanti Foods",
			companyAddress : "MIDC, Andheri",
			registeredAddress: "15-A MIDC, Kanchipuram, Tamil Nadu, 411021, India",
			contactPersons : [], 
			panNo: "ACSC3455",
			vatNo : "SSS-EERT-4566",
			cstRegNo: "11-33234-A23434",
			serviceTaxNo : "1393495464654",
			eccNo: "342-ADF-ADD"
		}
		
	});
};