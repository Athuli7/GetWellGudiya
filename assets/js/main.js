/*-Tabs-*/
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$.ajax({
	url: "stats.json",
	success: function( result ) {
		result.hours = ( (Date.now()/1000) - result.eventTime )/3600;
		result.percent = result.collectedAmount/result.totalAmount*100;
		result.percent = result.percent.toFixed(2);
		var ttR = ['#render1']
		for(var ttr in ttR){
			var template = $(ttr).html();
			var rendered = Mustache.render(template, {data:result});
			console.log(rendered);
			$(ttr).html(rendered);
		}
	}
});