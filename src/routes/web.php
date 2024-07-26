<?php

use App\Http\Controllers\OAuthController;
use Illuminate\Support\Facades\Route;

Route::get('/auth/{provider}/redirect', [OAuthController::class, 'redirectToProvider']);
Route::get('/auth/{provider}/callback', [OAuthController::class, 'handleProviderCallback']);

Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');
