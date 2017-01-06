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

<<<<<<< HEAD
		var template = $('#render1').html();
		var rendered = Mustache.render(template, {data:result});
		$('#render1').html(rendered);
=======
		var template = $('#contentr').html();
		var rendered = Mustache.render(template, {data:result});
		$('#contentr').html(rendered);
>>>>>>> e9cab6a365bcf757135c28c25eae5b9f1e2fc209
	}
});