	
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"": "setDashboardState",
			"dashboard": "setDashboardState",
			"proddetails/:prodid" : "setProductDetailsState",
			"iplansys": "setIPlansysState"
		},
		initialize: function() {
			DAO.uniqueID = "int0-v001-group001-user003";//fetch unique ID from native DB
			//Fetch data on initialization
			DAO.fetchData();
		},
		setDashboardState : function() {
			var offersColl = DAO.getOffers();
			this.dashboardView = new DashboardView({
				collection : offersColl
			});
			this.dashboardView.render();
		},
		setProductDetailsState : function(prodid) {
			this.proddtlView = new ProdDetailsView();
			this.proddtlView.render();
		},
		setIPlansysState : function(prodid) {
			
			this.messagesView = new MessagesView();
			this.messagesView.render();
		}
	});
	
	app = new ApplicationRouter();
	
	Backbone.history.start();	
//});


