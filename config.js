exports.dev = {
    "clientId": "3MVG9Y6d_Btp4xp5NwcRLAU5Ct6gjXLPoSW43wDXmP0NR5siDu10UMOBMnPip9v02g_emnt1gJetjbnCH9N3y",
    "clientSecret": "6154018842396108114",
    "redirectUri": "http://localhost:3000/oauth/callback"
};

exports.prd = {
    "clientId": "3MVG9Y6d_Btp4xp6Es1QfF8oIsgjcjtFHyx7sdhl7V8sh_CINU9v0WOLTBqV1QyXMuIpGcTQuGIcHGrUrtCma",
    "clientSecret": "8912425315286274910",
    "redirectUri": "https://workbench-mouse.herokuapp.com/oauth/callback"
};

exports.fields = {
    "Account": ["Name", "Phone", "Website"],
    "Opportunity": ["Name", "StageName", "CloseDate"]
};

exports.apiVersion = "32";