import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

Mobile.startApplication('D:\\Automate\\Katalon\\eduapp\\mobileapp\\Happy Day Shopping_1.7_APKPure.apk', true)

Mobile.tap(findTestObject('shop/promotion/android.widget.TextView - PROMOTIONS'), 0)

Mobile.delay(3, FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('Object Repository/shop/promotion/add product - Leo Mens Intimate Wash 100ml'), 0)

Mobile.delay(3, FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('Object Repository/shop/promotion/qty.input'), 0)

Mobile.setText(findTestObject('Object Repository/shop/promotion/Qty.input.set -5'), '5', 0)

Mobile.tap(findTestObject('Object Repository/shop/promotion/klik-sembarang'), 
    0)

Mobile.tap(findTestObject('Object Repository/shop/promotion/Add to Bag.button'), 0)

Mobile.tap(findTestObject('Object Repository/shop/promotion/klik- Your Bag'), 0)

Mobile.tap(findTestObject('Object Repository/shop/promotion/Checkout.button'), 0)

Mobile.getText(findTestObject('Object Repository/shop/promotion/android.widget.TextView - Shopping cart'), 0)

Mobile.closeApplication()

