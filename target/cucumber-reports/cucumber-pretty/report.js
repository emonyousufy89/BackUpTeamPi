$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AmazonLogin.feature");
formatter.feature({
  "line": 2,
  "name": "SignIn to Amazon.com",
  "description": "As a QE I want to automate signIn module as a customer",
  "id": "signin-to-amazon.com",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "User is on amazon homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "Registered Customer Sign In with valid credentials",
  "description": "",
  "id": "signin-to-amazon.com;registered-customer-sign-in-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Customer clicks on Hello Sign In button",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Customer enters username",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Customer see continue button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Customer click continue button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Customer enters password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Customer clicks signIn button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Customer lands on account homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInSteps.customer_clicks_on_Hello_Sign_In_button()"
});
formatter.result({
  "duration": 407374679,
  "error_message": "java.lang.NullPointerException\n\tat Reporterutils.ExtentReportListner.captureScreenShot(ExtentReportListner.java:84)\n\tat StepDefinations.SignInSteps.customer_clicks_on_Hello_Sign_In_button(SignInSteps.java:41)\n\tat ✽.Given Customer clicks on Hello Sign In button(AmazonLogin.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "SignInSteps.customer_enters_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.customer_see_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.customer_click_continue_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.customer_enters_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.customer_clicks_signIn_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignInSteps.customer_lands_on_account_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("AmazonSignUp.feature");
formatter.feature({
  "line": 2,
  "name": "Sign Up into Amazon.com",
  "description": "Aa QE I want to automate creating account as a unregistered customer",
  "id": "sign-up-into-amazon.com",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "Customer is on Amazon Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "Customer wants to create an account with valid data",
  "description": "",
  "id": "sign-up-into-amazon.com;customer-wants-to-create-an-account-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Customer clicks in the signIn button",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Customer clicks on create an account",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Custoemer lands in account creating page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Customer Enters name",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Customer Enters email",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Customer Enters password",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Customer Check password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Customer clicks on Submit button",
  "keyword": "Then "
});
formatter.match({
  "location": "SignUpSteps.customer_clicks_in_the_signIn_button()"
});
formatter.result({
  "duration": 4160190,
  "error_message": "java.lang.NullPointerException\n\tat Reporterutils.ExtentReportListner.captureScreenShot(ExtentReportListner.java:84)\n\tat StepDefinations.SignUpSteps.customer_clicks_in_the_signIn_button(SignUpSteps.java:41)\n\tat ✽.Given Customer clicks in the signIn button(AmazonSignUp.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "SignUpSteps.customer_clicks_on_create_an_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUpSteps.custoemer_lands_in_account_creating_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUpSteps.customer_Enters_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUpSteps.customer_Enters_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUpSteps.customer_Enters_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUpSteps.customer_Check_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SignUpSteps.customer_clicks_on_Submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Books.feature");
formatter.feature({
  "line": 2,
  "name": "Book Shopping from amazon",
  "description": "As a QE I want to automate book shopping funtionalities by searching the item",
  "id": "book-shopping-from-amazon",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "Customer is on the homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Customer wants to order picture book for toddler",
  "description": "",
  "id": "book-shopping-from-amazon;customer-wants-to-order-picture-book-for-toddler",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Customer enters item name in the search box",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Customer clicks on search icon",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Customer lands on toddler book page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Customer clicks in the sort option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Customer selects high to low option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Customer selects prime options",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Customer selects picture book from the filter option",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Customer selects my first reader from the next filter option",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Customer clicks in th polar bear picture book",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Customer lands on Item page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Customer clicks the quantity button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Customer selects the quantity of the item",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Customer clicks on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Customer lands on the check out option page",
  "keyword": "Then "
});
formatter.match({
  "location": "BooksSteps.customer_enters_item_name_in_the_search_box()"
});
formatter.result({
  "duration": 25621014,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class StepDefinations.BooksSteps\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat Runner.TestRunner.feature(TestRunner.java:37)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:584)\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:172)\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:804)\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:145)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:770)\n\tat org.testng.TestRunner.run(TestRunner.java:591)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:41)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:443)\n\tat org.testng.internal.thread.ThreadUtil.lambda$execute$0(ThreadUtil.java:67)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 33 more\nCaused by: java.lang.NullPointerException\n\tat com.google.common.base.Preconditions.checkNotNull(Preconditions.java:882)\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:105)\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:72)\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:46)\n\tat Actions.BooksAction.\u003cinit\u003e(BooksAction.java:15)\n\tat StepDefinations.BooksSteps.\u003cinit\u003e(BooksSteps.java:21)\n\t... 38 more\n",
  "status": "failed"
});
formatter.match({
  "location": "BooksSteps.customer_clicks_on_search_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_lands_on_toddler_book_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_clicks_in_the_sort_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_selects_high_to_low_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_selects_prime_options()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_selects_picture_book_from_the_filter_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_selects_my_first_reader_from_the_next_filter_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_clicks_in_th_polar_bear_picture_book()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_lands_on_Item_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_clicks_the_quantity_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_selects_the_quantity_of_the_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_clicks_on_add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BooksSteps.customer_lands_on_the_check_out_option_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("Electronics.feature");
formatter.feature({
  "line": 2,
  "name": "Electronics shopping",
  "description": "I want to automate buying electronics item as a customer",
  "id": "electronics-shopping",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "User is on amazon homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 7,
  "name": "Customer purchase TV using different filtering options",
  "description": "",
  "id": "electronics-shopping;customer-purchase-tv-using-different-filtering-options",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "Customer clicks on ham burgur icon",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Customer selects electronics from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Customer clicks TV \u0026 Video from next drop down",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Customer clicks 2020 model from filtering option",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Customer clicks SAMSUNG Brand from filtering option",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Customer lands on Samsung brand listing page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Customer clicks on a TV from the right side",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Customer clicks add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Customer lands on warrenty option",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Customer clicks on add warrenty option",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Customer lands on checkOut Page \u0026 see the price",
  "keyword": "Then "
});
formatter.match({
  "location": "TelevisionSteps.customer_clicks_on_ham_burgur_icon()"
});
formatter.result({
  "duration": 899121,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class StepDefinations.TelevisionSteps\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:47)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:33)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\n\tat Runner.TestRunner.feature(TestRunner.java:37)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:133)\n\tat org.testng.internal.TestInvoker.invokeMethod(TestInvoker.java:584)\n\tat org.testng.internal.TestInvoker.invokeTestMethod(TestInvoker.java:172)\n\tat org.testng.internal.MethodRunner.runInSequence(MethodRunner.java:46)\n\tat org.testng.internal.TestInvoker$MethodInvocationAgent.invoke(TestInvoker.java:804)\n\tat org.testng.internal.TestInvoker.invokeTestMethods(TestInvoker.java:145)\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:146)\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:128)\n\tat java.util.ArrayList.forEach(ArrayList.java:1257)\n\tat org.testng.TestRunner.privateRun(TestRunner.java:770)\n\tat org.testng.TestRunner.run(TestRunner.java:591)\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:402)\n\tat org.testng.SuiteRunner.access$000(SuiteRunner.java:41)\n\tat org.testng.SuiteRunner$SuiteWorker.run(SuiteRunner.java:443)\n\tat org.testng.internal.thread.ThreadUtil.lambda$execute$0(ThreadUtil.java:67)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1149)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:624)\n\tat java.lang.Thread.run(Thread.java:748)\nCaused by: java.lang.reflect.InvocationTargetException\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:41)\n\t... 33 more\nCaused by: java.lang.NullPointerException\n\tat com.google.common.base.Preconditions.checkNotNull(Preconditions.java:882)\n\tat org.openqa.selenium.support.ui.FluentWait.\u003cinit\u003e(FluentWait.java:105)\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:72)\n\tat org.openqa.selenium.support.ui.WebDriverWait.\u003cinit\u003e(WebDriverWait.java:46)\n\tat Actions.TelevisionActions.\u003cinit\u003e(TelevisionActions.java:15)\n\tat StepDefinations.TelevisionSteps.\u003cinit\u003e(TelevisionSteps.java:22)\n\t... 38 more\n",
  "status": "failed"
});
formatter.match({
  "location": "TelevisionSteps.customer_selects_electronics_from_drop_down()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TelevisionSteps.customer_clicks_TV_Video_from_next_drop_down()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2020",
      "offset": 16
    }
  ],
  "location": "TelevisionSteps.customer_clicks_model_from_filtering_option(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TelevisionSteps.customer_clicks_SAMSUNG_Brand_from_filtering_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TelevisionSteps.customer_lands_on_Samsung_brand_listing_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TelevisionSteps.customer_clicks_on_a_TV_from_the_right_side()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TelevisionSteps.customer_clicks_add_to_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TelevisionSteps.customer_lands_on_warrenty_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TelevisionSteps.customer_clicks_on_add_warrenty_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TelevisionSteps.customer_lands_on_checkOut_Page_see_the_price()"
});
formatter.result({
  "status": "skipped"
});
});