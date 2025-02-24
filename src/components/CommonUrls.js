export const REFRESH_TOKEN_URL = 'https://api.herb.apcfss.in/login/genratetoken'
 
 
 
const prod = {
    url: {
        AUTHENTICATION_URL: "https://api.herb.apcfss.in/login/authenticate",
        LegalCase_Api_url: "https://api.nyayam.apcfss.in/legal/",
        IMG_DOWNLOAD_URL: "https://api.nyayam.apcfss.in/lmudms/user-defined-path/file-download/",
        IMG_UPLOAD_URL: "https://api.nyayam.apcfss.in/lmudms/user-defined-path/file-upload/",
        IMG_VIEW_URL: "https://api.nyayam.apcfss.in/lmudms/file-download?filePath=",
        frontend_url: 'nyayam.apcfss.in',
        herbdashboard: 'https://nidhi.apcfss.in/dashboard'
 
    }
};
 
const dev = {
    url: {
        AUTHENTICATION_URL: "https://api.herb.apcfss.in/login/authenticate",
        LegalCase_Api_url: "https://apilmu.dev.nidhi.apcfss.in/legal/",
        IMG_DOWNLOAD_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/user-defined-path/file-download/",
        IMG_UPLOAD_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/user-defined-path/file-upload/",
        IMG_VIEW_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/file-download?filePath=",
        frontend_url: 'lmu.dev.nidhi.apcfss.in',
        herbdashboard: 'https://dev2.nidhi.apcfss.in/dashboardDev'
    }
};
 
const test = {
    url: {
        AUTHENTICATION_URL: "https://api.herb.apcfss.in/login/authenticate",
        // LegalCase_Api_url: "https://apilmu.test.nidhi.apcfss.in/legal/",
        LegalCase_Api_url: "https://swapi.test.nidhi.apcfss.in/legal/",
        IMG_DOWNLOAD_URL: "https://swapi.test.nidhi.apcfss.in/socialwelfaredms/user-defined-path/file-download/",
        IMG_UPLOAD_URL: "https://swapi.test.nidhi.apcfss.in/socialwelfaredms/user-defined-path/file-upload/",
        IMG_VIEW_URL: "https://swapi.test.nidhi.apcfss.in/socialwelfaredms/file-download?filePath=",
        frontend_url: 'lmu.test.nidhi.apcfss.in',
        herbdashboard: 'https://dev2.nidhi.apcfss.in/dashboardDev'
    }
};
 
const local = {
    url: {
        AUTHENTICATION_URL: "https://api.herb.apcfss.in/login/authenticate",
        LegalCase_Api_url: "http://172.16.119.134:8888/legal/",//NOSONAR
        IMG_DOWNLOAD_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/user-defined-path/file-download/",
        IMG_UPLOAD_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/user-defined-path/file-upload/",
        IMG_VIEW_URL: "https://swapi.dev.nidhi.apcfss.in/socialwelfaredms/file-download?filePath=",
        herbdashboard: 'https://dev2.nidhi.apcfss.in/dashboardDev'
 
    }
};
 
const hostname = window.location.hostname
export const config = (() => {
    if (process.env.NODE_ENV === 'production' && hostname === prod.url.frontend_url) {
        return prod;
    } else if (process.env.NODE_ENV === 'production' && hostname === dev.url.frontend_url) {
        return dev;
    }
    else if (process.env.NODE_ENV === 'production' && hostname === test.url.frontend_url) {
        return test;
    }
    else if (process.env.NODE_ENV === 'development') {
        return local;
    }
})();
 