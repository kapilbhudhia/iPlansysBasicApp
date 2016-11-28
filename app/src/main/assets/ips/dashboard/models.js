
Offer = Backbone.Model.extend({
	  id : "",	
	  name :  "",
	  mfgBy : "",
	  quantity : "",
	  packaging : "",
	  storage : "",
	  categories : "",
	  bestByDate : "",
	  offerDetails_headline : "", //nested objects do not work well in backbone
	  offerDetails_description : ""
});

OfferCollection = Backbone.Collection.extend({
    model: Offer
});

Message = Backbone.Model.extend({
  messageText: ""
});

MessageCollection = Backbone.Collection.extend({
    model: Message
});
