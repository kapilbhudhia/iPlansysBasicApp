
	DashboardView = DynamicBaseContentView.extend({
		templateID: "#dashboard",
		getTemplateID : function() {
			return this.templateID;
		},
		render: function() {
			var compiled = this.getCompiledTmpl();
			$(this.el).html(compiled({offerList : this.collection.toJSON()}));
		},
		events: {
			"click .product-list-item" : "offerClicked",
			"click #header_messages_icon" : "messagesIconClicked"
		},
		offerClicked :function(e) {
			var productID = $(e.currentTarget).attr("data-prod-id");
			app.navigate("proddetails/" + productID, {trigger : true});
		},
		messagesIconClicked :function(e) {
			app.navigate("iplansys", {trigger : true});
		}
		
	});

	ProdDetailsView = StaticBaseContentView.extend({
		templateID: "#proddetails",
		getTemplateID : function() {
			return this.templateID;
		},
		events: {
			"click #header_messages_icon" : "messagesIconClicked"
		},
		messagesIconClicked :function(e) {
			app.navigate("iplansys", {trigger : true});
		}
	});

	MessagesView = DynamicBaseContentView.extend({
		templateID: "#messages",
		getTemplateID : function() {
			return this.templateID;
		},
		render: function() {
			var compiled = this.getCompiledTmpl();
			$(this.el).html(compiled({messagesList : this.collection.toJSON()}));
		},
	});
