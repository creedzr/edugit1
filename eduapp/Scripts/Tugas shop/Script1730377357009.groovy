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

Mobile.startApplication('D:\\Automate\\Katalon\\eduapp\\mobileapp\\Shop Samsung_2.0.34964_APKPure.apk', true)

Mobile.delay(3, FailureHandling.STOP_ON_FAILURE)

Mobile.tap(findTestObject('Object Repository/tugas/select_Guest'), 0)

Mobile.tap(findTestObject('Object Repository/tugas/select_phone'), 0)

Mobile.tap(findTestObject('Object Repository/tugas/klik_continue'), 0)

Mobile.tap(findTestObject('Object Repository/tugas/select_search'), 0)

Mobile.sendKeys(findTestObject('Object Repository/tugas/android.widget.EditText - Galaxy Z Fold 6 (1)'), 'Galaxy Z Fold 6')

Mobile.tap(findTestObject('Object Repository/tugas/detail _produk'), 0)

Mobile.scrollToText('Samsung Trade-in')

Mobile.tap(findTestObject('Object Repository/tugas/select - no trade in'), 0)

Mobile.scrollToText('No coverage')

Mobile.tap(findTestObject('Object Repository/tugas/android.widget.Button - No coverage'), 0)

Mobile.scrollToText('In Store Pickup:')

Mobile.tap(findTestObject('Object Repository/tugas/android.widget.Button - Select Store'), 0)

Mobile.tap(findTestObject('Object Repository/tugas/android.view.View (1)'), 0)

Mobile.scrollToText('You Saved Today')

Mobile.tap(findTestObject('Object Repository/tugas/android.widget.Button - Continue'), 0)

Mobile.closeApplication()

