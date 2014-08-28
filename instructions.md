Get started with Wearable Hackathon
-----------------------------------

Welcome to Node JS Web Starter application that uses the IBM DataCache REST interface!

This sample application demonstrates how to write a Node JS application using the IBM DataCache REST interface and deploy it on Bluemix.

1. [Install the cf command-line tool](https://www.ng.bluemix.net/docs/#starters/BuildingWeb.html#install_cf).
2. [Download the starter application package](https://ace.ng.bluemix.net:443/rest/../rest/apps/275eb800-9480-4fe7-a6f4-1a5598de72f8/starter-download).
3. Extract the package and `cd` to it.
4. Connect to Bluemix:

		cf api https://api.ng.bluemix.net

5. Log into Bluemix:

		cf login -u rafamelo.oliveira@gmail.com
		cf target -o HomeGuard -s dev
		
6. Deploy your app:

		cf push Wearable Hackathon

7. Access your app: [http://wearable-hackathon.mybluemix.net](http://wearable-hackathon.mybluemix.net)
