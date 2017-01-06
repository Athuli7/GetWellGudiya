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

		var template = $('#render1').html();
		var rendered = Mustache.render(template, {data:result});
		console.log(rendered);
		$('#render1').html(rendered);
	}
});