<?php


if(!function_exists('dsld_static_asset')){
    function dsld_static_asset($path, $secure = null){
        return app('url')->asset('/public/'.$path, $secure);
    }
}

