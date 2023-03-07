"use strict";

//Demo specific Sitecore CDP settings
const SITECORECDP_CLIENT_KEY = "sise3eux6k2504uchriujeee6q87pzzn"; // Sitecore Sales Engineering 3 EU tenant - do not change
const SITECORECDP_REST_API_BASIC_AUTH = "Basic c2lzZTNldXg2azI1MDR1Y2hyaXVqZWVlNnE4N3B6em46akpGa2o2ZlRGOGQwcTRrUW1STTZsQlc2Y1VmclNMd2s="; //Sitecore Sales Engineering 3 EU tenant - do not change
const SITECORECDP_COOKIE_DOMAIN = ".sportingkampenhout.be"; //replace TLD with your client/prospect
const SITECORECDP_CHANNEL = "WEB";
const SITECORECDP_VIEW_TYPE = "VIEW";
const SITECORECDP_IDENTITY_TYPE = "IDENTITY";
const SITECORECDP_FEEDBACK_TYPE = "FEEDBACK";
const SITECORECDP_FORCE_CLOSE_TYPE = "FORCE_CLOSE";
const SITECORECDP_ORDER_CHECKOUT_TYPE = "ORDER_CHECKOUT";
const SITECORECDP_CURRENCY = "USD";
const SITECORECDP_LANGUAGE = "EN";
const SITECORECDP_POINT_OF_SALE = "StandardDemo";
const SITECORECDP_IDENTITY_PROVIDER = "SITECORE_ID";


//Demo specific default values
const SITECORECDP_DEFAULT_EMAIL_VALUE = "jbe@sitecore.net";
const SITECORECDP_DEFAULT_FIRSTNAME_VALUE = "Johan";
const SITECORECDP_DEFAULT_LASTNAME_VALUE = "Becue";
const SITECORECDP_DEFAULT_GENDER_VALUE = "Male";
const SITECORECDP_DEFAULT_DATEOFBIRTH_VALUE = "1977-06-06T00:00Z";
const SITECORECDP_DEFAULT_TITLE_VALUE = "Unknown";
const DEMOTOOL_OVERWRITE_LOCATION_ORGANIZATION = true;
const DEMOTOOL_OVERWRITE_LOCATION_ORGANIZATION_VALUE = "Sitecore";
const DEMOTOOL_OVERWRITE_IPADDRESS = false;
const DEMOTOOL_OVERWRITE_IPADDRESS_VALUE = "193.134.178.243";


//Demo specific default data extension values
const SITECORECDP_DEFAULT_CONSENT_EMAIL_OWN_OFFERS_VALUE = "true";
const SITECORECDP_DEFAULT_CONSENT_EMAIL_PARTNER_OFFERS_VALUE = "true";
const SITECORECDP_DEFAULT_CONSENT_SHARE_EMAIL_WITH_THIRD_PARTY_VALUE = "true";
const SITECORECDP_DEFAULT_REGION_VALUE = "DefaultRegion";
const SITECORECDP_DEFAULT_COUNTRY_VALUE = "BE";
const SITECORECDP_DEFAULT_CITY_VALUE = "Kampenhout";
const SITECORECDP_DEFAULT_POSTCODE_VALUE = "1910";
const SITECORECDP_DEFAULT_PHONENUMBERS_VALUE = ['+32499707709', '+32499707710'];
const SITECORECDP_DEFAULT_ROLE_VALUE = "DefaultRole";
const SITECORECDP_DEFAULT_POSITION_VALUE = "DefaultPosition";
const SITECORECDP_DEFAULT_HOSPITAL_VALUE = "DefaultHospital";
const SITECORECDP_DEFAULT_MESSAGE_VALUE = "I have a neutral sentiment.";


//Fixed Sitecore CDP settings
const SITECORECDP_STREAM_API_TARGET = "https://api.boxever.com/v1.2"; //  do not change
const SITECORECDP_INTERACTIVE_API_TARGET = "https://api.boxever.com/v2"; //  do not change
const SITECORECDP_WEB_FLOW_TARGET = "https://d35vb5cccm4xzp.cloudfront.net"; //  do not change
const SITECORECDP_CLIENTVERSION = "1.4.9";
const SITECORECDP_PAGE = window.location.pathname + window.location.search;

//Fixed Demo Tool settings
const DEMOTOOL_VERSION = "v4.02.00";
const ENVIRONMENT = "Production"; //"Production" or "Staging"
const SITECORECDP_JS_LIB_SRC = { id: "SITECORECDP_JS_LIB_SRC", url: "//d1mj578wat5n4o.cloudfront.net/boxever-" + SITECORECDP_CLIENTVERSION + ".js" };
const POPPER_JS = { id: "POPPER_JS", url: "//unpkg.com/@popperjs/core@2" };
const PLURALIZE_JS = { id: "PLURALIZE_JS", url: "//cdnjs.cloudflare.com/ajax/libs/pluralize/8.0.0/pluralize.min.js" };
const FONT_AWESOME_CSS = { id: "FONT_AWESOME_CSS", url: "//cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" };
const FONT_MONTSERRAT_CSS = { id: "FONT_MONTSERRAT_CSS", url: "//fonts.googleapis.com/css?family=Montserrat" };
const DEMOTOOL_CSS = { id: "DEMOTOOL_CSS", url: "https://sitecore-jbe.github.io/CdpPersonalizeDemoTool/" + ENVIRONMENT + "/DemoToolInfoSlider.css" };
const CONTAINERDEFINITIONS_URL = "https://sitecore-jbe.github.io/CdpPersonalizeDemoTool/" + ENVIRONMENT + "/DemoToolInfoSliderContainerDefinitions.json";
const LOGO_URL = "https://sitecore-jbe.github.io/CdpPersonalizeDemoTool/" + ENVIRONMENT + "/Images/demotool-logo.png";
const CDPANDPERSONALIZELOGO_URL = "https://sitecore-jbe.github.io/CdpPersonalizeDemoTool/" + ENVIRONMENT + "/Images/demotool-logo-cdp-personalize.svg";
const SITECORELOGO_URL = "https://sitecore-jbe.github.io/CdpPersonalizeDemoTool/" + ENVIRONMENT + "/Images/demotool-sitecore-logo.svg";
const IP_API_TARGET = "https://api.ipgeolocation.io/ipgeo";
const IP_API_KEY = "6439efc4f032434d9016cbb032535b43";
const WEATHER_API_TARGET = "https://api.open-meteo.com/v1/forecast";
const BASE_WEB_INTERFACE_URL = "https://app.boxever.com";
const DEMOTOOL_FONTAWESOME_STYLE_SOLID = "fa-solid";
const DEMOTOOL_FONTAWESOME_CIRCLEINFO = "fa-circle-info";
const DEMOTOOL_FONTAWESOME_CIRCLEXMARK = "fa-circle-xmark";
const DEMOTOOL_FONTAWESOME_CARETDOWN = "fa-square-caret-down";
const DEMOTOOL_FONTAWESOME_CARETUP = "fa-square-caret-up";
const DEMOTOOL_FONTAWESOME_ANGLESDOWN = "fa-angles-down";
const DEMOTOOL_FONTAWESOME_ANGLESUP = "fa-angles-up";
const DEMOTOOL_FONTAWESOME_WINDOWRESTORE = "fa-window-restore";
const DEMOTOOL_FONTAWESOME_XMARK = "fa-xmark";
const DEMOTOOL_FONTAWESOME_REQUIRED = "fa-database";
const DEMOTOOL_FONTAWESOME_OPTIONAL = "fa-database";
const DEMOTOOL_FONTAWESOME_CALCULATED = "fa-calculator";
const DEMOTOOL_FONTAWESOME_COPY = "fa-copy";
const DEMOTOOL_FONTAWESOME_CHECK = "fa-check";
const DEMOTOOL_FONTAWESOME_BARSSTAGGERED = "fa-bars-staggered";
const DEMOTOOL_FONTAWESOME_BARS = "fa-bars";
const DEMOTOOL_FONTAWESOME_FILTERCIRCLEXMARK = "fa-filter-circle-xmark";
const DEMOTOOL_FONTAWESOME_FILTER = "fa-filter";
const DEMOTOOL_FONTAWESOME_VIALCIRCLECHECK = "fa-vial-circle-check";
const DEMOTOOL_SITECORECDP_TARGET_NAME = "SitecoreCDP";
const DEMOTOOL_INFOSLIDER_ELEMENTNAME = "DemoToolInfoSlider";
const DEMOTOOL_INFOSLIDER_TITLE = "Profiling Tool";
const DEMOTOOL_GUEST_INFORMATION_SENTIMENT_ELEMENTNAME = DEMOTOOL_INFOSLIDER_ELEMENTNAME + "_Sentiment_Value";

//Demotool button tooltips/questions/texts
const ABOUT_TEXT = "About";
const EVENTFILTERINGENABLED_TEXT = "Disable event filtering.";
const EVENTFILTERINGDISABLED_TEXT = "Enable event filtering.";
const EXTENDEDPROPERTIESENABLED_TEXT = "Show extended properties.";
const EXTENDEDPROPERTIESDISABLED_TEXT = "Hide extended properties.";
const NOTCONFIGUREDPROPERTIESENABLED_TEXT = "Show not configured properties.";
const NOTCONFIGUREDPROPERTIESDISABLED_TEXT = "Hide not configured properties.";
const OPENQATOOLQUESTION_TEXT = "Are you sure you want to open the QA Tool. The page will reload."

//Logging settings
const CONSOLE_LOG_PREFIX = "Sitecore: ";

const usePopper = false; // Trying to remove popper.js dependency (false is not yet supported) 

// Global Variables
var demoToolData = {};


/**
* Positions elem relative to anchor as said in position.
*
* @param {Node} anchor     Anchor element for positioning
* @param {string} position One of: top/right/bottom
* @param {Node} elem       Element to position
*
* Both elements: elem and anchor must be in the document
*/
function positionAt(anchor, position, elem) {
    //let anchorCoords = anchor.getBoundingClientRect();
    //let elemCoords = elem.getBoundingClientRect();

    elem.style.position = "fixed";
    switch (position) {
        //case "top":
        //    elem.style.left = anchorCoords.left + "px";
        //    elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        //    break;

        //case "right":
        //    elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        //    elem.style.top = anchorCoords.top + "px";
        //    break;

        case "left":
            PositionPopup(anchor, elem);
            break;

        //case "bottom":
        //    elem.style.left = anchorCoords.left + "px";
        //    elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        //    break;
    }
}


function PositionPopup(anchor, elem) {
    var offset = 5;
    var elemCoords = elem.getBoundingClientRect();
    let anchorCoords = anchor.getBoundingClientRect();

    //Top positioning
    var newTop = anchorCoords.top;
    var newBottom = newTop + elemCoords.height + offset;
    if (newBottom >= window.innerHeight) {
        newTop = window.innerHeight - elemCoords.height - (2 * offset);
    }
    if (newTop < offset) {
        elem.style.top = offset + "px";
        elem.style["overflow-y"] = "scroll";
        elem.style["max-height"] = window.innerHeight - (2 * offset) + "px";
    } else {
        elem.style.top = newTop + "px";
        elem.style["overflow-y"] = "inherit";
        elem.style["max-height"] = "inherit"
    }

    //Left positioning
    var newLeft = anchorCoords.left - elemCoords.width - offset;
    var newRight = newLeft + elemCoords.width;
    if (newRight >= window.innerWidth) {
        newLeft = window.innerWidth - elemCoords.width - offset;
    }
    if (newLeft < offset) {
        elem.style.left = offset + "px";
    } else {
        elem.style.left = newLeft + "px";
    }
}


function AddPopupResizeEventListener(element) {
    var resizeObserver = new ResizeObserver(() => {
        for (var i = 0; i < demoToolData.toolTipsArray.length; i++) {
            var element = document.getElementById(demoToolData.toolTipsArray[i].popupId);
            var anchor = document.getElementById(demoToolData.toolTipsArray[i].id);
            PositionPopup(anchor, element);
        }
    });

    // Observe one or multiple elements
    resizeObserver.observe(element);
}


// Converts decimal degrees to degrees minutes seconds.
// @param decimalDegrees the decimal degrees value.
// @param isLng specifies whether the decimal degrees value is a longitude.
// @return degrees minutes seconds string in the format 49°15'51.35"N
function convertToDms(decimalDegrees, isLongitude) {
    let direction = decimalDegrees < 0
        ? isLongitude ? 'W' : 'S'
        : isLongitude ? 'E' : 'N';

    let absDecimalDegrees = Math.abs(decimalDegrees);
    let degrees = absDecimalDegrees | 0;
    let frac = absDecimalDegrees - degrees;
    let min = (frac * 60) | 0;
    let sec = frac * 3600 - min * 60;
    // Round it to 2 decimal points.
    sec = Math.round(sec * 100) / 100;
    return degrees + "°" + min + "'" + sec + '" ' + direction;
}


function TimeOfTheDay(hour) {
    if (hour >= 0 && hour < 6) {
        return "Night";
    } else if (hour >= 6 && hour < 12) {
        return "Morning";
    } else if (hour >= 12 && hour < 18) {
        return "Afternoon";
    } else if (hour >= 18 && hour < 24) {
        return "Evening";
    } else if (hour = 24) {
        // used if American 2 digit notation
        return "Night";
    }
}

function CurrentDateTimeInTimezoneLocaleString(timeZone) {
    return new Date().toLocaleString("en-US", { timeZone: timeZone });
}

function CurrentTimeInTimezone(timeZone) {
    return new Date().toLocaleString("en-US", { timeZone: timeZone, hour12: false, hour: 'numeric' });
}

// Define the Boxever settings
unsafeWindow._boxever_settings = {
    client_key: SITECORECDP_CLIENT_KEY, // Replace with your client key
    target: SITECORECDP_STREAM_API_TARGET, // Replace with your API target endpoint specific to your data center region
    cookie_domain: SITECORECDP_COOKIE_DOMAIN, // Replace with the top level cookie domain of the website that is being integrated e.g ".example.com" and not "www.example.com"
    javascriptLibraryVersion: SITECORECDP_CLIENTVERSION, // Replace with the latest Boxever JavaScript Library version"
    pointOfSale: SITECORECDP_POINT_OF_SALE, // Replace with the same point of sale configured in system settings"
    web_flow_target: SITECORECDP_WEB_FLOW_TARGET, // Replace with path for the Amazon CloudFront CDN for Sitecore Personalize"
    web_flow_config: { async: true, defer: true } // Customize the async and defer script loading attributes
};

//START ADDING JSS & CSS LIBRARIES
class ResourceType {
    // Create new instances of the same class as static attributes
    static Stylesheet = new ResourceType("Stylesheet");
    static Javascript = new ResourceType("Javascript");

    constructor(name) {
        this.name = name;
    }
}

// Load Resource asynchronously
function LoadResourceAsync(resourceType, src, addDateTimeQueryString = false) {
    return new Promise(function (resolve, reject) {
        var resourceLink;

        switch (resourceType) {
            case ResourceType.Stylesheet:
                resourceLink = document.createElement("link");
                resourceLink.rel = "stylesheet";
                resourceLink.href = addDateTimeQueryString ? src.url + "?v=" + new Date().toISOString() : src.url;
                break;
            case ResourceType.Javascript:
                resourceLink = document.createElement("script");
                resourceLink.type = "text/javascript";
                resourceLink.async = true;
                resourceLink.src = addDateTimeQueryString ? src.url + "?v=" + new Date().toISOString() : src.url;
                break;
        }

        resourceLink.id = src.id;

        resourceLink.onload = function () {
            console.debug(CONSOLE_LOG_PREFIX + resourceType.name + " " + src.id + " is loaded.");
            resolve(resourceLink); // Resolve promise and go to then()
        };
        resourceLink.onerror = function () {
            console.error(CONSOLE_LOG_PREFIX + "Error loading " + src.id + " " + ToLowerCase(resourceType.name));
            reject(); // Reject the promise and go to catch()
        };

        var head = document.getElementsByTagName('head')[0];
        if (head) {
            head.append(resourceLink);
        }
    });
}


// Load Stylesheet asynchronously
function LoadStyleSheetAsync(src, addDateTimeQueryString = false) {
    return LoadResourceAsync(ResourceType.Stylesheet, src, addDateTimeQueryString);
}

// Load JavaScript Library asynchronously
function LoadJavascriptAsync(src, addDateTimeQueryString = false) {
    return LoadResourceAsync(ResourceType.Javascript, src, addDateTimeQueryString);
}
//END ADDING JSS & CSS LIBRARIES


//START GENERIC FUNCTIONS
function ToTitleCase(str) {
    if (str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }
}

function ToPascalCase(str) {
    var arr = str.split(/\s|_/);
    for (var i = 0, l = arr.length; i < l; i++) {
        arr[i] = arr[i].substr(0, 1).toUpperCase() +
            (arr[i].length > 1 ? arr[i].substr(1).toLowerCase() : "");
    }
    return arr.join("");
}

const ToSentenceCase = str => {
    if (str) {
        let result = str.replace(/([A-Z])/g, ' $1');
        result = result.replace("U R I", "Uri"); // fix special cases 'URI'
        return result[0].toUpperCase() + result.substring(1).toLowerCase();
    }
    return '';
};

function ToCamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function isIsoDate(str) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d = new Date(str);
    return d instanceof Date && !isNaN(d) && d.toISOString() === str; // valid date
}

function isObject(obj) {
    return typeof obj === 'object' && obj !== null && !Array.isArray(obj);
};


function isStringArray(array) {
    if (Array.isArray(array)) {
        return array.every(element => typeof element === "string");
    }
};


String.prototype.interpolate = function (props) {
    return this.replace(/\{(\w+)\}/g, function (match, expr) {
        return (props || window)[expr];
    });
};

function FormatDateTimeForDisplay(date, showDate, showTime) {
    if (date) {
        if (showDate && showTime) {
            return new Date(date).toLocaleString("en-US", { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' })
        }
        else {
            if (showDate) {
                return new Date(date).toLocaleString("en-US", { year: 'numeric', month: 'short', day: '2-digit', weekday: "short" })
            }
            if (showTime) {
                return new Date(date).toLocaleString("en-US", { hour: '2-digit', hour12: false, minute: '2-digit', second: '2-digit' })
            }
        }
    }
    return null;
}

function removePropertyWithEmptyValuesFromObject(object) {
    console.debug(CONSOLE_LOG_PREFIX + "Starting removePropertyWithEmptyValuesFromObject...");
    console.debug(object);

    for (const propertyName in object) {
        if ((object[propertyName] === "") || (Array.isArray(object[propertyName]) && !object[propertyName].length)) {
            delete object[propertyName];
            console.debug(CONSOLE_LOG_PREFIX + "Property " + propertyName + " removed from object because value is empty.");
        }
    }

    console.debug(CONSOLE_LOG_PREFIX + "Ended removePropertyWithEmptyValuesFromObject.");
    return object;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function CopyToClipboard(value) {
    var icon = event.target;
    navigator.clipboard.writeText(value).then(function () {
        icon.classList.toggle(DEMOTOOL_FONTAWESOME_COPY);
        icon.classList.toggle(DEMOTOOL_FONTAWESOME_CHECK);
        delay(1500).then(function () {
            icon.classList.toggle(DEMOTOOL_FONTAWESOME_CHECK);
            icon.classList.toggle(DEMOTOOL_FONTAWESOME_COPY);
        });
    }, function () {
    });
}

function GetCurrentSession(sessions) {
    for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].channel == "WEB" && sessions[i].status == "OPEN") {
            return sessions[i];
        }
    }
    return null;
}

function GetCurrentSessionPath(sessions) {
    for (let i = 0; i < sessions.length; i++) {
        if (sessions[i].channel == "WEB" && sessions[i].status == "OPEN" && sessions[i].browserRef == Boxever.browser_id) {
            return "Guest.sessions." + i;
        }
    }
    return null;
}


function AppendElementAsChild(parentHtmlElement, element, options) {
    var tempElement = CreateElement(element, options);
    parentHtmlElement.appendChild(tempElement);
    return tempElement;
}

function CreateElement(element, options) {
    var tempElement = document.createElement(element);
    for (var prop in options) {
        if (prop == "class") {
            tempElement["classList"] = options[prop];
        }
        else {
            if (prop.startsWith("data")) {
                //Set data property (needs to be in dataset); data is automatically added so remove 'data' from the propertyname.
                //camelcase the propertyName to avoid adding a double '-' after data.
                tempElement.dataset[ToCamelCase(prop.slice(4))] = options[prop];
            }
            else {
                tempElement[prop] = options[prop];
            }
        }
    }
    return tempElement;
}


/**
* Retrieve nested item from object/array
* @param {Object|Array} obj
* @param {String} path dot separated
* @param {*} def default value ( if result undefined )
* @returns {*}
*/
function GetPropertyFromObjectByPath(obj, path, def) {
    var i, len;

    for (i = 0, path = path.split('.'), len = path.length; i < len; i++) {
        if (!obj || typeof obj !== 'object') return def;
        obj = obj[path[i]];
    }

    if (obj === undefined) return def;
    return obj;
}


function getTokens(string) {
    var regex = new RegExp('(?:{{)([^}]*)(?:}})', 'g');

    var match, tokens = [];
    while (match = regex.exec(string)) {
        tokens.push(match[1]);
    }

    return tokens;
}
//END GENERIC FUNCTIONS

function GetContainerDefintionsJson() {
    return fetch(CONTAINERDEFINITIONS_URL + "?" + new Date().toISOString())
        .then((response) => response.json());
}

//START GENERIC REST API
function GetDefaultJsonGetRequestOptions() {
    return {
        "method": "GET",
        "cache": 'no-cache',
        "headers": {
            "Content-Type": "application/json"
        }
    };
}

function GetDefaultGetRequestOptions() {
    return {
        "method": "GET",
        "cache": 'no-cache'
    };
}


function GetDefaultJsonPostRequestOptions(data, authorization) {
    var requestOptions = {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        }
    };

    requestOptions.body = JSON.stringify(data);

    if (authorization !== undefined) {
        requestOptions.headers.Authorization = authorization;
    }

    return requestOptions;
}


function Ajax(request) {
    return fetch(request).then(response => {
        if (response.ok) {
            const contentType = response.headers.get('Content-Type') || '';

            if (contentType.includes('application/json')) {
                return response.json().catch(error => {
                    return Promise.reject(new ResponseError('Invalid JSON: ' + error.message));
                });
            }

            if (contentType.includes('text/html')) {
                return response.text().then(html => {
                    return {
                        page_type: 'generic',
                        html: html
                    };
                }).catch(error => {
                    return Promise.reject(new ResponseError('HTML error: ' + error.message));
                });
            }

            return Promise.reject(new ResponseError('Invalid content type: ' + contentType));

        }

        switch (response.status) {
            case 400: return Promise.reject(new NotFoundError('Bad Request: ' + url));
            case 404: return Promise.reject(new NotFoundError('Page not found: ' + url));
        }

        return Promise.reject(new HttpError('HTTP error: ' + response.status));
    }).catch(error => {
        return Promise.reject(new NetworkError(error.message));
    });
}


function GetIPGeolocation() {
    return new Promise(function (resolve) {

        var sessionStorageItemName = DEMOTOOL_OVERWRITE_IPADDRESS
            ? "IpGeoLocation_IP_" + DEMOTOOL_OVERWRITE_IPADDRESS_VALUE
            : "IpGeoLocation";
        var ipGeoLocationFromSessionStorage = sessionStorage.getItem(sessionStorageItemName);
        if (ipGeoLocationFromSessionStorage) {
            // Use IP geolocation from sessionStorage
            console.debug(CONSOLE_LOG_PREFIX + "Using ip geo location info from session storage...");
            resolve(JSON.parse(ipGeoLocationFromSessionStorage));
        }
        else {
            // Call IP geolocation web service
            console.debug(CONSOLE_LOG_PREFIX + "Calling ip geo location webservice...");
            var request = DEMOTOOL_OVERWRITE_IPADDRESS
                ? new Request(IP_API_TARGET + "?apiKey=" + IP_API_KEY + "&lang=en&ip=" + DEMOTOOL_OVERWRITE_IPADDRESS_VALUE, GetDefaultJsonGetRequestOptions())
                : new Request(IP_API_TARGET + "?apiKey=" + IP_API_KEY + "&lang=en", GetDefaultJsonGetRequestOptions());

            Ajax(request).then(function (response) {
                sessionStorage.setItem(sessionStorageItemName, JSON.stringify(response));
                resolve(response);
            });
        }
    });
}


function GetCurrentWeather(latitude, longitude) {
    return new Promise(function (resolve) {
        var sessionStorageItemName = "Weather_Latitude_" + latitude + "_Longitude_" + longitude;
        var weatherFromSessionStorage = sessionStorage.getItem(sessionStorageItemName);
        if (weatherFromSessionStorage) {
            // Use IP geolocation from sessionStorage
            console.debug(CONSOLE_LOG_PREFIX + "Using weather info for latitude:'" + latitude + "' and longitude: '" + longitude + "' from session storage...");
            resolve(JSON.parse(weatherFromSessionStorage));
        }
        else {
            // Call IP geolocation web service
            console.debug(CONSOLE_LOG_PREFIX + "Calling weather webservice for latitude: '" + latitude + "' and longitude: '" + longitude + "' ...");
            var options = GetDefaultGetRequestOptions();
            var request = new Request(WEATHER_API_TARGET + "?latitude=" + latitude + "&longitude=" + longitude + "&current_weather=true", options);
            Ajax(request).then(function (response) {
                sessionStorage.setItem(sessionStorageItemName, JSON.stringify(response));
                resolve(response);
            });
        }
    });
}


function GetAzureCognitiveServicesSentiment(language, text) {
    console.debug(CONSOLE_LOG_PREFIX + "Starting GetAzureCognitiveServicesSentiment for language: " + language + " and text: " + text + "...");

    var data = {
        documents: [
            {
                language: language,
                id: "1",
                text: text
            }
        ]
    };

    var requestOptions = GetDefaultJsonPostRequestOptions(data);
    requestOptions.headers["Ocp-Apim-Subscription-Key"] = "bbc9e18d1b8f4ceb8432bf9a15c670cb";

    var request = new Request("https://cdp-personalize-sentiment.cognitiveservices.azure.com/text/analytics/v3.0/sentiment?showStats=true", requestOptions);
    return Ajax(request);
}
//END GENERIC REST API

//START BOXEVER REST API
function GetGuestContext(customerRef) {
    console.debug(CONSOLE_LOG_PREFIX + "Starting GetGuestContext for customer reference: '" + customerRef + "'...");

    var requestOptions = GetDefaultJsonGetRequestOptions();
    requestOptions.headers.Authorization = SITECORECDP_REST_API_BASIC_AUTH;

    var request = new Request(SITECORECDP_INTERACTIVE_API_TARGET + "/guestContexts/" + customerRef + "?expand=items.sessions(offset:0,limit:100)&source=all&timeout=30000", requestOptions);
    return Ajax(request);
}

function GetGuestDataExtension(customerRef, extensionName) {
    console.debug(CONSOLE_LOG_PREFIX + "Starting GetGuestDataExtension for customer reference: '" + customerRef + "' and extension name: '" + extensionName + "' ...");

    var requestOptions = GetDefaultJsonGetRequestOptions();
    requestOptions.headers.Authorization = SITECORECDP_REST_API_BASIC_AUTH;

    var request = new Request(SITECORECDP_INTERACTIVE_API_TARGET + "/guests/" + customerRef + "?expand=ext" + extensionName, requestOptions);
    return Ajax(request);
}


// Not used.
function GetFullStackExperience(friendlyId) {
    console.debug(CONSOLE_LOG_PREFIX + "Starting GetFullStackExperience for friendly Id: " + friendlyId + "...");

    var data = {
        "clientKey": SITECORECDP_CLIENT_KEY,
        "channel": SITECORECDP_CHANNEL,
        "language": SITECORECDP_LANGUAGE,
        "currencyCode": SITECORECDP_CURRENCY,
        "pointOfSale": SITECORECDP_POINT_OF_SALE,
        "browserId": Boxever.getID(),
        "friendlyId": friendlyId
    };

    var requestOptions = GetDefaultJsonPostRequestOptions(data, SITECORECDP_REST_API_BASIC_AUTH);

    var request = new Request(SITECORECDP_INTERACTIVE_API_TARGET + "/callFlows", requestOptions);
    return Ajax(request);
}
//END BOXEVER REST API

//Demo specific statements when page is fully loaded.
(function () {
    window.addEventListener('load', (event) => {
        console.debug(CONSOLE_LOG_PREFIX + "Starting demo specific statements when page is fully loaded...");
        console.debug(event);
        console.debug(CONSOLE_LOG_PREFIX + "Ended demo specific statements when page is fully loaded.");
    });
})();

function GetDataSetPropertyFromHtmlElementOrParents(property, htmlElement) {
    if (htmlElement.dataset && htmlElement.dataset[property]) {
        return htmlElement.dataset[property];
    }
    else {
        var element = htmlElement;

        while (element.parentNode) {
            element = element.parentNode;

            if (element.dataset && element.dataset[property]) {
                return element.dataset[property];
            }
        }

        return null;
    }
}



function GetDataDefinitionByPath(path) {
    return GetPropertyFromObjectByPath(demoToolData.AccordionDefinitions, path);
}


function GetDataDefinitionPathByHtmlElement(htmlElement) {
    return GetDataSetPropertyFromHtmlElementOrParents("definitionPath", htmlElement);
}


function GetDataDefinitionByHtmlElement(htmlElement) {
    var path = GetDataDefinitionPathByHtmlElement(htmlElement);

    if (path) {
        return GetDataDefinitionByPath(path);
    }
}

function GetDataByPath(path) {
    if (path.includes("{{CurrentOpenWebSession}}")) {
        path = path.replace("{{CurrentOpenWebSession}}", GetCurrentSessionPath(demoToolData.Guest.sessions));
    }

    return GetPropertyFromObjectByPath(demoToolData, path);
}


function GetDataPathByHtmlElement(htmlElement) {
    return GetDataSetPropertyFromHtmlElementOrParents("path", htmlElement);
}


function GetDataByHtmlElement(htmlElement) {
    var path = GetDataPathByHtmlElement(htmlElement);

    if (path) {
        return GetDataByPath(path);
    }
}


function GetDataPropertiesByHtmlElement(htmlElement) {
    return GetDataSetPropertyFromHtmlElementOrParents("properties", htmlElement);
}


function WeatherDescription(weathercode) {
    switch (weathercode) {
        case 0: return "clear sky";
        case 1: return "mainly clear";
        case 2: return "partly cloudy";
        case 3: return "overcast";
        case 45: return "fog";
        case 48: return "depositing rime fog";
        case 51: return "light drizzle";
        case 53: return "moderate drizzle";
        case 55: return "dense intensity drizzle";
        case 56: return "light freezing drizzle";
        case 57: return "dense intensity freezing drizzle";
        case 61: return "slight rain";
        case 63: return "moderate rain";
        case 65: return "heavy intensity rain";
        case 66: return "light freezing rain";
        case 67: return "heavy intensity freezing rain";
        case 71: return "slight snow fall";
        case 73: return "moderate snow fall";
        case 75: return "heavy intensity snow fall";
        case 77: return "snow grains";
        case 80: return "slight rain showers";
        case 81: return "moderate rain showers";
        case 82: return "violent rain showers";
        case 85: return "slight snow showers";
        case 95: return "slight thunderstorm";
        case 96: return "thunderstorm with slight hail";
        case 99: return "thunderstorm with heavy hail";
        default: return "weathercode is: " + weathercode;
    }
}

function ConvertWindDirectionDegreesToCardinalDirection(degrees) {
    if (degrees < 11.25) { return "N"; } else {
        if (degrees >= 11.25 && degrees < 33.75) { return "NNE"; } else {
            if (degrees >= 33.75 && degrees < 56.25) { return "NE"; } else {
                if (degrees >= 56.25 && degrees < 78.75) { return "ENE"; } else {
                    if (degrees >= 78.75 && degrees < 101.25) { return "E"; } else {
                        if (degrees >= 101.25 && degrees < 123.75) { return "ESE"; } else {
                            if (degrees >= 123.75 && degrees < 146.25) { return "SE"; } else {
                                if (degrees >= 146.25 && degrees < 168.75) { return "SSE"; } else {
                                    if (degrees >= 168.75 && degrees < 191.25) { return "S"; } else {
                                        if (degrees >= 191.25 && degrees < 213.75) { return "SSW"; } else {
                                            if (degrees >= 213.75 && degrees < 236.25) { return "SW"; } else {
                                                if (degrees >= 236.25 && degrees < 258.75) { return "WSW"; } else {
                                                    if (degrees >= 258.75 && degrees < 281.25) { return "W"; } else {
                                                        if (degrees >= 281.25 && degrees < 303.75) { return "WNW"; } else {
                                                            if (degrees >= 303.75 && degrees < 326.25) { return "NW"; } else {
                                                                if (degrees >= 326.25 && degrees < 348.75) { return "NNW"; } else {
                                                                    if (degrees >= 348.75) { return "N"; }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


function InitReplacers(data) {
    return new Promise(function (resolve, reject) {
        if (!demoToolData.Replacers) {
            demoToolData.Replacers = {};
        }
        demoToolData.Replacers.BrowserId = Boxever.getID();
        demoToolData.Replacers.BaseAppUrl = BASE_WEB_INTERFACE_URL;

        //Initialize UTM replacers.
        demoToolData.Replacers.UtmId = "";
        demoToolData.Replacers.UtmSource = "";
        demoToolData.Replacers.UtmMedium = "";
        demoToolData.Replacers.UtmCampaign = "";
        demoToolData.Replacers.UtmContent = "";
        demoToolData.Replacers.UtmTerm = "";

        var currentSession = GetCurrentSession(data.Guest.sessions);
        if (currentSession) {
            if (currentSession.events) {
                var firstViewEventinSession = currentSession.events.find(element => {
                    return element.type == "VIEW";
                });

                if (firstViewEventinSession) {
                    let arbitraryData = firstViewEventinSession.arbitraryData;
                    demoToolData.Replacers.UtmId = arbitraryData.utm_id ? arbitraryData.utm_id : "";
                    demoToolData.Replacers.UtmSource = arbitraryData.utm_source ? arbitraryData.utm_source : "";
                    demoToolData.Replacers.UtmMedium = arbitraryData.utm_medium ? arbitraryData.utm_medium : "";
                    demoToolData.Replacers.UtmCampaign = arbitraryData.utm_campaign ? arbitraryData.utm_campaign : "";
                    demoToolData.Replacers.UtmContent = arbitraryData.utm_content ? arbitraryData.utm_content : "";
                    demoToolData.Replacers.UtmTerm = arbitraryData.utm_term ? arbitraryData.utm_term : "";
                }
            }
        }

        GetIPGeolocation().then(function (response) {
            demoToolData.Replacers.location = {};
            demoToolData.Replacers.location.connectionType = response.connection_type;
            demoToolData.Replacers.location.ipAddress = response.ip;

            demoToolData.Replacers.location.coordinates = {};
            demoToolData.Replacers.location.coordinates.latitude = response.latitude;
            demoToolData.Replacers.location.coordinates.longitude = response.longitude;
            demoToolData.Replacers.location.coordinates.dmsLatitude = convertToDms(response.latitude, false);
            demoToolData.Replacers.location.coordinates.dmsLongitude = convertToDms(response.longitude, true);


            demoToolData.Replacers.location.zipCode = response.zipcode;
            demoToolData.Replacers.location.city = response.city;
            demoToolData.Replacers.location.district = response.district;
            demoToolData.Replacers.location.state = response.state_prov;
            demoToolData.Replacers.location.country = { name: response.country_name, flag: response.country_flag, code2: response.country_code2, code3: response.country_code3, capital: response.country_capital, tld: response.country_tld };
            demoToolData.Replacers.location.continent = { code: response.continent_code, name: response.continent_name };
            demoToolData.Replacers.location.isEU = response.isEU;


            demoToolData.Replacers.location.currency = response.currency;
            demoToolData.Replacers.location.languages = response.languages ? response.languages.split(",") : [];
            demoToolData.Replacers.location.callingCode = response.calling_code;

            if (!DEMOTOOL_OVERWRITE_LOCATION_ORGANIZATION) {
                demoToolData.Replacers.location.organization = response.organization;
            }
            else {
                demoToolData.Replacers.location.organization = DEMOTOOL_OVERWRITE_LOCATION_ORGANIZATION_VALUE;
            }
            demoToolData.Replacers.location.isp = response.isp;

            // Call weather service to get weather info.
            GetCurrentWeather(response.latitude, response.longitude).then(function (response) {
                demoToolData.Replacers.location.weather = {};
                demoToolData.Replacers.location.weather.code = response.current_weather.weathercode;
                demoToolData.Replacers.location.weather.description = WeatherDescription(response.current_weather.weathercode);
                demoToolData.Replacers.location.weather.temperature = response.current_weather.temperature;
                demoToolData.Replacers.location.weather.windDirection = response.current_weather.winddirection;
                demoToolData.Replacers.location.weather.cardinalWindDirection = ConvertWindDirectionDegreesToCardinalDirection(response.current_weather.winddirection);
                demoToolData.Replacers.location.weather.windSpeed = response.current_weather.windspeed;
            });

            demoToolData.Replacers.location.timezone = response.time_zone;
            let timezoneName = demoToolData.Replacers.location.timezone.name;
            demoToolData.Replacers.location.timezone.current_time = new Date(CurrentDateTimeInTimezoneLocaleString(timezoneName)).toISOString();
            demoToolData.Replacers.location.timezone.timeOfTheDay = TimeOfTheDay(CurrentTimeInTimezone(timezoneName));

            resolve(demoToolData);
        });
    });
}



function FormatDataByDataType(value, dataType) {
    switch (dataType) {
        case "Boolean":
            //If 'Boolean' then show as boolean text
            value = (value) ? "True" : "False";
            break;
        case "YesNoBoolean":
            //If 'Boolean' then show as boolean text
            value = (value) ? "Yes" : "No";
            break;
        case "Timestamp":
            //If 'Timestamp' then convert to ISO String and set dataType as 'DateTime'
            if (value) {
                value = new Date(value).toISOString();
            }
        //no break because DateTime code needs to be executed also.
        case "DateTime":
            // Replace T00:00Z with T00:00:00.000Z to make it an IsoDate.
            if (value) {
                if (value.endsWith("T00:00Z")) {
                    value = value.replace("T00:00Z", "T00:00:00.000Z");
                }

                if (isIsoDate(value)) {
                    value = value.endsWith("T00:00:00.000Z") ? FormatDateTimeForDisplay(value, true, false) : FormatDateTimeForDisplay(value, true, true);
                }
            }
            break;
    }
    return value;
}


function ReplaceValueTokens(value, dataPath) {
    if (value) {
        let returnValue = value;

        getTokens(value).forEach((tokenAndOptionalDataType) => {
            //Check if generic token;
            var genericTokenValue;
            switch (tokenAndOptionalDataType) {
                case "window.location.href":
                    genericTokenValue = window.location.href;
                    break;
            }

            if (genericTokenValue) {
                //replace generic token
                returnValue = genericTokenValue ?? returnValue.replace("{{" + tokenAndOptionalDataType + "}}", genericTokenValue);
            } else {
                //Check if token contains datatype.
                var token = tokenAndOptionalDataType;
                var dataType;
                if (token.includes("::")) {
                    var splittedToken = token.split("::");
                    token = splittedToken[0];
                    dataType = splittedToken[1];
                }

                //Replace tokens and format if format is specified {Token::DataType}
                var dataTokenValue;
                if (demoToolData.Replacers[token]) {
                    //Token exists in global replacement tokens
                    dataTokenValue = FormatDataByDataType(demoToolData.Replacers[token], dataType);
                }
                else {
                    //Token doesn't exist in global replacement tokens; Replace token with propertyValue.
                    if (dataPath) {
                        var data = GetDataByPath(dataPath);
                        dataTokenValue = FormatDataByDataType(data[token], dataType);
                    }
                }

                returnValue = dataTokenValue ? returnValue.replace("{{" + tokenAndOptionalDataType + "}}", dataTokenValue) : returnValue.replace("{{" + tokenAndOptionalDataType + "}}", "");
            }
        });

        return returnValue;
    }

    return value;
}


function InitializeIcon(icon) {
    switch (icon) {
        case "":
        case undefined:
        case "Optional":
            return DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_OPTIONAL;
        case "Required":
            return DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_REQUIRED;
        case "Calculated":
            return DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_CALCULATED;
    }
}


function AppendPropertyIconAndLabel(propertyDefinitionPath, parentHtmlElement) {
    var propertyDefinition = GetDataDefinitionByPath(propertyDefinitionPath);
    var data = GetDataByHtmlElement(parentHtmlElement);

    let label = propertyDefinition.Label ? propertyDefinition.Label : ToSentenceCase(propertyDefinition.Property);
    let showLabel = propertyDefinition.ShowLabel ?? true;
    let showIcon = propertyDefinition.ShowIcon ?? true;
    let icon = InitializeIcon(propertyDefinition.Icon);

    if (showIcon && icon) {
        AppendElementAsChild(parentHtmlElement, 'i', { id: parentHtmlElement.id + "Icon", classList: "propertyicon " + icon });
    }

    if (showLabel) {
        if (propertyDefinition.Tooltip) {
            AppendElementAsChild(parentHtmlElement, 'label', { id: parentHtmlElement.id + "Label", classList: "propertylabel", title: propertyDefinition.Tooltip, innerHTML: label + ": " });
        }
        else {
            AppendElementAsChild(parentHtmlElement, 'label', { id: parentHtmlElement.id + "Label", classList: "propertylabel", innerHTML: label + ": " });
        }
    }

    return parentHtmlElement;
}


function IsButtonEnabled(buttonId, className) {
    let button = document.getElementById(buttonId);
    return (button.classList.contains(className)) ? true : false;
}


function IsEventFilteringEnabled() {
    return IsButtonEnabled(demoToolData.htmlElements.FilterEventsButtonId, DEMOTOOL_FONTAWESOME_FILTERCIRCLEXMARK);
}


function IsNotConfiguredPropertiesEnabled() {
    return IsButtonEnabled(demoToolData.htmlElements.NotConfiguredPropertiesButtonId, DEMOTOOL_FONTAWESOME_BARSSTAGGERED);
}


function IsExtendedPropertiesEnabled() {
    return IsButtonEnabled(demoToolData.htmlElements.ExtendedPropertiesButtonId, DEMOTOOL_FONTAWESOME_ANGLESDOWN);
}


function SetCssClassesForExtendedProperty(propertyDefinition, htmlElement) {
    // Check if it is an ExtendedProperty (by default false)
    if (propertyDefinition.ExtendedProperty ?? false) {

        // Set the dataset 'isExtendedProperty' property
        htmlElement.classList.add("extendedproperty");

        // If expanded properties are not enabled then initially hide the element.
        if (IsExtendedPropertiesEnabled()) {
            htmlElement.classList.add("hide");
        }
    }
}

function SetCssClassesForNotConfiguredProperty(propertyDefinition, htmlElement) {
    // Check if it is an NotConfiguredProperty (by default false)
    if (propertyDefinition.NotConfiguredProperty ?? false) {
        // Set the dataset 'NotConfiguredProperty' property
        htmlElement.classList.add("notconfiguredproperty");

        // If expanded properties are not enabled then initially hide the element.
        if (IsNotConfiguredPropertiesEnabled()) {
            htmlElement.classList.add("hide");
        }
    }
}

function SetCssClassesForFilteredProperty(htmlElement) {
    // Set the dataset 'FilteredProperty' property
    htmlElement.classList.add("filteredproperty");

    // If expanded properties are not enabled then initially hide the element.
    if (IsEventFilteringEnabled()) {
        htmlElement.classList.add("hide");
    }
}


function ComposeDemoToolSeparator(propertyDefinition, counter, parentHtmlElement) {
    if (parentHtmlElement.lastChild && parentHtmlElement.lastChild.tagName != "hr" && parentHtmlElement.lastChild.classList != "seperator") {
        var separatorDiv = AppendElementAsChild(parentHtmlElement, 'div', { id: parentHtmlElement.id + "Seperator" + counter, classList: "seperator" });
        AppendElementAsChild(separatorDiv, 'hr', { id: separatorDiv.id + "HorizontalRule", classList: "seperator" });

        // Set CSS classes if extendedProperty.
        SetCssClassesForExtendedProperty(propertyDefinition, separatorDiv);

        return separatorDiv;
    }
    return null;
}


function AppendSuffix(propertyValue, displaySuffix, dataPath) {

    var propertyValueSuffix;
    if (displaySuffix.Text) {
        var innerText = JSON.stringify(displaySuffix.Text);
        //remove leading and trailing quotes and add space before
        innerText = " " + innerText.replace(/^"(.*)"$/, '$1');
        propertyValueSuffix = AppendElementAsChild(propertyValue, 'label', { id: propertyValue.id + "Suffix", classList: "propertyvaluesuffix", innerText: innerText });
    }
    if (displaySuffix.DisplayQAToolLink) {
        var sessionDataPath = dataPath.slice(0, dataPath.indexOf(".", dataPath.indexOf("sessions") + 9));
        if (GetDataByPath(sessionDataPath).sessionType == "WEB") {
            propertyValueSuffix = AppendElementAsChild(propertyValue, 'i', { id: propertyValue.id + "Suffix", classList: "propertyvaluesuffix qatoolbutton", title: "Open QA Tool" });
            var qaToolLinkUrl = new URL(window.location.href);
            qaToolLinkUrl.searchParams.append("bxQATool", "true");
            qaToolLinkUrl.searchParams.append("bxFlowRef", ReplaceValueTokens("{{flowRef}}", dataPath));
            qaToolLinkUrl.searchParams.append("bxVariantRef", ReplaceValueTokens("{{flowVariantRef}}", dataPath));
            AddLinkClickEventHandler(propertyValueSuffix, OPENQATOOLQUESTION_TEXT, qaToolLinkUrl);
        }
    }

    return propertyValueSuffix;
}


function ComposeDemoToolProperty(propertyDefinitionPath, parentHtmlElement) {
    var propertyDefinition = GetDataDefinitionByPath(propertyDefinitionPath);
    var dataPath = GetDataPathByHtmlElement(parentHtmlElement);
    var data = GetDataByHtmlElement(parentHtmlElement);

    //Initialize displayValue
    var displayValue;

    if (propertyDefinition.Value) {
        displayValue = ReplaceValueTokens(propertyDefinition.Value, dataPath);
    }
    else {
        displayValue = propertyDefinition.Object ? data[propertyDefinition.Object] : data;
        displayValue = propertyDefinition.Property ? displayValue[propertyDefinition.Property] : displayValue;
    }

    //If 'Prefix' is specified then add the prefix.
    if (propertyDefinition.Prefix && displayValue) {
        displayValue = propertyDefinition.Prefix + " " + displayValue;

    }

    //If 'AlwaysOverwrite' is explicitly set to true then replace with 'OverwriteValue'. By default treat as false.
    if (propertyDefinition.AlwaysOverwrite ?? false) {
        displayValue = propertyDefinition.OverwriteValue;
    }

    //Check if value should be considered as empty value
    if (propertyDefinition.TreatAsEmptyValues != null) {
        if (propertyDefinition.TreatAsEmptyValues.includes(displayValue)) {
            displayValue = "";
        }
    }

    //If 'OverwriteIfEmpty' is explicitly set to true then replace with 'OverwriteValue'. By default treat as false.
    if (propertyDefinition.OverwriteIfEmpty ?? false) {
        if (displayValue == "") {
            displayValue = propertyDefinition.OverwriteValue;
        }
    }

    // Format if specific DataType. By default treat as string.
    let dataType = propertyDefinition.DataType ? propertyDefinition.DataType : "String";
    displayValue = FormatDataByDataType(displayValue, dataType);

    // Render property if 'displayValue' is not empty or createIfEmptyValue is explicitly set.
    let createIfEmptyValue = propertyDefinition.CreateIfEmptyValue ?? false;
    let display = propertyDefinition.Display ?? true;

    if ((createIfEmptyValue || displayValue) && display) {
        var propertyId = parentHtmlElement.id + (propertyDefinition.HtmlElementId ? propertyDefinition.HtmlElementId : ToPascalCase(propertyDefinition.Property ?? (propertyDefinition.Label ?? "")) + "Property");

        var property = propertyDefinition.Property
            ? AppendElementAsChild(parentHtmlElement, 'div', { id: propertyId, classList: "property", dataDefinitionPath: propertyDefinitionPath, dataPath: dataPath + "." + propertyDefinition.Property })
            : AppendElementAsChild(parentHtmlElement, 'div', { id: propertyId, classList: "property", dataDefinitionPath: propertyDefinitionPath });


        // Set CSS classes if notConfiguredProperty.
        SetCssClassesForNotConfiguredProperty(propertyDefinition, property);

        // Set CSS classes if extendedProperty.
        SetCssClassesForExtendedProperty(propertyDefinition, property);


        AppendPropertyIconAndLabel(propertyDefinitionPath, property);
        var propertyValue;

        if (propertyDefinition.Link) {
            // Render value of property as link 
            let link = ReplaceValueTokens(propertyDefinition.Link, dataPath);
            propertyValue = AppendElementAsChild(property, 'a', { id: property.id + "Link", classList: "propertyvalue", href: link, target: DEMOTOOL_SITECORECDP_TARGET_NAME, innerText: displayValue }); //JSON.stringify(displayValue)
            let propertyValueCopyToClipboard = AppendElementAsChild(property, 'i', { id: property.id + "CopyToClipboard", classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + "link" });
            if (propertyDefinition.Suffix) {
                AppendSuffix(propertyValue, propertyDefinition.Suffix, dataPath);
            }
        }
        else {
            // Render value of property
            propertyValue = AppendElementAsChild(property, 'label', { id: property.id + "Value", classList: "propertyvalue", innerHTML: displayValue }); //JSON.stringify(displayValue)
            if (propertyDefinition.Suffix) {
                AppendSuffix(propertyValue, propertyDefinition.Suffix, dataPath);
            }
        }

        //If 'CopyToClipboardValue'
        if (propertyDefinition.CopyToClipboardValue) {
            propertyValue.after(" ");
            let propertyValueCopyToClipboard = AppendElementAsChild(property, 'i', { id: property.id + "CopyToClipboard", classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_COPY + " copyicon" });
            propertyValueCopyToClipboard.addEventListener("click", function () { CopyToClipboard(ReplaceValueTokens(propertyDefinition.CopyToClipboardValue, dataPath)); });
        }

        if (propertyDefinition.ContiniouslyUpdate) {
            if (propertyDefinition.Property == "current_time") {
                // Initiate Timezone Time Interval
                setInterval(() => {
                    let timezoneName = demoToolData.Replacers.location.timezone.name;
                    demoToolData.Replacers.location.timezone.current_time = new Date(CurrentDateTimeInTimezoneLocaleString(timezoneName)).toISOString();
                    propertyValue.innerText = FormatDataByDataType(demoToolData.Replacers.location.timezone.current_time, dataType);
                }, 1000);
            } else if (propertyDefinition.Property == "timeOfTheDay") {
                // Initiate Timezone Time Interval
                setInterval(() => {
                    let timezoneName = demoToolData.Replacers.location.timezone.name;
                    demoToolData.Replacers.location.timezone.timeOfTheDay = TimeOfTheDay(CurrentTimeInTimezone(timezoneName));
                    propertyValue.innerText = FormatDataByDataType(demoToolData.Replacers.location.timezone.timeOfTheDay, dataType);
                }, 1000);
            }
        }

        // Property is rendered
        return true;
    }

    // Property is not rendered
    return false;
}

function ComposeDemoToolPropertyObject(propertyDefinitionPath, parentHtmlElement) {
    var propertyDefinition = GetDataDefinitionByPath(propertyDefinitionPath);
    var dataPath = GetDataPathByHtmlElement(parentHtmlElement);
    var data = GetDataByHtmlElement(parentHtmlElement);

    if (data[propertyDefinition.Property]) {
        var propertyObject = AppendElementAsChild(parentHtmlElement, 'div', { id: parentHtmlElement.id + ToPascalCase(ToSentenceCase(propertyDefinition.Property)), classList: "propertyobject", dataDefinitionPath: propertyDefinitionPath, dataPath: dataPath + "." + propertyDefinition.Property, dataProperties: "Properties" });
        var contentHtmlElement = propertyObject;

        // Set CSS classes for notConfiguredProperty.
        SetCssClassesForNotConfiguredProperty(propertyDefinition, propertyObject);
        // Set CSS classes for extendedProperty.
        SetCssClassesForExtendedProperty(propertyDefinition, propertyObject);

        AppendPropertyIconAndLabel(propertyDefinitionPath, propertyObject);

        if (propertyDefinition.Collapsable) {
            let collapsableContainerCaret = AppendElementAsChild(propertyObject, 'i', { id: propertyObject.id + "Caret", classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_CARETDOWN + " " + "collapsablecontainerheadercaret" });
            let collapsableContainerContent = AppendElementAsChild(propertyObject, 'div', { id: propertyObject.id + "Content", classList: "propertyobjectcontent", style: "display:none;", dataProperties: "Properties" });
            // Properties need to be placed in collapsable div. 
            // contentElement needs to reference the collapsbale div
            contentHtmlElement = collapsableContainerContent;

            // Render caret event listener if properties are not hidden
            // Set ContentElementId dataset so that the caret click event handler can find the content element.
            collapsableContainerCaret.dataset.ContentElementId = collapsableContainerContent.id;
            collapsableContainerCaret.addEventListener("click", function () {
                //Toggle open/close icons
                this.classList.toggle(DEMOTOOL_FONTAWESOME_CARETDOWN);
                this.classList.toggle(DEMOTOOL_FONTAWESOME_CARETUP);

                // Hide or show collapsable container content
                var content = document.getElementById(this.dataset.ContentElementId);
                content.classList.toggle("open");
                content.style.display = content.classList.contains("open") ? "inherit" : "none";
            });
        }

        // Render properties (if necessary in the collapsable div)
        ComposeObject(contentHtmlElement, false);

        // Return if there are no properties of the object rendered else return the propertyObject htmlElement.
        if (!contentHtmlElement.querySelector('.property')) {
            contentHtmlElement.remove();
            return;
        } else {
            return contentHtmlElement;
        }
    }

    return;
}


function ComposeDemoToolRigidArrayContainer(parentHtmlElement) {
    var propertyDefinitionPath = GetDataDefinitionPathByHtmlElement(parentHtmlElement);
    var propertyDefinition = GetDataDefinitionByPath(propertyDefinitionPath);
    var dataPath = GetDataPathByHtmlElement(parentHtmlElement);
    var data = GetDataByHtmlElement(parentHtmlElement);

    if (data) {
        //Render Content
        var rigidContainer = AppendElementAsChild(parentHtmlElement, 'div', { id: parentHtmlElement.id + "RigidContainer", classList: "rigidcontainer", dataDefinitionPath: propertyDefinitionPath, dataPath: dataPath + "." + propertyDefinition.Property, dataProperties: "Properties" });

        for (let i = 0; i < data.length; i++) {
            var property = AppendElementAsChild(rigidContainer, 'div', { id: rigidContainer.id + i, classList: "property", dataDefinitionPath: propertyDefinitionPath, dataPath: dataPath + "." + propertyDefinition.Property })
            var propertyValue = AppendElementAsChild(property, 'label', { id: property.id + "Value", classList: "propertyvalue", innerHTML: JSON.stringify(data[i]) });
        }

        // div with label & value added.
        return rigidContainer;
    }
}


function ComposeDemoToolCollapsableArrayContainer(parentHtmlElement) {
    var propertyDefinition = GetDataDefinitionByHtmlElement(parentHtmlElement);
    propertyDefinition.HideProperties = propertyDefinition.HideProperties ?? false;

    let showObject = false;

    var collapsableContainer = AppendElementAsChild(parentHtmlElement, 'div', { id: parentHtmlElement.id + "CollapsableContainer", classList: "collapsablecontainer" });
    let collapsableContainerHeader = AppendElementAsChild(collapsableContainer, 'div', { id: collapsableContainer.id + "Header", classList: "collapsablecontainerheader" });
    ComposeTooltip(collapsableContainer);
    var collapsableContainerLabel;

    if (propertyDefinition.HideProperties) {
        // Overwrite class to overrule margin-left.
        collapsableContainer.classList = "collapsablecontainerwithoutproperties";
        collapsableContainerLabel = AppendElementAsChild(collapsableContainerHeader, 'div', { id: collapsableContainerHeader.id + "Label", classList: "collapsablecontainerlabel", dataProperties: "CollapsedProperties" });
    }
    else {
        let collapsableContainerCaret = AppendElementAsChild(collapsableContainerHeader, 'i', { id: collapsableContainerHeader.id + "Caret", classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_CARETDOWN + " " + "collapsablecontainerheadercaret" });
        collapsableContainerLabel = AppendElementAsChild(collapsableContainerHeader, 'div', { id: collapsableContainerHeader.id + "Label", classList: "collapsablecontainerlabel", dataProperties: "CollapsedProperties" });
        let collapsableContainerContent = AppendElementAsChild(collapsableContainer, 'div', { id: collapsableContainer.id + "Content", classList: "collapsablecontainercontent", style: "display:none;", dataProperties: "Properties" });
        let collapsableContainerContentHorizontalRule = AppendElementAsChild(collapsableContainerContent, 'hr', { id: collapsableContainerContent.id + "HorizontalRule", classList: "seperator" });

        // Render caret event listener if properties are not hidden
        // Set ContentElementId dataset so that the caret click event handler can find the content element.
        collapsableContainerCaret.dataset.ContentElementId = collapsableContainerContent.id;
        collapsableContainerCaret.addEventListener("click", function () {
            //Toggle open/close icons
            this.classList.toggle(DEMOTOOL_FONTAWESOME_CARETDOWN);
            this.classList.toggle(DEMOTOOL_FONTAWESOME_CARETUP);

            // Hide or show collapsable container content
            var content = document.getElementById(this.dataset.ContentElementId);
            content.classList.toggle("open");
            content.style.display = content.classList.contains("open") ? "inherit" : "none";
        });

        if (ComposeObject(collapsableContainerContent, false)) {
            showObject = true;
        }
    }
    if (ComposeObject(collapsableContainerLabel, false)) {
        showObject = true;
    }

    // If no label can be rendered then take singularized property name and add counter.
    //<div id="DemoToolInfoSliderBodyGuestInformationAccordionContentIdentifiersPropertyArrayContainer0CollapsableContainerHeaderLabelProperty" class="property" data-definition-path="Accordions.0.Properties.18.CollapsedProperties.0">
    //<label id="DemoToolInfoSliderBodyGuestInformationAccordionContentIdentifiersPropertyArrayContainer0CollapsableContainerHeaderLabelPropertyValue" class="propertyvalue">"SITECORE_ID - Johan Becue"</label></div >
    if (collapsableContainerLabel.innerHTML.length == 0) {
        var collapsableContainerLabelProperty = AppendElementAsChild(collapsableContainerLabel, 'div', { id: collapsableContainerLabel.id + "Property", classList: "property" });
        var collapsableContainerLabelPropertyLabel = AppendElementAsChild(collapsableContainerLabelProperty, 'label', { id: collapsableContainerLabelProperty.id + "Value", classList: "propertyvalue" });
        collapsableContainerLabelPropertyLabel.innerText = pluralize.singular(propertyDefinition.Property) + " " + (parseInt(parentHtmlElement.dataset.elementCounter) + 1);
    }

    if (!showObject) {
        collapsableContainer.remove();
    }

    // div with label & value added.
    return collapsableContainer;
}

function IsFilterableEvent(event) {
    if (event.type == "TRACKING" && event.arbitraryData.flowExecution.flowFriendlyId == "getguestref") {
        return true;
    }
}

function ComposeDemoToolArray(propertyDefinitionPath, parentHtmlElement) {
    var propertyDefinition = GetDataDefinitionByPath(propertyDefinitionPath);
    var dataPath = GetDataPathByHtmlElement(parentHtmlElement);
    var data = GetDataByHtmlElement(parentHtmlElement);

    var showArray = false;

    var propertyId = parentHtmlElement.id + (propertyDefinition.HtmlElementId ? propertyDefinition.HtmlElementId : ToPascalCase(propertyDefinition.Property ?? (propertyDefinition.Label ?? "")) + "Property");

    var property = propertyDefinition.Property
        ? AppendElementAsChild(parentHtmlElement, 'div', { id: propertyId, classList: "property", dataDefinitionPath: propertyDefinitionPath, dataPath: dataPath + "." + propertyDefinition.Property })
        : AppendElementAsChild(parentHtmlElement, 'div', { id: propertyId, classList: "property", dataDefinitionPath: propertyDefinitionPath });

    // Set CSS classes if notConfiguredProperty.
    SetCssClassesForNotConfiguredProperty(propertyDefinition, property);

    // Set CSS classes if extendedProperty.
    SetCssClassesForExtendedProperty(propertyDefinition, property);

    AppendPropertyIconAndLabel(propertyDefinitionPath, property);

    data = propertyDefinition.Object ? data[propertyDefinition.Object] : data;
    data = propertyDefinition.Property ? data[propertyDefinition.Property] : data;

    if (data) {
        // If filtering is enabled then displayed array length needs to be based on filtered data.
        var filteredData = data;
        if (IsEventFilteringEnabled()) {
            filteredData = data.filter(function (e) {
                return IsFilterableEvent(e) ? false : true;
            });
        }

        var collapsableContainerLength = AppendElementAsChild(property, 'label', { id: property.id + "Length", classList: "propertylength", innerText: "{" + filteredData.length + "}", dataFilteredText: "{" + filteredData.length + "}", dataText: "{" + data.length + "}" })
        var collapsableContainerCaret = AppendElementAsChild(property, 'i', { id: property.id + "Caret", classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_CARETDOWN + " " + "collapsablecontainercaret", title: "Open" });
        var collapsableContainerContent = AppendElementAsChild(property, 'div', { id: property.id + "ArrayContainer", classList: "arraycontainercontent", style: "display:none;", dataDefinitionPath: propertyDefinitionPath, dataPath: dataPath + "." + propertyDefinition.Property, dataProperties: "Properties" });

        // Set ContentElementId dataset so that the caret click event handler can find the content element.
        collapsableContainerCaret.dataset.ContentElementId = collapsableContainerContent.id;
        collapsableContainerCaret.addEventListener("click", function () {
            //Toggle open/close icons
            this.classList.toggle(DEMOTOOL_FONTAWESOME_CARETDOWN);
            this.classList.toggle(DEMOTOOL_FONTAWESOME_CARETUP);
            this.title = (this.title == "Open") ? "Close" : "Open";

            // Hide or show collapsable container content
            var content = document.getElementById(this.dataset.ContentElementId);
            content.classList.toggle("open");
            content.style.display = content.classList.contains("open") ? "inherit" : "none";

            if (content.classList.contains("open")) {
                // Render the container content
                var data = GetDataByHtmlElement(this);

                if (isStringArray(data)) {
                    // Array elements are strings; render as rigid container
                    ComposeDemoToolRigidArrayContainer(collapsableContainerContent);
                }
                else {
                    // Array elements are objects or arrays; render as collapsable container
                    for (let i = 0; i < data.length; i++) {
                        var arrayPropertyElement = AppendElementAsChild(collapsableContainerContent, 'div', { id: collapsableContainerContent.id + i, classList: "propertyelement", dataPath: dataPath + "." + propertyDefinition.Property + "." + i, dataElementCounter: i });
                        ComposeDemoToolCollapsableArrayContainer(arrayPropertyElement);

                        if (IsEventFilteringEnabled()) {
                            if (IsFilterableEvent(data[i])) {
                                // Set CSS classes if filteredProperty.
                                SetCssClassesForFilteredProperty(arrayPropertyElement);
                            }
                        }
                    }
                }
            }
            else {
                // Empty the container
                collapsableContainerContent.replaceChildren();
            }
        });

        showArray = true;
    }

    return showArray;
}


function isJSON(text) {
    if (typeof text !== "string") {
        return false;
    }
    try {
        var json = JSON.parse(text);
        return (typeof json === 'object');
    }
    catch (error) {
        return false;
    }
}


function InitializeAccordionClickEventHandlers(parentHtmlElement) {
    /* add open&close accordion event handler */
    parentHtmlElement.addEventListener("click", function () {
        //Toggle open/close
        this.classList.toggle("open");

        //Hide or show collapsable container content
        let content = this.nextElementSibling;
        content.classList.toggle("open");
        content.style.display = content.classList.contains("open") ? "inline" : "none";
    });
}

function GetAccordionDivId(parentHtmlElement, accordionDefinition) {
    return parentHtmlElement.id + (accordionDefinition.HtmlElementId ? accordionDefinition.HtmlElementId : ToPascalCase(accordionDefinition.Name) + "Accordion");
}

function ComposeAccordion(accordionDefinitionPath, parentHtmlElement) {
    //Get accordionDefinition based on accordionDefinitionPath
    var accordionDefinition = GetDataDefinitionByPath(accordionDefinitionPath);

    console.debug(CONSOLE_LOG_PREFIX + "Starting ComposeAccordion '" + accordionDefinition.Name + "'...");

    // Initialize defaults
    var accordionDivId = GetAccordionDivId(parentHtmlElement, accordionDefinition);
    var accordion = document.getElementById(accordionDivId);
    var accordionContent = null;

    //Try to get the accordion element. If it doesn't exist, create it.)
    var composeAccordionContent = false;
    if (!accordion) {
        //Accordion does not exist
        //Create Accordion element
        accordion = (accordionDefinition.Properties.filter(p => p.hasOwnProperty('Property')).length > 0)
            ? AppendElementAsChild(parentHtmlElement, 'div', { id: accordionDivId, classList: "Accordion", dataDefinitionPath: accordionDefinitionPath, dataPath: accordionDefinition.DataSource })
            : AppendElementAsChild(parentHtmlElement, 'div', { id: accordionDivId, classList: "Accordion", dataDefinitionPath: accordionDefinitionPath + ".Properties.0", dataPath: accordionDefinition.DataSource });
        //Create Accordion Button element
        var accordionButton = AppendElementAsChild(accordion, "button", { id: accordion.id + "AccordionButton", classList: "AccordionButton", innerText: accordionDefinition.Name });
        InitializeAccordionClickEventHandlers(accordionButton);
        //Create Accordion Content element
        accordionContent = AppendElementAsChild(accordion, 'div', { id: accordion.id + "AccordionContent", classList: "AccordionContent" });
        composeAccordionContent = true;
    }
    else {
        //Accordion already exists
        if (accordionDefinition.RefreshOnDisplay ?? true) {
            //Get Accordion Content element
            accordionContent = document.getElementById(accordionDivId + "AccordionContent");
            //Empty Accordion Content element
            accordionContent.replaceChildren();
            composeAccordionContent = true;
        }
    }

    if (accordionDefinition.Display == false) {
        composeAccordionContent = false;
    } else {
        if (accordionDefinition.Display == "if not equal to current session") {
            if (GetCurrentSessionPath(demoToolData.Guest.sessions) == accordionDefinition.DataSource) {
                composeAccordionContent = false;
            }
        }
    }

    //Compose Accordion Content
    if (composeAccordionContent) {
        //Compose accordion and show if it contains content.
        accordion.style.display = (ComposeObject(accordionContent, false)) ? "block" : "none";
    }
    else {
        accordion.style.display = "none";
    }

    console.debug(CONSOLE_LOG_PREFIX + "Ended ComposeAccordion '" + accordionDefinition.Name + "'.");
    return accordion;
}


// ****************************************************************************
// Gets the current guest ref by calling a CDP flow.
// This is a workaround needed when an anonymous guest identify itself as a
// previously known guest, CDP is merging the 2 guests. The browser keeps the
// anonymous guest ref. From that moment, calls to the authenticated CDP APIs
// like get/set for data extensions are failing when using this old anonymous
// guest ref. These calls require the previously known guest ref which is
// returned by our flow.
// ****************************************************************************
function getGuestRef() {
    return GetFullStackExperience('getguestref');
}


function ComposeAccordions(parentHtmlElement) {
    console.debug(CONSOLE_LOG_PREFIX + "Starting ComposeAccordions...");

    getGuestRef().then(function (data) {
        console.debug(CONSOLE_LOG_PREFIX + "getGuestRef() returns:");
        console.debug(data);

        GetGuestContext(data.guestRef).then(function (guestContext) {
            console.debug(CONSOLE_LOG_PREFIX + "GetGuestContext(data.guestRef) returns:");
            console.debug(data);
            demoToolData.Guest = guestContext;
            sessionStorage.setItem("BoxeverGuest", JSON.stringify(guestContext));

            GetContainerDefintionsJson().then(function (json) {
                console.debug(CONSOLE_LOG_PREFIX + "GetContainerDefintionsJson() returns:");
                console.debug(json);

                demoToolData.AccordionDefinitions = json;

                if (demoToolData.Guest) {
                    //Initialize replacements
                    InitReplacers(demoToolData).then(function () {
                        for (var i = 0; i < json.Accordions.length; i++) {
                            ComposeAccordion("Accordions." + i, parentHtmlElement);
                        }
                    });
                }
            });

        });
    });

    console.debug(CONSOLE_LOG_PREFIX + "Ended ComposeAccordions.");
}



function AddLinkClickEventHandler(button, yesNoQuestion, url) {
    //Code to operate the Info Slider
    button.onclick = function () {
        // Ask to confirm reloading page to open the Url 
        if (confirm(yesNoQuestion)) {
            window.location.href = url;
        }
    };
}



function AddInfoSliderClickEventHandlers(InfoSlider, InfoSliderToggle, InfoSliderToggleIcon, InfoSliderBody) {
    //Code to operate the Info Slider
    InfoSliderToggle.onclick = function () {
        //Toggle open/close
        InfoSlider.classList.toggle("open");


        if (InfoSlider.classList.contains("open")) {
            //Compose accordions on open.
            ComposeAccordions(InfoSliderBody);
        }
        else {
            //Loop backward to be able to delete tooltips
            if (demoToolData && demoToolData.toolTipsArray) {
                for (var i = demoToolData.toolTipsArray.length - 1; i >= 0; i--) {
                    var toolTipButton = document.getElementById(demoToolData.toolTipsArray[i].id);
                    togglePopper(toolTipButton);
                }
            }
        }

        //Change icons
        InfoSliderToggleIcon.classList.toggle(DEMOTOOL_FONTAWESOME_CIRCLEINFO);
        InfoSliderToggleIcon.classList.toggle(DEMOTOOL_FONTAWESOME_CIRCLEXMARK);
    };
}


function AddInfoSliderFilterButtonClickEventHandlers(button, htmlElementsDataId, toggleClassList, className, enabled, enabledText, disabledText, sessionStorageItemName) {
    //Add the ExtendedPropertiesButtonId to the htmlElementIDs and init htmlElementIDs if neccessary.
    if (!demoToolData.htmlElements) {
        demoToolData.htmlElements = {};
    }
    demoToolData.htmlElements[htmlElementsDataId] = button.id;

    //Add click event listener to the button
    button.addEventListener("click", function (e) {
        e.preventDefault();

        // Toggle button icons
        for (let i = 0; i < toggleClassList.length; i++) {
            this.classList.toggle(toggleClassList[i]);
        }

        if (enabled()) {
            this.title = enabledText;
            sessionStorage.setItem(sessionStorageItemName, true);
        }
        else {
            this.title = disabledText;
            sessionStorage.setItem(sessionStorageItemName, false);
        }

        // Toggle hide for all property html elements with the specified classname.
        var propertyElements = document.getElementsByClassName(className);
        for (let i = 0; i < propertyElements.length; i++) {
            propertyElements[i].classList.toggle('hide');
        }

        // Update Array element counters
        var propertyLengthLabels = document.querySelectorAll('[data-filtered-text]', '[data-text]');
        for (i = 0; i < propertyLengthLabels.length; i++) {
            propertyLengthLabels[i].innerText = IsEventFilteringEnabled() ? propertyLengthLabels[i].dataset["filteredText"] : propertyLengthLabels[i].dataset["text"];
        }
    });
}

function AddInfoSliderButtonClickEventHandlers(button, htmlElementsDataId, toggleClassList, className, enabled, enabledText, disabledText, sessionStorageItemName) {
    //Add the ExtendedPropertiesButtonId to the htmlElementIDs and init htmlElementIDs if neccessary.
    if (!demoToolData.htmlElements) {
        demoToolData.htmlElements = {};
    }
    demoToolData.htmlElements[htmlElementsDataId] = button.id;

    //Add click event listener to the button
    button.addEventListener("click", function (e) {
        e.preventDefault();

        // Toggle button icons
        for (let i = 0; i < toggleClassList.length; i++) {
            this.classList.toggle(toggleClassList[i]);
        }

        if (enabled()) {
            this.title = enabledText;
            sessionStorage.setItem(sessionStorageItemName, false);
        }
        else {
            this.title = disabledText;
            sessionStorage.setItem(sessionStorageItemName, true);
        }

        // Toggle hide for all property html elements with the specified classname.
        var propertyElements = document.getElementsByClassName(className);
        for (let i = 0; i < propertyElements.length; i++) {
            propertyElements[i].classList.toggle('hide');
        }
    });
}

function AddInfoSliderAboutButtonClickEventHandlers(toolTipButton, toolTipContent) {
    toolTipButton.addEventListener("click", function (e) {
        e.preventDefault();

        if (usePopper) {
            //Create the popper
            var popperInstance = Popper.createPopper(toolTipButton, toolTipContent, {
                placement: "auto", //preferred placement of popper
                modifiers: [
                    {
                        name: "offset", //offsets popper from the reference/button
                        options: {
                            offset: [0, 8]
                        }
                    },
                    {
                        name: "flip", //flips popper with allowed placements
                        options: {
                            allowedAutoPlacements: ["right", "left", "top", "bottom"],
                            rootBoundary: "viewport"
                        }
                    }
                ]
            });
        }
        else {
            //Trying to remove popper dependency.
            positionAt(toolTipButton, "left", toolTipContent);
        }
    });

}
function AddInfoSliderExtendedPropertiesButtonClickEventHandlers(button, htmlElementsDataId) {
    AddInfoSliderButtonClickEventHandlers(button, htmlElementsDataId, [DEMOTOOL_FONTAWESOME_ANGLESDOWN, DEMOTOOL_FONTAWESOME_ANGLESUP], "extendedproperty", function () { return IsExtendedPropertiesEnabled() }, EXTENDEDPROPERTIESENABLED_TEXT, EXTENDEDPROPERTIESDISABLED_TEXT, "DemoToolExtendedPropertiesButtonState");
}

function AddInfoSliderNotConfiguredPropertiesButtonClickEventHandlers(button, htmlElementsDataId) {
    AddInfoSliderButtonClickEventHandlers(button, htmlElementsDataId, [DEMOTOOL_FONTAWESOME_BARSSTAGGERED, DEMOTOOL_FONTAWESOME_BARS], "notconfiguredproperty", function () { return IsNotConfiguredPropertiesEnabled() }, NOTCONFIGUREDPROPERTIESENABLED_TEXT, NOTCONFIGUREDPROPERTIESDISABLED_TEXT, "DemoToolNotConfiguredPropertiesButtonState");
}

function AddInfoSliderFilterEventsButtonClickEventHandlers(button, htmlElementsDataId) {
    AddInfoSliderFilterButtonClickEventHandlers(button, htmlElementsDataId, [DEMOTOOL_FONTAWESOME_FILTERCIRCLEXMARK, DEMOTOOL_FONTAWESOME_FILTER], "filteredproperty", function () { return IsEventFilteringEnabled() }, EVENTFILTERINGENABLED_TEXT, EVENTFILTERINGDISABLED_TEXT, "DemoToolFilterEventsButtonState");
}

function AddInfoSliderQaToolButtonClickEventHandlers(button) {
    var qaToolLinkUrl = new URL(window.location.href);
    qaToolLinkUrl.searchParams.append("bxQATool", "true");
    AddLinkClickEventHandler(button, OPENQATOOLQUESTION_TEXT, qaToolLinkUrl);
}

function InitializeAboutPopup(parentHtmlElement) {
    console.debug(CONSOLE_LOG_PREFIX + "Starting InitializeAboutPopup...");

    var aboutPopUpContentHtmlElement = AppendElementAsChild(parentHtmlElement, 'div', { id: parentHtmlElement.id + "Popup", classList: "tooltipcontent" });
    var aboutPopUpContentHeaderHtmlElement = AppendElementAsChild(aboutPopUpContentHtmlElement, 'label', { id: aboutPopUpContentHtmlElement.id + "Header", classList: "tooltipheader" });
    var aboutPopUpCloseButtonHtmlElement = AppendElementAsChild(aboutPopUpContentHtmlElement, 'i', { id: aboutPopUpContentHtmlElement.id + "TooltipCloseButton", classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_XMARK + " " + "tooltipclosebutton", title: "Close" });
    var aboutPopUpContentHeaderHorizontalRuleHtmlElement = AppendElementAsChild(aboutPopUpContentHtmlElement, 'hr', { id: aboutPopUpContentHtmlElement.id + "HorizontalRule", classList: "seperator" });

    //Add click event listener to the tooltip close button
    aboutPopUpCloseButtonHtmlElement.addEventListener("click", function (e) {
        e.preventDefault();
        //Pass the tooltipbutton (nextElementSibling) to the togglePopper method because id of button is in Array
        togglePopper(parentHtmlElement.lastChild);
    });

    //Compose Tooltip Title
    aboutPopUpContentHeaderHtmlElement.innerHTML = DEMOTOOL_INFOSLIDER_TITLE;

    //Compose Tooltip Content
    return aboutPopUpContentHtmlElement;
}


function InitializeInfoSlider() {
    console.debug(CONSOLE_LOG_PREFIX + "Starting InitializeInfoSlider...");

    //Info Slider HTML
    var InfoSlider = AppendElementAsChild(document.body, 'div', { id: DEMOTOOL_INFOSLIDER_ELEMENTNAME });

    //Info Slider Toggle
    var InfoSliderToggle = AppendElementAsChild(InfoSlider, 'div', { id: InfoSlider.id + "Toggle", classList: "demoToolInfoSliderToggle", title: "Guest Data" });
    var InfoSliderToggleIcon = AppendElementAsChild(InfoSliderToggle, 'i', { id: InfoSliderToggle.id + "Icon", classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_CIRCLEINFO });

    //Info Slider Body
    var InfoSliderBody = AppendElementAsChild(InfoSlider, 'div', { id: InfoSlider.id + "Body", classList: "demoToolInfoSliderBody" });

    //Info Slider Header
    var InfoSliderBodyHeader = AppendElementAsChild(InfoSliderBody, 'div', { id: InfoSliderBody.id + "Header", classList: "demoToolInfoSliderBodyHeader" });

    //Info Slider Header Top
    var InfoSliderBodyHeaderTop = AppendElementAsChild(InfoSliderBodyHeader, "div", { id: InfoSliderBodyHeader.id + "Top", classList: "demoToolInfoSliderBodyHeaderTop" });

    //Info Slider Header Top Left
    var InfoSliderBodyHeaderTopLeft = AppendElementAsChild(InfoSliderBodyHeaderTop, "div", { id: InfoSliderBodyHeaderTop.id + "Left", classList: "demoToolInfoSliderBodyHeaderTopLeft" });
    var InfoSliderBodyHeaderTopCdpAndPersonalizeLogo = AppendElementAsChild(InfoSliderBodyHeaderTopLeft, "img", { id: InfoSliderBodyHeaderTopLeft.id + "Image", src: CDPANDPERSONALIZELOGO_URL, classList: "demoToolInfoSliderBodyHeaderTopLeftLogo" });
    var InfoSliderBodyHeaderTopToolTitle = AppendElementAsChild(InfoSliderBodyHeaderTopLeft, "label", { id: InfoSliderBodyHeaderTopLeft.id + "ToolTitle", innerText: DEMOTOOL_INFOSLIDER_TITLE, classList: "demoToolInfoSliderBodyHeaderTopLeftToolTitle" });

    //Info Slider Header Top Right
    var InfoSliderBodyHeaderTopRight = AppendElementAsChild(InfoSliderBodyHeaderTop, "div", { id: InfoSliderBodyHeaderTop.id + "Right", classList: "demoToolInfoSliderBodyHeaderTopRight" });

    //Info Slider Header Bottom
    var InfoSliderBodyHeaderBottom = AppendElementAsChild(InfoSliderBodyHeader, "div", { id: InfoSliderBodyHeader.id + "Bottom", classList: "demoToolInfoSliderBodyHeaderBottom" });

    //Info Slider Header Top Right Top
    var InfoSliderBodyHeaderTopRightTop = AppendElementAsChild(InfoSliderBodyHeaderTopRight, "div", { id: InfoSliderBodyHeaderTopRight.id + "Top", classList: "demoToolInfoSliderBodyHeaderTopRightTop" });
    var InfoSliderBodyHeaderTopRightTopVersion = AppendElementAsChild(InfoSliderBodyHeaderTopRightTop, "label", { id: InfoSliderBodyHeaderTopRightTop.id + "Version", innerText: DEMOTOOL_VERSION, classList: "demoToolInfoSliderBodyHeaderTopRightTopVersion" });

    //Info Slider Header Top Right Bottom
    var InfoSliderBodyHeaderBottom = AppendElementAsChild(InfoSliderBodyHeaderTopRight, "div", { id: InfoSliderBodyHeaderTopRight.id + "Bottom", classList: "demoToolInfoSliderBodyHeaderBottom" });


    //var AboutButtonDataId = "AboutButton";
    //var InfoSliderBodyHeaderBottomAboutButton = AppendElementAsChild(InfoSliderBodyHeaderBottom, 'i', { id: InfoSliderBodyHeaderBottom.id + AboutButtonDataId, classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_CIRCLEINFO + " " + "aboutbutton", title: ABOUT_TEXT })
    //var aboutPopUp = InitializeAboutPopup(InfoSliderBodyHeaderBottomAboutButton);
    //AddInfoSliderAboutButtonClickEventHandlers(InfoSliderBodyHeaderBottomAboutButton, aboutPopUp);

    //ExtendedPropertiesButton
    var ExtendedPropertiesButtonDataId = "ExtendedPropertiesButton";
    var InfoSliderBodyHeaderBottomExtendedPropertiesButton = AppendElementAsChild(InfoSliderBodyHeaderBottom, 'i', { id: InfoSliderBodyHeaderBottom.id + ExtendedPropertiesButtonDataId, classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_ANGLESDOWN + " " + "expandpropertiesbutton", title: EXTENDEDPROPERTIESENABLED_TEXT });
    AddInfoSliderExtendedPropertiesButtonClickEventHandlers(InfoSliderBodyHeaderBottomExtendedPropertiesButton, ExtendedPropertiesButtonDataId + "Id");
    if (sessionStorage.getItem("DemoToolExtendedPropertiesButtonState") == "true") {
        InfoSliderBodyHeaderBottomExtendedPropertiesButton.click();
    }

    //NotConfiguredPropertiesButton
    var NotConfiguredPropertiesButtonDataId = "NotConfiguredPropertiesButton";
    var InfoSliderBodyHeaderBottomNotConfiguredPropertiesButton = AppendElementAsChild(InfoSliderBodyHeaderBottom, 'i', { id: InfoSliderBodyHeaderBottom.id + NotConfiguredPropertiesButtonDataId, classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_BARSSTAGGERED + " " + "notconfiguredpropertiesbutton", title: NOTCONFIGUREDPROPERTIESENABLED_TEXT })
    AddInfoSliderNotConfiguredPropertiesButtonClickEventHandlers(InfoSliderBodyHeaderBottomNotConfiguredPropertiesButton, NotConfiguredPropertiesButtonDataId + "Id");
    if (sessionStorage.getItem("DemoToolNotConfiguredPropertiesButtonState") == "true") {
        InfoSliderBodyHeaderBottomNotConfiguredPropertiesButton.click();
    }

    //FilterEventsButton
    var FilterEventsButtonDataId = "FilterEventsButton";
    var InfoSliderBodyHeaderBottomFilterEventsButton = AppendElementAsChild(InfoSliderBodyHeaderBottom, 'i', { id: InfoSliderBodyHeaderBottom.id + FilterEventsButtonDataId, classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_FILTERCIRCLEXMARK + " " + "filtereventsbutton", title: EVENTFILTERINGENABLED_TEXT });
    AddInfoSliderFilterEventsButtonClickEventHandlers(InfoSliderBodyHeaderBottomFilterEventsButton, FilterEventsButtonDataId + "Id");
    if (sessionStorage.getItem("DemoToolFilterEventsButtonState") == "false") {
        InfoSliderBodyHeaderBottomFilterEventsButton.click();
    }

    //QAToolButton
    if (!document.location.href.includes("bxQATool=true")) {
        var QaToolButtonDataId = "QAToolButton";
        var InfoSliderBodyHeaderBottomQaToolButton = AppendElementAsChild(InfoSliderBodyHeaderBottom, 'i', { id: InfoSliderBodyHeaderBottom.id + QaToolButtonDataId, classList: "qatoolbutton", title: "Open QA Tool" });
        AddInfoSliderQaToolButtonClickEventHandlers(InfoSliderBodyHeaderBottomQaToolButton);
    }

    var InfoSliderBodyAccordions = AppendElementAsChild(InfoSliderBody, 'div', { id: InfoSliderBody.id + "Accordions", classList: "demoToolInfoSliderBodyAccordions" });

    // Add info slider (open/close) event handler.
    AddInfoSliderClickEventHandlers(InfoSlider, InfoSliderToggle, InfoSliderToggleIcon, InfoSliderBodyAccordions);

    //Info Slider Header
    var InfoSliderBodyFooter = AppendElementAsChild(InfoSliderBody, 'div', { id: InfoSliderBody.id + "Footer", classList: "demoToolInfoSliderBodyFooter" });
    var InfoSliderBodyFooterLogo = AppendElementAsChild(InfoSliderBodyFooter, "img", { id: InfoSliderBodyFooter.id + "Logo", src: SITECORELOGO_URL, classList: "sitecoreLogo" });

    console.debug(CONSOLE_LOG_PREFIX + "Ended InitializeInfoSlider.");

    return InfoSlider;
}


//Creates Sitecore CDP event object with required properties.
function baseEvent(type) {
    var sitecoreEvent = {
        "browser_id": Boxever.getID(),
        "channel": SITECORECDP_CHANNEL,
        "type": type,
        "language": SITECORECDP_LANGUAGE,
        "currency": SITECORECDP_CURRENCY,
        "page": SITECORECDP_PAGE,
        "pos": SITECORECDP_POINT_OF_SALE
    };

    return sitecoreEvent;
}


//If progressive parameter is true or not specified then event properties with empty values are not removed before submitting the event.
function SendTrackingDataToSitecoreCdp(event, progressive = true) {
    console.debug(CONSOLE_LOG_PREFIX + "Starting SendTrackingDataToSitecoreCdp...");

    // Place an anonymous function in the Boxever queue
    _boxeverq.push(function () {

        if (progressive == true) {
            event = removePropertyWithEmptyValuesFromObject(event);
        }

        //Add UTM params
        event = Boxever.addUTMParams(event);

        console.debug(event);
        // Invoke event create
        Boxever.eventCreate(event, function (result) {
            console.debug(CONSOLE_LOG_PREFIX + "Queue - SendTrackingDataToSitecoreCdp result:");
            console.debug(result);
        }, "json");
    });

    console.debug(CONSOLE_LOG_PREFIX + "Ended SendTrackingDataToSitecoreCdp.");
}


//If progressive parameter is true or not specified then data properties with empty values are not removed before submitting the event.
function SendGuestDataExtensions(extensionName, data, progressive = true) {
    console.debug(CONSOLE_LOG_PREFIX + "Starting SendGuestDataExtensions...");

    Boxever.browserShow(Boxever.browser_id, Boxever.client_key, function (result) {
        GetGuestDataExtension(result.customer.ref, extensionName).then(function (response) {
            if (progressive == true) {
                console.debug(CONSOLE_LOG_PREFIX + "SendGuestDataExtensions - Progressive was enabled.");
                console.debug(CONSOLE_LOG_PREFIX + "SendGuestDataExtensions - Starting to remove internal CDP/Personalize properties from the stored data extension object...");

                var storedExtensionData = {};// Initializing with {} to get an empty object if data extension didn't exist in CDP
                if (response["ext" + extensionName]) {
                    storedExtensionData = response["ext" + extensionName].items.find(x => x.key === data.key);
                    //Loop over CDP/Personalize properties from the stored data extension object
                    if (storedExtensionData) {
                        for (const [key, value] of Object.entries(storedExtensionData)) {
                            if (key == "createdAt" || key == "modifiedAt" || key == "ref" || key == "href" || key == "guest") {
                                //Remove internal CDP/Personalize properties from the stored data extension object
                                delete storedExtensionData[key];
                                console.debug(CONSOLE_LOG_PREFIX + "SendGuestDataExtensions - Removed internal " + key + " property from the stored data extension object.");
                            }
                        }

                        console.debug(CONSOLE_LOG_PREFIX + "SendGuestDataExtensions - Removed internal CDP/Personalize properties from the stored data extension object. The data extension object contains:");
                        console.debug(JSON.stringify(storedExtensionData));
                    }
                    else {
                        storedExtensionData = {};
                        console.debug(CONSOLE_LOG_PREFIX + "SendGuestDataExtensions - There was no data stored yet in the data extension: " + extensionName);
                    }
                }
                else {
                    console.debug(CONSOLE_LOG_PREFIX + "SendGuestDataExtensions - There was no data stored yet in the data extension: " + extensionName);
                }

                // Don't overwrite existing properties with empty values.
                data = removePropertyWithEmptyValuesFromObject(data);

                // Loop over new to be stored data extension properties.
                for (const [key, value] of Object.entries(data)) {
                    if (key != "key") {
                        //Add the property to the to be stored data extension object if the property contains a value
                        if (data[key]) {
                            storedExtensionData[key] = data[key];
                            console.debug(CONSOLE_LOG_PREFIX + "SendGuestDataExtensions - Added or overwritten the " + key + " property in the to be stored data extension object.");
                        }
                    }
                }
                console.debug(CONSOLE_LOG_PREFIX + "SendGuestDataExtensions - The to be stored data extension object contains:");
                console.debug(JSON.stringify(storedExtensionData));
            }

            var requestOptions = GetDefaultJsonPostRequestOptions(data, SITECORECDP_REST_API_BASIC_AUTH);

            var request = new Request(SITECORECDP_INTERACTIVE_API_TARGET + "/guests/" + result.customer.ref + "/ext" + extensionName, requestOptions);

            Ajax(request).then(function (response) {
                console.debug(CONSOLE_LOG_PREFIX + "SendGuestDataExtensions response:");
                console.debug(response);
            });
        });
    }, "json");

    console.debug(CONSOLE_LOG_PREFIX + "Ended SendGuestDataExtensions.");
}


//toggle show-popper attribute on popper to hide or show it with CSS
function togglePopper(toolTipButton) {
    //Get the content HTML Element
    var toolTipContent = toolTipButton.previousSibling;

    if (toolTipContent.hasAttribute("data-show")) {
        //Tooltip content is visible

        //Remove "data-show" attribute to hide tooltip with CSS.
        toolTipContent.removeAttribute("data-show");

        const toolTipsArrayElement = demoToolData.toolTipsArray.find(toolTip => toolTip.id == toolTipButton.id);
        if (toolTipsArrayElement) {
            if (usePopper) {
                var popperInstance = toolTipsArrayElement.popperInstance;

                //Destroy the popper
                if (popperInstance) {
                    popperInstance.destroy();
                    popperInstance = null;
                }
            }

            //Remove the popper from the toolTipsArray
            demoToolData.toolTipsArray = demoToolData.toolTipsArray.filter(function (e) { return e.id !== toolTipButton.id });

            //Clear Tooltip content.
            toolTipContent.replaceChildren();
        }
    } else {
        //Tooltip content is not visible.

        //Add "data-show" attribute to show tooltip with CSS.
        toolTipContent.setAttribute("data-show", "");

        //Check if popper already exists in toolTipArray
        if (!demoToolData.toolTipsArray || (demoToolData.toolTipsArray && !demoToolData.toolTipsArray.some(item => item.id == toolTipButton.id))) {

            if (usePopper) {
                //Create the popper
                popperInstance = Popper.createPopper(toolTipButton, toolTipContent, {
                    placement: "auto", //preferred placement of popper
                    modifiers: [
                        {
                            name: "offset", //offsets popper from the reference/button
                            options: {
                                offset: [0, 8]
                            }
                        },
                        {
                            name: "flip", //flips popper with allowed placements
                            options: {
                                allowedAutoPlacements: ["right", "left", "top", "bottom"],
                                rootBoundary: "viewport"
                            }
                        }
                    ]
                });

                //Add the popper to the toolTipsArray and init if neccessary.
                if (!demoToolData.toolTipsArray) {
                    demoToolData.toolTipsArray = [];
                }
                demoToolData.toolTipsArray.push({ "id": toolTipButton.id, "popperInstance": popperInstance });
            } else {
                positionAt(toolTipButton, "left", toolTipContent);
                if (!demoToolData.toolTipsArray) {
                    demoToolData.toolTipsArray = [];
                }
                demoToolData.toolTipsArray.push({ "id": toolTipButton.id, "popupId": toolTipContent.id });
            }
        }
    }
}


//Start Tooltip functions
function ComposeTooltipContent(parentHtmlElement) {
    var propertyDefinitionPath = GetDataDefinitionPathByHtmlElement(parentHtmlElement);
    var propertyDefinition = GetDataDefinitionByPath(propertyDefinitionPath);
    var dataPath = GetDataPathByHtmlElement(parentHtmlElement);

    var toolTipContentHtmlElement = AppendElementAsChild(parentHtmlElement, 'div', { id: parentHtmlElement.id + "TooltipContent", classList: "tooltipcontent", dataDefinitionPath: propertyDefinitionPath, dataPath: dataPath, dataProperties: "TooltipProperties" });
    var toolTipContentHeaderHtmlElement = AppendElementAsChild(toolTipContentHtmlElement, 'label', { id: toolTipContentHtmlElement.id + "Header", classList: "tooltipheader", dataProperties: "CollapsedProperties" });
    var toolTipCloseButtonHtmlElement = AppendElementAsChild(toolTipContentHtmlElement, 'i', { id: toolTipContentHtmlElement.id + "TooltipCloseButton", classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_XMARK + " " + "tooltipclosebutton", title: "Close" });
    var toolTipContentHeaderHorizontalRuleHtmlElement = AppendElementAsChild(toolTipContentHtmlElement, 'hr', { id: toolTipContentHtmlElement.id + "HorizontalRule", classList: "seperator" });

    //Add click event listener to the tooltip close button
    toolTipCloseButtonHtmlElement.addEventListener("click", function (e) {
        e.preventDefault();
        //Pass the tooltipbutton (nextElementSibling) to the togglePopper method because id of button is in Array
        togglePopper(parentHtmlElement.nextElementSibling);
    });

    //Compose Tooltip Title
    var title = "";
    if (propertyDefinition.DataType == "Array") {
        //TODO: Maybe change instead of multiple collapsedproperties to a collapsed label templated property
        title = ReplaceValueTokens(propertyDefinition.CollapsedProperties[0].Value, dataPath);
    }
    else {
        title = propertyDefinition.Label ? propertyDefinition.Label : ToSentenceCase(propertyDefinition.Property);
    }
    toolTipContentHeaderHtmlElement.innerHTML = title;

    if (!usePopper) {
        AddPopupResizeEventListener(toolTipContentHtmlElement);
    }

    //Compose Tooltip Content
    return ComposeObject(toolTipContentHtmlElement, true);
}



function ComposeTooltip(parentHtmlElement) {
    var propertyDefinitionPath = GetDataDefinitionPathByHtmlElement(parentHtmlElement);
    var propertyDefinition = GetDataDefinitionByPath(propertyDefinitionPath);
    var dataPath = GetDataPathByHtmlElement(parentHtmlElement);

    //Create Tooltip content element
    var toolTipContentHtmlElement = AppendElementAsChild(parentHtmlElement, 'div', { id: parentHtmlElement.id + "TooltipContent", classList: "tooltip", dataDefinitionPath: propertyDefinitionPath, dataPath: dataPath });

    //If Tooltip properties have been defined then display tooltip button 
    if (propertyDefinition.TooltipProperties && propertyDefinition.TooltipProperties.length > 0) {
        //Create Tooltip button element 
        var toolTipButtonHtmlElement = AppendElementAsChild(parentHtmlElement, 'i', { id: parentHtmlElement.id + "TooltipButton", classList: DEMOTOOL_FONTAWESOME_STYLE_SOLID + " " + DEMOTOOL_FONTAWESOME_WINDOWRESTORE + " " + "tooltipbutton", title: "Tooltip", dataTooltipContentElementId: toolTipContentHtmlElement.id });

        //Add click event listener to the tooltip button
        toolTipButtonHtmlElement.addEventListener("click", function (e) {
            var content = document.getElementById(this.dataset.tooltipContentElementId);
            ComposeTooltipContent(content, true);
            e.preventDefault();
            togglePopper(this);
        });
    }

}
//End Tooltip functions















function GetDataType(object, definitionDataType) {
    if (definitionDataType) {
        return definitionDataType;
    } else {
        if (Array.isArray(object)) {
            return "Array";
        }
        else if (typeof object === 'object' && object !== null) {
            return "Object";
        }
        else {
            return "Property";
        }
    }
}

function ComposeObject(parentHtmlElement, insideTooltip) {
    let showObject = false;

    var dataDefinitionPath = GetDataDefinitionPathByHtmlElement(parentHtmlElement);
    var dataDefinition = GetDataDefinitionByPath(dataDefinitionPath);

    if (dataDefinition) {
        var propertiesType = GetDataPropertiesByHtmlElement(parentHtmlElement) ?? "Properties";
        if (!dataDefinition[propertiesType]) {
            dataDefinition[propertiesType] = [];
        }
        var dataDefinitionProperties = dataDefinition[propertiesType];

        // Generate the undefined subproperties unless explicitly denied
        if (dataDefinition.ShowAllSubProperties != false) {
            if (propertiesType != "CollapsedProperties") {
                // Get data from the DataSource
                var data = dataDefinition.DataSource ? GetDataByPath(dataDefinition.DataSource) : GetDataByHtmlElement(parentHtmlElement);
                if (data) {
                    // Get the type of the DataSource
                    switch (GetDataType(data)) {
                        case "Array":
                            //Datasource is an array
                            break;
                        case "Object":
                            //Datasource is an object
                            // Loop over all properties of the object
                            var dataProperties = Object.getOwnPropertyNames(data);
                            if (dataProperties) {
                                for (var propertyIndex = 0; propertyIndex < dataProperties.length; propertyIndex++) {

                                    //Add only undefined properties
                                    var propertyName = dataProperties[propertyIndex];

                                    if (isStringArray(data[propertyName])) {
                                        for (let i = 0; i < data[propertyName].length; i++) {
                                            if (isJSON(data[propertyName][i])) {
                                                data[propertyName][i] = JSON.parse(data[propertyName][i]);
                                            }
                                        }
                                    }


                                    //var dataDefinitionProperty = dataDefinitionProperties.find(e => e.Property === propertyName);
                                    //if (!dataDefinitionProperty) {
                                    if (!dataDefinitionProperties.some(e => e.Property === propertyName)) {
                                        var dataDefinitionProperty = { "Property": propertyName, "DataType": GetDataType(data[propertyName]) };
                                        if (!dataDefinition.ShowAllSubProperties) {
                                            dataDefinitionProperty.NotConfiguredProperty = true;
                                        }
                                        else {
                                            dataDefinitionProperty.ShowAllSubProperties = true;
                                        }

                                        //Only for arrays add TooltipProperties and CollapsedProperties
                                        if (GetDataType(data[propertyName]) == "Array") {
                                            if (!dataDefinitionProperty.TooltipProperties) {
                                                dataDefinitionProperty.TooltipProperties = [];
                                            }
                                            if (dataDefinition.ShowAllSubProperties) {
                                                dataDefinitionProperty.TooltipProperties.push({ "Property": propertyName, "DataType": GetDataType(data[propertyName]) });
                                            } else {
                                                dataDefinitionProperty.TooltipProperties.push({ "Property": propertyName, "DataType": GetDataType(data[propertyName]), "NotConfiguredProperty": true });
                                            }



                                        }

                                        dataDefinitionProperties.push(dataDefinitionProperty);
                                    }
                                    //}


                                }
                            }

                            break;
                        case "Property":
                            //Datasource is a property
                            break;
                    }

                    // Add Collapsed properties if it is a collapsable container 
                    if (dataDefinition.DataType == "Array") {
                        // Invent collapsed properties label
                        if (!dataDefinition.CollapsedProperties) {
                            var tempCollapsedProperties = [];
                            if (dataDefinition[propertiesType].some(e => { var p = Object.getOwnPropertyNames(e); if (p.includes('id') && p.includes('provider')) { return true; } })) {
                                tempCollapsedProperties.push({ "Value": "{{provider}} - {{id}}", "ShowLabel": false, "ShowIcon": false });
                            } else if (dataDefinition[propertiesType].some(e => { var p = Object.getOwnPropertyNames(e); if (p.includes('quantity') && p.includes('productId')) { return true; } })) {
                                tempCollapsedProperties.push({ "Value": "{{quantity}}x {{productId}}", "ShowLabel": false, "ShowIcon": false });
                            } else if (dataDefinition[propertiesType].some(e => { var p = Object.getOwnPropertyNames(e); if (p.includes('createdAt') && p.includes('channel') && p.includes('status')) { return true; } })) {
                                tempCollapsedProperties.push({ "Value": "{{createdAt::DateTime}} // {{channel}} // {{status}}", "ShowLabel": false, "ShowIcon": false });
                            } else if (dataDefinition[propertiesType].some(e => { var p = Object.getOwnPropertyNames(e); if (p.includes('createdAt') && p.includes('type')) { return true; } })) {
                                tempCollapsedProperties.push({ "Value": "{{createdAt::DateTime}} - {{type}}", "ShowLabel": false, "ShowIcon": false });
                            } else if (dataDefinition[propertiesType].some(e => { var p = Object.getOwnPropertyNames(e); if (p.includes('key') && p.includes('name')) { return true; } })) {
                                tempCollapsedProperties.push({ "Value": "{{key}} ({{name}})", "ShowLabel": false, "ShowIcon": false });
                            } else if (dataDefinition[propertiesType].some(e => { var p = Object.getOwnPropertyNames(e); if (p.includes('createdAt') && p.includes('channel') && p.includes('price') && p.includes('currencyCode')) { return true; } })) {
                                tempCollapsedProperties.push({ "Value": "{{createdAt::DateTime}} // {{channel}} // @{{price}} {{currencyCode}}", "ShowLabel": false, "ShowIcon": false });
                            }

                            if (tempCollapsedProperties.length > 0) {
                                dataDefinition.CollapsedProperties = tempCollapsedProperties;
                            }
                        }
                    }
                }
            }
        }





        if (dataDefinitionProperties) {
            var data = GetDataByHtmlElement(parentHtmlElement);

            for (let i = 0; i < dataDefinitionProperties.length; i++) {
                //Get propertyDefinition
                let propertyDefinition = dataDefinitionProperties[i];

                //Initialize propertyDefinition defaults
                let display = false;
                if (insideTooltip) {
                    //If inside tooltip and DisplayInTooltip is not specified then default to true
                    display = propertyDefinition.DisplayInTooltip ?? true;
                }
                else {
                    //If not inside tooltip and Display is not specified then default to true
                    display = propertyDefinition.Display ?? true;
                }

                if (propertyDefinition.Property == "country") {
                    console.debug("country");
                }

                if (display) {
                    //Initialize propertyDefinition defaults if display
                    let seperator = propertyDefinition.Seperator ?? false;

                    if (seperator) {
                        ComposeDemoToolSeparator(propertyDefinition, i, parentHtmlElement);
                    }
                    else {
                        var propertyDefinitionPath = GetDataDefinitionPathByHtmlElement(parentHtmlElement) + "." + propertiesType + "." + i;
                        switch (GetDataType(data[propertyDefinition.Property], propertyDefinition.DataType)) {
                            case "Array":
                                //Compose the array only if there are elements.
                                if (data[propertyDefinition.Property]) {
                                    if (data[propertyDefinition.Property].length > 0) {
                                        if (ComposeDemoToolArray(propertyDefinitionPath, parentHtmlElement)) {
                                            showObject = true;
                                        }
                                    }
                                }
                                break;
                            case "Object":
                                if (ComposeDemoToolPropertyObject(propertyDefinitionPath, parentHtmlElement)) {
                                    showObject = true;
                                }
                                break;
                            case "String":
                            case "Boolean":
                            case "DateTime":
                            case "Timestamp":
                            case "Property":
                            default:
                                if (ComposeDemoToolProperty(propertyDefinitionPath, parentHtmlElement)) {
                                    showObject = true;
                                }
                        }

                    }
                }
            }
        }
        else {
            console.debug(CONSOLE_LOG_PREFIX + "ComposeObject for element: " + parentHtmlElement.id);
            console.debug(CONSOLE_LOG_PREFIX + "Property '" + propertiesType + "' doesn't exist in dataDefinition.");
        }
    }

    return showObject;
}


// Load necessary CSS & JavaScript Libraries asynchronously
(function () {
    LoadJavascriptAsync(SITECORECDP_JS_LIB_SRC).then(() => {
        if (SEND_VIEW_EVENT) {
            // If send view event on every page load
            SendViewEventToSitecoreCdp();
        }
    });

    //LoadJavascriptAsync(POPPER_JS);
    LoadJavascriptAsync(PLURALIZE_JS);

    LoadStyleSheetAsync(FONT_MONTSERRAT_CSS);
    LoadStyleSheetAsync(FONT_AWESOME_CSS);
    LoadStyleSheetAsync(DEMOTOOL_CSS, true);

    InitializeInfoSlider();
})();