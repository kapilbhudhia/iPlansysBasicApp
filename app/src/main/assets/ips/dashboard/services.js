DAO = {};
DAO.dataCache = {};
DAO.serviceURL = "services/";


DAO.fetchData= function(){
	handler = function(data){
		console.log("inside handler" + data);
		//store data returned from service into cache
		_.extend(DAO.dataCache, data);
		
	};
	//$.getJSON(DAO.serviceURL + "fetchData", {"uniqueID" : DAO.uniqueID}, handler);
	$.ajax({
		dataType: 'json',
		async : false,
		url: DAO.serviceURL + "fetchData",
		data: {"uniqueID" : DAO.uniqueID},
		success: handler
	});
			//Invoke handler
			handler({
				offerDetails : [
						{
							  id : "offer001",	
							  name :  "First Offer",
							  mfgBy : "Mfg1",
							  quantity : "10",
							  packaging : "boxes",
							  storage : "cold",
							  categories : "bakery, juices",
							  bestByDate : "sept 2017",
							  offerDetails_headline : "HEADLINE1 -  First Offer by Mfg1 available at", 
							  offerDetails_description : "clear, colourless, viscous, syrup"
						},
						{
							  id : "offer002",	
							  name :  "Second Offer",
							  mfgBy : "Mfg2",
							  quantity : "20",
							  packaging : "crates",
							  storage : "frozen",
							  categories : "confectionery",
							  bestByDate : "Dec 2016",
							  offerDetails_headline : "HEADLINE2 -  First Offer by Mfg1 available at", 
							  offerDetails_description : "confectionary desc"
						}
				],
				messages : [
					"Hello from iPS",
					"Annual food exhibition is in Mumbai"	
				]
				
			});
	
};

DAO.getOffers = function(){
	
	return new OfferCollection(DAO.dataCache.offerDetails);
};