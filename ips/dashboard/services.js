DAO = {};
DAO.dataCache = {};
DAO.serviceURL = "json/data.json";
DAO.isDataLoaded = false;

DAO.fetchAndPopulateData= function(operation){
	handler = function(data){
		console.log("inside handler" + data);
		//store data returned from service into cache
		DAO.dataCache.offersCollection = new OfferCollection(data.offerDetails)
		DAO.dataCache.messagesCollection = new MessageCollection(data.messages)
		//mark data loading as complete
		DAO.isDataLoaded = true;
		if(operation.type == "offers")
		{
			operation.renderFn(DAO.dataCache.offersCollection);
		}
		else
		{
			operation.renderFn(DAO.dataCache.messagesCollection);
		}
		
	};
	var promise = $.getJSON(DAO.serviceURL);
	/*
	var promise = $.ajax({
		url: DAO.serviceURL,
		success : handler
	});
	*/
	promise.then(handler);
	promise.fail(function(data){debugger;console.log("response failed");});
	//promise.done(function(){console.log("callback done");});
};

DAO.populateOffersData = function(renderFn){
	if(DAO.isDataLoaded)
	{
		renderFn(DAO.dataCache.offersCollection)
	}
	else
	{
		//fetch data and then render
		var operation = {
			type : "offers",
			renderFn : renderFn
		};
		DAO.fetchAndPopulateData(operation);
	}
};

DAO.populateOffersData = function(renderFn){
	if(DAO.isDataLoaded)
	{
		renderFn(DAO.dataCache.offersCollection)
	}
	else
	{
		//fetch data and then render
		var operation = {
			type : "offers",
			renderFn : renderFn
		};
		DAO.fetchAndPopulateData(operation);
	}
};

DAO.populateMessagesData = function(renderFn){
	if(DAO.isDataLoaded)
	{
		renderFn(DAO.dataCache.messagesCollection)
	}
	else
	{
		//fetch data and then render
		var operation = {
			type : "messages",
			renderFn : renderFn
		};
		DAO.fetchAndPopulateData(operation);
	}
};



/*
DAO.getOffers = function(){
	
	return new OfferCollection(DAO.dataCache.offerDetails);
};

DAO.getMessages = function(){
	
	return new MessageCollection(DAO.dataCache.messages);
};
*/