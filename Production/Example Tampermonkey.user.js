/* globals jQuery, demoTooljQuery, Boxever, _boxeverq */
/* eslint no-implicit-globals: "off", no-undef: "off" */

// ==UserScript==
// @name 04 - Boundless
// @namespace http://tampermonkey.net/
// @version 4.0
// @description Sitecore CDP And Personalize Tampermonkey Scripts
// @author Johan Becue
// @match https://boundless.co.uk/*
// @match https://www.boundless.co.uk/*
// @require https://sitecore-jbe.github.io/CdpPersonalizeDemoTool/Production/DemoToolInfoSlider.js?v60
// ==/UserScript==


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                                         //
//                                                                            DEMO SPECIFIC SETTINGS BELOW                                                                 //
//                                                                                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Script settings
ENABLE_KEYBOARD_SHORTCUTS = true;
SEND_VIEW_EVENT = true;

//Demo specific Sitecore CDP settings
SITECORECDP_CLIENT_KEY = "sise3eux6k2504uchriujeee6q87pzzn"; // Sitecore Sales Engineering 3 EU tenant
SITECORECDP_REST_API_BASIC_AUTH = "Basic c2lzZTNldXg2azI1MDR1Y2hyaXVqZWVlNnE4N3B6em46akpGa2o2ZlRGOGQwcTRrUW1STTZsQlc2Y1VmclNMd2s="; //Sitecore Sales Engineering 3 EU tenant - use https://www.base64encode.org/
SITECORECDP_COOKIE_DOMAIN = ".sportingkampenhout.be"; //replace TLD with your client/prospect
SITECORECDP_CHANNEL = "WEB";
SITECORECDP_VIEW_TYPE = "VIEW";
SITECORECDP_IDENTITY_TYPE = "IDENTITY";
SITECORECDP_FEEDBACK_TYPE = "FEEDBACK";
SITECORECDP_FORCE_CLOSE_TYPE = "FORCE_CLOSE";
SITECORECDP_ORDER_CHECKOUT_TYPE = "ORDER_CHECKOUT";
SITECORECDP_CURRENCY = "USD";
SITECORECDP_LANGUAGE = "EN";
SITECORECDP_POINT_OF_SALE = "StandardDemo";
SITECORECDP_IDENTITY_PROVIDER = "SITECORE_ID";


//Demo specific default values
SITECORECDP_DEFAULT_EMAIL_VALUE = "jbe@sitecore.net";
SITECORECDP_DEFAULT_FIRSTNAME_VALUE = "Johan";
SITECORECDP_DEFAULT_LASTNAME_VALUE = "Becue";
SITECORECDP_DEFAULT_GENDER_VALUE = "Male";
SITECORECDP_DEFAULT_DATEOFBIRTH_VALUE = "1977-06-06T00:00Z";
SITECORECDP_DEFAULT_TITLE_VALUE = "Unknown";
DEMOTOOL_OVERWRITE_LOCATION_ORGANIZATION = true;
DEMOTOOL_OVERWRITE_LOCATION_ORGANIZATION_VALUE = "Sitecore";
DEMOTOOL_OVERWRITE_IPADDRESS = false;
DEMOTOOL_OVERWRITE_IPADDRESS_VALUE = "193.134.178.243";


//Demo specific default data extension values
SITECORECDP_DEFAULT_CONSENT_EMAIL_OWN_OFFERS_VALUE = "true";
SITECORECDP_DEFAULT_CONSENT_EMAIL_PARTNER_OFFERS_VALUE = "true";
SITECORECDP_DEFAULT_CONSENT_SHARE_EMAIL_WITH_THIRD_PARTY_VALUE = "true";
SITECORECDP_DEFAULT_REGION_VALUE = "DefaultRegion";
SITECORECDP_DEFAULT_COUNTRY_VALUE = "BE";
SITECORECDP_DEFAULT_CITY_VALUE = "Kampenhout";
SITECORECDP_DEFAULT_POSTCODE_VALUE = "1910";
SITECORECDP_DEFAULT_PHONENUMBERS_VALUE = ['+32499707709', '+32499707710'];
SITECORECDP_DEFAULT_ROLE_VALUE = "DefaultRole";
SITECORECDP_DEFAULT_POSITION_VALUE = "DefaultPosition";
SITECORECDP_DEFAULT_HOSPITAL_VALUE = "DefaultHospital";
SITECORECDP_DEFAULT_MESSAGE_VALUE = "I have a neutral sentiment.";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                                         //
//                                                                            DEMO SPECIFIC SETTINGS ABOVE                                                                 //
//                                                                                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                                         //
//                                                                           DEMO SPECIFIC VIEW EVENT BELOW                                                                //
//                                                                                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function SendViewEventToSitecoreCdp() {
    console.debug(CONSOLE_LOG_PREFIX + "Starting SendViewEventToSitecoreCdp...");

    var viewEvent = baseEvent(SITECORECDP_VIEW_TYPE);
    viewEvent.sessionData = { "uri": window.location.pathname };
    //Start Boundless specific
    var z = window.location.pathname.slice(1, window.location.pathname.length).split("/");
    if (z[0]) {
        viewEvent.sessionData.category = z[0];
    }
    if (z[1]) {
        viewEvent.sessionData.subCategory = z[1];
    }
    //End Boundless specific

    SendTrackingDataToSitecoreCdp(viewEvent);

    console.debug(CONSOLE_LOG_PREFIX + "Ended SendViewEventToSitecoreCdp.");
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                                         //
//                                                                           DEMO SPECIFIC VIEW EVENT ABOVE                                                                //
//                                                                                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                                         //
//                                                                        DEMO SPECIFIC KEYBOARD EVENTS BELOW                                                              //
//                                                                                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//keyboard shortcuts
function KeyPress(e) {
    var evtobj = window.event ? event : e;


    // CTRL + C = Close session
    if (evtobj.keyCode == 67 && evtobj.ctrlKey) {
        console.debug(CONSOLE_LOG_PREFIX + "CTRL + C pressed = Starting close session");
        if (confirm("CLOSE SESSION?")) {
            var closeSessionEvent = baseEvent(SITECORECDP_FORCE_CLOSE_TYPE);

            SendTrackingDataToSitecoreCdp(closeSessionEvent);
        }
        console.debug(CONSOLE_LOG_PREFIX + "CTRL + C pressed = Ended close session");
    }


    // CTRL + A = Start as anonymous
    if (evtobj.keyCode == 65 && evtobj.ctrlKey) {
        console.debug(CONSOLE_LOG_PREFIX + "CTRL + A pressed = Starting as anonymous");
        if (confirm("START AS ANONYMOUS?")) {
            _boxeverq.push(function () {
                Boxever.reset();
            });
            location.reload();
        }
        console.debug(CONSOLE_LOG_PREFIX + "CTRL + A pressed = Ended as anonymous");
    }



    // CTRL + I send identity event
    if (evtobj.keyCode == 73 && evtobj.ctrlKey) {
        console.debug(CONSOLE_LOG_PREFIX + "CTRL + I pressed = Send identity event");

        var identityEvent = {
            "browser_id": Boxever.getID(),
            "channel": SITECORECDP_CHANNEL,
            "type": SITECORECDP_IDENTITY_TYPE,
            "language": SITECORECDP_LANGUAGE,
            "currency": SITECORECDP_CURRENCY,
            "page": window.location.pathname,
            "pos": SITECORECDP_POINT_OF_SALE,
            "title": SITECORECDP_DEFAULT_TITLE_VALUE,
            "gender": SITECORECDP_DEFAULT_GENDER_VALUE,
            "firstname": SITECORECDP_DEFAULT_FIRSTNAME_VALUE,
            "lastname": SITECORECDP_DEFAULT_LASTNAME_VALUE,
            "dateOfBirth": SITECORECDP_DEFAULT_DATEOFBIRTH_VALUE,
            "email": SITECORECDP_DEFAULT_EMAIL_VALUE,
            "country": SITECORECDP_DEFAULT_COUNTRY_VALUE,
            "city": SITECORECDP_DEFAULT_CITY_VALUE,
            "postcode": SITECORECDP_DEFAULT_POSTCODE_VALUE,
            "phoneNumbers": SITECORECDP_DEFAULT_PHONENUMBERS_VALUE,
            "identifiers": [{
                "provider": SITECORECDP_IDENTITY_PROVIDER,
                "id": SITECORECDP_DEFAULT_FIRSTNAME_VALUE + " " + SITECORECDP_DEFAULT_LASTNAME_VALUE
            }]
        };
        SendTrackingDataToSitecoreCdp(identityEvent);

        var consentData = {
            "key": "Consent",
            "emailOwnOffers": SITECORECDP_DEFAULT_CONSENT_EMAIL_OWN_OFFERS_VALUE,
            "emailThirdPartyOffers": SITECORECDP_DEFAULT_CONSENT_EMAIL_PARTNER_OFFERS_VALUE,
            "shareEmailWithThirdParties": SITECORECDP_DEFAULT_CONSENT_SHARE_EMAIL_WITH_THIRD_PARTY_VALUE,
        };
        SendGuestDataExtensions("ext", consentData);

        var lastMessageData = {
            "key": "LastMessage",
            "Language": SITECORECDP_LANGUAGE,
            "Message": SITECORECDP_DEFAULT_MESSAGE_VALUE,
        };
        SendGuestDataExtensions("ext", lastMessageData);
    }


    // Create Custom Event 0
    if (evtobj.keyCode == 48 && evtobj.ctrlKey) {
        console.debug(CONSOLE_LOG_PREFIX + "CTRL + 0 pressed = Create Custom Event 0");

        var customEvent = {
            "browser_id": Boxever.getID(),
            "channel": "WEB",
            "type": "CE-0",
            "language": "EN",
            "page": window.location.pathname,
            "pos": SITECORECDP_POINT_OF_SALE
        };

        customEvent = Boxever.addUTMParams(customEvent);

        SendTrackingDataToSitecoreCdp(customEvent);
    }



    // custom event 1
    if (evtobj.keyCode == 49 && evtobj.ctrlKey) {
        console.debug(CONSOLE_LOG_PREFIX + "Starting Next Day Event");

        var uc2Event = {
            "browser_id": Boxever.getID(),
            "channel": SITECORECDP_CHANNEL,
            "type": "NEXTDAYEVENT",
            "pos": SITECORECDP_POINT_OF_SALE
        };
        SendTrackingDataToSitecoreCdp(uc2Event);

        console.debug(CONSOLE_LOG_PREFIX + "Ended Next Day Event");
    }
    // CTRL + 4 - custom event 2 - control-2 starts USE CASE 2
    if (evtobj.keyCode == 52 && evtobj.ctrlKey) {
        console.debug(CONSOLE_LOG_PREFIX + "Starting createUseCase2Event");

        var uc2Event = {
            "browser_id": Boxever.getID(),
            "channel": SITECORECDP_CHANNEL,
            "type": "UC2EVENT",
            "pos": SITECORECDP_POINT_OF_SALE
        };
        SendTrackingDataToSitecoreCdp(uc2Event);

        console.debug(CONSOLE_LOG_PREFIX + "Ended createUseCase2Event");

    }
    // CTRL + 3 - custom event 3 - control-3 starts USE CASE 3
    if (evtobj.keyCode == 51 && evtobj.ctrlKey) {
        console.debug(CONSOLE_LOG_PREFIX + "Starting createUseCase3Event");

        var uc3Event = {
            "browser_id": Boxever.getID(),
            "channel": SITECORECDP_CHANNEL,
            "type": "UC3EVENT",
            "pos": SITECORECDP_POINT_OF_SALE
        };
        SendTrackingDataToSitecoreCdp(uc3Event);

        console.debug(CONSOLE_LOG_PREFIX + "Ended createUseCase3Event");

    }

    // CTRL + 5 -  control-4 starts USE CASE 4
    if (evtobj.keyCode == 53 && evtobj.ctrlKey) {
        console.debug(CONSOLE_LOG_PREFIX + "Starting createUseCase4Event");

        var uc4Event = {
            "browser_id": Boxever.getID(),
            "channel": SITECORECDP_CHANNEL,
            "type": "UC4EVENT",
            "pos": SITECORECDP_POINT_OF_SALE
        };
        SendTrackingDataToSitecoreCdp(uc4Event);

        console.debug(CONSOLE_LOG_PREFIX + "Ended createUseCase4Event");

    }

    // CTRL + 6 -  control-6 Send Session Data Example
    if (evtobj.keyCode == 54 && evtobj.ctrlKey) {
        console.debug(CONSOLE_LOG_PREFIX + "Starting Session Data");
        logger.debug(CONSOLE_LOG_PREFIX + "Starting Session Data");


        var sessionDataEvent = {
            "type": "ORDER_CHECKOUT",
            "browser_id": "405bbc9f-bb43-451d-98e5-4fa899ce6a75",
            "channel": "WEB",
            "pos": "http://yourdomain.com",
            "language": "EN",
            "currency": "EUR",
            "page": "checkout page",
            "order": {
                "referenceId": "123456",
                "orderedAt": "2015-08-23T16:17:16.000Z",
                "status": "PURCHASED",
                "currencyCode": "EUR",
                "price": 200,
                "paymentType": "Card",
                "cardType": "Visa",
                "extensions": [
                    {
                        "name": "ext",
                        "key": "default",
                        "refundable": true
                    }
                ],
                "orderItems": [
                    {
                        "type": "MOBILE_PHONE",
                        "referenceId": "REF-123",
                        "orderedAt": "2015-08-23T16:17:16.000Z",
                        "status": "PURCHASED",
                        "currencyCode": "EUR",
                        "price": 200,
                        "name": "Mobile phone of type x",
                        "productId": "MOBILE_PHONE_TYPE_X",
                        "quantity": 1,
                        "extensions": [
                            {
                                "name": "ext",
                                "key": "default",
                                "phoneColor": "Gold",
                                "insurance": false
                            }
                        ]
                    }
                ]
            }
        };
        SendTrackingDataToSitecoreCdp(sessionDataEvent);

        console.debug(CONSOLE_LOG_PREFIX + "Ended Session Data");

    }

}

if (ENABLE_KEYBOARD_SHORTCUTS) {
    document.onkeyup = KeyPress;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                                                                         //
//                                                                        DEMO SPECIFIC KEYBOARD EVENTS ABOVE                                                              //
//                                                                                                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////