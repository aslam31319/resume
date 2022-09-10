var r = document.querySelector(':root');

function myFunction_get(propertyName) {

    var rs = getComputedStyle(r);
    return rs.getPropertyValue(propertyName);
}

function myFunction_set_dark() {
    r.style.setProperty('--mainTextColor', myFunction_get('--mainTextColor-dark'));
    r.style.setProperty('--secondaryTextColor', myFunction_get('--secondaryTextColor-dark'));
    r.style.setProperty('--mainLinkColor', myFunction_get('--mainLinkColor-dark'));
    r.style.setProperty('--mainBorderColor', myFunction_get('--mainBorderColor-dark'));
    r.style.setProperty('--mainBgColor', myFunction_get('--mainBgColor-dark'));
}

function myFunction_set_light() {
    r.style.setProperty('--mainTextColor', myFunction_get('--mainTextColor-light'));
    r.style.setProperty('--secondaryTextColor', myFunction_get('--secondaryTextColor-light'));
    r.style.setProperty('--mainLinkColor', myFunction_get('--mainLinkColor-light'));
    r.style.setProperty('--mainBorderColor', myFunction_get('--mainBorderColor-light'));
    r.style.setProperty('--mainBgColor', myFunction_get('--mainBgColor-light'));
}