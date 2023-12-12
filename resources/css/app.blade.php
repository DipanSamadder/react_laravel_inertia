<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link rel="shortcut icon" href="images/favicon.png">
        
        <link rel="stylesheet" href="{{ dsld_static_asset('backend/css/dashlitedeae.css?ver=3.2.1') }}">
        <link id="skin-default" rel="stylesheet" href="{{ dsld_static_asset('backend/css/themedeae.css?ver=3.2.1') }}">
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-91615293-4"></script>
        <script>
            window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-91615293-4');
        </script>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="nk-body npc-default has-apps-sidebar has-sidebar ">
        @inertia
    
        <script src="{{ dsld_static_asset('backend/js/bundledeae.js?ver=3.2.1') }}"></script>
        <script src="{{ dsld_static_asset('backend/js/scriptsdeae.js?ver=3.2.1') }}"></script>
        <script src="{{ dsld_static_asset('backend/js/demo-settingsdeae.js?ver=3.2.1') }}"></script>
        <script src="{{ dsld_static_asset('backend/js/charts/gd-analyticsdeae.js?ver=3.2.1') }}"></script>
        <script src="{{ dsld_static_asset('backend/js/libs/jqvmapdeae.js?ver=3.2.1') }}"></script>
   </body>
</html>
