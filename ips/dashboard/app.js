	
	var ApplicationRouter = Backbone.Router.extend({
		routes: {
			"": "setDashboardState",
			"dashboard": "setDashboardState",
			"proddetails/:prodid" : "setProductDetailsState",
			"iplansys": "setIPlansysState"
		},
		initialize: function() {
		},
		setDashboardState : function() {
			var that = this;
			var renderFn = function(offersColl){
				that.dashboardView = new DashboardView({
					collection : offersColl
				});
				that.dashboardView.render();
			}
			DAO.populateOffersData(renderFn);
		},
		setProductDetailsState : function(prodid) {
			this.proddtlView = new ProdDetailsView();
			this.proddtlView.render();
		},
		setIPlansysState : function() {
			var that = this;
			var renderFn = function(messagesColl){
				that.messagesView = new MessagesView({
					collection : messagesColl
				});
				that.messagesView.render();
			}
			DAO.populateMessagesData(renderFn);
		}
	});
	
	app = new ApplicationRouter();
	
	Backbone.history.start();	
//});


