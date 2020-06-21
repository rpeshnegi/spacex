import { createGlobalStyle } from 'styled-components';

export const GlobalResponsiveCss = createGlobalStyle`
@media(min-width:1200px) and (max-width:1480px) {
    .extra-space {
        padding: 0 50px !important;
    }
    .newsletter-block {
        padding: 85px 70px 85px 70px;
    }
    .footerbottom.extra-space {
        padding: 30px !important;
        text-align: center;
    }
}

@media(min-width:768px) and (max-width:991px) {
    .navbar-nav {
        margin: 0 auto !important;
        width: 100%;
        text-align: center;
        justify-content: center;
    }
    .rowspace-28 {
        margin: 0 -15px;
    }
    .rowspace-28 [class*="col-"] {
        padding: 0 15px;
    }
    .navbar-toggler {
        border-radius: 0px;
        background: #fff;
        padding: 5px 10px;
        transform: scale(0.8);
    }
    .navbar-brand {
        padding-bottom: 30px;
        margin-right: 0 !important;
        width: 230px;
    }
    header {
        padding-top: 11px;
    }
    .showmenu {
        display: block !important;
        transition: all ease-in-out 0.5s;
    }
}

@media(min-width:992px) and (max-width:1100px) {
    .extra-space {
        padding: 0 60px !important;
    }
    .footerbottom.extra-space {
        padding: 30px !important;
        text-align: center;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
        padding: 0 23px !important;
    }
    .newsletter-block {
        padding: 85px 30px 85px 30px;
    }
    .bannercaption h1 {
        font-size: 50px;
    }
    h2 {
        font-size: 43px;
    }
    .dedicated-c-block h3 {
        font-size: 28px;
        margin-bottom: 46px;
    }
    .dedicated-c-block p {
        font-size: 18px;
    }
    .rowspace-28 {
        margin: 0 -15px;
    }
    .rowspace-28 [class*="col-"] {
        padding: 0 15px;
    }
}

@media(max-width:830px) {
    .extra-space {
        padding: 0 15px !important;
    }
    .bannercaption h1 {
        font-size: 30px;
    }
    .navbar-toggler {
        border-radius: 0px;
        background: #fff;
        padding: 5px 10px;
        transform: scale(0.8);
    }
    h2 {
        font-size: 25px;
    }
    .dedicated-c-block h3 {
        font-size: 22px;
        margin-bottom: 16px;
        text-align: center;
    }
    .dedicated-c-block p {
        font-size: 16px;
        text-align: center;
    }
    .dedicated-c-block {
        padding: 15px 0 !important;
    }
    .dadicated-block {
        padding: 50px 15px 30px 15px;
    }
    .launch-block {
        margin: 15px 0;
    }
    .footerblock {
        padding: 30px 15px;
    }
    .footerblock ul li {
        padding: 5px 0;
    }
    .bannercaption {
        left: 10px;
        right: 10px;
    }
    .navbar-expand-lg .navbar-nav .nav-item {
        border-right: 0px;
    }
    .navbar-brand {
        padding-bottom: 30px;
    }
    .outpast-block {
        padding: 0 15px 30px 15px;
    }
    .newsletter-block {
        padding: 30px;
        text-align: center;
    }
    .newsletter-block h4 {
        margin-bottom: 0;
    }
    .footerbottom.extra-space {
        padding: 30px !important;
        text-align: center;
    }
    .navbar-brand {
        padding-bottom: 30px;
        margin-right: 0 !important;
    }
    .navbar-nav {
        margin: 0 auto !important;
    }
    .navbar-nav {
        margin: 0 auto !important;
        width: 100%;
        text-align: center;
        justify-content: center;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
        padding: 8px !important;
        font-size: 12px;
    }
    .copyright {
        font-size: 11px;
    }
    .text-left.copyright {
        text-align: center !important;
    }
    .navbar-brand {
        padding-bottom: 30px;
        margin-right: 0 !important;
        width: 230px;
    }
    header {
        padding-top: 11px;
    }
    .showmenu {
        display: block !important;
        transition: all ease-in-out 0.5s;
    }
}
`;