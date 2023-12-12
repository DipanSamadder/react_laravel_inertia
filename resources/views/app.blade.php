<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-91615293-4"></script>
        <script>
            window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'UA-91615293-4');
        </script>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx','resources/css/dashlitedeae.css','resources/css/themedeae.css','resources/js/bundledeae.js','resources/js/scriptsdeae.js','resources/js/demo-settingsdeae.js','resources/js/gd-analyticsdeae.js','resources/js/jqvmapdeae.js', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="nk-body npc-default has-apps-sidebar has-sidebar ">
        @inertia
   </body>
</html>
