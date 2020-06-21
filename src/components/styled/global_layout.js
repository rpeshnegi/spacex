import { createGlobalStyle } from 'styled-components';

export const GlobalLayoutCss = createGlobalStyle`
html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
    display: block;
}

audio,
canvas,
progress,
video {
    display: inline-block;
}

audio:not([controls]) {
    display: none;
    height: 0;
}

progress {
    vertical-align: baseline;
}

[hidden],
template {
    display: none;
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
    outline-width: 0;
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
}

b,
strong {
    font-weight: inherit;
    font-weight: bolder;
}

dfn {
    font-style: italic;
}

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

mark {
    background-color: #ff0;
    color: #000;
}

small {
    font-size: 80%;
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

img {
    border-style: none;
}

svg:not(:root) {
    overflow: hidden;
}

code,
kbd,
pre,
samp {
    font-family: monospace, monospace;
    font-size: 1em;
}

figure {
    margin: 1em 40px;
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

button,
input,
optgroup,
select,
textarea {
    font: inherit;
    margin: 0;
}

optgroup {
    font-weight: 700;
}

button,
input {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

[type="reset"],
[type="submit"],
button,
html [type="button"] {
    -webkit-appearance: button;
}

[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring,
button:-moz-focusring {
    outline: 1px dotted ButtonText;
}

fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}

legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
}

textarea {
    overflow: auto;
}

[type="checkbox"],
[type="radio"] {
    box-sizing: border-box;
    padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

[type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

html {
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
}

* {
    box-sizing: inherit;
}

*:before {
    box-sizing: inherit;
}

*:after {
    box-sizing: inherit;
}

body {
    color: hsla(0, 0%, 0%, 0.8);
    font-family: georgia, serif;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
}

img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
}

hgroup {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
}

ol {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
}

dl {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
}

dd {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
}

pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    margin-bottom: 1.45rem;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
}

table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
}

fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
}

blockquote {
    margin-left: 1.45rem;
    margin-right: 1.45rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
}

form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
}

noscript {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
}

iframe {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
}

hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
}

address {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
}

b {
    font-weight: bold;
}

strong {
    font-weight: bold;
}

dt {
    font-weight: bold;
}

th {
    font-weight: bold;
}

ol li {
    padding-left: 0;
}

ul li {
    padding-left: 0;
}

li>ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
}

li>ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
}

blockquote *:last-child {
    margin-bottom: 0;
}

li *:last-child {
    margin-bottom: 0;
}

p *:last-child {
    margin-bottom: 0;
}

li>p {
    margin-bottom: calc(1.45rem / 2);
}

code {
    font-size: 0.85rem;
    line-height: 1.45rem;
}

kbd {
    font-size: 0.85rem;
    line-height: 1.45rem;
}

samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
}

abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
}

acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
}

abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
}

thead {
    text-align: left;
}

td,
th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: "tnum";
    -moz-font-feature-settings: "tnum";
    -ms-font-feature-settings: "tnum";
    -webkit-font-feature-settings: "tnum";
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);
}

th:first-child,
td:first-child {
    padding-left: 0;
}

th:last-child,
td:last-child {
    padding-right: 0;
}

tt,
code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: "SFMono-Regular", Consolas, "Roboto Mono", "Droid Sans Mono", "Liberation Mono", Menlo, Courier, monospace;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
}

pre code {
    background: none;
    line-height: 1.42;
}

code:before,
code:after,
tt:before,
tt:after {
    letter-spacing: -0.2em;
    content: " ";
}

pre code:before,
pre code:after,
pre tt:before,
pre tt:after {
    content: "";
}

@media only screen and (max-width: 480px) {
    html {
        font-size: 100%;
    }
}


/*css for index*/


/*@font-face {font-family: "BrandonGrotesque-Regular";
  src: url("fonts/af1f9cf6d51df55b85e1b496776585c4.eot");
  src: url("fonts/af1f9cf6d51df55b85e1b496776585c4.eot?#iefix") format("embedded-opentype"),
  url("fonts/af1f9cf6d51df55b85e1b496776585c4.woff2") format("woff2"),
  url("fonts/af1f9cf6d51df55b85e1b496776585c4.woff") format("woff"),
  url("fonts/af1f9cf6d51df55b85e1b496776585c4.ttf") format("truetype"), 
  url("fonts/af1f9cf6d51df55b85e1b496776585c4.svg#BrandonGrotesque-Regular") format("svg");
}*/

@font-face {
    font-family: 'Conv_arialmt';
    src: url('fonts/arialmt.eot');
    src: local('☺'), url('fonts/arialmt.woff') format('woff'), url('fonts/arialmt.ttf') format('truetype'), url('fonts/arialmt.svg') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Conv_TisaOT';
    src: url('fonts/TisaOT.eot');
    src: local('☺'), url('fonts/TisaOT.woff') format('woff'), url('fonts/TisaOT.ttf') format('truetype'), url('fonts/TisaOT.svg') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Conv_Brandon_bld';
    src: url('fonts/Brandon_bld.eot');
    src: local('☺'), url('fonts/Brandon_bld.woff') format('woff'), url('fonts/Brandon_bld.ttf') format('truetype'), url('fonts/Brandon_bld.svg') format('svg');
    font-weight: normal;
    font-style: normal;
}


/** Generated by FG **/

@font-face {
    font-family: 'Conv_Brandon_reg';
    src: url('fonts/Brandon_reg.eot');
    src: local('☺'), url('fonts/Brandon_reg.woff') format('woff'), url('fonts/Brandon_reg.ttf') format('truetype'), url('fonts/Brandon_reg.svg') format('svg');
    font-weight: normal;
    font-style: normal;
}


/*globalcss*/

* {
    transition: all ease-in-out 0.5s;
    outline: 0px;
}

h2 {
    font-size: 53px;
    color: #000;
    letter-spacing: 5px;
    font-family: 'Conv_Brandon_bld';
}

.extra-space {
    padding: 0 140px !important;
}

img {
    max-width: 100%;
}

body {
    font-family: 'Conv_Brandon_reg';
    background: #f7f7f7;
}

header {
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    z-index: 3;
    padding-top: 35px;
}

.navbar-expand-lg .navbar-nav .nav-item {
    border-right: 1px solid #fff;
}

.navbar-expand-lg .navbar-nav .nav-item:last-child {
    border-right: 0px;
}

.navbar-expand-lg .navbar-nav .nav-link {
    padding: 0 33px !important;
    color: #fff;
    font-family: 'Conv_Brandon_bld';
    font-size: 16px;
}

.navbar-expand-lg .navbar-nav .nav-link:hover,
.navbar-expand-lg .navbar-nav .nav-link:active,
.navbar-expand-lg .navbar-nav .nav-link:focus {
    color: #fff;
    text-decoration: underline;
}

.navbar-expand-lg .navbar-nav:hover .nav-link {
    color: gray;
}

.navbar-expand-lg .navbar-nav:hover .nav-link:hover {
    color: #fff;
}

.navbar-expand-lg .navbar-nav .nav-item:last-child .nav-link {
    padding-right: 0px;
}

.rowspace-28 {
    margin: 0 -28px;
}

.rowspace-28 [class*="col-"] {
    padding: 0 28px;
}

.headersticky {
    background-color: #000;
}


/*banner*/

.banner {
    height: 100vh;
    position: relative;
    z-index: 2;
}

.banner video {
    height: 100vh;
    width: 100%;
    object-fit: cover;
}

.bannercaption {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0px;
    right: 0;
}

.bannercaption h1 {
    font-size: 60px;
    margin: 0px;
    line-height: normal;
    text-align: center;
    font-family: 'Conv_Brandon_bld';
    color: #fff;
    text-shadow: 0 0 10px #000;
    letter-spacing: 5px;
}


/*dadicated*/

.dadicated-block {
    padding: 110px 0;
}

.dedicated-c-block {
    padding-top: 100px;
    ;
}

.dedicated-c-block h3 {
    font-size: 38px;
    font-family: 'Conv_Brandon_bld';
    text-transform: uppercase;
    color: #000;
    margin-bottom: 76px;
    letter-spacing: 3px;
}

.dedicated-c-block p {
    font-size: 25px;
    color: #262626;
    font-family: 'Conv_TisaOT';
}


/*launchblock*/

.outpast-block {
    padding: 0 0 70px 0;
}

.outpast-block h2 {
    margin-bottom: 65px;
}

.launch-block {
    box-shadow: 0 5px 9px #dbdbdb;
    overflow: hidden;
    border: 0;
    margin: 28px 0;
}

.launch-block:hover {
    box-shadow: 0 0 25px #b2cdf0;
}

.launch-block:hover .card-img-top {
    transform: scale(1.05);
}

.launch-block .card-title {
    min-height: 42px;
    margin-bottom: 5px;
    font-size: 14px;
    color: #262626;
    font-weight: bold;
    letter-spacing: 2px;
}

.launch-block .card-img-top {
    padding: 15px;
    border: 0px;
    box-shadow: none;
}

.launch-block .card-title strong {
    font-size: 16px;
    color: #262626;
    font-weight: normal;
    display: inline-block;
    margin: 0 15px;
}

.launch-block .card-title span {
    font-size: 12px;
    color: #959595;
    font-weight: normal;
    display: inline-block;
}

.launch-block .card-text {
    min-height: 45px;
    font-size: 13px;
    letter-spacing: 2px;
    color: #002d69;
    font-family: 'Conv_arialmt';
    font-weight: normal;
}

.launch-block .card-footer {
    color: #002d69;
    font-size: 14px;
    letter-spacing: 2px;
    background: none;
    border: 0px
}

.launch-block .card-footer a {
    color: #002d69;
    text-decoration: none;
}

.launch-block .card-footer i {
    display: inline-block;
    margin-right: 5px;
    width: 25px;
    height: 25px;
    text-align: center;
    border-radius: 100%;
    background: #0565dd;
}

.launch-block .card-footer i img {
    height: 14px;
    display: inline-block;
    vertical-align: top;
    margin-top: 5px;
}


/*footer*/

footer {
    background: #ffffff;
}

.footerblock {
    padding: 85px 15px;
    text-align: center;
    background: #f0f0f0;
}

.footerblock h4 {
    color: #111111;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 40px;
    font-weight: bold;
}

.footerblock ul {
    margin: 0px;
    padding: 0px;
}

.footerblock ul li {
    list-style: none;
    color: #959595;
    font-size: 14px;
    padding: 27px 0;
}

.footerblock ul li a {
    color: #959595;
}

.footerblock ul:hover li a {
    color: #ccc;
}

.footerblock ul:hover li a:hover {
    color: #000;
}

footer .border-right {
    border-color: #fff !important;
}

.footerbottom {
    background: #f0f0f0;
    padding-top: 60px !important;
    padding-bottom: 60px !important;
    border-top: 1px solid #fff;
}

.copyright {
    color: #959595;
    font-size: 14px;
}

.newsletter-block {
    padding: 85px 70px 85px 140px;
}

.newsletter-block h4 {
    color: #111111;
    font-weight: bold;
    font-size: 15px;
    margin-bottom: 40px;
    text-transform: uppercase;
}

.newsletter-block p {
    font-size: 15px;
    padding: 27px 0;
}

.newsletter-block label {
    font-size: 14px;
    color: #111111;
}

.newsletter-block .input-group-text {
    background: #0666df;
    color: #fff;
    border: 1px solid #0666df;
    font-size: 13px;
    border-radius: 0 5px 5px 0;
}

.newsletter-block .form-control {
    border-radius: 0;
    border: 1px solid #0666df;
    color: #959595;
    font-size: 14px;
    min-height: 46px;
}

.newsletter-block .input-group {
    border-radius: 0 5px 5px 0;
    overflow: hidden;
}

.newsletter-block .input-group {
    max-width: 395px;
}

.newsletter-block .btn {
    min-width: 60px;
    text-align: center;
    justify-content: center;
}
`;