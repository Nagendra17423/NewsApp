 It is a SPA(Single page Application) built using AngularJs and used concepts of(angular routing,angular form,Dependency injection,Handling rest apis,Custom filter(for region wise news),and ngx loading bar package for synchronizing the time for fetching the news  with ui.) 
 Have  10 Components and 1 Service file .
 In 10 Components File 
 7 Components is used to get News on Specific Domain(Science sports,Technology,Top-Heaflines,etc)

 1 error Component in case any wrong url is entered (mistakenly or purposely) angular will redirect it to /not-found url where i have handled this use case.

1 news Header Component where header and routing to different component logic is present and along with this i have made a custom filter to filtred the news region wise .by Default India is the region selected but if ones want to see news of different region he/she can explore in their specific regional language. and for this i have used EventEmitter for  updating the news content.

Rest 1 service method which has method to get news on specific domain and and global variable which is set to india(in) but user can change it to any region.