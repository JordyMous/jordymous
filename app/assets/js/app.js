angular.module ("app", ["ngRoute"])

.config (function ($routeProvider) {
	$routeProvider
		.when ("/home", {
			templateUrl: "assets/views/content/home.html",
		})
		.otherwise ({
			redirectTo: "/home"
		});
})