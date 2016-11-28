	//StaticBaseContentView - This view has a static template ie a template
	//which does not bind with any model. Basically this view does not display
	//any dynamic data
	StaticBaseContentView = Backbone.View.extend({
		el: "#content",
		render: function() {
			var tmplHTML = $(this.getTemplateID()).html();
			//STATIC template
			$(this.el).html(tmplHTML);
		},
	});

	//DynamicBaseContentView - This view has a static template which binds
	//with a model.
	DynamicBaseContentView = StaticBaseContentView.extend({
		el: "#content",
		initialize : function() {
			var tmplHTML = $(this.getTemplateID()).html();
			//dynamic template
			this.compiled = _.template(tmplHTML);
		},
		render: function() {
			$(this.el).html(this.compiled((this.getModel().attributes)));
		},
		getCompiledTmpl : function() {
			return this.compiled;
		}
	});
	
