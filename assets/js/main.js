/*-Tabs-*/
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});

$.ajax({
	url: "stats.json",
	success: function( result ) {
		result.percent = result.collectedAmount/result.totalAmount*100;
		result.percent = result.percent.toFixed(2);

		var template = $('#header').html();
		var rendered = Mustache.render(template, {data:result});
		$('#header').html(rendered);
	}
});