<html>
	<head>
		<title>ASP Index </title>
	</head>
	<body>
	<p>The time is @DateTime.Now</p>
	</body>
</html>

@{var price=50;}
<html>
<body>
@if (price>30)
  {
  <p>The price is too high.</p>
  }
</body>
</html>