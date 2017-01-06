/*-Tabs-*/
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$.ajax({
	url: "stats.json",
	success: function( result ) {
		result.percent = (result.collectedAmount/result.totalAmount*100).toFixed(2);
		result.hours = (((Date.now()/1000) - result.eventTime )/3600).toFixed(2);
		var ttR = ['#render1','#render2']
		for(var ttr in ttR){
			var template = $(ttR[ttr]).html();
			var rendered = Mustache.render(template, {data:result});
			console.log(rendered);
			$(ttR[ttr]).html(rendered);
		}
	}
});